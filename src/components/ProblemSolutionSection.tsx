import { AlertTriangle, Eye, DollarSign, HeartPulse, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const problems = [
  {
    icon: AlertTriangle,
    pain: "Deployments are scary",
    solution: "Automated CI/CD pipelines with rollback safety",
    color: "terminal-amber" as const,
  },
  {
    icon: Eye,
    pain: "Infrastructure is a black box",
    solution: "GitOps workflows & full observability",
    color: "terminal-cyan" as const,
  },
  {
    icon: DollarSign,
    pain: "Cloud costs are exploding",
    solution: "Kubernetes optimization & autoscaling",
    color: "terminal-green" as const,
  },
  {
    icon: HeartPulse,
    pain: "On-call is burning out your team",
    solution: "SRE practices & incident management",
    color: "terminal-green" as const,
  },
];

const colorMap = {
  "terminal-amber": "text-terminal-amber",
  "terminal-cyan": "text-terminal-cyan",
  "terminal-green": "text-terminal-green",
};

const bgColorMap = {
  "terminal-amber": "bg-terminal-amber/10",
  "terminal-cyan": "bg-terminal-cyan/10",
  "terminal-green": "bg-terminal-green/10",
};

const ProblemSolutionSection = () => {
  return (
    <section className="relative py-24">
      <div className="container px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -40, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:pr-8"
          >
            <p className="font-mono text-sm text-primary">// pain_points.resolve()</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              Where delivery systems usually start to break.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground">
              Most teams do not need more tooling. They need the current platform cleaned up,
              release risk removed, and enough operational clarity that engineers can ship without
              fearing every deployment.
            </p>

            <div className="mt-8 rounded-3xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                What Changes
              </p>
              <div className="mt-5 space-y-4">
                {[
                  "Clear release gates instead of tribal approval chains",
                  "Observable services instead of incident guesswork",
                  "Runbooks and ownership instead of heroics",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-7 text-foreground/85">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-5">
            {problems.map((item, i) => (
              <motion.div
                key={item.pain}
                initial={{ opacity: 0, x: i % 2 === 0 ? 36 : -36, y: 14 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-2xl border border-border bg-card/55 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 gradient-border"
              >
                <div className="grid gap-4 md:grid-cols-[auto_1fr]">
                  <div className={`h-fit rounded-2xl p-3 ${bgColorMap[item.color]} ${colorMap[item.color]}`}>
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                      <p className="text-sm font-medium uppercase tracking-[0.14em] text-muted-foreground">
                        Before
                      </p>
                      <p className="text-sm text-muted-foreground line-through decoration-muted-foreground/40">
                        {item.pain}
                      </p>
                    </div>
                    <div className="mt-4 rounded-xl border border-border/60 bg-background/40 px-4 py-4">
                      <div className="flex items-start gap-3">
                        <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
                        <div>
                          <p className="text-sm font-medium uppercase tracking-[0.14em] text-primary">
                            After
                          </p>
                          <p className="mt-2 text-sm leading-7 text-foreground/90">
                            {item.solution}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
