import Link from "next/link";
import { ArrowUpRight, PenLine, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Writing() {
  return (
    <section
      id="writing"
      className="scroll-mt-24 border-y border-slate-200/70 bg-white/70 px-6 py-24 sm:px-8"
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
            className="mx-auto block max-w-3xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            <article>
              <div
                aria-hidden="true"
                className="h-1.5 w-full bg-gradient-to-r from-sky-500 via-indigo-400 to-sky-500"
              />
              <div className="p-8 sm:p-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                    <PenLine
                      className="h-3.5 w-3.5 text-sky-600"
                      aria-hidden="true"
                    />
                    Blog series
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Live on /blog
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-slate-900">
                  No Filters Attached
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  An upcoming series on data analytics, RAG architectures,
                  creativity, and experiences without filters.
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-sky-700">
                  View overview
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </article>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
