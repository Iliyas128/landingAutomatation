import { memo } from "react";
import { CheckCircle2 } from "lucide-react";
import automationNetwork from "@/assets/automation-network.jpg";
import { useLanguage } from "@/locales/LanguageContext";

const Features = memo(() => {
  const { t } = useLanguage();
  
  const features = [
    t.features.item1,
    t.features.item2,
    t.features.item3,
    t.features.item4,
    t.features.item5,
    t.features.item6,
  ] as const;

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="text-foreground">{t.features.titleMain}</span>
              <br />
              <span className="text-gradient-primary glow-cyan">{t.features.titleSub}</span>
            </h2>
            
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.features.description}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div 
                  key={feature} 
                  className="flex items-center gap-3 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img 
              src={automationNetwork} 
              alt="Automation network visualization" 
              className="relative rounded-lg shadow-2xl border-2 border-primary/30 animate-float"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

Features.displayName = "Features";

export default Features;
