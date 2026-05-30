let lastCapturedError;
const TTL_MS = 5e3;
function record(error) {
  lastCapturedError = { error, at: Date.now() };
}
if (typeof globalThis.addEventListener === "function") {
  globalThis.addEventListener("error", (event) => record(event.error ?? event));
  globalThis.addEventListener(
    "unhandledrejection",
    (event) => record(event.reason)
  );
}
function consumeLastCapturedError() {
  if (!lastCapturedError) return void 0;
  if (Date.now() - lastCapturedError.at > TTL_MS) {
    lastCapturedError = void 0;
    return void 0;
  }
  const { error } = lastCapturedError;
  lastCapturedError = void 0;
  return error;
}
function renderErrorPage() {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>This page didn't load</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <style>
      body { font: 15px/1.5 system-ui, -apple-system, sans-serif; background: #fafafa; color: #111; display: grid; place-items: center; min-height: 100vh; margin: 0; padding: 1.5rem; }
      .card { max-width: 28rem; width: 100%; text-align: center; padding: 2rem; }
      h1 { font-size: 1.25rem; margin: 0 0 0.5rem; }
      p { color: #4b5563; margin: 0 0 1.5rem; }
      .actions { display: flex; gap: 0.5rem; justify-content: center; flex-wrap: wrap; }
      a, button { padding: 0.5rem 1rem; border-radius: 0.375rem; font: inherit; cursor: pointer; text-decoration: none; border: 1px solid transparent; }
      .primary { background: #111; color: #fff; }
      .secondary { background: #fff; color: #111; border-color: #d1d5db; }
    </style>
  </head>
  <body>
    <div class="card">
      <h1>This page didn't load</h1>
      <p>Something went wrong on our end. You can try refreshing or head back home.</p>
      <div class="actions">
        <button class="primary" onclick="location.reload()">Try again</button>
        <a class="secondary" href="/">Go home</a>
      </div>
    </div>
  </body>
</html>`;
}
let serverEntryPromise;
async function getServerEntry() {
  if (!serverEntryPromise) {
    serverEntryPromise = import("./server-ByIwsSEh.mjs").then((n) => n.s).then(
      (m) => m.default ?? m
    );
  }
  return serverEntryPromise;
}
async function normalizeCatastrophicSsrResponse(response) {
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
    headers: { "content-type": "text/html; charset=utf-8" }
  });
}
const WEB3FORMS_API_KEY = process.env.WEB3FORMS_API_KEY ?? "b7731bd7-d2c7-4ef4-a381-8cdcba6e953d";
const WEB3FORMS_EMAIL = process.env.CONTACT_EMAIL ?? "xylancetechnologies@gmail.com";
const WEB3FORMS_SUBJECT = process.env.WEB3FORMS_SUBJECT ?? "New contact message from website";
async function handleContactRequest(request) {
  const url = new URL(request.url);
  if (url.pathname !== "/api/contact" || request.method !== "POST") {
    return new Response(null, { status: 404 });
  }
  let payload;
  try {
    payload = await request.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON payload." }), { status: 400, headers: { "content-type": "application/json" } });
  }
  const { name, email, phone, service, message } = payload;
  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Name, email, and message are required." }), { status: 400, headers: { "content-type": "application/json" } });
  }
  const formattedMessage = `Phone: ${phone || "N/A"}
Service: ${service || "Not specified"}

Message:
${message}`;
  const web3formsResponse = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      api_key: WEB3FORMS_API_KEY,
      to: WEB3FORMS_EMAIL,
      subject: WEB3FORMS_SUBJECT,
      name,
      email,
      message: formattedMessage,
      data: { phone, service }
    })
  });
  const responseText = await web3formsResponse.text();
  let responseJson = null;
  try {
    responseJson = JSON.parse(responseText);
  } catch {
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
const server = {
  async fetch(request, env, ctx) {
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
        headers: { "content-type": "text/html; charset=utf-8" }
      });
    }
  }
};
export {
  server as default,
  renderErrorPage as r
};
