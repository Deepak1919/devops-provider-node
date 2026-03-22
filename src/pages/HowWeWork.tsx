import { motion } from "framer-motion";
import { ArrowRight, Workflow } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { engagementTracks, processSteps } from "@/data/process";

const HowWeWork = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="How We Work"
        description="See how DevOps Provider approaches architecture review, implementation sprints, platform modernization, and operational handover."
        path="/how-we-work"
      />
      <Navbar />

      <main className="pt-24">
        <section className="container px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-4xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm text-muted-foreground">
              <Workflow className="h-4 w-4 text-primary" />
              How We Work
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              Clear process from review to implementation.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              The engagement model is simple: understand the highest-risk bottlenecks, implement the
              right platform changes, and leave behind an operating model your team can keep running.
            </p>
          </motion.div>
        </section>

        <section className="container px-6 pb-10">
          <div className="grid gap-6 lg:grid-cols-2">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm"
              >
                <p className="font-mono text-sm text-primary">{item.step}</p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 md:p-10"
          >
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Engagement Types
            </p>
            <div className="mt-6 grid gap-5 lg:grid-cols-3">
              {engagementTracks.map((track) => (
                <div key={track.title} className="rounded-2xl border border-primary/10 bg-background/20 p-5">
                  <h3 className="text-xl font-semibold text-foreground">{track.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-foreground/80">{track.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="container px-6 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-border/60 bg-card/60 p-8 text-center md:p-10"
          >
            <h2 className="text-3xl font-semibold tracking-tight text-foreground">
              If the current platform is slowing delivery, start with an architecture review.
            </h2>
            <a
              href="/contact"
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 border-glow-green"
            >
              Book the First Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HowWeWork;
