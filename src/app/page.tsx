import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { EducationSection } from "@/components/home/EducationSection";
import { WorkSection } from "@/components/home/WorkSection";
import { ResearchSection } from "@/components/home/ResearchSection";
import { MediaSection } from "@/components/home/MediaSection";
import { ContactSection } from "@/components/home/ContactSection";
import { WaveDivider } from "@/components/shared/WaveDivider";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WaveDivider />
      <div style={{ maxWidth: "var(--max-w)", margin: "0 auto", padding: "48px 24px 80px" }}>
        <AboutSection />
        <EducationSection />
        <WaveDivider />
        <WorkSection />
        <WaveDivider />
        <ResearchSection />
        <WaveDivider />
        <MediaSection />
        <WaveDivider />
        <ContactSection />
      </div>
    </>
  );
}
