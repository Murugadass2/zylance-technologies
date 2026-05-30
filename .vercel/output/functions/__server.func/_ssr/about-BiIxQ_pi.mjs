import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Breadcrumbs, S as SectionHeader } from "./Section-qlYHyHBj.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { T as Target, E as Eye, H as Heart, b as Award, Z as Zap, U as Users } from "../_libs/lucide-react.mjs";
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
const values = [{
  Icon: Target,
  title: "Our Mission",
  desc: "Empower businesses with technology that delivers measurable outcomes — every line of code, every campaign."
}, {
  Icon: Eye,
  title: "Our Vision",
  desc: "To be the world's most trusted partner for ambitious teams turning ideas into market-defining products."
}, {
  Icon: Heart,
  title: "Our Values",
  desc: "Craft, transparency, ownership and relentless customer obsession sit at the heart of everything we ship."
}];
const journey = [
  {
    year: "2024",
    title: "Founded",
    desc: "Started with a team and a vision for premium digital craft."
  },
  {
    year: "2025",
    title: "First 10 Clients",
    desc: "Delivered platforms for fintech, healthcare and SaaS startups."
  }
  // { year: "2023", title: "Global Expansion", desc: "Opened collaboration with teams across 4 continents." },
  // { year: "2025", title: "50+ Projects", desc: "Recognized as a top-rated technology and digital marketing partner." },
];
const stack = [{
  name: "React",
  category: "Frontend"
}, {
  name: "Next.js",
  category: "Frontend"
}, {
  name: "TypeScript",
  category: "Language"
}, {
  name: "Node.js",
  category: "Backend"
}, {
  name: "Postgres",
  category: "Database"
}, {
  name: "AWS",
  category: "Cloud"
}, {
  name: "Swift",
  category: "Mobile"
}, {
  name: "Kotlin",
  category: "Mobile"
}];
const skills = [{
  name: "Web Engineering",
  level: 98
}, {
  name: "Mobile Development",
  level: 94
}, {
  name: "SEO & Growth",
  level: 96
}, {
  name: "UI / UX Design",
  level: 92
}];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 pt-8 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
        label: "Home",
        href: "/"
      }, {
        label: "About"
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium", children: "About us" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]", children: [
          "About Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Technology Company" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Xavion Technologies is a team of senior engineers, designers and growth specialists building enterprise-grade web platforms, mobile apps and digital marketing engines for ambitious businesses worldwide." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: values.map(({
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
      delay: i * 0.1
    }, className: "glass rounded-2xl p-7 hover:shadow-glow transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-5 text-xl font-semibold", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: desc })
    ] }, title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 max-w-4xl mx-auto relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan via-neon-blue to-neon-purple", "aria-hidden": "true" }),
      journey.map((j, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
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
      }, className: `relative mb-10 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"}`, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-4 md:left-auto md:right-[-9px] top-3 h-4 w-4 rounded-full bg-gradient-primary shadow-glow", style: i % 2 !== 0 ? {
          left: "-9px",
          right: "auto"
        } : {} }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-12 md:ml-0 glass rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-neon-cyan font-semibold", children: j.year }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 text-lg font-semibold", children: j.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: j.desc })
        ] })
      ] }, j.year))
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Expertise", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Skills sharpened over ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "years of shipping" })
      ] }), description: "Our team blends product strategy, engineering depth and growth instinct.", center: false }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-6", children: skills.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 20
      }, whileInView: {
        opacity: 1,
        x: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6,
        delay: i * 0.1
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-sm font-medium mb-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: s.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-neon-cyan", children: [
            s.level,
            "%"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-white/5 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          width: 0
        }, whileInView: {
          width: `${s.level}%`
        }, viewport: {
          once: true
        }, transition: {
          duration: 1.2,
          delay: i * 0.1,
          ease: "easeOut"
        }, className: "h-full bg-gradient-primary" }) })
      ] }, s.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Tech stack", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Built on tools the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "best teams" }),
        " trust"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap gap-3 justify-center max-w-3xl mx-auto", children: stack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-full px-5 py-2.5 text-sm font-medium", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: t.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-xs text-muted-foreground", children: [
          "· ",
          t.category
        ] })
      ] }, t.name)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-5", children: [{
        Icon: Award,
        title: "Award-winning craft",
        desc: "Recognized for design and engineering quality."
      }, {
        Icon: Zap,
        title: "Speed & precision",
        desc: "Senior-only teams ship 3× faster with zero hand-offs."
      }, {
        Icon: Users,
        title: "Long-term partners",
        desc: "85% of clients renew or expand after the first project."
      }].map(({
        Icon,
        title,
        desc
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glass rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-7 w-7 text-neon-cyan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-semibold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: desc })
      ] }, title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow", children: "Work with our team" }) })
    ] })
  ] });
}
export {
  About as component
};
