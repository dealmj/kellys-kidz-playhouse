import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Kelly's Kidz Playhouse, including ages, hours, meals, drop-off, and enrollment. A trusted Rockaway Beach daycare since 1992.",
};

const faqs = [
  {
    q: "What ages do you accept?",
    a: "We welcome little ones from 6 weeks old through 4 years old. Infants, toddlers, and preschoolers all have a loving home at the playhouse.",
  },
  {
    q: "What are your hours?",
    a: `${SITE.hours.weekdays}. ${SITE.hours.weekend}.`,
  },
  {
    q: "Are you licensed?",
    a: "Yes. Kelly's Kidz Playhouse is fully licensed by the New York State Office of Children and Family Services (OCFS), and our staff is CPR and First Aid certified.",
  },
  {
    q: "How long have you been open?",
    a: "Kelly opened the playhouse in 1992. Over 30 years later, we're still right here in the same Rockaway Beach home, caring for the next generation of neighborhood little ones.",
  },
  {
    q: "What does a typical day look like?",
    a: "Mornings start with warm welcomes and free play, followed by circle time, songs, art, snack, outdoor time when weather allows, lunch, naps for the little ones, and afternoon play before pick-up. You can see our full daily schedule on the Programs page.",
  },
  {
    q: "Do you provide meals or do parents pack?",
    a: "Please reach out so we can walk you through our current meal and snack approach, plus how we handle dietary needs and allergies.",
  },
  {
    q: "How does drop-off work? Is parking a hassle?",
    a: "We have a private pull-in driveway, so you can pull right up and hand off your child without circling the block or double-parking. It's one of the things parents love most about us.",
  },
  {
    q: "What if I take public transit?",
    a: "The Q35 bus stop is right up the block, and the Beach 116th St A train is a short walk away. Easy from anywhere in the city.",
  },
  {
    q: "How much does it cost?",
    a: "Tuition varies based on age and schedule. Please give us a call or send a message and we'll walk you through current rates and availability.",
  },
  {
    q: "What's your sick child policy?",
    a: "For everyone's safety, children with fevers, contagious illnesses, or anything that would keep them from comfortably participating should stay home until they're feeling better. We'll go over the full policy during your tour.",
  },
  {
    q: "Do you offer part-time or full-time care?",
    a: "We do our best to work with each family's schedule. Reach out and let us know what you're looking for.",
  },
  {
    q: "How do I enroll? What's the next step?",
    a: "The best first step is a tour. Schedule a visit through our Contact page or give us a call. We'll show you the space, answer your questions, and walk you through enrollment from there.",
  },
];

export default function FAQPage() {
  // Inline FAQPage schema for SEO rich results
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-cream py-20">
        <Container className="max-w-3xl text-center">
          <h1 className="font-display text-5xl text-ocean">Frequently Asked Questions</h1>
          <p className="mt-6 text-lg text-ocean/80">
            Everything you might want to know before scheduling a tour. Don&apos;t see your
            question? Just give us a call.
          </p>
        </Container>
      </section>

      <section className="py-20">
        <Container className="max-w-3xl">
          <div className="space-y-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-white border border-cream shadow-sm p-6 open:shadow-md transition"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <h2 className="font-display text-xl text-ocean">{f.q}</h2>
                  <span className="shrink-0 mt-1 text-sandy text-2xl font-bold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-ocean/80 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-ocean text-cream p-10 text-center">
            <h2 className="font-display text-3xl text-white">Still have questions?</h2>
            <p className="mt-3 text-cream/85">
              We&apos;re happy to chat. The best way to find out if we&apos;re the right fit is to
              come visit in person.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-block rounded-full bg-sandy hover:bg-sun hover:text-ocean text-white px-8 py-4 font-bold shadow-lg transition"
            >
              Schedule a Tour
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
