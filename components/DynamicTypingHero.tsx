"use client";

import Typewriter from "typewriter-effect";
import { ArrowRight, Mail } from "lucide-react";

const TYPING_STRINGS = [
  "Data Analytics Projects",
  "Retrieval-Augmented Generation (RAG) Architectures.",
  "Experiences without Filters",
];

export function DynamicTypingHero() {
  return (
    <section
      id="home"
      className="relative scroll-mt-24 overflow-hidden px-6 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-slate-400/10 blur-3xl" />
      </div>

      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-600">
          AI Engineer · Data Scientist
        </p>

        <h1 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Hi, I&apos;m Paridhi Jay Singh. Welcome to...
        </h1>

        <div className="mt-6 min-h-[4.5rem] w-full max-w-3xl text-2xl font-medium tracking-tight text-slate-800 sm:min-h-[5rem] sm:text-3xl lg:text-4xl">
          <Typewriter
            options={{
              strings: TYPING_STRINGS,
              autoStart: true,
              loop: true,
              delay: 45,
              deleteSpeed: 25,
              cursor: "|",
              wrapperClassName: "text-slate-800",
              cursorClassName: "typewriter-cursor text-emerald-500",
            }}
          />
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Exploring intelligent systems, resilient data pipelines, and the
          craft of building AI that holds up in the real world.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/50 px-6 py-3 text-sm font-medium text-slate-800 shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/70 hover:text-emerald-800 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            Explore My Research
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-slate-900/80 px-6 py-3 text-sm font-medium text-white shadow-sm backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
