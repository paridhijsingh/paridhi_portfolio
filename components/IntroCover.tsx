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
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-slate-100"
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio introduction"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.12),_transparent_55%),radial-gradient(ellipse_at_bottom,_rgba(14,165,233,0.1),_transparent_50%)]"
      />

      <div
        className={`page-turn-surface relative mx-4 flex h-[min(88vh,760px)] w-full max-w-3xl flex-col overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-emerald-50/40 shadow-2xl shadow-slate-900/15 ${
          ready ? "opacity-100" : "opacity-0"
        } ${turning ? "page-turning" : ""}`}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-slate-200/70 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-8 top-0 h-3 rounded-b-full bg-slate-300/50 shadow-inner"
        />

        <div className="relative flex flex-1 flex-col items-center justify-center px-8 py-16 text-center sm:px-12">
          <div
            className={`transition-all duration-700 ${
              ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            <Image
              src="/profile.jpg"
              alt="Paridhi Jay Singh - Profile Picture"
              width={320}
              height={320}
              priority
              className="h-32 w-32 rounded-full border-4 border-white object-cover object-top shadow-xl shadow-slate-900/10 ring-1 ring-slate-200 sm:h-40 sm:w-40"
            />
          </div>

          <p
            className={`mt-7 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-600 transition-all delay-100 duration-700 ${
              ready ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            Welcome
          </p>

          <h1
            className={`mt-4 text-4xl font-semibold tracking-tight text-slate-900 transition-all delay-150 duration-700 sm:text-5xl lg:text-6xl ${
              ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {SITE.name}
          </h1>

          <p
            className={`mt-5 max-w-md text-base leading-relaxed text-slate-600 transition-all delay-300 duration-700 sm:text-lg ${
              ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            AI Engineer & Data Scientist. Turn the page to explore projects,
            systems, and writing.
          </p>

          <div
            className={`mt-10 transition-all delay-500 duration-700 ${
              ready ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            <button
              type="button"
              onClick={handleNext}
              disabled={turning}
              className="group inline-flex items-center gap-2 rounded-full border border-white/50 bg-slate-900/90 px-7 py-3.5 text-sm font-medium text-white shadow-lg shadow-slate-900/20 backdrop-blur-md transition-all hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:cursor-wait disabled:opacity-80"
            >
              Next
              <ArrowRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <p className="pb-8 text-center text-xs tracking-[0.18em] text-slate-400 uppercase">
          Page 01 · Portfolio
        </p>
      </div>
    </div>
  );
}
