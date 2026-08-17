import { Activity, DollarSign, Search, ShieldCheck, Smartphone, Users } from "lucide-react";

export const Features = () => {
  const features = [
    {
      title: "Rebilling Margin Analysis",
      description: "Instantly see if you're actually making money on Twilio/Mailgun rebilling or if carrier fees are eating your profits.",
      icon: DollarSign,
    },
    {
      title: "Dormant Account Detection",
      description: "Identify sub-accounts that haven't logged in for 30+ days so you can pause their SaaS subscription and save money.",
      icon: Activity,
    },
    {
      title: "SaaS Subscription Tracker",
      description: "Get a unified view of all active SaaS subscriptions across your agency and compare them against your Stripe revenue.",
      icon: Users,
    },
    {
      title: "Hidden Cost Finder",
      description: "Uncover premium triggers, workflow AI costs, and Content AI usage that might be billed to you instead of the client.",
      icon: Search,
    },
    {
      title: "Telecom Usage Breakdown",
      description: "Detailed analytics on SMS segments, MMS, and international calling costs that often slip past standard reporting.",
      icon: Smartphone,
    },
    {
      title: "Automated Profit Reports",
      description: "Receive weekly PDF reports showing your true HighLevel ROI, cost of goods sold, and net profit margins.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="features" className="py-24 bg-card/30 border-y border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Everything you need to <span className="text-primary">maximize profit</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Stop guessing your margins. HL Auditor gives you x-ray vision into your agency's true operating costs and revenue.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:bg-white/[0.03] hover:-translate-y-1 group"
              >
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};