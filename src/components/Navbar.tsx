import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Case Studies", to: "/case-studies" },
];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-2xl"
    >
      <div className="container px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" aria-label="DevOps Provider home" className="flex items-center">
          <BrandLogo className="h-12 w-auto object-contain" />
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8">

          <Link
            to="/about"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            About
          </Link>

          <Link
            to="/services"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Services
          </Link>

          <Link
            to="/case-studies"
            className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
          >
            Case Studies
          </Link>

          <a
            href="/#contact"
            className="text-sm px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>

        </div>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open navigation menu"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/60 text-foreground backdrop-blur-sm transition-colors hover:border-primary/30 hover:text-primary"
            >
              <Menu className="h-5 w-5" />
            </button>
          </SheetTrigger>

          <SheetContent side="right" className="border-border bg-background/95 px-6">
            <SheetHeader className="mt-6 text-left">
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription>
                Open the main pages and contact section.
              </SheetDescription>
            </SheetHeader>

            <div className="mt-8 flex flex-col gap-3">
              {navItems.map((item) => (
                <SheetClose asChild key={item.to}>
                  <Link
                    to={item.to}
                    className="rounded-xl border border-border bg-card/40 px-4 py-3 text-base text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  >
                    {item.label}
                  </Link>
                </SheetClose>
              ))}

              <SheetClose asChild>
                <a
                  href="/#contact"
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-base font-medium text-primary-foreground"
                >
                  Get in Touch
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </motion.nav>
  );
};

export default Navbar;
