"use client";

import { useCallback, useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { CoverNav } from "@/components/CoverNav";
import { HeroNetworkBackground } from "@/components/HeroNetworkBackground";
import { SITE } from "@/lib/constants";

type IntroCoverProps = {
  onComplete: (targetHash?: string) => void;
};

function revealClass(ready: boolean, delay: string) {
  return `transition-all duration-700 motion-reduce:transition-none ${delay} ${
    ready ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
  }`;
}

export function IntroCover({ onComplete }: IntroCoverProps) {
  const [ready, setReady] = useState(false);
  const [turning, setTurning] = useState(false);
  const [targetHash, setTargetHash] = useState<string | undefined>();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => setReady(true), 100);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  const beginTurn = useCallback((hash?: string) => {
    if (turning) return;
    setTargetHash(hash);
    setTurning(true);
  }, [turning]);

  useEffect(() => {
    if (!turning) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reduceMotion ? 120 : 900;
    const timer = window.setTimeout(() => {
      document.body.style.overflow = "";
      onComplete(targetHash);
    }, duration);
    return () => window.clearTimeout(timer);
  }, [turning, onComplete, targetHash]);

  const handleNavigate = (href: string) => beginTurn(href);

  return (
    <div
      className="lab-grid fixed inset-0 z-[100] overflow-hidden bg-[#08090D]"
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio cover"
    >
      <HeroNetworkBackground />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(139,92,246,0.07),transparent_55%)]"
      />

      <div
        className={`page-turn-surface relative flex min-h-full flex-col ${
          ready ? "opacity-100" : "opacity-0"
        } ${turning ? "page-turning" : ""}`}
      >
        <CoverNav onNavigate={handleNavigate} />

        <main className="relative flex flex-1 flex-col items-center justify-center px-6 py-12 sm:px-8 sm:py-16">
          <div className="mx-auto w-full max-w-3xl text-center">
            <p
              className={`font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[#22D3EE] sm:text-xs ${revealClass(ready, "delay-0")}`}
            >
              AI ENGINEER · DATA SCIENCE
            </p>

            <h1
              className={`mt-6 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight text-[#F5F5F5] sm:text-5xl lg:text-6xl ${revealClass(ready, "delay-100")}`}
            >
              Hi, I&apos;m Paridhi.
            </h1>

            <p
              className={`mt-4 font-[family-name:var(--font-heading)] text-xl font-medium tracking-tight text-[#F5F5F5]/90 sm:text-2xl lg:text-3xl ${revealClass(ready, "delay-200")}`}
            >
              I build AI systems that can actually do things.
            </p>

            <p
              className={`mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#A1A1AA] sm:text-lg ${revealClass(ready, "delay-300")}`}
            >
              I work across LLM applications, RAG systems, agentic workflows,
              and data science.
            </p>

            <div
              className={`mt-10 flex flex-wrap items-center justify-center gap-3 ${revealClass(ready, "delay-500")}`}
            >
              <button
                type="button"
                onClick={() => beginTurn("#work")}
                disabled={turning}
                className="btn-primary min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] disabled:cursor-wait disabled:opacity-80 motion-reduce:hover:translate-y-0 group"
              >
                Explore my work
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
                  aria-hidden="true"
                />
              </button>
              <a
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] motion-reduce:hover:translate-y-0"
              >
                View resume
              </a>
            </div>
          </div>
        </main>

        <button
          type="button"
          onClick={() => beginTurn()}
          disabled={turning}
          className={`group relative z-10 min-h-12 w-full pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-2 text-center font-mono text-xs uppercase tracking-[0.22em] text-[#A1A1AA]/70 transition-all duration-700 motion-reduce:transition-none hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] disabled:cursor-wait ${
            ready ? "translate-y-0 opacity-100 delay-700" : "translate-y-3 opacity-0"
          }`}
        >
          <span className="inline-flex items-center gap-2">
            Turn the page
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
              aria-hidden="true"
            />
          </span>
        </button>
      </div>
    </div>
  );
}
