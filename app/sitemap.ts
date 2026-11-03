import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const configuredUrl = process.env.URL || process.env.SITE_URL || process.env.DEPLOY_PRIME_URL;
  if (!configuredUrl) return [];
  let baseUrl: string;
  try {
    baseUrl = new URL(configuredUrl).origin;
  } catch {
    return [];
  }
  return [{ url: baseUrl, changeFrequency: "monthly" as const }];
}
