"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectCaseStudyModal } from "@/components/ProjectCaseStudyModal";
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

          <div className="grid gap-8 lg:grid-cols-2">
            {PROJECT_CASE_STUDIES.map((project, index) => (
              <Reveal key={project.id} delay={index * 100}>
                <ProjectCard
                  project={project}
                  onOpen={() => setActiveProject(project)}
                />
              </Reveal>
            ))}
          </div>
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
