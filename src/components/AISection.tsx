import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { aiUseCases } from "@/data/aiDevops";

const AISection = () => {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial opacity-40" />

      <div className="container relative z-10 px-6">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="font-mono text-sm text-primary">// ai_for_devops()</p>
            <h2 className="mt-4 text-3xl font-bold md:text-5xl">
              AI for DevOps work that improves operations, not just demos.
            </h2>
            <p className="mt-6 text-base leading-8 text-muted-foreground">
              We help teams apply AI where it actually improves delivery and platform work:
              incident response, runbook access, operational search, workflow automation, and
              smarter release decisions with guardrails.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/ai-devops"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 border-glow-green"
              >
                Explore AI for DevOps
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-4 font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-secondary"
              >
                Talk About Your Use Case
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2">
            {aiUseCases.slice(0, 4).map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-card/55 p-6 backdrop-blur-sm gradient-border"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
