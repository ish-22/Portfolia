import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Ishan Chinthaka for software development opportunities, full-stack engineering contracts, or technical consultations. Email, WhatsApp, and inquiry form.",
  alternates: {
    canonical: "/contact"
  },
  openGraph: {
    title: "Contact | Ishan Chinthaka",
    description:
      "Available for software engineering opportunities and technical collaboration. Reach out directly via email, WhatsApp (+94 76 527 4750), or online form.",
    url: "https://ishan-chinthaka.vercel.app/contact"
  }
};

export default function ContactPage() {
  return (
    <SiteLayout>
      <Contact />
    </SiteLayout>
  );
}
