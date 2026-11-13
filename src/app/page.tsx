import { Hero } from "@/components/sections/hero";
import { EngineeringSignal } from "@/components/sections/engineering-signal";
import { SelectedWork } from "@/components/sections/projects";
import { ExperienceTimeline } from "@/components/sections/experience";
import { TechnologyWall } from "@/components/sections/technology-wall";
import { TechnologyUniverse } from "@/components/sections/skills";
import { ArchitectureLab } from "@/components/sections/architecture-lab";
import { AILab } from "@/components/sections/ai-lab";
import { Philosophy } from "@/components/sections/philosophy";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { SiteLayout } from "@/components/site-layout";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <EngineeringSignal />
      <SelectedWork />
      <ExperienceTimeline />
      <TechnologyWall />
      <TechnologyUniverse />
      <ArchitectureLab />
      <AILab />
      <Philosophy />
      <Contact />
    </SiteLayout>
  );
}
