import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "About Me — Software Engineer",
  description:
    "Learn about Ishan Chinthaka, a Full-Stack Software Engineer based in Sri Lanka with commercial experience at Amazoft IT and a BSc (Hons) 2:1 in Software Engineering from Cardiff Metropolitan University.",
  keywords: [
    "Ishan Chinthaka",
    "About Ishan Chinthaka",
    "Full Stack Developer Sri Lanka",
    "Software Engineer Portfolio Sri Lanka",
    "Cardiff Metropolitan University Software Engineering",
    "Amazoft IT Software Engineer"
  ],
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About Me — Software Engineer | Ishan Chinthaka",
    description:
      "Commercial experience building production web applications, scalable REST APIs, and database-driven solutions. Cardiff Metropolitan University BSc (Hons) 2:1.",
    url: "https://ishan-chinthaka.vercel.app/about",
    type: "profile"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Me — Software Engineer | Ishan Chinthaka",
    description:
      "Full-Stack Software Engineer from Sri Lanka building reliable web software, scalable APIs, and database solutions.",
    creator: "@ish_22"
  }
};

export default function AboutPage() {
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
        "name": "About",
        "item": "https://ishan-chinthaka.vercel.app/about"
      }
    ]
  };

  const personDisambiguationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Ishan Chinthaka",
      "jobTitle": "Associate Software Engineer",
      "disambiguatingDescription":
        "Associate Software Engineer at Amazoft IT and Cardiff Metropolitan University BSc (Hons) 2:1 Software Engineering graduate, specializing in React, Next.js, TypeScript, Spring Boot, and PostgreSQL. Distinct from Ishan Chinthaka (Dynamics CRM developer / SLIIT graduate).",
      "worksFor": {
        "@type": "Organization",
        "name": "Amazoft",
        "alternateName": "Amazoft IT",
        "url": "https://www.amazoft.com"
      },
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Cardiff Metropolitan University",
          "url": "https://www.cardiffmet.ac.uk"
        },
        {
          "@type": "EducationalOrganization",
          "name": "ICBT Campus",
          "url": "https://www.icbt.lk"
        }
      ],
      "sameAs": [
        "https://github.com/ish-22",
        "https://www.linkedin.com/in/ishan-chinthaka-1a6b5a2b1"
      ]
    }
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personDisambiguationSchema) }}
      />
      <h1 className="sr-only">About Ishan Chinthaka — Full-Stack Software Engineer in Sri Lanka</h1>
      <About />
    </SiteLayout>
  );
}
