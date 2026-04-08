import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact & Tours",
  description:
    "Schedule a tour or ask about availability at Kelly's Kidz Playhouse in Rockaway Beach, NY. We'd love to meet your family.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-cream py-20">
        <Container className="max-w-3xl text-center">
          <h1 className="font-display text-5xl text-ocean">Come Say Hi</h1>
          <p className="mt-6 text-lg text-ocean/80">
            Schedule a tour, ask about availability, or just introduce your family. We&apos;d love to hear from you.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-ocean">Get in touch</h2>
            <div className="mt-3 h-1 w-16 bg-sandy rounded-full" />
            <dl className="mt-6 space-y-5 text-ocean/85">
              <div>
                <dt className="text-sm font-bold uppercase tracking-wider text-seafoam">Visit</dt>
                <dd className="mt-1">
                  {SITE.address.street}<br />
                  {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-wider text-seafoam">Call</dt>
                <dd className="mt-1">
                  <a href={SITE.phoneHref} className="text-sandy font-bold hover:underline">
                    {SITE.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-wider text-seafoam">Email</dt>
                <dd className="mt-1">
                  <a href={`mailto:${SITE.email}`} className="text-sandy font-bold hover:underline">
                    {SITE.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-bold uppercase tracking-wider text-seafoam">Hours</dt>
                <dd className="mt-1">
                  {SITE.hours.weekdays}<br />
                  <span className="text-ocean/60">{SITE.hours.weekend}</span>
                </dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </Container>
      </section>

      {/* GETTING HERE */}
      <section className="py-20 bg-cream/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block rounded-full bg-seafoam/15 text-ocean px-4 py-1.5 text-sm font-bold">
              Getting Here
            </span>
            <h2 className="mt-4 font-display text-4xl text-ocean">
              Easy to find, easy to visit
            </h2>
            <div className="mt-3 mx-auto h-1 w-16 bg-sandy rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto">
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-lg ring-4 ring-white aspect-[4/3] lg:aspect-auto lg:min-h-[400px]">
              <iframe
                title="Map to Kelly's Kidz Playhouse"
                src="https://www.google.com/maps?q=127-10+Newport+Avenue,+Rockaway+Park,+NY+11694&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Info */}
            <div className="space-y-5">
              {[
                {
                  icon: "🚗",
                  title: "By car",
                  body: "Pull right into our private driveway. No double-parking, no hazard lights, no stress. Drop-off is the easiest part of your morning.",
                },
                {
                  icon: "🚌",
                  title: "By bus",
                  body: "The Q35 bus stop is right up the block. Easy if you don't drive.",
                },
                {
                  icon: "🚆",
                  title: "By subway",
                  body: "A short walk from the Beach 116th St A train, with quick connections from across Queens, Brooklyn, and Manhattan.",
                },
                {
                  icon: "👣",
                  title: "On foot",
                  body: "Right in the heart of Rockaway Beach, walkable from Belle Harbor, Neponsit, and the boardwalk.",
                },
              ].map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl bg-white border border-cream p-5 flex gap-4 items-start"
                >
                  <div className="text-3xl shrink-0">{b.icon}</div>
                  <div>
                    <h3 className="font-display text-xl text-ocean">{b.title}</h3>
                    <p className="mt-1 text-ocean/75 leading-relaxed">{b.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
