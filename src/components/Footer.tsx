import BrandLogo from "@/components/BrandLogo";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 border-t border-border relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 rounded-full blur-[100px]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">

          <div className="flex items-center justify-center mb-6">
            <BrandLogo className="h-20 w-auto object-contain" />
          </div>

          <p className="text-muted-foreground text-sm mb-6">
            On-prem and cloud DevOps consulting backed by a team with 10+ years of experience.
          </p>

          {/* Contact Details */}
          <div className="space-y-2 text-sm">

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

          <p className="text-xs text-muted-foreground mt-8">
            © {new Date().getFullYear()} DevOps Provider. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
