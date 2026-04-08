import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "From infants to preschoolers (6 weeks to 4 years), Kelly's Kidz Playhouse offers loving, age-appropriate daycare in Rockaway Beach, NY since 1992.",
};

const programs = [
  {
    age: "Infants",
    range: "6 weeks – 12 months",
    body: "Songs, gentle routines, and a quiet corner just for our littlest ones. We follow your baby's natural rhythms throughout the day so they feel safe, settled, and right at home.",
    image: "/program-infants-bouncer.jpg",
    alt: "A peacefully sleeping baby swaddled in a soft white blanket in a cozy bouncer at Kelly's Kidz Playhouse",
    width: 960,
    height: 638,
  },
  {
    age: "Toddlers",
    range: "1 – 2 years",
    body: "Tiny explorers in their element. Sensory bins, story time, art, music, and lots of safe space to wobble, climb, and discover.",
    image: "/program-toddlers-pool.jpg",
    alt: "A focused toddler exploring a pool toy on a sunny summer day at Kelly's Kidz Playhouse",
    width: 1073,
    height: 711,
  },
  {
    age: "Preschoolers",
    range: "3 – 4 years",
    body: "Friendships, imagination, and the building blocks of confidence. Our preschoolers thrive through play-based learning that sets the stage for kindergarten.",
    image: "/program-preschoolers.jpg",
    alt: "Preschoolers working on alphabet worksheets together with a teacher's help at Kelly's Kidz Playhouse",
    width: 720,
    height: 960,
  },
];

export default function ProgramsPage() {
  return (
    <>
      <section className="bg-cream py-20">
        <Container className="max-w-3xl text-center">
          <h1 className="font-display text-5xl text-ocean">Our Programs</h1>
          <p className="mt-6 text-lg text-ocean/80 leading-relaxed">
            Loving care for every stage, from those first tiny giggles to confident
            preschool adventures.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="space-y-20">
          {programs.map((p, i) => (
            <div
              key={p.age}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-3xl shadow-xl ring-4 ring-white max-w-md mx-auto md:max-w-none">
                <Image
                  src={p.image}
                  alt={p.alt}
                  width={p.width}
                  height={p.height}
                  className="w-full h-auto"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div>
                <p className="text-sandy font-bold uppercase tracking-wider">{p.range}</p>
                <h2 className="mt-2 font-display text-4xl text-ocean">{p.age}</h2>
                <div className="mt-3 h-1 w-16 bg-sandy rounded-full" />
                <p className="mt-5 text-lg text-ocean/80 leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* A DAY AT THE PLAYHOUSE */}
      <section className="py-24 bg-cream/40">
        <Container className="max-w-4xl">
          <div className="text-center mb-14">
            <span className="inline-block rounded-full bg-seafoam/15 text-ocean px-4 py-1.5 text-sm font-bold">
              A Day at the Playhouse
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-ocean">
              What a typical day looks like
            </h2>
            <div className="mt-3 mx-auto h-1 w-16 bg-sandy rounded-full" />
            <p className="mt-5 text-ocean/75">
              Every day is a little different, but here&apos;s the gentle rhythm we follow.
            </p>
          </div>

          <ol className="relative border-l-4 border-seafoam/30 ml-4 md:ml-8 space-y-8">
            {[
              { time: "7:30 AM", title: "Warm welcomes & free play", body: "Doors open. Hugs, hellos, and a soft start with favorite toys." },
              { time: "9:00 AM", title: "Morning circle & songs", body: "Greeting songs, story time, and a peek at what the day holds." },
              { time: "10:00 AM", title: "Snack & creative play", body: "A healthy snack, then art, sensory bins, or building together." },
              { time: "11:00 AM", title: "Outdoor time", body: "Fresh air, boardwalk strolls, and stretching little legs (weather permitting)." },
              { time: "12:00 PM", title: "Lunch & wind-down", body: "Lunch at our little tables, then a quiet transition to nap time." },
              { time: "1:00 PM", title: "Nap & rest", body: "Cozy naps for the little ones, quiet activities for the older kids." },
              { time: "3:00 PM", title: "Snack & free play", body: "Wake up, snack, and back to discovering, building, and pretending." },
              { time: "4:00 PM", title: "Music, dance & wind-down", body: "Songs, movement, and one last burst of joy before pick-up." },
              { time: "5:00 PM", title: "Pick-up & goodbye hugs", body: "See you tomorrow! Doors close at 5:00 PM sharp." },
            ].map((item) => (
              <li key={item.time} className="ml-6">
                <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-sandy ring-4 ring-cream/40">
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <div className="rounded-2xl bg-white border border-cream shadow-sm p-6">
                  <p className="text-sandy font-bold uppercase tracking-wider text-sm">
                    {item.time}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-ocean">{item.title}</h3>
                  <p className="mt-2 text-ocean/75 leading-relaxed">{item.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-center text-sm text-ocean/60 italic">
            Schedule may shift gently based on the kids&apos; needs and the weather.
          </p>
        </Container>
      </section>

      <section className="py-20 bg-ocean text-cream text-center">
        <Container className="max-w-2xl">
          <h2 className="font-display text-4xl text-white">Spots fill quickly</h2>
          <p className="mt-4 text-cream/80">Reach out to check availability and schedule a tour.</p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-sandy hover:bg-sun hover:text-ocean text-white px-8 py-4 font-bold shadow-lg transition"
          >
            Schedule a Tour
          </Link>
        </Container>
      </section>
    </>
  );
}
