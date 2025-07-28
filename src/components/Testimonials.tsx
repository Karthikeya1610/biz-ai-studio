import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "Business AI transformed our customer service. We went from 4-hour response times to instant, intelligent responses. Our customer satisfaction increased by 40%!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Marcus Chen",
      role: "Restaurant Owner",
      content: "The restaurant bot handles all our reservations and customer inquiries perfectly. It's like having a 24/7 staff member who never gets tired or makes mistakes.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "E-commerce Manager",
      content: "Implementation was incredibly easy. In just 2 hours, we had a fully functional AI agent helping customers with product questions and order tracking.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "David Kim",
      role: "HR Director",
      content: "Our HR bot handles 80% of employee questions automatically. It's freed up our team to focus on strategic initiatives while employees get instant answers.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What Our <span className="gradient-text">Customers Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of businesses that have revolutionized their customer experience with AI
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-foreground mb-6 text-lg leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">10K+</div>
            <div className="text-muted-foreground">Active Agents</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">50M+</div>
            <div className="text-muted-foreground">Conversations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;