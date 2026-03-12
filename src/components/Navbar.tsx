import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import BrandLogo from "@/components/BrandLogo";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-2xl"
    >
      <div className="container px-6 h-16 flex items-center justify-between">
        <Link to="/" aria-label="DevOps Provider home" className="flex items-center">
          <BrandLogo className="h-12 w-auto object-contain" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">About</Link>
          <Link to="/#services" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Services</Link>
          <Link to="/#case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Case Studies</Link>
          <Link
            to="/#contact"
            className="text-sm px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
