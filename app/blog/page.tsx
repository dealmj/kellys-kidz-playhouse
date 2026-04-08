import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips, stories, and advice for Rockaway Beach families from Kelly's Kidz Playhouse, a small, family-run daycare.",
};

export default function BlogIndex() {
  const posts = getAllPosts();
  return (
    <>
      <section className="bg-cream py-20">
        <Container className="max-w-3xl text-center">
          <h1 className="font-display text-5xl text-ocean">From the Playhouse</h1>
          <p className="mt-6 text-lg text-ocean/80">
            Tips, stories, and gentle advice for Rockaway Beach families.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group rounded-3xl bg-white border border-cream shadow-sm hover:shadow-lg transition overflow-hidden"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-seafoam-light via-seafoam to-ocean" />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-wider text-sandy">
                    {new Date(p.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h2 className="mt-2 font-display text-2xl text-ocean group-hover:text-sandy transition">
                    {p.title}
                  </h2>
                  <p className="mt-3 text-ocean/75 leading-relaxed">{p.excerpt}</p>
                  <p className="mt-4 text-sandy font-bold">Read more →</p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
