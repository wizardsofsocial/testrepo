import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 lg:pt-36 lg:pb-40">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[128px]" />
      </div>

      <div className="container relative mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="flex flex-col justify-center space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary w-fit">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              The #1 Billing Auditor for HighLevel Agencies
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Stop Leaking Profit on <span className="text-gradient">HighLevel Billing</span>
              </h1>
              <p className="max-w-[600px] text-lg md:text-xl text-muted-foreground leading-relaxed">
                Automatically analyze your SaaS margins, track SMS/Email rebilling, and uncover hidden costs in your HighLevel sub-accounts in minutes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 px-8 text-base shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                Start Free Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-base border-white/20 hover:bg-white/5 text-white">
                View Live Demo
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Setup in 2 minutes</span>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[600px] lg:max-w-none animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative rounded-2xl border border-white/10 bg-card/50 p-2 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-50 rounded-2xl" />
              <img
                src="/assets/34b88df0-baa3-487c-b820-57fe55b427cd.png"
                alt="HL Auditor Dashboard"
                className="rounded-xl border border-white/5 w-full object-cover shadow-inner relative z-10"
                style={{ maskImage: "linear-gradient(to bottom, black 80%, transparent 100%)" }}
              />
              
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 z-20 glass-card rounded-xl p-4 flex items-center gap-4 animate-pulse-slow">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                  <svg xmlns="http://www.svg.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Recovered Profit</p>
                  <p className="text-2xl font-bold text-white">+$1,240<span className="text-sm text-muted-foreground">/mo</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};