import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Breadcrumbs, S as SectionHeader } from "./Section-qlYHyHBj.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { a as ArrowUpRight } from "../_libs/lucide-react.mjs";
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
const drizzleDropInn = "/assets/project-drizzledropinn-DJ0TV6pV.png";
const pmconstruction = "/assets/pm-construction-h9oudwQL.png";
const chennaibuilders = "/assets/chennaibuilders-C1jq-Nnu.png";
const projects = [{
  title: "Dazzle Drop Inn Hotel Website",
  tag: "Hotel · Web Development",
  desc: "A premium, fully responsive hotel website built for Dazzle Drop Inn — fast, SEO-optimized and conversion-focused.",
  href: "https://www.drizzledropinn.com/",
  image: drizzleDropInn
}, {
  title: "PM Constructions Website",
  tag: "Real Estate · Web Development",
  desc: "A modern website built for PM Constructions to showcase properties, services, and lead capture.",
  href: "https://www.pm-constructions.com/",
  image: pmconstruction
}, {
  title: "Chennai Builders Website",
  tag: "Real Estate · Web Development",
  desc: "A modern website built for Chennai Builders to showcase properties, services, and lead capture.",
  href: "https://chennaibuilders.com/",
  image: chennaibuilders
}];
const stats = [{
  value: "10+",
  label: "Projects shipped"
}, {
  value: "8+",
  label: "Happy Clients"
}, {
  value: "4.9★",
  label: "Average rating"
}, {
  value: "85%",
  label: "Client retention"
}];
const techStack = ["React", "Next.js", "TypeScript", "Node.js", "Swift", "Kotlin", "Postgres", "AWS", "Figma", "Tailwind"];
const animateStatValue = (value, progress) => {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return value;
  const target = parseFloat(match[1]);
  const suffix = match[2] || "";
  const decimals = match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const current = target * progress;
  const display = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
  return `${display}${suffix}`;
};
function Projects() {
  const [animatedValues, setAnimatedValues] = reactExports.useState(stats.map((s) => s.value));
  reactExports.useEffect(() => {
    let frameId;
    const duration = 1200;
    const start = performance.now();
    const animate = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setAnimatedValues(stats.map((s) => animateStatValue(s.value, progress)));
      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 pt-8 pb-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
        label: "Home",
        href: "/"
      }, {
        label: "Projects"
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium", children: "Portfolio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]", children: [
          "Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Recent Projects" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "A selection of premium websites we've crafted for ambitious teams. Hover any project to see it in full color." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.a, { href: p.href, target: "_blank", rel: "noopener noreferrer", initial: {
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
    }, className: "group relative overflow-hidden rounded-2xl glass hover:shadow-glow transition-all block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[4/3] overflow-hidden bg-muted", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: p.title, loading: "lazy", className: "h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 ease-out scale-100 group-hover:scale-105" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 right-3 h-10 w-10 rounded-full bg-background/90 text-foreground flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-5 w-5" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "px-2 py-0.5 rounded-full glass text-neon-cyan font-medium", children: "Featured" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: p.tag })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-lg font-semibold", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: p.desc })
      ] })
    ] }, p.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glass-strong border-gradient rounded-3xl p-10 grid grid-cols-2 lg:grid-cols-4 gap-8", children: stats.map((s, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl sm:text-5xl font-bold text-gradient", children: animatedValues[index] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm text-muted-foreground", children: s.label })
    ] }, s.label)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 py-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeader, { eyebrow: "Tech stack", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Tools we ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "build with" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex flex-wrap gap-3 justify-center max-w-3xl mx-auto", children: techStack.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "glass rounded-full px-5 py-2.5 text-sm font-medium", children: t }, t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", className: "inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow", children: "Start your project" }) })
    ] })
  ] });
}
export {
  Projects as component
};
