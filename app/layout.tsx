import type { Metadata } from "next";
import { Nunito, Fraunces } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Trusted Rockaway Beach Daycare Since 1992`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "daycare Rockaway Beach",
    "daycare Rockaway Park",
    "childcare Rockaway Beach",
    "daycare Queens NY",
    "preschool Rockaway Beach",
    "infant care Rockaway",
    "toddler daycare Rockaway",
    "Kelly's Kidz Playhouse",
  ],
  openGraph: {
    title: `${SITE.name} | Loving Daycare in Rockaway Beach Since 1992`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
    locale: "en_US",
    images: [{ url: "/logo.png", width: 984, height: 392, alt: SITE.name }],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-shell text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
