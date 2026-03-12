import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Rocket, ShieldCheck, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const principles = [
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    description:
      "We build deployment systems that reduce risk, improve rollback confidence, and keep services stable under load.",
  },
  {
    icon: Rocket,
    title: "Fast execution",
    description:
      "Our work focuses on removing bottlenecks across infrastructure, release engineering, and platform workflows.",
  },
  {
    icon: Users,
    title: "Team enablement",
    description:
      "We leave teams with documented systems, repeatable processes, and tooling they can operate without external dependency.",
  },
];

const milestones = [
  "Cloud-native architecture design for product teams scaling from early growth to enterprise workloads.",
  "CI/CD modernization focused on safer releases, shorter feedback loops, and lower operational drag.",
  "Security and observability foundations that help engineering teams ship faster with fewer production surprises.",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24">
        <section className="container px-6 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-muted/40 px-4 py-2 text-sm text-muted-foreground">
              <Briefcase className="h-4 w-4 text-primary" />
              About DevOps Provider
            </div>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl">
              We help engineering teams build infrastructure that scales without slowing delivery.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              DevOps Provider works with product and platform teams that need cleaner release pipelines,
              stronger Kubernetes operations, and infrastructure decisions that hold up as the business grows.
            </p>
          </motion.div>
        </section>

        <section className="container px-6 pb-10">
          <div className="grid gap-6 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-border/60 bg-card/70 p-6 shadow-sm backdrop-blur"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="container px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="rounded-3xl border border-border/60 bg-card/60 p-8 md:p-10"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Who We Are
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground">
                Practical DevOps leadership, not generic process advice.
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                Our approach is direct: understand the current bottleneck, fix the systems creating risk,
                and leave behind an operating model the internal team can sustain. That includes infrastructure,
                release automation, observability, cost-awareness, and the standards needed to keep delivery predictable.
              </p>
              <p className="mt-5 text-base leading-8 text-muted-foreground">
                We work best with teams that want execution quality, not presentation decks. The goal is measurable
                improvement in deployment confidence, platform reliability, and engineering throughput.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              className="rounded-3xl border border-primary/20 bg-primary/5 p-8 md:p-10"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                What We Deliver
              </p>
              <div className="mt-6 space-y-5">
                {milestones.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="text-sm leading-7 text-foreground/85">{item}</p>
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

export default About;
