import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const packages = [
  {
    name: "Kubernetes Audit",
    timeline: "5 days",
    deliverable: "Security & cost review + roadmap",
    price: "$3-5K",
    features: ["Cluster security scan", "Cost optimization report", "Architecture roadmap", "Executive summary"],
    popular: false,
  },
  {
    name: "CI/CD Accelerator",
    timeline: "2 weeks",
    deliverable: "Production-ready pipeline",
    price: "$8-12K",
    features: ["GitOps pipeline setup", "Automated testing", "Rollback strategies", "Team training session"],
    popular: true,
  },
  {
    name: "Platform Build",
    timeline: "4-6 weeks",
    deliverable: "Complete K8s platform + training",
    price: "$20-35K",
    features: ["Full K8s platform", "Monitoring & alerting", "Runbooks & docs", "2 weeks of support"],
    popular: false,
  },
  {
    name: "Fractional DevOps",
    timeline: "Monthly",
    deliverable: "Ongoing SRE support",
    price: "$5-8K/mo",
    features: ["Dedicated SRE hours", "Incident response", "Continuous optimization", "Quarterly reviews"],
    popular: false,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial opacity-50" />
      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-mono text-sm text-primary mb-3">// services.list()</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Productized <span className="text-primary text-glow-green">Packages</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Clear scope. Fixed timelines. No surprises.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {packages.map((pkg, i) => (
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
