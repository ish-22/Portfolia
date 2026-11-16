import { MetadataRoute } from "next";
import { selectedProjects, secondaryProjects } from "@/data/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://ishan-chinthaka.vercel.app";
  const lastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${siteUrl}/experience`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/skills`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8
    }
  ];

  const allProjects = [...selectedProjects, ...secondaryProjects];

  const projectPages: MetadataRoute.Sitemap = allProjects.map((p) => ({
    url: `${siteUrl}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.85
  }));

  return [...staticPages, ...projectPages];
}
