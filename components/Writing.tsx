import Link from "next/link";
import { ArrowUpRight, PenLine, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Writing() {
  return (
    <section
      id="writing"
      className="scroll-mt-24 border-y border-white/[0.08] px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Writing"
            title="No Filters Attached"
            description="An interactive blog exploring abstract thoughts, creativity, and tech—without the polish filter."
          />
        </Reveal>

        <Reveal delay={90}>
          <Link
            href="/blog"
            className="mx-auto block max-w-3xl overflow-hidden rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#8B5CF6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] motion-reduce:hover:translate-y-0"
          >
            <article className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-md border border-white/[0.08] bg-black/20 px-3 py-1 font-mono text-xs text-[#A1A1AA]">
                  <PenLine
                    className="h-3.5 w-3.5 text-[#22D3EE]"
                    aria-hidden="true"
                  />
                  Blog series
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-3 py-1 font-mono text-xs text-[#8B5CF6]">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Overview
                </span>
              </div>

              <h3 className="mt-6 font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-[#F5F5F5]">
                No Filters Attached
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#A1A1AA]">
                An upcoming series on data analytics, RAG architectures,
                creativity, and experiences without filters.
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#8B5CF6]">
                View overview
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </article>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
