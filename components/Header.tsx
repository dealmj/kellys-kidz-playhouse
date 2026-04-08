"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-shell/90 backdrop-blur border-b border-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-24 md:h-28 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center group shrink-0" aria-label={`${SITE.name} home`}>
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={984}
            height={392}
            priority
            className="h-20 md:h-28 w-auto transition group-hover:scale-[1.02]"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base lg:text-lg font-semibold text-ocean/80 hover:text-sandy transition"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full bg-sandy hover:bg-ocean text-white px-6 py-3 text-base font-bold shadow-sm transition"
          >
            Schedule a Tour
          </Link>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-ocean"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-cream bg-shell">
          <div className="px-4 py-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-ocean hover:bg-cream"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block text-center mt-2 rounded-full bg-sandy text-white px-4 py-3 font-bold"
            >
              Schedule a Tour
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
