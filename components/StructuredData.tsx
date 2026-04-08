import { SITE } from "@/lib/site";

// LocalBusiness + ChildCare schema for Google rich results & local SEO.
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ChildCare"],
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    image: `${SITE.url}/logo.png`,
    logo: `${SITE.url}/logo.png`,
    foundingDate: String(SITE.foundedYear),
    slogan: SITE.tagline,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.5795,
      longitude: -73.8371,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:30",
        closes: "17:00",
      },
    ],
    areaServed: [
      "Rockaway Beach",
      "Rockaway Park",
      "Belle Harbor",
      "Neponsit",
      "Broad Channel",
      "Far Rockaway",
      "Queens",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
