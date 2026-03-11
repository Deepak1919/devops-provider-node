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
          <p className="text-muted-foreground text-sm mb-8">
            Kubernetes & DevOps consulting for teams that ship.
          </p>
          <a
            href="mailto:info@devopsprovider.com"
            className="font-mono text-primary hover:text-primary/80 transition-colors text-sm"
          >
            info@devopsprovider.com
          </a>
          <p className="text-xs text-muted-foreground mt-8">
            © {new Date().getFullYear()} DevOps Architect. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
