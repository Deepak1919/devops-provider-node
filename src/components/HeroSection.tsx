import { ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
      
      <div className="container relative z-10 px-6 py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal prompt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card/60 backdrop-blur-sm mb-8 font-mono text-sm"
          >
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-muted-foreground">$</span>
            <span className="text-primary">kubectl</span>
            <span className="text-foreground">get peace-of-mind</span>
            <span className="terminal-cursor text-primary">▋</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight mb-6"
          >
            Deploy Faster.{" "}
            <span className="text-primary text-glow-green relative">
              Sleep Better.
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 2 100 2 150 6C200 10 250 4 298 8" stroke="hsl(142 72% 50%)" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
            <br />
            Scale Smarter.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Kubernetes & DevOps consulting for product teams ready to move from{" "}
            <span className="text-foreground font-medium">chaos</span> to{" "}
            <span className="text-primary font-medium">automation</span>.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300 border-glow-green animate-pulse-glow text-base"
            >
              Book Free Architecture Review
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center gap-2 px-8 py-4 border border-border text-foreground font-medium rounded-xl hover:bg-secondary hover:border-primary/30 transition-all duration-300 text-base glass-card"
            >
              See Case Studies
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            {[
              { value: "8min", label: "Avg Deploy Time" },
              { value: "99.9%", label: "Uptime SLA" },
              { value: "40%", label: "Cost Reduction" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl md:text-3xl font-bold font-mono text-primary text-glow-green">{stat.value}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
