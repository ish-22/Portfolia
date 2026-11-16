import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Contact Ishan Chinthaka | Full-Stack Software Engineer — Sri Lanka",
  description:
    "Get in touch with Ishan Chinthaka for full-stack software development roles, contract projects, or technical consultations. Direct email, WhatsApp (+94 76 527 4750), and message form.",
  keywords: [
    "Contact Ishan Chinthaka",
    "Hire Full Stack Developer Sri Lanka",
    "Hire React Developer Sri Lanka",
    "Software Engineer Contact Sri Lanka",
    "Ishan Chinthaka Email",
    "Ishan Chinthaka WhatsApp"
  ],
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact Ishan Chinthaka | Full-Stack Software Engineer",
    description:
      "Available for software engineering opportunities and technical collaboration. Reach out directly via email, WhatsApp (+94 76 527 4750), or direct message form.",
    url: "https://ishan-chinthaka.vercel.app/contact",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ishan Chinthaka | Full-Stack Software Engineer",
    description:
      "Connect directly with Ishan Chinthaka for software development projects, employment, or technical inquiries.",
    creator: "@ish_22"
  }
};

export default function ContactPage() {
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
        "name": "Contact",
        "item": "https://ishan-chinthaka.vercel.app/contact"
      }
    ]
  };

  return (
    <SiteLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <h1 className="sr-only">Contact Ishan Chinthaka — Full-Stack Software Engineer</h1>
      <Contact />
    </SiteLayout>
  );
}
