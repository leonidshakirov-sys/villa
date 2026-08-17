import type { MetadataRoute } from "next";
import { property } from "@/config/property";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${property.siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${property.siteUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
