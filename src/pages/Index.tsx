import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import WhySolidPerfumeSection from "@/components/WhySolidPerfumeSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import WhyChooseTeAmoSection from "@/components/WhyChooseTeAmoSection";
import FaqSection from "@/components/FaqSection";
import StorySection from "@/components/StorySection";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.slice(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <WhySolidPerfumeSection />
        <HowItWorksSection />
        <WhyChooseTeAmoSection />
        <FaqSection />
        <StorySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
