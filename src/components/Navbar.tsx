import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";
import { primaryNavItems } from "@/data/navigation";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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
          {primaryNavItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            className="text-sm px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </Link>

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
              {primaryNavItems.map((item) => (
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
                <Link
                  to="/contact"
                  className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-base font-medium text-primary-foreground"
                >
                  Get in Touch
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </motion.nav>
  );
};

export default Navbar;
