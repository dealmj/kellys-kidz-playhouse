// Placeholder image block — swap for <Image> once real photos are ready.
export default function Placeholder({
  label,
  className = "",
  ratio = "aspect-[4/3]",
}: {
  label: string;
  className?: string;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} ${className} relative overflow-hidden rounded-3xl bg-gradient-to-br from-seafoam-light via-seafoam to-ocean flex items-center justify-center shadow-md`}
    >
      <span className="text-white/90 font-display text-lg md:text-xl text-center px-6">
        {label}
      </span>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.6) 0%, transparent 50%)",
        }}
      />
    </div>
  );
}
