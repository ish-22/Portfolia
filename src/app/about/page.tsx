import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about Ishan Chinthaka — Full-Stack Software Engineer and Associate Software Engineer at Amazoft IT. Education, engineering philosophy, and commercial background.",
  alternates: {
    canonical: "/about"
  },
  openGraph: {
    title: "About | Ishan Chinthaka",
    description:
      "Full-Stack Software Engineer with commercial experience building production web applications, scalable REST APIs, and database-driven solutions.",
    url: "https://ishan-chinthaka.vercel.app/about"
  }
};

export default function AboutPage() {
  return (
    <SiteLayout>
      <About />
    </SiteLayout>
  );
}
