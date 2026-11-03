"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { content } from "../../lib/content/static";

const items = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Experience", "#experience"],
  ["Education", "#education"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
] as const;

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  if (!content.settings.showNavigation) return null;

  return (
    <header className="siteHeader">
      <Link className="siteLogo" href="/" aria-label="Rahul Savsani home">
        <Image src="/favicon.svg" alt="" width={36} height={36} />
      </Link>
      <button
        className="siteMenuToggle"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen((current) => !current)}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav className={open ? "siteNav isOpen" : "siteNav"} aria-label="Main navigation">
        {items.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}
