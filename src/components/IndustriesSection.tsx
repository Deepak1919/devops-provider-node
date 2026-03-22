import { motion } from "framer-motion";

const industries = [
  {
    name: "SaaS and product teams",
    description:
      "Teams that need faster release cycles, better uptime, and safer CI/CD as their application and customer base grow.",
  },
  {
    name: "Startups",
    description:
      "Founders and lean engineering teams that need senior DevOps support without building a full platform team too early.",
  },
  {
    name: "Ecommerce",
    description:
      "Businesses that depend on seasonal traffic, payment reliability, inventory integrations, and predictable uptime during campaigns.",
  },
  {
    name: "Fintech and regulated platforms",
    description:
      "Teams that need stronger controls, audit-friendly delivery workflows, observability, and disciplined change management.",
  },
  {
    name: "Healthcare and data-sensitive systems",
    description:
      "Organizations that need controlled infrastructure, secure access, backup planning, and dependable operations across environments.",
  },
  {
    name: "Internal IT and enterprise platform teams",
    description:
      "Businesses modernizing legacy infrastructure, private cloud, on-prem workloads, and shared platform services for multiple teams.",
  },
];

const IndustriesSection = () => {
  return (
    <section className="relative py-24 border-y border-border">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="font-mono text-sm text-primary">// industries.supported()</p>
          <h2 className="mt-4 text-3xl font-bold md:text-4xl">
            Industries and teams we support with DevOps services.
          </h2>
          <p className="mt-5 text-sm leading-8 text-muted-foreground">
            We are not limited to one type of client. Our DevOps consulting and DevOps support work
            is shaped around delivery risk, infrastructure complexity, uptime requirements, and team
            maturity, whether the environment is on-prem, cloud, or hybrid.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24, y: 16 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-2xl border border-border bg-card/55 p-6 backdrop-blur-sm gradient-border"
            >
              <p className="font-mono text-xs text-primary">// industry</p>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{industry.name}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
