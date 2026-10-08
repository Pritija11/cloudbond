"use client";

import Link from "next/link";
import { useState } from "react";
import BrandMark from "@/components/ui/BrandMark";

const navigation = [
  { label: "Platform", href: "/platform" },
  { label: "Solutions", href: "/solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="nav-shell">
        <Link href="/" className="brand" aria-label="CloudBond home">
          <BrandMark className="brand-mark" />
          <span className="brand-name">CLOUDBOND</span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="nav-cta">
          <span>Talk to us</span>
          <span className="nav-arrow">↗</span>
        </Link>

        <button
          type="button"
          className="mobile-menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contact"
            className="mobile-menu-cta"
            onClick={() => setMenuOpen(false)}
          >
            Talk to us ↗
          </Link>
        </div>
      )}
    </header>
  );
}
