import Navbar from "@/components/Navbar";
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
