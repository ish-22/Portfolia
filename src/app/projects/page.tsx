import type { Metadata } from "next";
import { Projects } from "@/components/sections/projects";
import { SiteLayout } from "@/components/site-layout";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Projects | ${profile.name}`,
  description: `View software projects by ${profile.name}, including POS, inventory, school management, service request, mobile, and website projects.`
};

export default function ProjectsPage() {
  return (
    <SiteLayout className="bg-white pt-16 dark:bg-[#111827]">
      <Projects />
    </SiteLayout>
  );
}
