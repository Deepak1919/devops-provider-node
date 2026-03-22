import { motion } from "framer-motion";
import { ArrowRight, Headphones, SearchCheck, Wrench } from "lucide-react";

const serviceModes = [
  {
    icon: Wrench,
    title: "DevOps services",
    description:
      "Hands-on delivery work across CI/CD pipelines, Kubernetes platforms, observability, infrastructure automation, cloud operations, and hybrid infrastructure modernization.",
  },
  {
    icon: SearchCheck,
    title: "DevOps consulting",
    description:
      "Architecture review, delivery risk analysis, migration planning, operating-model guidance, and a practical roadmap tied to the next business outcome you need.",
  },
  {
    icon: Headphones,
    title: "DevOps support",
    description:
      "Ongoing platform support, incident review, release engineering help, performance tuning, and senior DevOps continuity when your internal team needs backup.",
  },
];

const outcomes = [
  "Safer deployments with rollback and release checks",
  "Better visibility through dashboards, alerts, and runbooks",
  "Cleaner handoff from implementation into ongoing operations",
  "Lower delivery risk for on-prem, cloud, and hybrid systems",
];

const DevOpsOverviewSection = () => {
  return (
    <section className="relative py-24">
      <div className="container px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -40, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-border/60 bg-card/60 p-8 md:p-10"
          >
            <p className="font-mono text-sm text-primary">// devops.explained()</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              What DevOps means for teams that need dependable delivery.
            </h2>
            <p className="mt-6 text-sm leading-8 text-muted-foreground">
              DevOps is the discipline of improving how software and infrastructure move from idea to
              production. In practice, that means release automation, infrastructure as code,
              observability, platform standards, incident readiness, and clear ownership across the
              delivery lifecycle. Good DevOps work is not about adding more tools. It is about
              reducing deployment risk, improving operational clarity, and giving teams a repeatable
              way to ship safely.
            </p>
            <p className="mt-4 text-sm leading-8 text-muted-foreground">
              Our work usually starts where reliability and delivery are already under pressure:
              unstable releases, hard-to-manage Kubernetes clusters, weak monitoring, fragile CI/CD,
              or an operations team carrying too much manual work. That is where DevOps services,
              DevOps consulting, and DevOps support create measurable value for both engineering and
              business teams.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 md:p-10"
          >
            <p className="font-mono text-sm text-primary">// outcomes.map()</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              What strong DevOps support changes.
            </h2>
            <div className="mt-8 space-y-4">
              {outcomes.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 18 : -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.08 }}
                  className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-background/20 px-4 py-4"
                >
                  <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  <p className="text-sm leading-7 text-foreground/85">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {serviceModes.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-2xl border border-border bg-card/55 p-6 backdrop-blur-sm gradient-border"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevOpsOverviewSection;
