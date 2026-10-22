import { site } from "@/lib/site";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.metaTitle,
    short_name: site.name,
    description: site.metaDescription,
    start_url: "/",
    scope: "/",
    display: "browser",
    background_color: "#f4f1ea",
    theme_color: "#f4f1ea",
    lang: "en-IN",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
    ],
  };
}
