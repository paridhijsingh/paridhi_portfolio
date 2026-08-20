"use client";

import Typewriter from "typewriter-effect";
import { ArrowRight, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";

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
      <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center text-center">
        <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-[#22D3EE]">
          {SITE.role}
        </p>

        <h1 className="max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-4xl lg:text-5xl">
          Hi, I&apos;m {SITE.name}. Welcome to...
        </h1>

        <div className="mt-6 min-h-[4.5rem] w-full max-w-3xl font-[family-name:var(--font-heading)] text-2xl font-medium tracking-tight text-[#F5F5F5] sm:min-h-[5rem] sm:text-3xl lg:text-4xl">
          <Typewriter
            options={{
              strings: TYPING_STRINGS,
              autoStart: true,
              loop: true,
              delay: 45,
              deleteSpeed: 25,
              cursor: "|",
              wrapperClassName: "text-[#F5F5F5]",
              cursorClassName: "typewriter-cursor",
            }}
          />
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
          Exploring intelligent systems, resilient data pipelines, and the
          craft of building AI that holds up in the real world.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[rgba(255,255,255,0.04)] px-6 py-3 text-sm font-medium text-[#F5F5F5] transition-all hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] motion-reduce:hover:translate-y-0 hover:-translate-y-0.5"
          >
            Explore My Research
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
              aria-hidden="true"
            />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-6 py-3 text-sm font-medium text-[#F5F5F5] transition-all hover:border-[#22D3EE]/50 hover:bg-[#22D3EE]/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] motion-reduce:hover:translate-y-0 hover:-translate-y-0.5"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
