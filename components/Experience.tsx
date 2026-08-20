import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 border-y border-white/[0.08] px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Professional history"
            description="A concise record of roles, impact, and the systems I've helped build."
          />
        </Reveal>

        <Reveal delay={90}>
          <div className="mx-auto max-w-2xl rounded-xl border border-dashed border-white/[0.12] bg-[rgba(255,255,255,0.02)] px-8 py-12 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
              Placeholder
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#A1A1AA]">
              Experience details are being prepared and will be added here
              soon. Check back for role summaries, timelines, and selected
              outcomes.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
