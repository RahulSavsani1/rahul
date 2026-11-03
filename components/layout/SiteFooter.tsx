import Link from "next/link";
import { content, published } from "../../lib/content/static";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <Link className="siteLogo" href="/">
        RS<span>.</span>
      </Link>
      <p>© 2026 {content.profile.name}</p>
      <div>
        {published.socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target={link.url.startsWith("http") ? "_blank" : undefined}
            rel={link.url.startsWith("http") ? "noreferrer" : undefined}
          >
            {link.label} ↗
          </a>
        ))}
      </div>
    </footer>
  );
}
