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
    <section className="py-24 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">// pain_points.resolve()</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Sound <span className="text-primary text-glow-green">familiar</span>?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((item, i) => (
            <motion.div
              key={item.pain}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group p-6 rounded-xl border border-border bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 gradient-border"
            >
              <div className="flex items-start gap-4">
                <div className={`p-2.5 rounded-xl ${bgColorMap[item.color]} ${colorMap[item.color]}`}>
                  <item.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <p className="text-muted-foreground line-through decoration-muted-foreground/40 mb-2 text-sm">
                    "{item.pain}"
                  </p>
                  <div className="flex items-center gap-2 text-foreground">
                    <ArrowRight className="w-3 h-3 text-primary flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <p className="font-medium text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
