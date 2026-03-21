import { motion } from "framer-motion";
import { ArrowRight, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { aiDeliverables, aiPrinciples, aiUseCases } from "@/data/aiDevops";

const AIDevOps = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-radial" />

          <div className="container relative z-10 px-6 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
                <Cpu className="h-4 w-4 text-primary" />
                AI for DevOps
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
                Practical AI for delivery and operations teams.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                We help teams apply AI where it reduces operational drag and improves decision-making
                across incidents, delivery workflows, platform visibility, and runbook access without
                compromising production safety.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container px-6 py-10 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aiUseCases.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm gradient-border"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container px-6 py-10 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-border/60 bg-card/60 p-8 md:p-10"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Guardrails First
              </p>
              <div className="mt-6 space-y-4">
                {aiPrinciples.map((item) => (
                  <div key={item} className="rounded-2xl border border-border/60 bg-background/30 p-4">
                    <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 md:p-10"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                What We Can Deliver
              </p>
              <div className="mt-6 space-y-4">
                {aiDeliverables.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-7 text-foreground/85">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 text-center md:p-10"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Next Step
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
              Start with one AI use case tied to an operational bottleneck.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-foreground/80">
              Good AI work in DevOps starts with a real operational problem, measurable outcome,
              and clear governance over where automation stops.
            </p>
            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 border-glow-green"
            >
              Discuss an AI-DevOps Use Case
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AIDevOps;
