import { Bot, Database, Globe, Zap, Code, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Create AI Agent",
      description: "Design and customize your AI chatbot with advanced natural language processing capabilities.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Upload Business Data",
      description: "Train your AI with your specific business information, documents, and knowledge base.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Get API Endpoint",
      description: "Receive a unique API endpoint to integrate your AI agent anywhere you need it.",
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Deployment",
      description: "Deploy your AI agent in minutes, not days. No technical expertise required.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Easy Integration",
      description: "Simple API integration for websites, apps, and any digital platform.",
      color: "from-indigo-500 to-blue-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Multi-User Support",
      description: "Handle multiple conversations simultaneously with advanced user management.",
      color: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section id="features" className="py-20 px-4 relative">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful <span className="gradient-text">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to create, train, and deploy intelligent AI agents for your business
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;