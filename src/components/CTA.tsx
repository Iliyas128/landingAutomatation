import { memo } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "@/locales/LanguageContext";

const CTA = memo(() => {
  const { t } = useLanguage();
  
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold">
            <span className="text-foreground">{t.cta.titleMain}</span>
            <br />
            <span className="text-gradient-secondary glow-magenta">{t.cta.titleSub}</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t.cta.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-6 text-lg font-semibold animate-glow group"
              >
                {t.cta.contact}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-secondary text-secondary hover:bg-secondary/10 px-8 py-6 text-lg font-semibold"
            >
              {t.cta.portfolio}
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-secondary animate-pulse" />
    </section>
  );
});

CTA.displayName = "CTA";

export default CTA;
