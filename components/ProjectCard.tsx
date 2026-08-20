import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";
import { ProjectArchitectureDiagram } from "@/components/ProjectArchitectureDiagram";

type ProjectCardProps = {
  title: string;
  description: string;
  highlight: string;
  tech: readonly string[];
  href: string;
};

export function ProjectCard({
  title,
  description,
  highlight,
  tech,
  href,
}: ProjectCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${title} on GitHub`}
      className="group block h-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
    >
      <article className="flex h-full flex-col rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-6 transition-all motion-reduce:transition-none group-hover:-translate-y-1 group-hover:border-[#8B5CF6]/30 sm:p-7">
        <div className="mb-4 flex items-center justify-between gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-[#22D3EE]">
            {highlight}
          </p>
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.08] text-[#A1A1AA] transition-colors group-hover:border-[#8B5CF6]/30 group-hover:text-[#8B5CF6]">
            <GitHubIcon className="h-3.5 w-3.5" />
          </span>
        </div>

        <ProjectArchitectureDiagram highlight={highlight} />

        <h3 className="font-[family-name:var(--font-heading)] text-lg font-semibold tracking-tight text-[#F5F5F5] transition-colors group-hover:text-[#8B5CF6]">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-[#A1A1AA]">
          {description}
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-white/[0.06] pt-4">
          <ul className="flex flex-wrap gap-1.5">
            {tech.map((item) => (
              <li
                key={item}
                className="rounded-md border border-white/[0.06] bg-black/20 px-2 py-0.5 font-mono text-[10px] text-[#A1A1AA] transition-colors group-hover:border-[#8B5CF6]/20 group-hover:text-[#F5F5F5]"
              >
                {item}
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-1 font-mono text-[10px] text-[#8B5CF6] opacity-0 transition-opacity group-hover:opacity-100 motion-reduce:opacity-100">
            repo
            <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
          </span>
        </div>
      </article>
    </a>
  );
}
