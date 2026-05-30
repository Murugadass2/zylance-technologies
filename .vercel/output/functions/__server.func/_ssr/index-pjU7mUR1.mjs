import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SectionHeader } from "./Section-qlYHyHBj.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { n as Sparkles, A as ArrowRight, o as Star, p as TrendingUp, Z as Zap, d as CodeXml, m as Smartphone, g as Megaphone, S as Search, l as Shield, R as Rocket, U as Users, e as Globe, c as CircleCheck } from "../_libs/lucide-react.mjs";
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
const heroImg = "/assets/hero-B2sja_js.jpg";
const services = [{
  Icon: CodeXml,
  title: "Web Development",
  desc: "Lightning-fast, scalable web platforms built with modern frameworks."
}, {
  Icon: Smartphone,
  title: "Mobile App Development",
  desc: "Native and cross-platform iOS & Android apps users love."
}, {
  Icon: Megaphone,
  title: "Digital Marketing",
  desc: "Data-driven campaigns that convert visitors into customers."
}, {
  Icon: Search,
  title: "SEO Services",
  desc: "Technical SEO and content strategy that ranks and stays ranked."
}];
const stats = [{
  value: "10+",
  label: "Projects Delivered"
}, {
  value: "8+",
  label: "Happy Clients"
}, {
  value: "99%",
  label: "Client Satisfaction"
}, {
  value: "5+",
  label: "Industries Served"
}];
const whyUs = [{
  Icon: Zap,
  title: "Blazing Performance",
  desc: "Sub-second load times and 100/100 Core Web Vitals."
}, {
  Icon: Shield,
  title: "Enterprise Security",
  desc: "Best-in-class security architecture out of the box."
}, {
  Icon: Rocket,
  title: "Ship 3× Faster",
  desc: "Battle-tested workflows that accelerate delivery."
}, {
  Icon: Users,
  title: "Senior Team",
  desc: "Designers and engineers with 10+ years experience."
}, {
  Icon: TrendingUp,
  title: "Growth Focused",
  desc: "Every decision tied to measurable business outcomes."
}, {
  Icon: Globe,
  title: "Global Reach",
  desc: "Built for scale across regions, languages and devices."
}];
const testimonials = [{
  quote: "They didn't just build our product — they built our growth engine. Conversions tripled in 30 days.",
  name: "Hariharan",
  role: "Manager, DrizzleDropInn"
}, {
  quote: "The most technically sound team we've worked with. Performance and design at world-class level.",
  name: "Ravi Kumar",
  role: "Administrator, Chennai Builders"
}, {
  quote: "From SEO to Website , every deliverable exceeded expectations. True partners, not vendors.",
  name: "Ajay Kumar",
  role: "Administrator, PM Constructions"
}];
const faqs = [{
  q: "What services does Xavion Technologies offer?",
  a: "We offer web development, mobile app development, digital marketing, and SEO services for businesses of every size."
}, {
  q: "How long does a typical project take?",
  a: "Most websites ship in 3–6 weeks; complex mobile apps and platforms typically take 8–16 weeks based on scope."
}, {
  q: "Do you provide ongoing support?",
  a: "Yes. Every engagement includes performance monitoring, security updates, and dedicated post-launch support plans."
}, {
  q: "Can you improve my Google ranking?",
  a: "Our SEO team combines technical audits, content strategy, and link building to drive measurable organic growth."
}];
const clients = ["NORTHWIND", "HELIX", "BLOOMCO", "VANTAGE", "ORBIT", "LUMEN", "PIONEER", "AXIOM"];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-radial pointer-events-none", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container mx-auto px-6 pt-12 pb-24 sm:pt-20 sm:pb-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 30
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.7
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3 w-3 text-neon-cyan" }),
            "Turning Ideas Into Digital Reality"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-6 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]", children: [
            "Innovative ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Digital Solutions" }),
            " For Modern Businesses"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed", children: "Best web development & digital marketing company building enterprise-grade products, growth campaigns and SEO that compound over time." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-purple transition-all", children: [
              "Start Your Project",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass hover:bg-white/5 font-semibold transition-all", children: "Explore Services" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex items-center gap-6 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2", children: [...Array(4)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-8 rounded-full bg-gradient-primary border-2 border-background" }, i)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 text-foreground", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-neon-cyan text-neon-cyan" }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Trusted by 20+ teams worldwide" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          scale: 0.9
        }, animate: {
          opacity: 1,
          scale: 1
        }, transition: {
          duration: 0.8,
          delay: 0.2
        }, className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl overflow-hidden border-gradient shadow-glow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: heroImg, alt: "Futuristic 3D visualization of code, mobile apps and analytics dashboards", width: 1536, height: 1024, fetchPriority: "high", className: "w-full h-auto" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
            y: [0, -15, 0]
          }, transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }, className: "absolute -bottom-6 -left-6 glass-strong rounded-2xl p-4 shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: "+347%" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "avg. organic growth" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
            y: [0, 15, 0]
          }, transition: {
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }, className: "absolute -top-6 -right-6 glass-strong rounded-2xl p-4 shadow-glow-purple", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-xl bg-gradient-primary flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-5 w-5 text-primary-foreground" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: "99/100" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Lighthouse score" })
            ] })
          ] }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { "aria-label": "Trusted by", className: "container mx-auto px-6 py-12 border-y border-border", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs uppercase tracking-widest text-muted-foreground", children: "Trusted by ambitious teams" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-12 animate-marquee whitespace-nowrap", children: [...clients, ...clients].map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-display font-bold text-muted-foreground/60 tracking-widest", children: c }, i)) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "What we do", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Built for ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "growth" }),
        " at every layer"
      ] }), description: "From the first pixel to the last campaign, we deliver end-to-end digital products that perform." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5", children: services.map(({
        Icon,
        title,
        desc
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 30
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: i * 0.08
      }, className: "group relative glass rounded-2xl p-6 hover:shadow-glow transition-all hover:-translate-y-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary-foreground" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/services", className: "mt-5 inline-flex items-center gap-1 text-sm font-medium text-neon-cyan", children: [
          "Learn more ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ] })
      ] }, title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-strong border-gradient rounded-3xl p-10 grid grid-cols-2 lg:grid-cols-4 gap-8", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
    }, className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl sm:text-5xl font-bold text-gradient", children: s.value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Why choose us", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Engineering excellence, ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "obsessive" }),
        " craft"
      ] }), description: "A senior team that treats your product like our own." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5", children: whyUs.map(({
        Icon,
        title,
        desc
      }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: i * 0.06
      }, className: "glass rounded-2xl p-6 hover:bg-white/[0.04] transition-all", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-neon-cyan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: desc })
      ] }, title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "What clients say", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Loved by founders & ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "CTOs" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-5", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.figure, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.5,
        delay: i * 0.1
      }, className: "glass rounded-2xl p-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 text-neon-cyan", children: [...Array(5)].map((_, i2) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-current" }, i2)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-4 text-base leading-relaxed", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-full bg-gradient-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.role })
          ] })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "FAQ", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Frequently asked ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "questions" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 max-w-3xl mx-auto space-y-3", children: faqs.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group glass rounded-xl p-5 cursor-pointer", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "flex items-center justify-between gap-4 font-semibold list-none", children: [
          f.q,
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-6 w-6 rounded-full bg-gradient-primary flex items-center justify-center text-xs text-primary-foreground group-open:rotate-45 transition-transform", children: "+" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: f.a })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden glass-strong border-gradient rounded-3xl p-12 md:p-16 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-radial opacity-50", "aria-hidden": "true" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-4xl md:text-5xl font-bold tracking-tight", children: [
          "Ready to build something ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "extraordinary" }),
          "?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl mx-auto text-muted-foreground", children: "Get a free consultation with our senior team. We'll map a strategy tailored to your goals." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow", children: [
            "Get Free Consultation ",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl glass font-semibold", children: "See Our Work" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground", children: ["No upfront cost", "48h response", "NDA on request"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-neon-cyan" }),
          " ",
          x
        ] }, x)) })
      ] })
    ] }) })
  ] });
}
export {
  Home as component
};
