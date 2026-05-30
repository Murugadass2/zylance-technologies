import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Breadcrumbs, S as SectionHeader } from "./Section-qlYHyHBj.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { d as CodeXml, m as Smartphone, g as Megaphone, P as PanelsTopLeft, Z as Zap, S as Search, A as ArrowRight, C as Check } from "../_libs/lucide-react.mjs";
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
const services = [{
  Icon: CodeXml,
  title: "Web Development",
  tagline: "Scalable, fast, beautiful web platforms",
  desc: "We engineer high-performance web applications and marketing sites built on modern stacks like React, Next.js and TypeScript. Every site is optimized for speed, accessibility and SEO from day one.",
  features: ["Custom web applications", "Landing pages & marketing sites", "Headless CMS integration", "E-commerce platforms", "API & backend development"],
  tech: ["React", "Next.js", "TypeScript", "Node.js", "Postgres"]
}, {
  Icon: Smartphone,
  title: "Mobile App Development",
  tagline: "iOS, Android and cross-platform apps",
  desc: "Native and cross-platform mobile apps that users love. We craft delightful UI, performant code and bulletproof backends — from MVP to App Store launch and beyond.",
  features: ["iOS native (Swift)", "Android native (Kotlin)", "Cross-platform (React Native)", "Backend & APIs", "App Store optimization"],
  tech: ["Swift", "Kotlin", "React Native", "Firebase", "GraphQL"]
}, {
  Icon: Megaphone,
  title: "Digital Marketing",
  tagline: "Data-driven growth campaigns",
  desc: "Performance marketing across paid search, social and content. We build the funnels, track the data and iterate relentlessly to drive measurable ROI.",
  features: ["Paid search (Google Ads)", "Social ads (Meta, LinkedIn, TikTok)", "Email & marketing automation", "Conversion rate optimization", "Analytics & reporting"],
  tech: ["GA4", "Mixpanel", "HubSpot", "Klaviyo", "Tag Manager"]
}, {
  Icon: PanelsTopLeft,
  title: "UI/UX Design",
  tagline: "Customer-first digital experiences",
  desc: "Design systems, prototypes and user journeys that make digital products intuitive and engaging across web and mobile.",
  features: ["User research & personas", "Wireframes & prototypes", "Interaction design", "Design system creation", "Usability testing"],
  tech: ["Figma", "Adobe XD", "Miro", "Zeplin", "Principles"]
}, {
  Icon: Zap,
  title: "Automation",
  tagline: "Smarter workflows, faster execution",
  desc: "Automated business processes, marketing workflows and system integrations that remove manual steps and improve reliability.",
  features: ["Workflow automation", "API integrations", "CRM & marketing automation", "Notifications & alerts", "Reporting automation"],
  tech: ["Zapier", "Make", "n8n", "Integromat", "Custom scripts"]
}, {
  Icon: Search,
  title: "SEO Optimization",
  tagline: "Rank, traffic, revenue — sustained",
  desc: "Technical SEO audits, content strategy, link building and on-page optimization. We help businesses rank for the keywords that matter and stay there.",
  features: ["Technical SEO audits", "Keyword research & strategy", "Content optimization", "Backlink acquisition", "Local & international SEO"],
  tech: ["Ahrefs", "SEMrush", "Screaming Frog", "Search Console", "Schema.org"]
}];
const process = [{
  num: "01",
  title: "Planning",
  desc: "Discovery, requirements and roadmap."
}, {
  num: "02",
  title: "UI/UX Design",
  desc: "Wireframes, prototypes and design systems."
}, {
  num: "03",
  title: "Development",
  desc: "Iterative engineering with weekly demos."
}, {
  num: "04",
  title: "Testing",
  desc: "QA, performance, security and accessibility."
}, {
  num: "05",
  title: "Launch",
  desc: "Deploy, monitor, optimize and scale."
}];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 pt-8 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
        label: "Home",
        href: "/"
      }, {
        label: "Services"
      }] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6
      }, className: "mt-6 max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium", children: "Services" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]", children: [
          "Professional ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Digital Services" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "End-to-end web, mobile, SEO and digital marketing services engineered to ship fast and perform at scale." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-12 space-y-8", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.article, { initial: {
      opacity: 0,
      y: 30
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true,
      margin: "-100px"
    }, transition: {
      duration: 0.6
    }, className: "group relative glass rounded-3xl p-8 md:p-12 hover:shadow-glow transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 w-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:animate-pulse-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.Icon, { className: "h-8 w-8 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 text-xs uppercase tracking-widest text-neon-cyan font-semibold", children: [
          "0",
          i + 1
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-bold", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.tagline }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold shadow-glow", children: [
          "Learn more ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-3 space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base text-muted-foreground leading-relaxed", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold mb-3", children: "Features" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid sm:grid-cols-2 gap-2", children: s.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-neon-cyan mt-0.5 shrink-0" }),
            " ",
            f
          ] }, f)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold mb-3", children: "Technologies" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: s.tech.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-3 py-1 rounded-full glass text-xs font-medium", children: t }, t)) })
        ] })
      ] })
    ] }) }, s.title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Our process", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "How we ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "deliver" })
      ] }), description: "A proven 5-step process designed for speed, transparency and quality." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5", children: process.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: i * 0.08
      }, className: "relative glass rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-3xl font-bold text-gradient", children: p.num }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-semibold", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: p.desc })
      ] }, p.num)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass font-semibold", children: [
        "See our projects ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
      ] }) })
    ] })
  ] });
}
export {
  Services as component
};
