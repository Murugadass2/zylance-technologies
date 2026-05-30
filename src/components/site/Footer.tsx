import { Link } from "@tanstack/react-router";
import { Sparkles, Github, Twitter, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-glow">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display font-bold text-lg">
                <span className="text-gradient">Xavion</span> Technologies
              </span>
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
              Turning Ideas Into Digital Reality. Web development, mobile apps,
              SEO and digital marketing services for ambitious modern businesses.
            </p>
            <form
              className="mt-6 flex max-w-sm gap-2 glass rounded-xl p-1.5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 bg-transparent px-3 py-2 text-sm outline-none placeholder:text-muted-foreground"
              />
              <button className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold">
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground">Services</Link></li>
              <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:xylancetechnologies@gmail.com" className="hover:text-foreground">xylancetechnologies@gmail.com</a></li>
              <li><a href="tel:+917010657314" className="hover:text-foreground">+91 7010657314</a></li>
              <li><a href="tel:+918667825086" className="hover:text-foreground">+91 8667825086</a></li>
            </ul>
            <div className="mt-4 flex gap-2">
              {[
                { Icon: Twitter, label: "Twitter" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Github, label: "GitHub" },
                { Icon: Mail, label: "Email" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-lg glass hover:shadow-glow transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Xavion Technologies. All rights reserved.</p>
          <p>Crafted with precision · Built for performance</p>
        </div>
      </div>
    </footer>
  );
}
