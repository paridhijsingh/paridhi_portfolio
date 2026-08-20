"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";

type IntroCoverProps = {
  onComplete: () => void;
};

export function IntroCover({ onComplete }: IntroCoverProps) {
  const [ready, setReady] = useState(false);
  const [turning, setTurning] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => setReady(true), 80);
    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!turning) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const duration = reduceMotion ? 120 : 900;
    const timer = window.setTimeout(() => {
      document.body.style.overflow = "";
      onComplete();
    }, duration);
    return () => window.clearTimeout(timer);
  }, [turning, onComplete]);

  const handleNext = () => {
    if (turning) return;
    setTurning(true);
  };

  return (
    <div
      className="lab-grid fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#08090D]"
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio introduction"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.1),transparent_60%)]"
      />

      <div
        className={`page-turn-surface relative mx-4 flex h-[min(88vh,760px)] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] shadow-2xl shadow-black/40 ${
          ready ? "opacity-100" : "opacity-0"
        } ${turning ? "page-turning" : ""}`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white/[0.06] to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-0 h-3 rounded-b-full bg-white/[0.04] shadow-inner"
        />

        <div className="relative flex flex-1 flex-col items-center justify-center px-8 py-16 text-center sm:px-12">
          <div
            className={`transition-all duration-700 motion-reduce:transition-none ${
              ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <Image
              src="/profile.jpg"
              alt="Paridhi Jay Singh - Profile Picture"
              width={320}
              height={320}
              priority
              className="h-32 w-32 rounded-full border-2 border-[#8B5CF6]/40 object-cover object-top shadow-lg shadow-[#8B5CF6]/10 sm:h-40 sm:w-40"
            />
          </div>

          <p
            className={`mt-7 font-mono text-xs uppercase tracking-[0.28em] text-[#22D3EE] transition-all delay-100 duration-700 motion-reduce:transition-none ${
              ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Page 01 · Portfolio
          </p>

          <h1
            className={`mt-4 font-[family-name:var(--font-heading)] text-4xl font-semibold tracking-tight text-[#F5F5F5] transition-all delay-150 duration-700 motion-reduce:transition-none sm:text-5xl lg:text-6xl ${
              ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {SITE.name}
          </h1>

          <p
            className={`mt-3 font-mono text-sm text-[#8B5CF6] transition-all delay-200 duration-700 motion-reduce:transition-none ${
              ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {SITE.role}
          </p>

          <p
            className={`mt-5 max-w-md text-base leading-relaxed text-[#A1A1AA] transition-all delay-300 duration-700 motion-reduce:transition-none sm:text-lg ${
              ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            Turn the page to enter the lab — projects, systems, and writing.
          </p>

          <div
            className={`mt-10 transition-all delay-500 duration-700 motion-reduce:transition-none ${
              ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={handleNext}
              disabled={turning}
              className="group inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-[rgba(255,255,255,0.04)] px-7 py-3.5 text-sm font-medium text-[#F5F5F5] transition-all hover:border-[#8B5CF6]/40 hover:bg-[#8B5CF6]/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] disabled:cursor-wait disabled:opacity-80 motion-reduce:hover:translate-y-0 hover:-translate-y-0.5"
            >
              Next
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 motion-reduce:group-hover:translate-x-0"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <p className="pb-8 text-center font-mono text-xs uppercase tracking-[0.18em] text-[#A1A1AA]/60">
          Digital book · AI laboratory
        </p>
      </div>
    </div>
  );
}
