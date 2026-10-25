import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import MainSection from "@/components/main";
import { MobileDock } from "@/components/mobile-dock";
import { jsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },
};

export default function Home() {
  const structuredData = JSON.stringify(jsonLd()).replace(/</g, String.raw`\u003c`);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: structuredData }} />
      <Header />
      <MainSection />
      <Footer />
      <MobileDock />
    </>
  );
}
