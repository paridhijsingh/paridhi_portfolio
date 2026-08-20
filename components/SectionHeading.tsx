type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={`mb-12 ${isCentered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-4xl">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className={`mt-5 h-px w-16 bg-[#8B5CF6] ${isCentered ? "mx-auto" : ""}`}
      />
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
