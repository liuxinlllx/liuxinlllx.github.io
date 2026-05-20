import { HeroSection } from "@/components/home/HeroSection";
import { AboutSection } from "@/components/home/AboutSection";
import { EducationSection } from "@/components/home/EducationSection";
import { WorkSection } from "@/components/home/WorkSection";
import { ResearchSection } from "@/components/home/ResearchSection";
import { MediaSection } from "@/components/home/MediaSection";
import { ContactSection } from "@/components/home/ContactSection";
import { BlogPreview } from "@/components/home/BlogPreview";
import { PodcastPreview } from "@/components/home/PodcastPreview";
import { WaveDivider } from "@/components/shared/WaveDivider";

export default function Home() {
  const blogLabel = "最新博客";
  const podcastLabel = "最新播客";
  const viewAllLabel = "查看全部 →";

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
        <BlogPreview blogLabel={blogLabel} viewAllLabel={viewAllLabel} />
        <WaveDivider />
        <PodcastPreview podcastLabel={podcastLabel} viewAllLabel={viewAllLabel} />
        <ContactSection />
      </div>
    </>
  );
}
