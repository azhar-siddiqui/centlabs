import type { Metadata } from "next";
import Link from "next/link";

const title = "Page not found | CentLabs Pro";
const description = "This page is not on the CentLabs Pro site.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  openGraph: { title, description },
  twitter: { title, description },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-5 py-24">
      <p className="text-sm font-semibold text-teal">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight">
        This page is not here.
      </h1>
      <p className="mt-4 text-lg leading-relaxed text-muted">
        The address may be wrong, or the page may have moved.
      </p>
      <Link href="/" className="mt-8 font-semibold text-teal underline underline-offset-4">
        Back to CentLabs Pro
      </Link>
    </main>
  );
}
