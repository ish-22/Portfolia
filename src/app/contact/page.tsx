import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { SiteLayout } from "@/components/site-layout";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Contact | ${profile.name}`,
  description: `Contact ${profile.name} for software development opportunities, collaborations, and project work.`
};

export default function ContactPage() {
  return (
    <SiteLayout className="bg-white pt-16 dark:bg-[#111827]">
      <Contact />
    </SiteLayout>
  );
}
