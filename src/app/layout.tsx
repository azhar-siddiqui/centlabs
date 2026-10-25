import { siteOrigin } from "@/lib/seo";
import { site } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { Fraunces, IBM_Plex_Mono, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const source = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source",
  display: "swap",
});

const plex = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    absolute: site.metaTitle,
  },
  description: site.metaDescription,
  applicationName: site.name,
  keywords: site.keywords,
  authors: [{ name: "Azhar Sayyed", url: site.developer.url }],
  creator: "Azhar Sayyed",
  publisher: site.name,
  category: "software",
  referrer: "origin-when-cross-origin",
  openGraph: {
    title: site.metaTitle,
    description: site.metaDescription,
    url: "/",
    siteName: site.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: site.metaTitle,
    description: site.metaDescription,
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f1ea",
  colorScheme: "light",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${source.variable} ${plex.variable} h-full antialiased`}
      suppressHydrationWarning={true}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#top"
          className="absolute left-4 top-4 z-80 -translate-y-24 rounded-lg bg-ink px-4 py-2 text-sm font-semibold text-white focus:translate-y-0"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
