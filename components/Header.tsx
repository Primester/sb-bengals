"use client";
import { assetPath } from "@/lib/paths";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Arrow } from "./Icon";
const links = [
  { href: "/#program", label: "The program" },
  { href: "/safety/", label: "Player safety" },
  { href: "/#vision", label: "Our vision" },
  { href: "/#families", label: "For families" },
];
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  return (
    <>
      <div className="announcement">
        <span>
          <span className="status-dot" /> Santa Barbara youth tackle football
        </span>
        <Link href="/#home-field">
          Our home field: San Marcos High School <Arrow diagonal />
        </Link>
      </div>
      <header
        className="site-header"
        onKeyDown={(e) => {
          if (e.key === "Escape") setOpen(false);
        }}
      >
        <div className="header-inner">
          <Link
            href="/"
            aria-label="Santa Barbara Bengals home"
            className="brand-logo"
            onClick={() => setOpen(false)}
          >
            <Image
              src={assetPath("/brand/wordmark.webp")}
              width={1983}
              height={793}
              priority
              alt="Santa Barbara Bengals"
            />
          </Link>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={open}
            aria-controls="main-navigation"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen(!open)}
          >
            <span>{open ? "Close" : "Menu"}</span>
            <span
              aria-hidden="true"
              className={open ? "menu-lines is-open" : "menu-lines"}
            >
              <i />
              <i />
            </span>
          </button>
          <nav
            id="main-navigation"
            aria-label="Main navigation"
            className={open ? "main-nav is-open" : "main-nav"}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={
                  path === "/safety/" && link.href === "/safety/"
                    ? "page"
                    : undefined
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              className="button button-small"
              href="/#join"
              onClick={() => setOpen(false)}
            >
              Join the Bengals <Arrow />
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
