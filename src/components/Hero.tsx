import { memo, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/locales/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

const Hero = memo(() => {
  const [splineLoaded, setSplineLoaded] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    // Dynamically load Spline viewer script
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.90/build/spline-viewer.js";
    script.onload = () => setSplineLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src*="spline-viewer"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20" />
      </div>
      
      {/* Cyber Grid */}
      <div className="absolute inset-0 opacity-30 z-0" style={{
        backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Spline 3D Robot - Interactive */}
      {splineLoaded && (
        <div className="absolute inset-0 z-10 opacity-70" style={{ pointerEvents: 'auto' }}>
          <spline-viewer url="https://prod.spline.design/ccXs4ii-yy9xH1Jn/scene.splinecode"></spline-viewer>
          
          {/* Language Switcher Overlay to hide Spline logo */}
          <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 z-50">
            <LanguageSwitcher />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6 z-20 text-center relative pointer-events-none">
        <div className="max-w-5xl mx-auto space-y-6 sm:space-y-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight px-2">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              {t.hero.titleMain}
            </span>
            <br />
            <span className="text-white">{t.hero.titleSub}</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto font-light px-2">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 sm:pt-6 md:pt-8 pointer-events-auto px-2">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600"
            >
              {t.hero.cta}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
            >
              {t.hero.learnMore}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse" />
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;