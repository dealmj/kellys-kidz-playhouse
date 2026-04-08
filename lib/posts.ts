// Temporary file-based blog so the site is fully working out of the box.
// This is the ONLY file you'll touch when migrating to Sanity later — the
// Post type and getAllPosts/getPost API stay the same.

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  author: string;
  body: string[]; // paragraphs
};

export const POSTS: Post[] = [
  {
    slug: "5-signs-your-toddler-is-ready-for-daycare",
    title: "5 Signs Your Toddler Is Ready for Daycare",
    excerpt:
      "Wondering if it's time? Here are five gentle clues that your little one is ready for the big leap into daycare.",
    date: "2026-03-15",
    author: "Kelly",
    body: [
      "Starting daycare is a huge milestone for the whole family. As a Rockaway Beach daycare, we get this question from parents all the time: \"How do I know my child is ready?\"",
      "1. They show interest in other kids. If your toddler lights up when they see other children at the playground or boardwalk, they may be craving the social side of daycare.",
      "2. They can self-soothe. Being able to settle themselves with a favorite toy or song is a big sign of emotional readiness.",
      "3. They're following simple routines at home. Predictable nap and snack times translate beautifully into a daycare day.",
      "4. They're curious about new things. A child who loves exploring is a child who'll thrive in a play-based environment.",
      "5. You're ready, too. Honestly, your readiness matters just as much. The best daycare experiences start with a confident, supported parent.",
      "Still not sure? Come visit us. Sometimes a quick tour is all it takes to know.",
    ],
  },
  {
    slug: "why-play-based-learning-matters",
    title: "Why Play-Based Learning Matters (Especially for Little Kids)",
    excerpt:
      "Play isn't just fun. It's how children build the skills they'll carry for life. Here's why we put play first.",
    date: "2026-02-20",
    author: "Kelly",
    body: [
      "When you walk into our playhouse, you'll see kids building forts, painting with their fingers, splashing in the sensory bin, and dancing to music. That's not chaos. That's learning.",
      "Play-based learning is exactly what it sounds like. Children learn through play. Decades of research from organizations like the American Academy of Pediatrics back this up.",
      "When children play, they're practicing problem-solving, language, motor skills, empathy, patience, and self-regulation. All the foundations for kindergarten, and for life.",
      "At Kelly's Kidz Playhouse, we follow each child's curiosity. Some days that means a bug hunt in the backyard, other days it's a pretend grocery store with shells from the beach.",
      "If you want to see play-based learning in action, come visit us in Rockaway Beach. We'd love to show you around.",
    ],
  },
  {
    slug: "what-to-pack-for-your-childs-first-day",
    title: "What to Pack for Your Child's First Day of Daycare",
    excerpt:
      "A simple checklist to make first-day jitters easier, for both you and your little one.",
    date: "2026-01-10",
    author: "Kelly",
    body: [
      "First days are big. Here's everything we recommend packing so you're not scrambling that morning.",
      "Two full changes of clothes. Accidents and spills happen, and that's okay!",
      "Diapers and wipes if your child isn't potty-trained yet (we'll let you know when supplies run low).",
      "A labeled water bottle and any special snacks if your child has dietary needs.",
      "A comfort item like a stuffed animal, blanket, or family photo can ease separation.",
      "Sunscreen and a hat for outdoor play (we love our boardwalk strolls).",
      "And most importantly, a hug, a confident wave, and trust that we've got them. We'll text you if anything comes up. Promise.",
    ],
  },
];

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
