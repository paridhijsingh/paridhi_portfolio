"use client";

import { useCallback, useEffect, useState } from "react";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { IntroCover } from "@/components/IntroCover";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Writing } from "@/components/Writing";

export function HomeShell() {
  const [entered, setEntered] = useState(false);
  const [pendingHash, setPendingHash] = useState<string | null>(null);

  const handleIntroComplete = useCallback((targetHash?: string) => {
    setEntered(true);
    if (targetHash) setPendingHash(targetHash);
  }, []);

  useEffect(() => {
    if (!entered || !pendingHash) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const timer = window.setTimeout(() => {
      const target = document.querySelector(pendingHash);
      if (target) {
        target.scrollIntoView({
          behavior: reduceMotion ? "auto" : "smooth",
          block: "start",
        });
      }
      setPendingHash(null);
    }, 80);

    return () => window.clearTimeout(timer);
  }, [entered, pendingHash]);

  return (
    <>
      {!entered ? <IntroCover onComplete={handleIntroComplete} /> : null}

      <div
        className={`lab-grid relative flex min-h-full flex-col bg-[#08090D] transition-opacity duration-500 motion-reduce:transition-none ${
          entered ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!entered}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_0%,rgba(139,92,246,0.08),transparent_50%),radial-gradient(ellipse_at_80%_100%,rgba(34,211,238,0.05),transparent_45%)]"
        />

        {entered ? (
          <>
            <Navbar />
            <main className="flex-1">
              <Projects />
              <About />
              <Experience />
              <Writing />
              <Contact />
            </main>
            <Footer />
          </>
        ) : null}
      </div>
    </>
  );
}
