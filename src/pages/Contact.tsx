import { motion } from "framer-motion";
import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const contactCards = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: "Fastest path for a first conversation.",
    action: "https://wa.me/917307741919",
    label: "Start WhatsApp Chat",
  },
  {
    icon: Mail,
    title: "Email",
    detail: "Best for architecture notes, scope, or environment context.",
    action: "mailto:info@devopsprovider.com",
    label: "Email the Team",
  },
  {
    icon: PhoneCall,
    title: "Call",
    detail: "Useful when the issue is urgent or operationally sensitive.",
    action: "tel:+917307741919",
    label: "Call Now",
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="Contact DevOps Provider"
        description="Contact DevOps Provider to discuss DevOps consulting, Kubernetes, hybrid cloud, AI-ops use cases, platform modernization, and incident-response improvements."
        path="/contact"
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
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">
              Start with the platform issue that matters most right now.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              If delivery risk, infrastructure complexity, migration planning, or AI-ops use cases
              are slowing the team down, send the current bottleneck and we will help define the next step.
            </p>
          </motion.div>
        </section>

        <section className="container px-6 pb-10">
          <div className="grid gap-6 md:grid-cols-3">
            {contactCards.map(({ icon: Icon, title, detail, action, label }, index) => (
              <motion.a
                key={title}
                href={action}
                target={action.startsWith("https://") ? "_blank" : undefined}
                rel={action.startsWith("https://") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-foreground">{title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{detail}</p>
                <p className="mt-6 text-sm font-medium text-primary">{label}</p>
              </motion.a>
            ))}
          </div>
        </section>

        <section className="container px-6 py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-border/60 bg-card/60 p-8 md:p-10"
            >
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
                Useful First Message
              </p>
              <div className="mt-6 space-y-4 text-sm leading-7 text-muted-foreground">
                <p>Tell us what environment you run today: on-prem, private cloud, public cloud, or hybrid.</p>
                <p>Describe the main issue: releases, Kubernetes, observability, migration, cost, or AI workflow.</p>
                <p>Share the outcome you want in the next 30 to 90 days.</p>
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
                Typical Topics
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "Kubernetes reliability and platform hardening",
                  "CI/CD modernization and safer releases",
                  "On-prem to cloud or hybrid migration planning",
                  "Observability and incident response improvements",
                  "AI use cases for operations and delivery workflows",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-primary/10 bg-background/20 p-4">
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

export default Contact;
