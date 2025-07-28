import { Button } from "@/components/ui/button";
import heroImage from "@/assets/ai-agent-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Content */}
        <div className="text-center lg:text-left space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Create Your Own{" "}
              <span className="gradient-text">AI Business Agent</span>{" "}
              in Minutes
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              No code. Just Plug and Play. Train your AI with your business data and deploy instantly.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button 
              size="lg" 
              className="glow-button text-lg px-8 py-6 font-semibold"
            >
              Create Agent Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/30 hover:border-primary"
            >
              Get Demo
            </Button>
          </div>
          
          <div className="flex items-center justify-center lg:justify-start gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              No Credit Card Required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              Deploy in 5 Minutes
            </div>
          </div>
        </div>
        
        {/* Hero Image */}
        <div className="relative">
          <div className="glass-card rounded-3xl p-8 float-animation">
            <img 
              src={heroImage} 
              alt="AI Business Agent" 
              className="w-full h-auto rounded-2xl"
            />
          </div>
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full blur-xl"></div>
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/30 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;