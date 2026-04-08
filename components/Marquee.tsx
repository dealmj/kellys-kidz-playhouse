export default function Marquee({ items }: { items: string[] }) {
  return (
    <div className="overflow-hidden bg-seafoam py-4 border-y-2 border-ocean/10">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy === 1}
          >
            {items.map((text, i) => (
              <li
                key={i}
                className="font-display text-xl md:text-2xl text-white flex items-center px-8 whitespace-nowrap"
              >
                {text}
                <span className="text-sun ml-16" aria-hidden="true">✦</span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
