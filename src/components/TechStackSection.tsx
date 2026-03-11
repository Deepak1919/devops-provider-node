import { motion } from "framer-motion";

const techStack = [
  "Kubernetes", "Helm", "ArgoCD", "Gitlab CI", "Ansible",
  "Terraform", "Proxmox", "Docker", "Prometheus",
  "Grafana", "Istio", "Cilium", "Vault",
];

const TechStackSection = () => {
  return (
    <section className="py-24 border-y border-border relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-mono text-sm text-primary mb-3">// tech_stack.map()</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Battle-Tested <span className="text-primary text-glow-green">Stack</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-5 py-2.5 rounded-xl border border-border bg-card/60 backdrop-blur-sm font-mono text-sm text-secondary-foreground hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Case Study highlight */}
        <motion.div
          id="case-studies"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 max-w-3xl mx-auto"
        >
          <div className="p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm relative overflow-hidden gradient-border">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[60px]" />
            <p className="font-mono text-xs text-primary mb-4">// case_study[0]</p>
            <blockquote className="text-xl md:text-2xl font-semibold mb-4 leading-relaxed">
              "Cut deployment time from{" "}
              <span className="text-muted-foreground line-through">4 hours</span>{" "}
              to{" "}
              <span className="text-primary text-glow-green">8 minutes</span>"
            </blockquote>
            <p className="text-muted-foreground text-sm">
              — SaaS Company, 50+ microservices, 200 deployments/week
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
