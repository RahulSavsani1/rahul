const defaultSiteUrl = "https://rahulsavsani.netlify.app";
const configuredSiteUrl = process.env.SITE_URL || process.env.URL || defaultSiteUrl;

let siteUrl: string;
try {
  siteUrl = new URL(configuredSiteUrl).origin;
} catch {
  siteUrl = defaultSiteUrl;
}

export { siteUrl };
