import { ArrowRight, GitBranch, Radar, ShieldCheck, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const heroStats = [
  { value: "10+ yrs", label: "Team experience" },
  { value: "On-prem + cloud", label: "Infrastructure focus" },
  { value: "8m", label: "Typical deploy window" },
];

const releaseChecks = [
  "Pre-deploy validation and rollback paths",
  "GitOps promotion across environments",
  "SRE playbooks teams can actually use",
];

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute inset-0 bg-gradient-radial" />
      <div
        className="absolute left-[-8rem] top-24 h-72 w-72 rounded-full bg-accent/10 blur-[120px] animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute right-[-6rem] top-32 h-96 w-96 rounded-full bg-primary/10 blur-[140px] animate-float" />

      <div className="container relative z-10 px-6 py-16 md:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-2.5 font-mono text-sm backdrop-blur-sm"
            >
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">$</span>
              <span className="text-primary">kubectl</span>
              <span className="text-foreground">get release-confidence</span>
              <span className="terminal-cursor text-primary">▋</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="mt-8 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            >
              Delivery systems built for{" "}
              <span className="text-primary text-glow-green">speed, safety, and scale</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl"
            >
              We help engineering teams reduce release risk, stabilize Kubernetes operations,
              and improve both on-prem and cloud infrastructure with support from a team carrying
              10+ years of delivery experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-8 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 border-glow-green animate-pulse-glow"
              >
                Book Free Architecture Review
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-border px-8 py-4 text-base font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-secondary glass-card"
              >
                Talk to the Team
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.28 }}
              className="mt-12 grid gap-4 sm:grid-cols-3"
            >
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-border/70 bg-card/50 p-5 backdrop-blur-sm">
                  <div className="font-mono text-3xl font-bold text-primary text-glow-green">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="rounded-[2rem] border border-border/70 bg-card/65 p-6 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/50 px-4 py-3">
                <div>
                  <p className="font-mono text-xs text-primary">// release.control</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Delivery visibility for engineering leaders
                  </p>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Live
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div className="rounded-2xl border border-border/60 bg-background/40 p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-primary/10 p-2 text-primary">
                      <GitBranch className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Release pipeline</p>
                      <p className="text-xs text-muted-foreground">From PR merge to production</p>
                    </div>
                  </div>
                  <div className="mt-5 space-y-3">
                    {releaseChecks.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-primary" />
                        <p className="text-sm leading-6 text-foreground/85">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/40 p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-accent/10 p-2 text-accent">
                      <Radar className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Operational signals</p>
                      <p className="text-xs text-muted-foreground">What changes once the platform is fixed</p>
                    </div>
                  </div>
                  <div className="mt-5 grid gap-3">
                    {[
                      { label: "Failed rollout exposure", value: "-72%" },
                      { label: "Deploy lead time", value: "8 min" },
                      { label: "Incident response context", value: "Runbook-ready" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-xl border border-border/50 bg-card/60 px-4 py-3">
                        <p className="font-mono text-xs text-primary">{item.value}</p>
                        <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-primary/10 p-2 text-primary">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Built for teams that need execution, not slide decks
                    </p>
                    <p className="mt-2 text-sm leading-7 text-foreground/80">
                      The work covers delivery pipelines, Kubernetes operations, observability,
                      cost control, and the standards required to keep releases predictable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
