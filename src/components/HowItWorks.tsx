import { ArrowRight, CheckCircle2 } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      title: "Connect Your Agency",
      description: "Securely link your HighLevel API key. We never store client data, only billing metrics.",
    },
    {
      step: "02",
      title: "Run the Audit",
      description: "Our engine analyzes your sub-accounts, rebilling setups, and SaaS subscriptions in seconds.",
    },
    {
      step: "03",
      title: "Optimize & Profit",
      description: "Review your detailed profit report and take action on dormant accounts and pricing leaks.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get clarity on your HighLevel billing in three simple steps.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          
          {steps.map((step, index) => (
            <div key={index} className="relative flex flex-col items-center text-center">
              <div className="h-24 w-24 rounded-full bg-card border-4 border-background flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(59,130,246,0.15)]">
                <span className="text-2xl font-bold text-gradient">{step.step}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};