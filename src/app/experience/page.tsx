import type { Metadata } from "next";
import { Experience } from "@/components/sections/experience";
import { SiteLayout } from "@/components/site-layout";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Experience | ${profile.name}`,
  description: `Explore ${profile.name}'s software development experience, project work, and continuous learning journey.`
};

export default function ExperiencePage() {
  return (
    <SiteLayout className="bg-mist pt-16 dark:bg-[#0d1117]">
      <Experience />
    </SiteLayout>
  );
}
