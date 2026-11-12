import type { Metadata } from "next";
import { SelectedWork } from "@/components/sections/projects";
import { SiteLayout } from "@/components/site-layout";

export const metadata: Metadata = {
  title: "Engineered Products & Case Studies",
  description:
    "Explore case studies and software products engineered by Ishan Chinthaka — including Track My Bus (real-time IoT fleet transit), AI Study Assistant (document RAG), and MediSync Core.",
  alternates: {
    canonical: "/projects"
  },
  openGraph: {
    title: "Projects & Engineering Case Studies | Ishan Chinthaka",
    description:
      "Production-grade web applications, real-time telemetry systems, and AI-powered educational platforms.",
    url: "https://ishan-chinthaka.vercel.app/projects"
  }
};

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <SelectedWork />
    </SiteLayout>
  );
}
