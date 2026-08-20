"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type ExperienceEntry = {
  id: string;
  organization: string;
  role: string;
  dates: string;
  description: string;
  technologies: readonly string[];
  keyWork: readonly string[];
};

const EXPERIENCES: readonly ExperienceEntry[] = [
  {
    id: "talentscreen",
    organization: "TalentScreen",
    role: "AI Engineering Project Associate (Contract)",
    dates: "Mar 2026 - Present",
    description:
      "Supported AI search-tool implementation and operational readiness.",
    technologies: ["Python", "Unstructured.io", "Docker", "AWS CloudWatch"],
    keyWork: [
      "Assisted in writing Python scripts with Unstructured.io to parse and clean unstructured documents for search tools.",
      "Helped containerize Python applications with Docker for standard staging setups.",
      "Configured basic AWS CloudWatch logging and metrics dashboards for application monitoring.",
    ],
  },
  {
    id: "sonicwall",
    organization: "SonicWall",
    role: "QA Test Engineering Intern",
    dates: "Jun 2025 - Aug 2025",
    description:
      "Contributed to endpoint protection release testing and automation.",
    technologies: ["Test Automation", "SSH", "Windows VMs"],
    keyWork: [
      "Supported release testing by automating routine endpoint protection test cases.",
      "Executed SSH-based scripts across Windows virtual machines for environment configuration.",
      "Ran automated benchmark files to validate endpoint detection and logging responses.",
    ],
  },
  {
    id: "swift-security",
    organization: "Swift Security",
    role: "Software/MLOps Intern",
    dates: "Jun 2024 - Sep 2024",
    description:
      "Worked on automation scripts and container-based execution workflows.",
    technologies: ["Selenium", "Docker", "Python"],
    keyWork: [
      "Wrote automated browser interaction scripts using Selenium for user data flow testing.",
      "Used Docker to run interaction test scripts in isolated container environments.",
      "Collected and formatted execution logs for operational analysis.",
    ],
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>(EXPERIENCES[0].id);

  useEffect(() => {
    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const start = viewportHeight * 0.85;
      const end = rect.height + viewportHeight * 0.15;
      const travelled = start - rect.top;
      const raw = travelled / end;
      const clamped = Math.max(0, Math.min(1, raw));
      setLineProgress(clamped);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const progressHeight = useMemo(
    () => `${Math.round(lineProgress * 100)}%`,
    [lineProgress],
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="scroll-mt-24 border-y border-white/[0.08] px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Experience"
            title="Where I've built."
            description="Interactive timeline of internship and project roles."
          />
        </Reveal>

        <div className="relative mt-12 pl-9 sm:pl-12">
          <div className="absolute left-0 top-0 h-full w-px bg-white/[0.08]" />
          <div
            aria-hidden="true"
            className="absolute left-0 top-0 w-px bg-gradient-to-b from-[#8B5CF6] to-[#22D3EE] transition-[height] duration-300"
            style={{ height: progressHeight }}
          />

          <div className="space-y-6">
            {EXPERIENCES.map((entry, index) => {
              const isOpen = activeId === entry.id;
              return (
                <Reveal key={entry.id} delay={index * 80}>
                  <article className="relative rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] transition-colors hover:border-[#8B5CF6]/30">
                    <span
                      aria-hidden="true"
                      className={`absolute -left-[2.22rem] top-7 h-3 w-3 rounded-full border transition-colors sm:-left-[2.97rem] ${
                        isOpen
                          ? "border-[#8B5CF6] bg-[#8B5CF6]"
                          : "border-white/[0.22] bg-[#08090D]"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setActiveId((current) =>
                          current === entry.id ? "" : entry.id,
                        )
                      }
                      className="flex w-full items-start justify-between gap-4 px-5 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] sm:px-6"
                    >
                      <div>
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#22D3EE]">
                          node_{String(index + 1).padStart(2, "0")}
                        </p>
                        <h3 className="mt-1 font-[family-name:var(--font-heading)] text-lg font-semibold text-[#F5F5F5] sm:text-xl">
                          {entry.organization}
                        </h3>
                        <p className="mt-0.5 text-sm text-[#A1A1AA]">
                          {entry.role}
                        </p>
                        <p className="mt-2 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-[#A1A1AA]/80">
                          {entry.dates}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                          {entry.description}
                        </p>
                      </div>
                      <ChevronDown
                        className={`mt-1 h-4 w-4 shrink-0 text-[#8B5CF6] transition-transform ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-white/[0.06] px-5 pb-5 pt-4 sm:px-6">
                          <p className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#22D3EE]">
                            stack
                          </p>
                          <ul className="mt-2 flex flex-wrap gap-1.5">
                            {entry.technologies.map((item) => (
                              <li
                                key={item}
                                className="rounded-md border border-white/[0.08] bg-black/25 px-2 py-0.5 font-mono text-[0.68rem] text-[#A1A1AA]"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>

                          <p className="mt-4 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-[#22D3EE]">
                            key work
                          </p>
                          <ul className="mt-2 space-y-2 text-sm text-[#A1A1AA]">
                            {entry.keyWork.map((work) => (
                              <li key={work} className="leading-relaxed">
                                - {work}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
