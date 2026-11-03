import type { Metadata } from "next";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import { DM_Mono, Instrument_Serif, Manrope } from "next/font/google";
import { content } from "../lib/content/static";
import { siteUrl } from "../lib/site-url";
import "./globals.css";
import "./page.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: "400", variable: "--font-dm-mono" });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  title: content.settings.seoTitle,
  description: content.settings.metaDescription,
  openGraph: {
    title: content.settings.seoTitle,
    description: content.settings.metaDescription,
    type: "website",
    siteName: content.profile.name,
    url: siteUrl,
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: content.profile.name,
    url: siteUrl,
    image: new URL(content.profile.profileImage, siteUrl).toString(),
    jobTitle: content.profile.title,
    description: content.profile.shortIntroduction,
    sameAs: content.socialLinks
      .filter((link) => link.published && link.url.startsWith("http"))
      .map((link) => link.url),
    knowsAbout: content.skills.filter((skill) => skill.visible).map((skill) => skill.name),
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${dmMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        <div className="readingProgress" aria-hidden="true" />
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
