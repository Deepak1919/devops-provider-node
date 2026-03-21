import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { caseStudies } from "@/data/caseStudies";

const techStack = [
  "Kubernetes", "Helm", "ArgoCD", "Gitlab CI", "Ansible",
  "Terraform", "Proxmox", "Docker", "Prometheus",
  "Grafana", "Istio", "Cilium", "Vault",
];

const TechStackSection = () => {
  return (
    <section id="case-studies" className="py-24 border-y border-border relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/3 rounded-full blur-[150px]" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center mb-12"
        >
          <p className="font-mono text-sm text-primary mb-3">// proof.of.work()</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tooling is only useful when it produces <span className="text-primary text-glow-green">measurable change</span>
          </h2>
          <p className="text-muted-foreground">
            The stack matters, but the outcome matters more. These are the systems we work in and the kinds of results we are hired to deliver.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
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

        <div className="mt-20 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm gradient-border"
            >
              <p className="font-mono text-xs text-primary">// {study.client}</p>
              <h3 className="mt-4 text-xl font-semibold leading-8 text-foreground">
                {study.headline}
              </h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{study.summary}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {study.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-border/60 bg-background/40 p-3">
                    <p className="font-mono text-xs text-primary">{metric.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {study.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border/60 px-3 py-1 text-xs text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/case-studies"
            className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-secondary"
          >
            Open Full Case Studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;
