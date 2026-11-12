import type { Metadata } from "next";
import { ProfessionalExperience } from "@/components/sections/experience";
import { SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Review Ishan Chinthaka's commercial engineering experience as Associate Software Engineer at Amazoft IT, production systems built, and Cardiff Met software engineering qualifications.",
  alternates: {
    canonical: "/experience"
  },
  openGraph: {
    title: "Professional Experience | Ishan Chinthaka",
    description:
      "Associate Software Engineer at Amazoft IT. Production web features in React/TypeScript, PostgreSQL schema optimization, and Agile sprint delivery.",
    url: "https://ishan-chinthaka.vercel.app/experience"
  }
};

export default function ExperiencePage() {
  return (
    <SiteLayout>
      <ProfessionalExperience />
    </SiteLayout>
  );
}
