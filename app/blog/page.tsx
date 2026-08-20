import type { Metadata } from "next";
import { WritingNotebook } from "@/components/WritingNotebook";
import { SubpageNav } from "@/components/SubpageNav";

export const metadata: Metadata = {
  title: "What I'm learning | Paridhi Jay Singh",
  description:
    "Engineering notebook of what Paridhi is learning across AI, ML, LLMs, projects, and career.",
};

export default function BlogIndexPage() {
  return (
    <div className="lab-grid min-h-full bg-[#08090D]">
      <SubpageNav label="Writing" backHref="/#writing" />
      <main id="main-content" className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
        <header>
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
      </main>
    </div>
  );
}
