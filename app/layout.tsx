import type { Metadata } from "next";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import { content } from "../lib/content/static";
import "./globals.css";
import "./page.css";

const configuredSiteUrl = process.env.URL || process.env.SITE_URL || process.env.DEPLOY_PRIME_URL;
let metadataBase: URL | undefined;
try {
  metadataBase = configuredSiteUrl ? new URL(configuredSiteUrl) : undefined;
} catch {
  metadataBase = undefined;
}

export const metadata: Metadata = {
  ...(metadataBase ? { metadataBase, alternates: { canonical: "/" } } : {}),
  title: content.settings.seoTitle,
  description: content.settings.metaDescription,
  openGraph: {
    title: content.settings.seoTitle,
    description: content.settings.metaDescription,
    type: "website",
    siteName: content.profile.name,
    images: [{ url: content.profile.profileImage, alt: content.profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: content.settings.seoTitle,
    description: content.settings.metaDescription,
    images: [content.profile.profileImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div className="readingProgress" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
