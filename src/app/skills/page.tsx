import type { Metadata } from "next";
import { Skills } from "@/components/sections/skills";
import { SiteLayout } from "@/components/site-layout";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Skills | ${profile.name}`,
  description: `Explore ${profile.name}'s skills in React, TypeScript, PHP, MySQL, Java, Kotlin, Tailwind CSS, and more.`
};

export default function SkillsPage() {
  return (
    <SiteLayout className="bg-mist pt-16 dark:bg-[#0d1117]">
      <Skills />
    </SiteLayout>
  );
}
