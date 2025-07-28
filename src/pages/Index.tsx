import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <Features />
        <UseCases />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
