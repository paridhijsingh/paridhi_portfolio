"use client";

import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { ProjectArchitectureDiagram } from "@/components/ProjectArchitectureDiagram";
import { GitHubIcon } from "@/components/SocialIcons";
import type { ProjectCaseStudy } from "@/lib/project-case-studies";

type ProjectCardProps = {
  project: ProjectCaseStudy;
  onOpen: () => void;
};

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { title, tagline, highlight, tech, github, demo, caseStudyHref } =
    project;

  return (
    <article className="group relative h-full">
      <button
        type="button"
        onClick={onOpen}
        className="flex h-full w-full flex-col rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-6 text-left transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] group-hover:-translate-y-1.5 group-hover:border-[#8B5CF6]/35 group-hover:shadow-xl group-hover:shadow-[#8B5CF6]/5 sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#22D3EE]">
            {highlight}
          </p>
          <span className="rounded-md border border-white/[0.06] bg-black/20 px-2 py-0.5 font-mono text-[10px] text-[#8B5CF6] opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:opacity-100">
            Open case study
          </span>
        </div>

        <h3 className="mt-4 font-[family-name:var(--font-heading)] text-xl font-semibold tracking-tight text-[#F5F5F5] transition-colors group-hover:text-[#8B5CF6] sm:text-2xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
          {tagline}
        </p>

        <div className="pointer-events-none mt-6 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100 motion-reduce:max-h-24 motion-reduce:opacity-100">
          <ProjectArchitectureDiagram highlight={highlight} compact />
        </div>

        <ul className="mt-6 flex flex-1 flex-wrap content-start gap-1.5">
          {tech.map((item, index) => (
            <li
              key={item}
              className="rounded-md border border-white/[0.06] bg-black/20 px-2 py-0.5 font-mono text-[10px] text-[#A1A1AA] transition-all duration-300 group-hover:border-[#8B5CF6]/20 group-hover:text-[#F5F5F5] motion-reduce:transition-none"
              style={{ transitionDelay: `${index * 40}ms` }}
            >
              {item}
            </li>
          ))}
        </ul>
      </button>

      <div className="mt-3 flex items-center gap-3 px-1">
        {caseStudyHref ? (
          <Link
            href={caseStudyHref}
            aria-label={`${title} dedicated case study`}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A1A1AA] transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
          >
            Case Study
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </Link>
        ) : null}
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${title} on GitHub`}
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A1A1AA] transition-colors hover:text-[#8B5CF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
        >
          <GitHubIcon className="h-3.5 w-3.5" />
          GitHub
          <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
        </a>
        {demo ? (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${title} live demo`}
            className="inline-flex items-center gap-1.5 font-mono text-xs text-[#A1A1AA] transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
          >
            Demo
            <ExternalLink className="h-3 w-3" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    </article>
  );
}
