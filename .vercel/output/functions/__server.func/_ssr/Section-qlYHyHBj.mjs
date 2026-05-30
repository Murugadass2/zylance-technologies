import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
function SectionHeader({
  eyebrow,
  title,
  description,
  center = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-80px" },
      transition: { duration: 0.6 },
      className: `max-w-3xl ${center ? "mx-auto text-center" : ""}`,
      children: [
        eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-gradient-primary" }),
          eyebrow
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-4xl sm:text-5xl font-bold tracking-tight", children: title }),
        description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed", children: description })
      ]
    }
  );
}
function Breadcrumbs({ items }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Breadcrumb", className: "text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "flex flex-wrap items-center gap-2", children: items.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
    item.href ? /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, className: "hover:text-foreground", children: item.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: item.label }),
    i < items.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-50", children: "/" })
  ] }, i)) }) });
}
export {
  Breadcrumbs as B,
  SectionHeader as S
};
