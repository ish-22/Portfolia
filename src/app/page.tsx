import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { EngineeringSignal } from "@/components/sections/engineering-signal";
import { SiteLayout } from "@/components/site-layout";

// Dynamically split below-the-fold sections so the initial JS bundle is ultra-lightweight
const VisualShowcase = dynamic(
  () => import("@/components/sections/visual-showcase").then((mod) => mod.VisualShowcase)
);
const SelectedWork = dynamic(
  () => import("@/components/sections/projects").then((mod) => mod.SelectedWork)
);
const ExperienceTimeline = dynamic(
  () => import("@/components/sections/experience").then((mod) => mod.ExperienceTimeline)
);
const TechnologyWall = dynamic(
  () => import("@/components/sections/technology-wall").then((mod) => mod.TechnologyWall)
);
const TechnologyUniverse = dynamic(
  () => import("@/components/sections/skills").then((mod) => mod.TechnologyUniverse)
);
const ArchitectureLab = dynamic(
  () => import("@/components/sections/architecture-lab").then((mod) => mod.ArchitectureLab)
);
const AILab = dynamic(
  () => import("@/components/sections/ai-lab").then((mod) => mod.AILab)
);
const Philosophy = dynamic(
  () => import("@/components/sections/philosophy").then((mod) => mod.Philosophy)
);
const Contact = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.Contact)
);

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <EngineeringSignal />
      <VisualShowcase />
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
