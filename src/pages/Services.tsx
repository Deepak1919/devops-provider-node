import { motion } from "framer-motion";
import { ArrowRight, Check, Layers3, Sparkles } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  serviceCapabilities,
  servicePackages,
  serviceWorkflow,
} from "@/data/services";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-20" />
          <div className="absolute inset-0 bg-gradient-radial" />
          <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

          <div className="container relative z-10 px-6 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm text-muted-foreground backdrop-blur-sm">
                <Layers3 className="h-4 w-4 text-primary" />
                DevOps Services
              </div>

              <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
                Delivery systems built for{" "}
                <span className="text-primary text-glow-green">speed, safety, and scale</span>
              </h1>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
                We help engineering teams reduce release risk, stabilize Kubernetes operations,
                and improve both on-prem and cloud infrastructure with support from a team carrying
                10+ years of delivery experience.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="/#contact"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 border-glow-green"
                >
                  Book Free Architecture Review
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/#case-studies"
                  className="rounded-xl border border-border px-8 py-4 font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-secondary"
                >
                  See Case Studies
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="container px-6 py-12 md:py-16">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className={`relative flex h-full flex-col rounded-2xl p-6 ${
                  pkg.popular
                    ? "border border-primary/50 bg-card/80 backdrop-blur-sm border-glow-green"
                    : "border border-border bg-card/60 backdrop-blur-sm gradient-border"
                }`}
              >
                {pkg.popular ? (
                  <div className="absolute -top-3 left-6 inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                    <Sparkles className="h-3 w-3" />
                    MOST REQUESTED
                  </div>
                ) : null}

                <div className="mb-4">
                  <h2 className="text-xl font-semibold text-foreground">{pkg.name}</h2>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">{pkg.timeline}</p>
                </div>

                <div className="mb-4 text-3xl font-bold font-mono text-primary text-glow-green">
                  {pkg.price}
                </div>

                <p className="mb-6 text-sm leading-7 text-muted-foreground">{pkg.deliverable}</p>

                <ul className="flex-1 space-y-3">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-secondary-foreground">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className={`mt-6 rounded-xl py-3 text-center text-sm font-medium transition-all duration-300 ${
                    pkg.popular
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border text-foreground hover:border-primary/30 hover:bg-secondary"
                  }`}
                >
                  Get Started
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container px-6 py-10 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-border/60 bg-card/60 p-8 md:p-10"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                What We Work On
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                Practical platform work with clear operational outcomes.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
                We work across colocated and on-prem environments, private infrastructure, and public
                cloud platforms. The focus is the same in each case: resilient systems, safer releases,
                and cleaner operations.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {serviceCapabilities.map((capability) => (
                  <div
                    key={capability}
                    className="rounded-2xl border border-border/60 bg-background/40 p-4 text-sm leading-7 text-muted-foreground"
                  >
                    <span className="text-primary">#</span> {capability}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.08 }}
              className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                How We Deliver
              </p>
              <div className="mt-6 space-y-6">
                {serviceWorkflow.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="font-mono text-sm text-primary">{item.step}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-foreground/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
