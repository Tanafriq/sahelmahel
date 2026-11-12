import type { MetadataRoute } from "next";
import { BASE_URL, LANG_ALTERNATES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const alternates = { languages: LANG_ALTERNATES };
  return [
    {
      url: BASE_URL + "/",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
      alternates,
    },
    {
      url: BASE_URL + "/ar",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
      alternates,
    },
  ];
}
