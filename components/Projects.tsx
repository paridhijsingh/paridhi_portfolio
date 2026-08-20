"use client";

import Link from "next/link";
import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectCaseStudyModal } from "@/components/ProjectCaseStudyModal";
import { CalorieWizardProjectShowcase } from "@/components/caloriewizard/CalorieWizardProjectShowcase";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import {
  PROJECT_CASE_STUDIES,
  type ProjectCaseStudy,
} from "@/lib/project-case-studies";

export function Projects() {
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(
    null,
  );

  return (
    <>
      <section id="work" className="scroll-mt-24 px-6 py-24 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow="Project laboratory"
              title="Things I've built."
              description="Pinned work from GitHub—click a project to open its full case study."
            />
          </Reveal>
          <Reveal delay={60} className="-mt-4 mb-8 flex justify-center">
            <Link
              href="/case-studies/rag-ai-assistant"
              className="inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/30 bg-[#22D3EE]/10 px-4 py-2 text-xs font-medium text-[#F5F5F5] transition-all hover:-translate-y-0.5 hover:border-[#22D3EE]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] motion-reduce:hover:translate-y-0"
            >
              Open RAG AI Assistant Case Study
            </Link>
          </Reveal>

          <div className="grid gap-8 lg:grid-cols-2">
            {PROJECT_CASE_STUDIES.map((project, index) => (
              <Reveal
                key={project.id}
                delay={index * 100}
                className={project.id === "caloriewizard" ? "lg:col-span-2" : ""}
              >
                <ProjectCard
                  project={project}
                  onOpen={() => setActiveProject(project)}
                />
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <CalorieWizardProjectShowcase />
          </Reveal>
        </div>
      </section>

      {activeProject ? (
        <ProjectCaseStudyModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      ) : null}
    </>
  );
}
