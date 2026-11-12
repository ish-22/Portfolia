import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { EngineeringSignal } from "@/components/sections/engineering-signal";
import { SelectedWork } from "@/components/sections/projects";
import { ExperienceTimeline } from "@/components/sections/experience";
import { TechnologyWall } from "@/components/sections/technology-wall";
import { TechnologyUniverse } from "@/components/sections/skills";
import { Philosophy } from "@/components/sections/philosophy";
import { About } from "@/components/sections/about";
import { SiteLayout } from "@/components/site-layout";

const DesignLab = dynamic(() =>
  import("@/components/sections/design-lab").then((mod) => mod.DesignLab)
);
const ArchitectureLab = dynamic(() =>
  import("@/components/sections/architecture-lab").then((mod) => mod.ArchitectureLab)
);
const AILab = dynamic(() =>
  import("@/components/sections/ai-lab").then((mod) => mod.AILab)
);
const Contact = dynamic(() =>
  import("@/components/sections/contact").then((mod) => mod.Contact)
);

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <EngineeringSignal />
      <SelectedWork />
      <ExperienceTimeline />
      <TechnologyWall />
      <TechnologyUniverse />
      <DesignLab />
      <ArchitectureLab />
      <AILab />
      <Philosophy />
      <About />
      <Contact />
    </SiteLayout>
  );
}
