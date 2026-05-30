import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { b as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, c as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { X, h as Menu, n as Sparkles, q as Twitter, L as Linkedin, G as Github, M as Mail, i as MessageCircle, B as Bot } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-Ce9-C7XI.css";
const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "nav",
          {
            className: `flex items-center justify-between rounded-2xl px-5 py-3 transition-all ${scrolled ? "glass-strong shadow-card" : "glass"}`,
            "aria-label": "Main navigation",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative flex h-9 w-9 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: "/logo.png",
                    alt: "Xylance Logo 2",
                    className: "h-6 w-6 object-contain",
                    height: 44,
                    width: 44
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-lg tracking-tight", children: [
                  "Xylance",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Technologies" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "hidden md:flex items-center gap-1", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  className: "px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative",
                  activeProps: { className: "px-4 py-2 rounded-lg text-sm font-medium text-foreground bg-white/5" },
                  activeOptions: { exact: l.to === "/" },
                  children: l.label
                }
              ) }, l.to)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex items-center gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  className: "inline-flex items-center px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow hover:shadow-glow-purple transition-all hover:scale-[1.03]",
                  children: "Start a Project"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  className: "md:hidden h-10 w-10 inline-flex items-center justify-center rounded-lg text-foreground",
                  "aria-label": "Toggle menu",
                  onClick: () => setOpen((o) => !o),
                  children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -10 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -10 },
            className: "md:hidden mt-3 glass-strong rounded-2xl p-4",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "flex flex-col gap-1", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  className: "block px-4 py-3 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5",
                  activeProps: { className: "block px-4 py-3 rounded-lg text-sm font-medium text-foreground bg-white/5" },
                  activeOptions: { exact: l.to === "/" },
                  children: l.label
                }
              ) }, l.to)),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/contact",
                  onClick: () => setOpen(false),
                  className: "block text-center px-5 py-3 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold",
                  children: "Start a Project"
                }
              ) })
            ] })
          }
        ) })
      ] })
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { className: "relative mt-32 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container mx-auto px-6 py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 md:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-lg", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Xavion" }),
            " Technologies"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm text-muted-foreground leading-relaxed", children: "Turning Ideas Into Digital Reality. Web development, mobile apps, SEO and digital marketing services for ambitious modern businesses." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "form",
          {
            className: "mt-6 flex max-w-sm gap-2 glass rounded-xl p-1.5",
            onSubmit: (e) => e.preventDefault(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "input",
                {
                  type: "email",
                  placeholder: "Your email",
                  "aria-label": "Email for newsletter",
                  className: "flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold", children: "Subscribe" })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "hover:text-foreground", children: "About" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "hover:text-foreground", children: "Services" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "hover:text-foreground", children: "Projects" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "hover:text-foreground", children: "Contact" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Connect" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:xylancetechnologies@gmail.com", className: "hover:text-foreground", children: "xylancetechnologies@gmail.com" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+917010657314", className: "hover:text-foreground", children: "+91 7010657314" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+918667825086", className: "hover:text-foreground", children: "+91 8667825086" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-2", children: [
          { Icon: Twitter, label: "Twitter" },
          { Icon: Linkedin, label: "LinkedIn" },
          { Icon: Github, label: "GitHub" },
          { Icon: Mail, label: "Email" }
        ].map(({ Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            "aria-label": label,
            className: "h-9 w-9 inline-flex items-center justify-center rounded-lg glass hover:shadow-glow transition-all",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
          },
          label
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Xavion Technologies. All rights reserved."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Crafted with precision · Built for performance" })
    ] })
  ] }) });
}
function FloatingButtons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed bottom-6 right-6 z-40 flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "https://wa.me/918667825086",
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Chat on WhatsApp",
        className: "h-12 w-12 inline-flex items-center justify-center rounded-full bg-[oklch(0.7_0.18_150)] text-white shadow-glow hover:scale-110 transition-transform",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        "aria-label": "Open AI assistant",
        className: "h-12 w-12 inline-flex items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow-purple hover:scale-110 transition-transform",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-5 w-5" })
      }
    )
  ] });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center glass-strong rounded-2xl p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-gradient", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-6 inline-flex items-center justify-center rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow",
        children: "Go home"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center glass-strong rounded-2xl p-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "rounded-lg bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/", className: "rounded-lg border border-border px-5 py-2.5 text-sm font-medium", children: "Go home" })
    ] })
  ] }) });
}
const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Xavion Technologies",
  url: "/",
  logo: "/logo.png",
  description: "Xavion Technologies is a professional web development, mobile app development, SEO and digital marketing company.",
  sameAs: ["https://twitter.com/", "https://www.linkedin.com/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "xylancetechnologies@gmail.com",
    telephone: "+91 7010657314"
  }
};
const Route$6 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Xavion Technologies | Web Development & Digital Marketing Company" },
      { name: "description", content: "Xavion Technologies provides professional web development, mobile app development, SEO, and digital marketing services for modern businesses." },
      { name: "author", content: "Xavion Technologies" },
      { name: "theme-color", content: "#0a0a18" },
      { property: "og:site_name", content: "Xavion Technologies" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@xaviontech" }
    ],
    links: [
      { rel: "icon", href: "/logo.png", type: "image/png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap" }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(orgSchema)
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$6.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-screen overflow-x-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-0 grid-pattern opacity-30", "aria-hidden": "true" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingButtons, {})
  ] }) });
}
const BASE_URL = "";
const Route$5 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/about", changefreq: "monthly", priority: "0.8" },
          { path: "/services", changefreq: "monthly", priority: "0.9" },
          { path: "/projects", changefreq: "monthly", priority: "0.8" },
          { path: "/contact", changefreq: "yearly", priority: "0.7" }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" }
        });
      }
    }
  }
});
const $$splitComponentImporter$4 = () => import("./services-DhuD1pEO.mjs");
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Web Development, Mobile App Development, UI/UX Design, Automation, SEO, Digital Marketing",
  provider: {
    "@type": "Organization",
    name: "Xavion Technologies"
  },
  areaServed: "Worldwide",
  description: "Professional web development, mobile app development, UI/UX design, automation, SEO and digital marketing services."
};
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [{
    "@type": "Question",
    name: "What technologies do you use?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We use React, Next.js, TypeScript, Node.js, Swift, Kotlin and modern cloud infrastructure."
    }
  }, {
    "@type": "Question",
    name: "Do you offer fixed-price projects?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes, we offer both fixed-price and time-and-materials engagements depending on scope clarity."
    }
  }]
};
const Route$4 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Professional Web Development, SEO & Mobile App Services"
    }, {
      name: "description",
      content: "Explore our expert web development, mobile app development, digital marketing, and SEO services for businesses."
    }, {
      property: "og:title",
      content: "Professional Digital Services"
    }, {
      property: "og:description",
      content: "Web, mobile, SEO and digital marketing services."
    }, {
      property: "og:url",
      content: "/services"
    }],
    links: [{
      rel: "canonical",
      href: "/services"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(serviceSchema)
    }, {
      type: "application/ld+json",
      children: JSON.stringify(faqSchema)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./projects-D36x4i_M.mjs");
const projectSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [{
    "@type": "CreativeWork",
    name: "Dazzle Drop Inn Hotel Website",
    url: "https://www.drizzledropinn.com/",
    description: "Premium hotel website designed and developed by Xavion Technologies."
  }, {
    "@type": "CreativeWork",
    name: "PM Constructions Website",
    url: "https://www.pm-constructions.com/",
    description: "Real estate website created for PM Constructions to showcase properties and capture leads."
  }, {
    "@type": "CreativeWork",
    name: "Chennai Builders Website",
    url: "https://chennaibuilders.com/",
    description: "Real estate website created for Chennai Builders to showcase properties and capture leads."
  }]
};
const Route$3 = createFileRoute("/projects")({
  head: () => ({
    meta: [{
      title: "Our Projects | Xavion Technologies Portfolio"
    }, {
      name: "description",
      content: "Explore featured projects crafted by Xavion Technologies, including the Dazzle Drop Inn Hotel website."
    }, {
      property: "og:title",
      content: "Our Recent Projects"
    }, {
      property: "og:description",
      content: "Featured client work by Xavion Technologies."
    }, {
      property: "og:url",
      content: "/projects"
    }],
    links: [{
      rel: "canonical",
      href: "/projects"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(projectSchema)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-GUNGVZcr.mjs");
const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Xylance Technologies",
  url: "/contact"
};
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Xylance Technologies",
  email: "xylancetechnologies@gmail.com",
  telephone: "+917010657314",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Remote",
    addressLocality: "Remote",
    addressRegion: "Remote",
    postalCode: "Remote",
    addressCountry: "Remote"
  }
};
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Xylance Technologies | Remote Digital Services"
    }, {
      name: "description",
      content: "Contact Xylance Technologies for remote web development, mobile app development, SEO, and digital marketing services."
    }, {
      property: "og:title",
      content: "Contact Our Remote Digital Solutions Team"
    }, {
      property: "og:description",
      content: "Reach out to our remote team by email or phone for fast support and a free consultation."
    }, {
      property: "og:url",
      content: "/contact"
    }],
    links: [{
      rel: "canonical",
      href: "/contact"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(contactSchema)
    }, {
      type: "application/ld+json",
      children: JSON.stringify(localBusinessSchema)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-BiIxQ_pi.mjs");
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Xavion Technologies",
  url: "/about",
  description: "Learn about Xavion Technologies, our mission, vision, and team."
};
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [{
    "@type": "ListItem",
    position: 1,
    name: "Home",
    item: "/"
  }, {
    "@type": "ListItem",
    position: 2,
    name: "About",
    item: "/about"
  }]
};
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Xavion Technologies | Professional IT Company"
    }, {
      name: "description",
      content: "Learn about Xavion Technologies, our mission, vision, expertise, and dedication to providing innovative technology solutions."
    }, {
      property: "og:title",
      content: "About Xavion Technologies"
    }, {
      property: "og:description",
      content: "Mission, vision and expertise behind our technology company."
    }, {
      property: "og:url",
      content: "/about"
    }, {
      property: "og:type",
      content: "website"
    }],
    links: [{
      rel: "canonical",
      href: "/about"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(aboutSchema)
    }, {
      type: "application/ld+json",
      children: JSON.stringify(breadcrumbSchema)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-pjU7mUR1.mjs");
const homeSchema = [{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Xylance Technologies",
  image: "/favicon.ico",
  "@id": "/",
  url: "/",
  telephone: "+1-000-000-0000",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "100 Innovation Drive",
    addressLocality: "Tech City",
    addressRegion: "CA",
    postalCode: "94000",
    addressCountry: "US"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 37.7749,
    longitude: -122.4194
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "18:00"
  }
}, {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [{
    "@type": "Question",
    name: "What services does Xylance Technologies offer?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "We offer web development, mobile app development, digital marketing, and SEO services for businesses of every size."
    }
  }, {
    "@type": "Question",
    name: "How long does a typical project take?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Most websites ship in 3–6 weeks; complex mobile apps and platforms typically take 8–16 weeks based on scope."
    }
  }, {
    "@type": "Question",
    name: "Do you provide ongoing support?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Yes. Every engagement includes performance monitoring, security updates, and dedicated post-launch support plans."
    }
  }, {
    "@type": "Question",
    name: "Can you improve my Google ranking?",
    acceptedAnswer: {
      "@type": "Answer",
      text: "Our SEO team combines technical audits, content strategy, and link building to drive measurable organic growth."
    }
  }]
}];
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Xylance Technologies | Web Development & Digital Marketing Company"
    }, {
      name: "description",
      content: "Xylance Technologies provides professional web development, mobile app development, SEO, and digital marketing services for modern businesses."
    }, {
      name: "keywords",
      content: "Web Development Company, Mobile App Development Company, Digital Marketing Services, SEO Company, Software Development Company"
    }, {
      property: "og:title",
      content: "Xylance Technologies | Web Development & Digital Marketing Company"
    }, {
      property: "og:description",
      content: "Professional web, mobile, SEO and digital marketing services for modern businesses."
    }, {
      property: "og:url",
      content: "/"
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:title",
      content: "Xylance Technologies"
    }, {
      name: "twitter:description",
      content: "Turning ideas into digital reality."
    }],
    links: [{
      rel: "canonical",
      href: "/"
    }],
    scripts: homeSchema.map((s) => ({
      type: "application/ld+json",
      children: JSON.stringify(s)
    }))
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const SitemapDotxmlRoute = Route$5.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$6
});
const ServicesRoute = Route$4.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$6
});
const ProjectsRoute = Route$3.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$6
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ProjectsRoute,
  ServicesRoute,
  SitemapDotxmlRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
