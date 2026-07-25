"use client";

import { useCallback, useState } from "react";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { DynamicTypingHero } from "@/components/DynamicTypingHero";
import { Footer } from "@/components/Footer";
import { IntroCover } from "@/components/IntroCover";
import { Navbar } from "@/components/Navbar";
import { Projects } from "@/components/Projects";
import { Writing } from "@/components/Writing";

export function HomeShell() {
  const [entered, setEntered] = useState(false);

  const handleIntroComplete = useCallback(() => {
    setEntered(true);
  }, []);

  return (
    <>
      {!entered ? <IntroCover onComplete={handleIntroComplete} /> : null}

      <div
        className={`relative flex min-h-full flex-col animate-gradient bg-gradient-to-br from-slate-50 via-sky-50 to-indigo-50 bg-[length:200%_200%] transition-opacity duration-500 ${
          entered ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden={!entered}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.12),_transparent_60%)]"
        />

        {entered ? (
          <>
            <Navbar />
            <main className="flex-1">
              <DynamicTypingHero />
              <About />
              <Projects />
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
