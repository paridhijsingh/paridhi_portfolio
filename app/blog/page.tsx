import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { WritingNotebook } from "@/components/WritingNotebook";

export const metadata: Metadata = {
  title: "What I'm learning | Paridhi Jay Singh",
  description:
    "Engineering notebook of what Paridhi is learning across AI, ML, LLMs, projects, and career.",
};

export default function BlogIndexPage() {
  return (
    <div className="lab-grid min-h-full bg-[#08090D]">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-24">
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
            What I&apos;m learning.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#A1A1AA]">
            Notes from projects, systems, and career growth in an engineering
            notebook format.
          </p>
          <div aria-hidden="true" className="mt-5 h-px w-16 bg-[#8B5CF6]" />
        </header>
        <WritingNotebook />
      </div>
    </div>
  );
}
