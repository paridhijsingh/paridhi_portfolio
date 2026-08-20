"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, PenLine } from "lucide-react";

type Category = "All" | "AI" | "Machine Learning" | "LLMs" | "Projects" | "Career";

type WritingEntry = {
  title: string;
  date: string;
  topic: Category;
  description: string;
  href?: string;
  placeholder?: boolean;
};

const CATEGORIES: readonly Category[] = [
  "All",
  "AI",
  "Machine Learning",
  "LLMs",
  "Projects",
  "Career",
];

const ENTRIES: readonly WritingEntry[] = [
  {
    title: "No Filters Attached",
    date: "Current overview",
    topic: "Career",
    description:
      "Series overview covering abstract thoughts, creativity, and the human side of building with AI.",
  },
  {
    title: "RAG Architecture Notes",
    date: "Date TBD (Placeholder)",
    topic: "LLMs",
    description:
      "Planned notebook entry on retrieval, reranking, and grounded response pipelines.",
    placeholder: true,
  },
  {
    title: "Model Evaluation Checklist",
    date: "Date TBD (Placeholder)",
    topic: "Machine Learning",
    description:
      "Planned entry documenting practical checks for training and evaluation loops.",
    placeholder: true,
  },
  {
    title: "Project Build Log",
    date: "Date TBD (Placeholder)",
    topic: "Projects",
    description:
      "Planned notes from real implementation decisions across deployed project systems.",
    placeholder: true,
  },
  {
    title: "Working With LLM APIs",
    date: "Date TBD (Placeholder)",
    topic: "AI",
    description:
      "Planned write-up on orchestration choices and API-level integration patterns.",
    placeholder: true,
  },
];

export function WritingNotebook() {
  const [selected, setSelected] = useState<Category>("All");
  const filteredEntries = ENTRIES.filter(
    (entry) => selected === "All" || entry.topic === selected,
  );

  return (
    <>
      <div className="mt-10 rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-5">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#22D3EE]">
          Categories
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {CATEGORIES.map((category) => {
            const isActive = selected === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelected(category)}
                className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-all ${
                  isActive
                    ? "border-[#8B5CF6]/45 bg-[#8B5CF6]/12 text-[#F5F5F5]"
                    : "border-white/[0.08] bg-black/20 text-[#A1A1AA] hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredEntries.map((entry, index) => {
          const cardContent = (
            <article className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-black/20 px-2.5 py-1 font-mono text-[0.68rem] text-[#A1A1AA]">
                  <PenLine className="h-3.5 w-3.5 text-[#22D3EE]" />
                  {entry.topic}
                </span>
                {entry.placeholder ? (
                  <span className="rounded-md border border-dashed border-white/[0.14] px-2 py-0.5 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-[#A1A1AA]/80">
                    Placeholder
                  </span>
                ) : null}
              </div>

              <h2 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight text-[#F5F5F5]">
                {entry.title}
              </h2>
              <p className="mt-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-[#A1A1AA]/80">
                {entry.date}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-[#A1A1AA]">
                {entry.description}
              </p>

              <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[#8B5CF6] transition-colors group-hover:text-[#22D3EE]">
                Read
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </article>
          );

          if (entry.href) {
            return (
              <Link
                key={`${entry.title}-${entry.topic}`}
                href={entry.href}
                className="group block overflow-hidden rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#8B5CF6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] motion-reduce:hover:translate-y-0"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                {cardContent}
              </Link>
            );
          }

          return (
            <div
              key={`${entry.title}-${entry.topic}`}
              className="group block overflow-hidden rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#8B5CF6]/30 motion-reduce:hover:translate-y-0"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              {cardContent}
            </div>
          );
        })}
      </div>
    </>
  );
}
