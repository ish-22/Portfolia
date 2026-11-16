import type { Metadata } from "next";
import { TechnologyUniverse } from "@/components/sections/skills";
import { SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Technical Skills & Tech Stack",
  description:
    "Explore Ishan Chinthaka's core technology competencies across Frontend, Backend, Databases, Cloud & DevOps: React.js, Next.js, TypeScript, Node.js, Spring Boot, PostgreSQL, and AWS.",
  keywords: [
    "Ishan Chinthaka Skills",
    "React Developer Sri Lanka",
    "Next.js Developer Sri Lanka",
    "TypeScript Engineer Sri Lanka",
    "Full Stack Developer Sri Lanka",
    "Spring Boot Developer Sri Lanka",
    "PostgreSQL",
    "AWS Docker"
  ],
  alternates: {
    canonical: "/skills"
  },
  openGraph: {
    title: "Technical Skills & Tech Stack | Ishan Chinthaka",
    description:
      "Technical competencies in React, Next.js, TypeScript, Node.js, Spring Boot, PostgreSQL, AWS, and AI integrations.",
    url: "https://ishan-chinthaka.vercel.app/skills",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Skills & Tech Stack | Ishan Chinthaka",
    description:
      "Core technology competencies in React, Next.js, TypeScript, Node.js, Spring Boot, and PostgreSQL.",
    creator: "@ish_22"
  }
};

export default function SkillsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ishan-chinthaka.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Skills",
        "item": "https://ishan-chinthaka.vercel.app/skills"
      }
    ]
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <h1 className="sr-only">Technical Skills &amp; Engineering Stack — Ishan Chinthaka</h1>
      <TechnologyUniverse />
    </SiteLayout>
  );
}
