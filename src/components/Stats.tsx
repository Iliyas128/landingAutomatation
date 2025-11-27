import { memo } from "react";
import { useLanguage } from "@/locales/LanguageContext";

const Stats = memo(() => {
  const { t } = useLanguage();
  
  const stats = [
    { value: "20+", label: t.stats.projects },
    { value: "98%", label: t.stats.satisfaction },
    { value: "24/7", label: t.stats.support },
    { value: "5+", label: t.stats.experts },
  ] as const;

  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="text-center group hover:scale-110 transition-transform duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-gradient-primary glow-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

Stats.displayName = "Stats";

export default Stats;
