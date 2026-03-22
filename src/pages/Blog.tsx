import { motion } from "framer-motion";
import { BookOpen, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { blogTopics } from "@/data/blog";

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="DevOps Blog"
        description="Read DevOps blog topics covering remote hiring, startup DevOps practices, CI/CD for SaaS companies, and Kubernetes for production."
        path="/blog"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "DevOps Provider Blog",
          url: "https://devopsprovider.com/blog",
          description:
            "DevOps articles covering hiring, CI/CD, startup best practices, and production Kubernetes.",
        }}
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
              <BookOpen className="h-4 w-4 text-primary" />
              Blog
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight md:text-6xl">
              Practical writing for teams building modern DevOps capability.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
              This blog section covers the kind of topics buyers, founders, engineering managers,
              and platform teams actually look for when improving delivery systems.
            </p>
          </motion.div>
        </section>

        <section className="container px-6 pb-20">
          <div className="grid gap-6 md:grid-cols-2">
            {blogTopics.map((topic, index) => (
              <motion.article
                key={topic.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -28 : 28, y: 18 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[2rem] border border-border bg-card/60 p-8 backdrop-blur-sm gradient-border"
              >
                <p className="font-mono text-xs text-primary">// {topic.category}</p>
                <h2 className="mt-4 text-2xl font-semibold leading-8 text-foreground">
                  {topic.title}
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  {topic.description}
                </p>
                <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  Topic added to blog roadmap
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
