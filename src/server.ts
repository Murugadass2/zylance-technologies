import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

const WEB3FORMS_API_KEY = process.env.WEB3FORMS_API_KEY ?? "b7731bd7-d2c7-4ef4-a381-8cdcba6e953d";
const WEB3FORMS_EMAIL = process.env.CONTACT_EMAIL ?? "xylancetechnologies@gmail.com";
const WEB3FORMS_SUBJECT = process.env.WEB3FORMS_SUBJECT ?? "New contact message from website";

async function handleContactRequest(request: Request): Promise<Response> {
  const url = new URL(request.url);
  if (url.pathname !== "/api/contact" || request.method !== "POST") {
    return new Response(null, { status: 404 });
  }

  let payload: { name?: string; email?: string; phone?: string; service?: string; message?: string };
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON payload." }), { status: 400, headers: { "content-type": "application/json" } });
  }

  const { name, email, phone, service, message } = payload;
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Name, email, and message are required." }), { status: 400, headers: { "content-type": "application/json" } });
  }

  const formattedMessage = `Phone: ${phone || "N/A"}\nService: ${service || "Not specified"}\n\nMessage:\n${message}`;

  const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      api_key: WEB3FORMS_API_KEY,
      to: WEB3FORMS_EMAIL,
      subject: WEB3FORMS_SUBJECT,
      name,
      email,
      message: formattedMessage,
      data: { phone, service },
    }),
  });

  const responseText = await web3formsResponse.text();
  let responseJson: any = null;
  try {
    responseJson = JSON.parse(responseText);
  } catch {
    // ignore parse failure
  }

  if (!web3formsResponse.ok || !responseJson?.success) {
    let errorMessage = "Unable to send message at this time.";
    if (responseJson?.message) errorMessage = responseJson.message;
    else if (responseText) errorMessage = responseText;
    console.error("Web3Forms error:", responseText);
    return new Response(JSON.stringify({ error: errorMessage }), { status: 502, headers: { "content-type": "application/json" } });
  }

  return new Response(JSON.stringify({ success: true }), { status: 200, headers: { "content-type": "application/json" } });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    try {
      const url = new URL(request.url);
      if (url.pathname === "/api/contact") {
        return await handleContactRequest(request);
      }

      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
