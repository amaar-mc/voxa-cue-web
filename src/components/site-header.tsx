"use client";

import { useEffect, useState } from "react";
import { BrandMark } from "@/components/brand-mark";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#haptics", label: "Haptic language" },
  { href: "#insights", label: "Insights" },
  { href: "#privacy", label: "Privacy" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent): void {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="site-header">
      <nav className="nav-island" aria-label="Primary navigation">
        <a className="nav-brand" href="#top" aria-label="Voxa Cue home">
          <BrandMark compact={false} inverse={false} />
        </a>

        <div className="nav-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="nav-cta button-press" href="#waitlist">
          Join the waitlist
          <span className="button-orb" aria-hidden="true">
            ↗
          </span>
        </a>

        <button
          className={open ? "menu-button is-open" : "menu-button"}
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((current) => !current)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={open ? "mobile-menu is-open" : "mobile-menu"}
        aria-hidden={!open}
      >
        <div className="mobile-menu__inner">
          <p>Private coaching, right on cue.</p>
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              style={{ "--menu-index": index } as React.CSSProperties}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
            >
              <span>0{index + 1}</span>
              {link.label}
            </a>
          ))}
          <a
            className="mobile-menu__cta"
            href="#waitlist"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            Join the first wearers
          </a>
        </div>
      </div>
    </header>
  );
}
