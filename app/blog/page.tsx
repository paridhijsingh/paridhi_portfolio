import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, PenLine, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "No Filters Attached | Paridhi Jay Singh",
  description:
    "An overview of No Filters Attached — a blog exploring abstract thoughts, creativity, and tech without the polish filter.",
};

export default function BlogIndexPage() {
  return (
    <div className="lab-grid min-h-full bg-[#08090D]">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <Link
          href="/#writing"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#A1A1AA] transition-colors hover:text-[#8B5CF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to portfolio
        </Link>

        <header className="mt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
            Writing
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight text-[#F5F5F5] sm:text-5xl">
            No Filters Attached
          </h1>
          <div aria-hidden="true" className="mt-5 h-px w-16 bg-[#8B5CF6]" />
        </header>

        <article className="mt-10 overflow-hidden rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)]">
          <div className="p-8 sm:p-10">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-md border border-white/[0.08] bg-black/20 px-3 py-1 font-mono text-xs text-[#A1A1AA]">
                <PenLine
                  className="h-3.5 w-3.5 text-[#22D3EE]"
                  aria-hidden="true"
                />
                Blog overview
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-md border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-3 py-1 font-mono text-xs text-[#8B5CF6]">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Coming soon
              </span>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-[#A1A1AA]">
              <strong className="font-semibold text-[#F5F5F5]">
                No Filters Attached
              </strong>{" "}
              is an upcoming interactive blog for abstract thoughts, creativity,
              and tech — written without the polish filter.
            </p>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-[#A1A1AA]">
              <p>Expect essays and fragments on:</p>
              <ul className="list-disc space-y-2 pl-5">
                <li>Data analytics projects and applied statistical thinking</li>
                <li>
                  Retrieval-Augmented Generation (RAG) architectures and system
                  design
                </li>
                <li>
                  Experiences without filters — creativity, process, and the
                  human side of building with AI
                </li>
              </ul>
              <p>
                Posts will land here as they&apos;re ready. For now, this page
                is the home base for the series.
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
