import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-2xl p-4 mx-auto mb-8 float-animation">
            <Sparkles className="w-full h-full text-white" />
          </div>

          {/* Content */}
          <div className="space-y-6 mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Ready to Transform Your{" "}
              <span className="gradient-text">Business</span>?
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Join thousands of businesses already using AI to provide exceptional customer experiences. 
              Start your free trial today - no credit card required.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg" 
              className="glow-button text-lg px-8 py-6 font-semibold group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 border-primary/30 hover:border-primary"
            >
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Free 14-day trial
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              No setup fees
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;