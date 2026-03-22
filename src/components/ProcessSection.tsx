import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { engagementTracks, processSteps } from "@/data/process";

const ProcessSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -40, y: 18 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-[2rem] border border-border/60 bg-card/60 p-8 md:p-10"
          >
            <p className="font-mono text-sm text-primary">// delivery.process()</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Step-by-step DevOps consulting and support process.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              Our process is designed to move from architecture review into implementation quickly,
              without skipping the controls that keep delivery safe. Each step is tied to release
              stability, operational clarity, and a smoother handoff for your team.
            </p>

            <div className="mt-8 space-y-6">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="flex gap-4"
                >
                  <div className="font-mono text-sm text-primary">{item.step}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40, y: 18 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-[2rem] border border-primary/20 bg-primary/5 p-8 md:p-10"
          >
            <p className="font-mono text-sm text-primary">// engagement.options()</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Engagements matched to the actual platform problem.
            </h2>
            <div className="mt-8 space-y-4">
              {engagementTracks.map((track, index) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: index * 0.07 }}
                  className="rounded-2xl border border-primary/10 bg-background/20 p-5"
                >
                  <h3 className="text-lg font-semibold text-foreground">{track.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-foreground/80">{track.description}</p>
                </motion.div>
              ))}
            </div>

            <Link
              to="/how-we-work"
              className="mt-8 inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-secondary"
            >
              Open Full Process Page
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
