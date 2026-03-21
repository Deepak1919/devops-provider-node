import { Shield, ArrowRight, Zap, Globe, Server } from "lucide-react";
import { motion } from "framer-motion";

const differentiators = [
  { icon: Server, label: "Hybrid Infra Focus", desc: "On-prem, private cloud, and public cloud operations" },
  { icon: Globe, label: "10+ Years Experience", desc: "Senior team with deep delivery and platform background" },
  { icon: Zap, label: "Proven at Scale", desc: "Production systems built for reliability and growth" },
  { icon: Server, label: "Kubernetes Platforms", desc: "Cluster design, upgrades, security, and operational hardening" },
  { icon: Globe, label: "Migration Readiness", desc: "Move workloads between datacenter and cloud with less risk" },
  { icon: Zap, label: "Delivery Modernization", desc: "CI/CD, observability, and incident workflows that teams can sustain" },
];

const trustChecks = [
  "Architecture reviews tied to operational bottlenecks",
  "Hands-on implementation instead of advisory-only engagement",
  "Clear rollback, observability, and ownership standards",
];

const TrustSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container px-6 relative z-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 md:p-10"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/20 px-5 py-2.5 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Zero-Risk Guarantee</span>
            </div>

            <h2 className="mt-8 text-3xl font-bold md:text-4xl">
              First week free if we do not identify{" "}
              <span className="text-primary text-glow-green">three critical improvements</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-foreground/80">
              The point is not a superficial audit. The point is finding the operational work that
              will actually move delivery confidence, platform reliability, and team throughput.
            </p>

            <div className="mt-8 space-y-4">
              {trustChecks.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-primary/10 bg-background/20 px-4 py-3">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                  <p className="text-sm leading-7 text-foreground/85">{item}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 border-glow-green"
            >
              Book Free Architecture Review
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border bg-card/50 p-6 text-center backdrop-blur-sm gradient-border"
              >
                <d.icon className="mx-auto mb-4 h-6 w-6 text-primary" />
                <p className="font-mono text-sm text-primary">{d.label}</p>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{d.desc}</p>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="rounded-2xl border border-primary/20 bg-card/60 p-6 backdrop-blur-sm md:col-span-2"
            >
              <p className="font-mono text-sm text-primary">// why_teams_hire_us()</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {[
                  { value: "10+ yrs", label: "Platform and DevOps experience" },
                  { value: "Hybrid", label: "On-prem and cloud delivery" },
                  { value: "Hands-on", label: "Implementation-first approach" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl border border-border/60 bg-background/40 p-4 text-center">
                    <p className="font-mono text-xl font-bold text-primary text-glow-green">{item.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
