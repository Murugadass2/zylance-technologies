import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { B as Breadcrumbs } from "./Section-qlYHyHBj.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { k as Send, M as Mail, j as Phone, f as MapPin, i as MessageCircle } from "../_libs/lucide-react.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const contacts = [{
  Icon: Mail,
  label: "Email",
  value: "xylancetechnologies@gmail.com",
  href: "mailto:xylancetechnologies@gmail.com"
}, {
  Icon: Phone,
  label: "Phone",
  value: "+91 7010657314",
  href: "tel:+917010657314"
}, {
  Icon: Phone,
  label: "Phone",
  value: "+91 8667825086",
  href: "tel:+918667825086"
}, {
  Icon: MapPin,
  label: "Office",
  value: "Remote",
  href: "#"
}];
function Contact() {
  const [formData, setFormData] = reactExports.useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: ""
  });
  const [submitted, setSubmitted] = reactExports.useState(false);
  const [statusMessage, setStatusMessage] = reactExports.useState(null);
  const [isSubmitting, setIsSubmitting] = reactExports.useState(false);
  const handleChange = (key) => (event) => {
    setFormData((prev) => ({
      ...prev,
      [key]: event.target.value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.error || "Failed to send message.");
      }
      setSubmitted(true);
      setStatusMessage("Message sent successfully. We'll reply soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "Web Development",
        message: ""
      });
    } catch (error) {
      console.error(error);
      setStatusMessage("Unable to send your message right now. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "container mx-auto px-6 pt-8 pb-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Breadcrumbs, { items: [{
        label: "Home",
        href: "/"
      }, {
        label: "Contact"
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]", children: [
          "Contact Our ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient", children: "Remote Solutions Team" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-muted-foreground leading-relaxed", children: "Reach out by email or phone anytime. We work remotely and provide full digital services across locations." })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "container mx-auto px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.form, { initial: {
        opacity: 0,
        y: 20
      }, whileInView: {
        opacity: 1,
        y: 0
      }, viewport: {
        once: true
      }, transition: {
        duration: 0.6
      }, onSubmit: handleSubmit, className: "lg:col-span-3 glass-strong border-gradient rounded-3xl p-8 md:p-10 space-y-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold", children: "Send us a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "text-xs font-medium text-muted-foreground", children: "Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "name", required: true, type: "text", className: "mt-1 w-full px-4 py-3 rounded-xl glass bg-transparent outline-none focus:shadow-glow transition-all", placeholder: "Your name", value: formData.name, onChange: handleChange("name") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "text-xs font-medium text-muted-foreground", children: "Email" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "email", required: true, type: "email", className: "mt-1 w-full px-4 py-3 rounded-xl glass bg-transparent outline-none focus:shadow-glow transition-all", placeholder: "you@company.com", value: formData.email, onChange: handleChange("email") })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "phone", className: "text-xs font-medium text-muted-foreground", children: "Phone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: "phone", type: "tel", className: "mt-1 w-full px-4 py-3 rounded-xl glass bg-transparent outline-none focus:shadow-glow transition-all", placeholder: "+91 7010657314", value: formData.phone, onChange: handleChange("phone") })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "service", className: "text-xs font-medium text-muted-foreground", children: "Service required" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { id: "service", className: "mt-1 w-full px-4 py-3 rounded-xl glass bg-transparent outline-none focus:shadow-glow transition-all", value: formData.service, onChange: handleChange("service"), children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Web Development" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Mobile App Development" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Digital Marketing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "SEO Services" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "UI/UX Design" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("option", { className: "bg-background", children: "Automation" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "message", className: "text-xs font-medium text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", required: true, rows: 5, className: "mt-1 w-full px-4 py-3 rounded-xl glass bg-transparent outline-none focus:shadow-glow transition-all resize-none", placeholder: "Tell us about your project, goals and timeline…", value: formData.message, onChange: handleChange("message") })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-purple transition-all disabled:opacity-60", children: isSubmitting ? "Sending..." : submitted ? "Message sent ✓" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Send message ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" })
        ] }) }),
        statusMessage && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-neon-cyan text-center", children: statusMessage })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
        contacts.map(({
          Icon,
          label,
          value,
          href
        }) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href, className: "block glass rounded-2xl p-5 hover:shadow-glow transition-all group", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: value })
          ] })
        ] }) }, label)),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://wa.me/917010657314", target: "_blank", rel: "noopener noreferrer", className: "block rounded-2xl p-5 bg-gradient-primary shadow-glow hover:shadow-glow-purple transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 text-primary-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs opacity-80", children: "Instant chat" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold", children: "Message us on WhatsApp" })
          ] })
        ] }) })
      ] })
    ] }) })
  ] });
}
export {
  Contact as component
};
