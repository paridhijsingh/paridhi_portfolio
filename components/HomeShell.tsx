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
        className={`lab-grid relative flex min-h-full flex-col bg-[#08090D] transition-opacity duration-500 ${
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
