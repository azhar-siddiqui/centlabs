import { siteOrigin } from "@/lib/seo";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteOrigin(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
