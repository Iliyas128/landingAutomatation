import { lazy, Suspense } from "react";

// Lazy load components for better performance
const Hero = lazy(() => import("@/components/Hero"));
const Services = lazy(() => import("@/components/Services"));
const Features = lazy(() => import("@/components/Features"));
const Stats = lazy(() => import("@/components/Stats"));
const CTA = lazy(() => import("@/components/CTA"));
const RealServices = lazy(() => import("@/components/RealServices"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="min-h-screen" />}>
        <Hero />
        <Services />
        <Features />
        <RealServices />
        <Stats />
        <CTA />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
