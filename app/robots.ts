import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const configuredUrl = process.env.URL || process.env.SITE_URL || process.env.DEPLOY_PRIME_URL;
  let sitemap: string | undefined;
  try {
    sitemap = configuredUrl ? `${new URL(configuredUrl).origin}/sitemap.xml` : undefined;
  } catch {
    sitemap = undefined;
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(sitemap ? { sitemap } : {}),
  };
}
