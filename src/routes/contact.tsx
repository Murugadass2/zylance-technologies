import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from "lucide-react";
import { Breadcrumbs } from "@/components/site/Section";

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Xylance Technologies",
  url: "/contact",
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
    addressCountry: "Remote",
  },
};

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Xylance Technologies | Remote Digital Services" },
      { name: "description", content: "Contact Xylance Technologies for remote web development, mobile app development, SEO, and digital marketing services." },
      { property: "og:title", content: "Contact Our Remote Digital Solutions Team" },
      { property: "og:description", content: "Reach out to our remote team by email or phone for fast support and a free consultation." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(contactSchema) },
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema) },
    ],
  }),
  component: Contact,
});

const contacts = [
  { Icon: Mail, label: "Email", value: "xylancetechnologies@gmail.com", href: "mailto:xylancetechnologies@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+91 7010657314", href: "tel:+917010657314" },
  { Icon: Phone, label: "Phone", value: "+91 8667825086", href: "tel:+918667825086" },
  { Icon: MapPin, label: "Office", value: "Remote", href: "#" },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Web Development",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (key: keyof typeof formData) => (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error?.error || "Failed to send message.");
      }

      setSubmitted(true);
      setStatusMessage("Message sent successfully. We'll reply soon.");
      setFormData({ name: "", email: "", phone: "", service: "Web Development", message: "" });
    } catch (error) {
      console.error(error);
      setStatusMessage("Unable to send your message right now. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="container mx-auto px-6 pt-8 pb-12">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="mt-6 max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium">Contact</span>
          <h1 className="mt-5 text-5xl sm:text-6xl font-bold tracking-tight leading-[1.05]">
            Contact Our <span className="text-gradient">Remote Solutions Team</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Reach out by email or phone anytime. We work remotely and provide full digital services across locations.
          </p>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-strong border-gradient rounded-3xl p-8 md:p-10 space-y-5"
          >
            <h2 className="text-2xl font-bold">Send us a message</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="text-xs font-medium text-muted-foreground">Name</label>
                <input id="name" required type="text" className="mt-1 w-full px-4 py-3 rounded-xl glass bg-transparent outline-none focus:shadow-glow transition-all" placeholder="Your name" value={formData.name} onChange={handleChange("name")} />
              </div>
              <div>
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground">Email</label>
                <input id="email" required type="email" className="mt-1 w-full px-4 py-3 rounded-xl glass bg-transparent outline-none focus:shadow-glow transition-all" placeholder="you@company.com" value={formData.email} onChange={handleChange("email")} />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="phone" className="text-xs font-medium text-muted-foreground">Phone</label>
                <input id="phone" type="tel" className="mt-1 w-full px-4 py-3 rounded-xl glass bg-transparent outline-none focus:shadow-glow transition-all" placeholder="+91 7010657314" value={formData.phone} onChange={handleChange("phone")} />
              </div>
              <div>
                <label htmlFor="service" className="text-xs font-medium text-muted-foreground">Service required</label>
                <select id="service" className="mt-1 w-full px-4 py-3 rounded-xl glass bg-transparent outline-none focus:shadow-glow transition-all" value={formData.service} onChange={handleChange("service")}>
                  <option className="bg-background">Web Development</option>
                  <option className="bg-background">Mobile App Development</option>
                  <option className="bg-background">Digital Marketing</option>
                  <option className="bg-background">SEO Services</option>
                  <option className="bg-background">UI/UX Design</option>
                  <option className="bg-background">Automation</option>
                </select>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="text-xs font-medium text-muted-foreground">Message</label>
              <textarea id="message" required rows={5} className="mt-1 w-full px-4 py-3 rounded-xl glass bg-transparent outline-none focus:shadow-glow transition-all resize-none" placeholder="Tell us about your project, goals and timeline…" value={formData.message} onChange={handleChange("message")} />
            </div>
            <button type="submit" disabled={isSubmitting} className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:shadow-glow-purple transition-all disabled:opacity-60">
              {isSubmitting ? "Sending..." : submitted ? "Message sent ✓" : (<>Send message <Send className="h-4 w-4" /></>)}
            </button>
            {statusMessage && (
              <p className="text-sm text-neon-cyan text-center">{statusMessage}</p>
            )}
          </motion.form>

          <div className="lg:col-span-2 space-y-4">
            {contacts.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                className="block glass rounded-2xl p-5 hover:shadow-glow transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                    <Icon className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">{label}</div>
                    <div className="font-semibold">{value}</div>
                  </div>
                </div>
              </a>
            ))}
            <a
              href="https://wa.me/917010657314"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl p-5 bg-gradient-primary shadow-glow hover:shadow-glow-purple transition-all"
            >
              <div className="flex items-center gap-4 text-primary-foreground">
                <MessageCircle className="h-6 w-6" />
                <div>
                  <div className="text-xs opacity-80">Instant chat</div>
                  <div className="font-semibold">Message us on WhatsApp</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

    
    </>
  );
}
