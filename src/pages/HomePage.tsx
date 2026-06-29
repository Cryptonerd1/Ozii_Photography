
import { HeroSection } from "../components/HeroSection";
import { FeatureGrid } from "../components/FeatureGrid";
import { CTASection } from "../components/CTASection";
import { SocialProof } from "../components/SocialProof";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export function HomePage() {
  return (
    <main className="min-h-screen bg-neutral-950">
      <HeroSection />
      <FeatureGrid />
      <SocialProof />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
}
  