import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/60 backdrop-blur-2xl"
    >
      <div className="container px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
            <Terminal className="w-4 h-4 text-primary" />
          </div>
          <span className="font-mono font-bold">DevOps Architect</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Services</a>
          <a href="#case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300">Case Studies</a>
          <a
            href="#contact"
            className="text-sm px-5 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:scale-105 transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
