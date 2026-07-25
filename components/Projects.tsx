import { PROJECTS } from "@/lib/constants";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects"
            description="Pinned work from my GitHub—agentic systems, MLOps pipelines, and applied data science."
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 110}>
              <ProjectCard {...project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
