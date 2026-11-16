import type { Metadata } from "next";
import { SelectedWork } from "@/components/sections/projects";
import { SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Projects & Engineering Case Studies | Ishan Chinthaka",
  description:
    "Explore full-stack software applications and case studies built by Ishan Chinthaka — including Track My Bus (real-time IoT fleet transit), MediSync Core, and AI Study Assistant.",
  keywords: [
    "Ishan Chinthaka Projects",
    "Software Engineer Portfolio Sri Lanka",
    "React Developer Sri Lanka",
    "Next.js Developer Sri Lanka",
    "Track My Bus",
    "MediSync Core",
    "AI Study Assistant",
    "Full-Stack Web Applications"
  ],
  alternates: {
    canonical: "/projects"
  },
  openGraph: {
    title: "Projects & Case Studies | Ishan Chinthaka — Full-Stack Developer",
    description:
      "Explore real-time transit tracking, healthcare management, and AI document search applications built by Ishan Chinthaka.",
    url: "https://ishan-chinthaka.vercel.app/projects",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects & Case Studies | Ishan Chinthaka",
    description:
      "Full-stack software systems, real-time IoT transit tracking, and AI document applications.",
    creator: "@ish_22"
  }
};

export default function ProjectsPage() {
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
        "name": "Projects",
        "item": "https://ishan-chinthaka.vercel.app/projects"
      }
    ]
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <h1 className="sr-only">Software Engineering Projects &amp; Case Studies by Ishan Chinthaka</h1>
      <SelectedWork />
    </SiteLayout>
  );
}
