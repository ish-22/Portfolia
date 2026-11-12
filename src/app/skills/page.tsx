import type { Metadata } from "next";
import { TechnologyUniverse } from "@/components/sections/skills";
import { SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Skills & Technical Stack",
  description:
    "Explore Ishan Chinthaka's verified technical capabilities across 7 engineering domains: Frontend, Backend, Programming Languages, Databases, Cloud & DevOps, Development Tools, and AI & Integrations.",
  alternates: {
    canonical: "/skills"
  },
  openGraph: {
    title: "Skills & Technical Capabilities | Ishan Chinthaka",
    description:
      "Verified technical competencies in React, Next.js, TypeScript, Node.js, Spring Boot, PostgreSQL, AWS, and AI integrations.",
    url: "https://ishan-chinthaka.vercel.app/skills"
  }
};

export default function SkillsPage() {
  return (
    <SiteLayout>
      <TechnologyUniverse />
    </SiteLayout>
  );
}
