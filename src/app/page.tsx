import { Hero } from "@/components/sections/hero";
import { EngineeringSignal } from "@/components/sections/engineering-signal";
import { SelectedWork } from "@/components/sections/projects";
import { TechnologyWall } from "@/components/sections/technology-wall";
import { DesignLab } from "@/components/sections/design-lab";
import { ArchitectureLab } from "@/components/sections/architecture-lab";
import { AILab } from "@/components/sections/ai-lab";
import { ExperienceTimeline } from "@/components/sections/experience";
import { Philosophy } from "@/components/sections/philosophy";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { SiteLayout } from "@/components/site-layout";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <EngineeringSignal />
      <SelectedWork />
      <TechnologyWall />
      <DesignLab />
      <ArchitectureLab />
      <AILab />
      <ExperienceTimeline />
      <Philosophy />
      <About />
      <Contact />
    </SiteLayout>
  );
}
