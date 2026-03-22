import Navbar from "@/components/Navbar";
import Seo from "@/components/Seo";
import HeroSection from "@/components/HeroSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ServicesSection from "@/components/ServicesSection";
import AISection from "@/components/AISection";
import ProcessSection from "@/components/ProcessSection";
import TechStackSection from "@/components/TechStackSection";
import FAQPreviewSection from "@/components/FAQPreviewSection";
import TrustSection from "@/components/TrustSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Seo
        title="DevOps Consulting for Software Companies"
        description="We help software companies improve DevOps, Kubernetes, and hybrid infrastructure so releases move faster, operations stay stable, and teams scale with confidence."
        path="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "DevOps Provider",
          url: "https://devopsprovider.com/",
          description:
            "DevOps, Kubernetes, hybrid cloud, and AI-for-DevOps consulting for engineering teams.",
          email: "info@devopsprovider.com",
          telephone: "+91 7307741919",
          areaServed: "Worldwide",
        }}
      />
      <Navbar />
      <HeroSection />
      <ProblemSolutionSection />
      <ServicesSection />
      <AISection />
      <ProcessSection />
      <TechStackSection />
      <FAQPreviewSection />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
