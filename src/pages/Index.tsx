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
        title="DevOps Service Provider | DevOps Consulting Services | Kubernetes Consulting"
        description="DevOps service provider offering DevOps consulting services, Kubernetes consulting, CI/CD automation services, and ongoing support for teams and businesses worldwide."
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
