import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SiteLayout } from "@/components/site-layout";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `About | ${profile.name}`,
  description: `Learn more about ${profile.name}, a software developer building web, mobile, and business management systems.`
};

export default function AboutPage() {
  return (
    <SiteLayout className="bg-white pt-16 dark:bg-[#111827]">
      <About />
    </SiteLayout>
  );
}
