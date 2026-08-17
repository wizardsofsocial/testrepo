import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 backdrop-blur-3xl" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="glass-card rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-primary/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-64 h-64 bg-indigo-500/30 rounded-full blur-[100px]" />
          
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 relative z-10">
            Ready to plug the leaks in your agency?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto relative z-10">
            Join 500+ HighLevel agencies who are already recovering thousands of dollars in lost profit every month.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-14 px-8 text-lg shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Start Your Free Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6 relative z-10">
            14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
};