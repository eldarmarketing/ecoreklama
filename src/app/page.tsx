import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import StencilReveal from "./components/StencilReveal";
import Benefits from "./components/Benefits";
import VideoSection from "./components/VideoSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import LeafParticles from "./components/LeafParticles";

export default function Home() {
  return (
    <>
      <LeafParticles />
      <Header />
      <main>
        <HeroSection />
        <HowItWorks />
        <StencilReveal />
        <Benefits />
        <VideoSection />
        <PricingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
