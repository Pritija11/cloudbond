import Hero from "@/components/home/Hero";
import ProblemSection from "@/components/home/ProblemSection";
import PlatformSection from "@/components/home/PlatformSection";
import ProcessSection from "@/components/home/ProcessSection";
import AboutSection from "@/components/home/AboutSection";
import ResourcesSection from "@/components/home/ResourcesSection";
import ContactCTA from "@/components/home/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <PlatformSection />
      <ProcessSection />
      <AboutSection />
      <ResourcesSection />
      <ContactCTA />
    </main>
  );
}
