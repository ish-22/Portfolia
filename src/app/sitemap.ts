import { MetadataRoute } from "next";
import { selectedProjects, secondaryProjects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://ishan-chinthaka.vercel.app";
  const currentDate = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${siteUrl}/about`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/skills`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/projects`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/experience`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];

  const allProjects = [...selectedProjects, ...secondaryProjects];

  const projectPages: MetadataRoute.Sitemap = allProjects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.85
  }));

  return [...staticPages, ...projectPages];
}
