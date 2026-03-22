import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

const FAQPreviewSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container px-6">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="font-mono text-sm text-primary">// faq.list()</p>
            <h2 className="mt-4 text-3xl font-bold md:text-4xl">
              Questions buyers usually ask before starting.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Clear answers reduce friction and make it easier to decide whether the fit is right.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 34, y: 18 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.52, delay: 0.08 }}
            className="mt-10 rounded-[2rem] border border-border bg-card/60 p-6 md:p-8"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqItems.slice(0, 4).map((item) => (
                <AccordionItem key={item.question} value={item.question} className="border-border/70">
                  <AccordionTrigger className="text-left text-base text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <div className="mt-6 text-center">
              <Link
                to="/faq"
                className="inline-flex items-center justify-center rounded-xl border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-secondary"
              >
                Read Full FAQ
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQPreviewSection;
