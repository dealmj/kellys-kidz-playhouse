import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Kelly's Kidz Playhouse, a small, family-run daycare serving Rockaway Beach, NY since 1992 with love, play, and a deep commitment to every child in our care.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-cream py-20">
        <Container className="max-w-3xl text-center">
          <span className="inline-block rounded-full bg-seafoam/15 text-ocean px-4 py-1.5 text-sm font-bold">
            Serving Rockaway Beach since 1992
          </span>
          <h1 className="mt-5 font-display text-5xl text-ocean">About Kelly&apos;s Kidz</h1>
          <p className="mt-6 text-lg text-ocean/80 leading-relaxed">
            We&apos;re a small, family-run daycare nestled in the heart of Rockaway Beach, built
            on the simple belief that every child deserves to feel safe, seen, and celebrated.
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { stat: "30+", label: "Years caring for Rockaway families" },
              { stat: "1992", label: "The year Kelly opened our doors" },
              { stat: "6wk–4yr", label: "Ages we lovingly welcome" },
            ].map((s) => (
              <div key={s.label} className="text-center rounded-3xl bg-white border border-cream shadow-sm p-8">
                <div className="font-display text-5xl text-sandy">{s.stat}</div>
                <p className="mt-3 text-ocean/75 text-sm leading-relaxed">{s.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-3xl shadow-xl ring-4 ring-white max-w-md mx-auto md:max-w-none">
            <Image
              src="/about-our-story.jpg"
              alt="A warm hands-on art moment between a teacher and a toddler painting together at Kelly's Kidz Playhouse"
              width={1762}
              height={2048}
              className="w-full h-auto"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl text-ocean">Our Story</h2>
            <div className="mt-3 h-1 w-16 bg-sandy rounded-full" />
            <p className="mt-5 text-ocean/80 leading-relaxed">
              Kelly&apos;s Kidz Playhouse opened its doors in 1992 with a simple dream. To give
              the families of Rockaway Beach a daycare that feels like an extension of home.
              Three decades later, we&apos;re still here. Same love, same family, same little
              corner of the Rockaways.
            </p>
            <p className="mt-4 text-ocean/80 leading-relaxed">
              Over the years we&apos;ve watched babies grow into toddlers, toddlers become
              preschoolers, and more than a few grown-up &ldquo;kidz&rdquo; come back years later
              to drop off little ones of their own. That&apos;s the kind of trust you can&apos;t
              rush, and it&apos;s the heart of everything we do.
            </p>
            <p className="mt-4 text-ocean/80 leading-relaxed">
              We&apos;re proud to be small. Small means we know every child by name, every
              parent by face, and every laugh by heart.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-cream/50">
        <Container className="max-w-3xl text-center">
          <h2 className="font-display text-4xl text-ocean">Our Philosophy</h2>
          <div className="mt-3 mx-auto h-1 w-16 bg-sandy rounded-full" />
          <p className="mt-6 text-lg text-ocean/80 leading-relaxed">
            We believe play is learning. Through stories, music, art, sensory play,
            and lots of outdoor time, children build the skills, and confidence, they&apos;ll
            carry for life. We follow each child&apos;s lead, honoring who they are today and
            cheering on who they&apos;re becoming.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Safe & Licensed", body: "Fully licensed and insured, with safety protocols built into everything we do." },
            { title: "Tiny by Design", body: "Small group sizes mean every child gets the warmth and attention they need." },
            { title: "Love First", body: "Every cuddle, song, and giggle matters. We lead with kindness, always." },
          ].map((f) => (
            <div key={f.title} className="rounded-3xl bg-white p-8 shadow-sm border border-cream">
              <h3 className="font-display text-2xl text-ocean">{f.title}</h3>
              <p className="mt-3 text-ocean/75 leading-relaxed">{f.body}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
