import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-ocean text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Image
            src="/logo.png"
            alt={SITE.name}
            width={984}
            height={392}
            className="h-20 w-auto -ml-2"
          />
          <p className="mt-4 text-cream/80 leading-relaxed">{SITE.tagline}</p>
          <p className="mt-2 text-seafoam-light text-sm font-bold">
            Family-run in Rockaway Beach since {SITE.foundedYear}
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={SITE.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Kelly's Kidz Playhouse on Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-sandy transition"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-white"
                aria-hidden="true"
              >
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-seafoam-light">
            Visit Us
          </h4>
          <address className="mt-3 not-italic text-cream/90 leading-relaxed">
            {SITE.address.street}
            <br />
            {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
          </address>
          <p className="mt-3 text-cream/80 text-sm">{SITE.hours.weekdays}</p>
          <p className="text-cream/60 text-sm">{SITE.hours.weekend}</p>
          <a href={SITE.phoneHref} className="mt-3 inline-block text-sandy hover:text-sun font-semibold">
            {SITE.phone}
          </a>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-seafoam-light">
            Explore
          </h4>
          <ul className="mt-3 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-cream/80 hover:text-sandy transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-sm text-cream/60 flex flex-col sm:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Lovingly built in Rockaway Beach 🌊</p>
        </div>
      </div>
    </footer>
  );
}
