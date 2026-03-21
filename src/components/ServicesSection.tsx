import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { servicePackages } from "@/data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container px-6 relative z-10">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="font-mono text-sm text-primary mb-3">// services.list()</p>
            <h2 className="text-3xl font-bold md:text-4xl">
              Productized packages for teams that want <span className="text-primary text-glow-green">execution</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Defined scope, fixed timelines, and delivery work that maps to the actual platform problem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="flex flex-col gap-3 sm:flex-row"
          >
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-secondary"
            >
              View Full Services Page
            </Link>
            <Link
              to="/ai-devops"
              className="inline-flex items-center justify-center rounded-xl border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-medium text-primary transition-all duration-300 hover:border-primary/40"
            >
              AI for DevOps
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-7xl mx-auto">
          {servicePackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`relative p-6 rounded-xl flex flex-col transition-all duration-300 ${
                pkg.popular
                  ? "border border-primary/50 border-glow-green bg-card/80 backdrop-blur-sm"
                  : "border border-border bg-card/50 backdrop-blur-sm hover:border-primary/20 gradient-border"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  POPULAR
                </div>
              )}
              <div className="mb-4">
                <h3 className="font-bold text-lg">{pkg.name}</h3>
                <p className="text-xs text-muted-foreground font-mono mt-1">{pkg.timeline}</p>
              </div>
              <div className="mb-6">
                <span className="text-2xl font-bold font-mono text-primary text-glow-green">{pkg.price}</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">{pkg.deliverable}</p>
              <ul className="space-y-3 flex-1">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-secondary-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-6 block text-center py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                  pkg.popular
                    ? "bg-primary text-primary-foreground hover:opacity-90 hover:scale-105"
                    : "border border-border hover:border-primary/30 text-foreground hover:bg-secondary"
                }`}
              >
                Get Started
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
