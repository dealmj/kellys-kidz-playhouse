import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a peek inside Kelly's Kidz Playhouse, our cozy daycare space and joyful little learners in Rockaway Beach, NY.",
};

const photos = [
  // Openers — the space
  {
    src: "/gallery-27-play-structure.jpg",
    alt: "The colorful indoor climbing and slide play structure inside the playhouse",
  },
  {
    src: "/gallery-26-painting-class.jpg",
    alt: "A teacher leading a painting project at a long table full of focused little artists",
  },

  // Learning & quiet focus
  {
    src: "/gallery-15-alphabet-staff.jpg",
    alt: "Preschoolers working on alphabet worksheets together with a teacher's help",
  },
  {
    src: "/gallery-13-alphabet.jpg",
    alt: "Two children practicing writing the letter A on alphabet worksheets",
  },
  {
    src: "/gallery-12-hearts-art.jpg",
    alt: "An overhead view of a child making a colorful Valentine's hearts art project",
  },
  {
    src: "/gallery-23-nemo-art.jpg",
    alt: "A preschooler proudly holding up his handmade clownfish art project",
  },
  {
    src: "/gallery-18-painting-girls.jpg",
    alt: "Two girls focused on their own paint-dab art projects",
  },

  // Play & group moments
  {
    src: "/gallery-11-block-bin.jpg",
    alt: "A group of toddlers playing together with a big bin of colorful wooden blocks",
  },
  {
    src: "/gallery-17-peg-toy.jpg",
    alt: "Two boys focused on a colorful peg-and-pattern learning toy",
  },
  {
    src: "/gallery-10-board-game.jpg",
    alt: "Kids gathered around a board game on the play rug",
  },
  {
    src: "/gallery-14-rocker.jpg",
    alt: "Three kids enjoying a ride together on a red rocking toy",
  },
  {
    src: "/gallery-20-play-tunnel.jpg",
    alt: "A toddler crawling out of a colorful play tunnel onto the playmat",
  },

  // Celebrations & holidays
  {
    src: "/gallery-19-birthday-candles.jpg",
    alt: "A toddler in a Happy Birthday hat blowing out candles on a cupcake",
  },
  {
    src: "/gallery-25-santa-craft.jpg",
    alt: "A teacher helping kids glue cotton balls onto Santa beard crafts at the playhouse table",
  },
  {
    src: "/gallery-22-santa-hats.jpg",
    alt: "Two little ones in Santa hats side by side during the holidays at the playhouse",
  },
  {
    src: "/gallery-16-halloween.jpg",
    alt: "A toddler in a construction worker Halloween costume posing with pumpkins and hay bales",
  },

  // Summer & pool
  {
    src: "/gallery-24-pool-sisters.jpg",
    alt: "Two little friends sharing a sunny summer day by the pool",
  },
  {
    src: "/gallery-21-pool-float.jpg",
    alt: "A smiling toddler in a baby pool float enjoying a sunny summer day",
  },
];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-cream py-20">
        <Container className="max-w-3xl text-center">
          <h1 className="font-display text-5xl text-ocean">Gallery</h1>
          <p className="mt-6 text-lg text-ocean/80 leading-relaxed">
            A peek inside our playhouse. Real moments from real days, full of
            building, creating, learning, and laughter.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((p, i) => (
              <div
                key={p.src}
                className="group overflow-hidden rounded-3xl shadow-md ring-2 ring-white bg-cream/40"
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={1600}
                  height={1066}
                  className="w-full h-72 object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={i < 6 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-ocean/60 italic">
            Photos shared with parental consent. We love showing off our little ones
            but we love their privacy more.
          </p>
        </Container>
      </section>
    </>
  );
}
