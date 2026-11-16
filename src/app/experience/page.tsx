import type { Metadata } from "next";
import { ProfessionalExperience } from "@/components/sections/experience";
import { SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Professional Experience",
  description:
    "Review Ishan Chinthaka's commercial software engineering career at Amazoft IT (Associate Software Engineer & Trainee Developer), production systems shipped, and Cardiff Met qualifications.",
  keywords: [
    "Ishan Chinthaka Experience",
    "Associate Software Engineer Amazoft IT",
    "Trainee Software Developer Sri Lanka",
    "Cardiff Metropolitan University BSc Hons",
    "Full Stack Developer Sri Lanka",
    "Software Engineering Career Sri Lanka"
  ],
  alternates: {
    canonical: "/experience"
  },
  openGraph: {
    title: "Professional Experience | Ishan Chinthaka",
    description:
      "Associate Software Engineer at Amazoft IT. Production web features in React/TypeScript, PostgreSQL schema optimization, and Agile sprint delivery.",
    url: "https://ishan-chinthaka.vercel.app/experience",
    type: "profile"
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Experience | Ishan Chinthaka",
    description:
      "Commercial software development track record at Amazoft IT and academic foundations from Cardiff Met.",
    creator: "@ish_22"
  }
};

export default function ExperiencePage() {
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
        "name": "Experience",
        "item": "https://ishan-chinthaka.vercel.app/experience"
      }
    ]
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <h1 className="sr-only">Professional Software Engineering Experience — Ishan Chinthaka</h1>
      <ProfessionalExperience />
    </SiteLayout>
  );
}
