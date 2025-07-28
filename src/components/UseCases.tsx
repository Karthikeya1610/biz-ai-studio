import { ShoppingCart, Utensils, Building, HeartHandshake } from "lucide-react";

const UseCases = () => {
  const useCases = [
    {
      icon: <Utensils className="w-12 h-12" />,
      title: "Restaurant Bot",
      description: "Handle reservations, menu inquiries, and customer support automatically.",
      features: ["Table Reservations", "Menu Information", "Order Tracking", "Customer Reviews"],
      bgColor: "from-orange-500/20 to-red-500/20"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-commerce Support",
      description: "Provide product recommendations, order status, and customer service 24/7.",
      features: ["Product Search", "Order Status", "Returns & Refunds", "Size Guide"],
      bgColor: "from-blue-500/20 to-purple-500/20"
    },
    {
      icon: <Building className="w-12 h-12" />,
      title: "HR Assistant",
      description: "Streamline HR processes with automated responses and employee support.",
      features: ["Policy Questions", "Leave Requests", "Benefits Info", "Onboarding"],
      bgColor: "from-green-500/20 to-teal-500/20"
    },
    {
      icon: <HeartHandshake className="w-12 h-12" />,
      title: "Customer Service",
      description: "Enhance customer experience with intelligent, always-available support.",
      features: ["Live Chat", "FAQ Responses", "Ticket Creation", "Escalation"],
      bgColor: "from-pink-500/20 to-violet-500/20"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Real-World <span className="gradient-text">Use Cases</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how businesses across industries are leveraging AI agents to automate and enhance their operations
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="glass-card rounded-3xl p-8 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-primary to-accent p-4 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {useCase.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {useCase.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {useCase.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;