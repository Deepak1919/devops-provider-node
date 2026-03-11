import { Shield, ArrowRight, Zap, Globe, Server } from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
  { icon: Server, label: "Proxmox Hybrid Expert", desc: "On-prem + cloud Kubernetes" },
  { icon: Globe, label: "DevOps for SaaS", desc: "Local context, global practices" },
  { icon: Zap, label: "Proven at Scale", desc: "Mastodon-scale infrastructure" },
];

const TrustSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8"
          >
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Zero-Risk Guarantee</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            First week free if we don't identify{" "}
            <span className="text-primary text-glow-green">3 critical improvements</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground mb-10 max-w-xl mx-auto"
          >
            We're confident in our ability to find inefficiencies. If we can't deliver value in the first week, you pay nothing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:scale-105 transition-all duration-300 border-glow-green"
            >
              Book Free Architecture Review
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Differentiators */}
          <div className="mt-16 grid sm:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="text-center p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm gradient-border"
              >
                <d.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <p className="font-mono text-sm text-primary mb-1">{d.label}</p>
                <p className="text-sm text-muted-foreground">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
