import { site } from "@/lib/site";

// Absolute origin for canonical, Open Graph, sitemap, and JSON-LD.
// Set NEXT_PUBLIC_SITE_URL when the site is not deployed on Vercel.
// Example: https://centlabs.example
export function siteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return toOrigin(explicit);

  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return toOrigin(process.env.VERCEL_URL);
  }

  const production = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (production) return toOrigin(production);

  return "http://localhost:3000";
}

function toOrigin(value: string): string {
  const withProtocol = /^https?:\/\//i.test(value) ? value : `https://${value}`;
  return new URL(withProtocol).origin;
}

export function jsonLd() {
  const url = siteOrigin();
  const telephone = site.phone.replace(/[^\d+]/g, "");
  const features = site.groups.flatMap((group) => group.items.map((item) => item.t));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: site.name,
        description: site.metaDescription,
        inLanguage: "en-IN",
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: site.name,
        url,
        email: site.email,
        telephone,
        areaServed: { "@type": "Country", name: "India" },
        contactPoint: {
          "@type": "ContactPoint",
          telephone,
          email: site.email,
          contactType: "customer support",
          areaServed: "IN",
          availableLanguage: "en",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${url}/#software`,
        name: site.name,
        url,
        description: site.metaDescription,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "Laboratory information system",
        operatingSystem: "Windows",
        featureList: features,
        inLanguage: "en",
        countryOfOrigin: "IN",
        author: {
          "@type": "Person",
          name: "Azhar Sayyed",
          url: site.developer.url,
        },
        provider: { "@id": `${url}/#organization` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: site.metaTitle,
        description: site.metaDescription,
        inLanguage: "en-IN",
        isPartOf: { "@id": `${url}/#website` },
        about: { "@id": `${url}/#software` },
        mainEntity: { "@id": `${url}/#software` },
        primaryImageOfPage: {
          "@type": "ImageObject",
          url: `${url}/opengraph-image`,
        },
      },
    ],
  };
}
