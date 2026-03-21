import { motion } from "framer-motion";
import { ArrowRight, BarChart3 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { caseStudies } from "@/data/caseStudies";

const CaseStudies = () => {
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
                <BarChart3 className="h-4 w-4 text-primary" />
                Case Studies
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
                Proof from delivery systems that were actually fixed.
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                These examples show the kind of work we are brought in to do:
                release safety, platform reliability, observability, and cost control with measurable outcomes.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="container px-6 py-10 md:py-16">
          <div className="grid gap-8">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.slug}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[2rem] border border-border/70 bg-card/60 p-8 backdrop-blur-sm md:p-10"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
                  <div>
                    <p className="font-mono text-xs text-primary">// {study.client}</p>
                    <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                      {study.headline}
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground">
                      {study.summary}
                    </p>

                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                      <div className="rounded-2xl border border-border/60 bg-background/40 p-5">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                          Challenge
                        </p>
                        <p className="mt-3 text-sm leading-7 text-foreground/85">{study.challenge}</p>
                      </div>
                      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                        <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                          Solution
                        </p>
                        <p className="mt-3 text-sm leading-7 text-foreground/85">{study.solution}</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-3xl border border-border/60 bg-background/35 p-6">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                      Outcome Snapshot
                    </p>
                    <div className="mt-6 grid gap-4">
                      {study.metrics.map((metric) => (
                        <div
                          key={metric.label}
                          className="rounded-2xl border border-border/60 bg-card/60 p-4"
                        >
                          <p className="font-mono text-xl font-bold text-primary text-glow-green">
                            {metric.value}
                          </p>
                          <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
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
                  </div>
                </div>
              </motion.article>
            ))}
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
              If your team has similar delivery friction, start with an architecture review.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-foreground/80">
              We will identify the highest-risk issues first and outline what needs to change in the platform, the pipeline, and the operating model.
            </p>
            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 border-glow-green"
            >
              Book Free Architecture Review
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudies;
