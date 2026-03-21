import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { footerQuickLinks } from "@/data/navigation";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container px-6 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
          <div className="max-w-2xl lg:text-left">

            <div className="flex items-center justify-center mb-6 lg:justify-start">
              <BrandLogo className="h-20 w-auto object-contain" />
            </div>

            <p className="text-muted-foreground text-sm mb-6">
              On-prem, cloud, hybrid infrastructure, and AI-for-DevOps consulting backed by a team with 10+ years of experience.
            </p>

            <div className="grid gap-3 text-sm">
              <p>
                📧 Email:{" "}
                <a
                  href="mailto:info@devopsprovider.com"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  info@devopsprovider.com
                </a>
              </p>

              <p>
                📞 Phone:{" "}
                <a
                  href="tel:+917307741919"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  +91 7307741919
                </a>
              </p>

              <p>
                💬 WhatsApp:{" "}
                <a
                  href="https://wa.me/917307741919"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm">
            <p className="font-mono text-sm text-primary">// quick_links()</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {footerQuickLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-xl border border-border/60 px-4 py-3 text-sm text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center lg:text-left">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} DevOps Provider. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
