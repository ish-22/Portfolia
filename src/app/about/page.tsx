import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "About Ishan Chinthaka | Full-Stack Software Engineer — Sri Lanka",
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
    title: "About Ishan Chinthaka | Full-Stack Software Engineer",
    description:
      "Commercial experience building production web applications, scalable REST APIs, and database-driven solutions. Cardiff Metropolitan University BSc (Hons) 2:1.",
    url: "https://ishan-chinthaka.vercel.app/about",
    type: "profile"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Ishan Chinthaka | Full-Stack Software Engineer",
    description:
      "Full-Stack Software Engineer from Sri Lanka building reliable web software, scalable APIs, and database solutions.",
    creator: "@ish_22"
  }
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <h1 className="sr-only">About Ishan Chinthaka — Full-Stack Software Engineer in Sri Lanka</h1>
      <About />
    </SiteLayout>
  );
}
