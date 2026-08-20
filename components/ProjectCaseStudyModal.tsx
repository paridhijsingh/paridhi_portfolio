"use client";

import { useEffect } from "react";
import { ExternalLink, X } from "lucide-react";
import { InteractiveArchitectureDiagram } from "@/components/InteractiveArchitectureDiagram";
import { GitHubIcon } from "@/components/SocialIcons";
import type { ProjectCaseStudy } from "@/lib/project-case-studies";

type ProjectCaseStudyModalProps = {
  project: ProjectCaseStudy;
  onClose: () => void;
};

const SECTIONS = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "architecture", label: "Architecture" },
  { key: "technologies", label: "Technologies" },
  { key: "implementation", label: "Implementation" },
  { key: "results", label: "Results / outcome" },
  { key: "links", label: "Links" },
] as const;

export function ProjectCaseStudyModal({
  project,
  onClose,
}: ProjectCaseStudyModalProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center overflow-y-auto bg-[#08090D]/95 p-4 backdrop-blur-sm sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} case study`}
      onClick={onClose}
    >
      <button
        type="button"
        aria-label="Close case study"
        onClick={onClose}
        className="fixed right-4 top-4 z-[210] inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-[#08090D] text-[#A1A1AA] transition-colors hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] sm:right-6 sm:top-6"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>

      <article
        className="relative my-8 w-full max-w-3xl rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-6 sm:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
          {project.highlight}
        </p>
        <h2 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
          {project.title}
        </h2>
        <p className="mt-3 text-base text-[#A1A1AA]">{project.tagline}</p>

        <div className="mt-10 space-y-10">
          {SECTIONS.map(({ key, label }, index) => (
            <section key={key}>
              <p className="font-mono text-xs text-[#8B5CF6]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-1 font-[family-name:var(--font-heading)] text-lg font-semibold text-[#F5F5F5]">
                {label}
              </h3>

              {key === "problem" ? (
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
                  {project.problem}
                </p>
              ) : null}

              {key === "approach" ? (
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
                  {project.approach}
                </p>
              ) : null}

              {key === "architecture" ? (
                <div className="mt-5">
                  <InteractiveArchitectureDiagram
                    nodes={project.architecture}
                    animated={project.isAI}
                  />
                </div>
              ) : null}

              {key === "technologies" ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-white/[0.08] bg-black/20 px-2.5 py-1 font-mono text-xs text-[#A1A1AA]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}

              {key === "implementation" ? (
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
                  {project.implementation}
                </p>
              ) : null}

              {key === "results" ? (
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
                  {project.results}
                </p>
              ) : null}

              {key === "links" ? (
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-black/20 px-4 py-2.5 text-sm font-medium text-[#F5F5F5] transition-all hover:border-[#8B5CF6]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
                  >
                    <GitHubIcon className="h-4 w-4" />
                    GitHub repository
                    <ExternalLink className="h-3.5 w-3.5 text-[#A1A1AA]" />
                  </a>
                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-2.5 text-sm font-medium text-[#F5F5F5] transition-all hover:border-[#22D3EE]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
                    >
                      Live demo
                      <ExternalLink className="h-3.5 w-3.5 text-[#A1A1AA]" />
                    </a>
                  ) : (
                    <span className="inline-flex items-center rounded-lg border border-dashed border-white/[0.1] px-4 py-2.5 text-sm text-[#A1A1AA]/70">
                      Demo not available
                    </span>
                  )}
                </div>
              ) : null}
            </section>
          ))}
        </div>
      </article>
    </div>
  );
}
