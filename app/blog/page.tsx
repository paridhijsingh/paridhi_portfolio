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
    <div className="min-h-full bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:px-8 sm:py-24">
        <Link
          href="/#writing"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to portfolio
        </Link>

        <header className="mt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Writing
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            No Filters Attached
          </h1>
          <div
            aria-hidden="true"
            className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-indigo-400"
          />
        </header>

        <article className="mt-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
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
                Blog overview
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Coming soon
              </span>
            </div>

            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              <strong className="font-semibold text-slate-900">
                No Filters Attached
              </strong>{" "}
              is an upcoming interactive blog for abstract thoughts, creativity,
              and tech — written without the polish filter.
            </p>

            <div className="mt-8 space-y-4 text-base leading-relaxed text-slate-600">
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
