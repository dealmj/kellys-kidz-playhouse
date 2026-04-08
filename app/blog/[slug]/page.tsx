import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import { getAllPosts, getPost } from "@/lib/posts";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="py-20">
      <Container className="max-w-3xl">
        <Link href="/blog" className="text-sandy font-bold hover:underline">
          ← Back to blog
        </Link>
        <p className="mt-8 text-sm font-bold uppercase tracking-wider text-sandy">
          {new Date(post.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.author}
        </p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl text-ocean leading-tight">
          {post.title}
        </h1>
        <div className="mt-4 h-1 w-16 bg-sandy rounded-full" />

        <div className="mt-10 space-y-5 text-lg text-ocean/85 leading-relaxed">
          {post.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-cream">
          <p className="text-ocean/80">
            Curious about our daycare?{" "}
            <Link href="/contact" className="text-sandy font-bold hover:underline">
              Schedule a tour →
            </Link>
          </p>
        </div>
      </Container>
    </article>
  );
}
