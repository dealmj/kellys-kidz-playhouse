import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Marquee from "@/components/Marquee";
import Placeholder from "@/components/Placeholder";
import StructuredData from "@/components/StructuredData";
import { SITE } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <StructuredData />

      {/* HERO — edge-to-edge video, split layout on desktop, stacked on mobile */}
      <section className="relative bg-gradient-to-b from-cream via-shell to-shell overflow-hidden">
        <div className="grid lg:grid-cols-12 lg:min-h-[640px] xl:min-h-[720px]">
          {/* Text column — 5/12 of width on desktop, text centered in column */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex items-center">
            <div className="w-full px-6 sm:px-8 lg:px-12 xl:px-16 py-14 lg:py-20 max-w-xl mx-auto">
              <span className="inline-block rounded-full bg-seafoam/15 text-ocean px-4 py-1.5 text-sm font-bold">
                🌊 Rockaway Beach, Queens · Family-run since 1992
              </span>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-ocean leading-tight">
                Where little ones <span className="text-sandy">learn, laugh,</span> and grow by the sea.
              </h1>
              <p className="mt-6 text-lg text-ocean/80 leading-relaxed">
                For over 30 years, Kelly&apos;s Kidz Playhouse has been a warm, family-run daycare
                offering loving, hands-on care for infants, toddlers, and preschoolers ages
                6 weeks to 4 years, right here in the heart of Rockaway Beach.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-full bg-sandy hover:bg-ocean text-white px-7 py-3.5 font-bold shadow-lg transition"
                >
                  Schedule a Tour
                </Link>
                <Link
                  href="/programs"
                  className="rounded-full border-2 border-ocean text-ocean hover:bg-ocean hover:text-white px-7 py-3.5 font-bold transition"
                >
                  Our Programs
                </Link>
              </div>
            </div>
          </div>

          {/* Video column — 7/12 of width on desktop, edge-to-edge. Tall on mobile. */}
          <div className="order-1 lg:order-2 lg:col-span-7 relative w-full h-[65vh] min-h-[420px] lg:h-auto lg:min-h-full">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="/hero-poster.jpg"
              className="absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            >
              <source src="/hero-bg-mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
              <source src="/hero-bg.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* THREE VALUE PROPS */}
      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Play",
                body: "Hands-on, child-led play is the heart of every day. We follow each child's curiosity wherever it leads.",
                icon: "🪁",
              },
              {
                title: "Family",
                body: "We're a small, family-run home away from home where every child is known and loved by name.",
                icon: "💛",
              },
              {
                title: "Community",
                body: "Proudly serving Rockaway Beach families since 1992. Your neighbors, here for your little ones, generation after generation.",
                icon: "🌊",
              },
            ].map((v) => (
              <div key={v.title} className="text-center">
                <div className="text-5xl">{v.icon}</div>
                <h3 className="mt-4 font-display text-3xl text-ocean">{v.title}</h3>
                <div className="mt-2 mx-auto h-1 w-12 bg-sandy rounded-full" />
                <p className="mt-4 text-ocean/75 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* EASY DROP-OFF / GETTING HERE */}
      <section className="py-16 bg-cream/40">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block rounded-full bg-seafoam/15 text-ocean px-4 py-1.5 text-sm font-bold">
              Easy Mornings
            </span>
            <h2 className="mt-4 font-display text-4xl text-ocean">
              Drop-off shouldn&apos;t be the hardest part of your day
            </h2>
            <div className="mt-3 mx-auto h-1 w-16 bg-sandy rounded-full" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: "🚗",
                title: "Pull-in driveway",
                body: "No double-parking, no hazard lights. Pull right into our driveway, hand off your little one, and head out stress-free.",
              },
              {
                icon: "🚌",
                title: "One block from the Q35",
                body: "The Q35 bus stop is right up the block. Easy if you don't drive.",
              },
              {
                icon: "🚆",
                title: "Close to the A train",
                body: "A short walk from the Beach 116th St A train, with quick connections from across Brooklyn, Manhattan, and Queens.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-3xl bg-white p-8 shadow-sm border border-cream text-center"
              >
                <div className="text-5xl">{f.icon}</div>
                <h3 className="mt-4 font-display text-2xl text-ocean">{f.title}</h3>
                <div className="mt-3 mx-auto h-1 w-10 bg-sandy rounded-full" />
                <p className="mt-4 text-ocean/75 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* MARQUEE */}
      <Marquee items={["Playful", "Nurturing", "Safe", "Loving", "Creative", "Welcoming"]} />

      {/* IMAGE-TEXT BLOCKS */}
      <section className="py-24">
        <Container className="space-y-24">
          {[
            {
              title: "The Power of Play",
              body: "Children don't just play. They learn through play. Whether it's building, painting, singing, or splashing in the sensory bin, every game is a tiny lesson in creativity, kindness, and confidence.",
              flip: false,
              image: "/power-of-play-blocks.jpg",
              alt: "Children gathered around a bin of colorful blocks, building together at Kelly's Kidz Playhouse",
              width: 1536,
              height: 2048,
            },
            {
              title: "A Home Away From Home",
              body: "Our cozy, light-filled space feels like family because that's what we are. Small group sizes mean every child gets the attention, patience, and encouragement they deserve.",
              flip: true,
              image: "/home-cupcake-trio.jpg",
              alt: "Three kids enjoying cupcakes together at a little table at Kelly's Kidz Playhouse",
              width: 2048,
              height: 1536,
            },
            {
              title: "Rooted in Rockaway",
              body: "Rockaway summers are pure magic, and we soak up every minute. Backyard pool splashes, sunshine, and sticky popsicle smiles fill the playhouse from June through September. This is the neighborhood we've called home since 1992, and we love sharing every sunny moment of it with the kids.",
              flip: false,
              image: "/rooted-pool-day.jpg",
              alt: "Kids splashing in the backyard pool on a sunny summer day at Kelly's Kidz Playhouse in Rockaway Beach",
              width: 1536,
              height: 2048,
            },
          ].map((b) => (
            <div
              key={b.title}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                b.flip ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {b.image ? (
                <div className="overflow-hidden rounded-3xl shadow-xl ring-4 ring-white max-w-md mx-auto md:max-w-none">
                  <Image
                    src={b.image}
                    alt={b.alt}
                    width={b.width}
                    height={b.height}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <Placeholder label={`Photo: ${b.title}`} />
              )}
              <div>
                <h2 className="font-display text-4xl text-ocean">{b.title}</h2>
                <div className="mt-3 h-1 w-16 bg-sandy rounded-full" />
                <p className="mt-5 text-lg text-ocean/80 leading-relaxed">{b.body}</p>
              </div>
            </div>
          ))}
        </Container>
      </section>

      {/* TRUST & SAFETY STRIP */}
      <section className="py-14 bg-ocean text-cream">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: "✓", title: "NY State Licensed", body: "Fully licensed by NY OCFS" },
              { icon: "❤", title: "CPR & First Aid", body: "Certified caregivers" },
              { icon: "🛡", title: "Background-Checked", body: "Every staff member" },
              { icon: "🤝", title: "Fully Insured", body: "Peace of mind, always" },
            ].map((b) => (
              <div key={b.title}>
                <div className="text-4xl text-sandy">{b.icon}</div>
                <h3 className="mt-2 font-display text-xl text-white">{b.title}</h3>
                <p className="mt-1 text-cream/70 text-sm">{b.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* WORD TRAVELS IN ROCKAWAY */}
      <section className="bg-ocean text-cream py-24">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <span className="inline-block rounded-full bg-white/10 text-seafoam-light px-4 py-1.5 text-sm font-bold">
              A Neighborhood Favorite
            </span>
            <h2 className="mt-5 font-display text-4xl md:text-5xl text-white">
              Word travels in Rockaway
            </h2>
            <div className="mt-3 mx-auto h-1 w-16 bg-sandy rounded-full" />
            <p className="mt-6 text-lg text-cream/90 leading-relaxed">
              For 30+ years, families have found their way to Kelly&apos;s the same way:
              a friend, a neighbor, a parent at the playground who just had to share. No
              flashy ads, no social media campaigns. Just three decades of little ones
              walking out happier than they walked in, and parents telling everyone they know.
            </p>
            <p className="mt-5 text-lg text-cream/90 leading-relaxed">
              And every October, the whole neighborhood knows where to be. The legendary
              Halloween house right above the playhouse draws over a thousand visitors
              from across Rockaway in the week leading up to Halloween. Ask anyone.
              They&apos;ll know the one. 🎃
            </p>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded-full bg-sandy hover:bg-sun hover:text-ocean text-white px-8 py-4 font-bold shadow-lg transition"
            >
              Come See For Yourself
            </Link>
          </div>
        </Container>
      </section>

      {/* CONTACT TEASER — final CTA, absorbs the "visit in person" role */}
      <section className="py-24">
        <Container className="text-center max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl text-ocean">Come see it in person</h2>
          <div className="mt-3 mx-auto h-1 w-16 bg-sandy rounded-full" />
          <p className="mt-6 text-lg text-ocean/80 leading-relaxed">
            The best way to know if we&apos;re the right fit is a visit. We&apos;d love to show
            you around, answer your questions, and meet your little one. Reach out and we
            usually respond the same day.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="rounded-full bg-sandy hover:bg-ocean text-white px-8 py-4 font-bold shadow-lg transition"
            >
              Schedule a Tour
            </Link>
            <a
              href={SITE.phoneHref}
              className="rounded-full border-2 border-ocean text-ocean hover:bg-ocean hover:text-white px-8 py-4 font-bold transition"
            >
              Call {SITE.phone}
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
