import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "@/components/SocialIcons";

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
      className="group block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
    >
      <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all group-hover:-translate-y-1 group-hover:border-sky-200 group-hover:shadow-xl group-hover:shadow-sky-900/5 sm:p-8">
        <div className="mb-5 flex items-center justify-between gap-3">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-600">
            {highlight}
          </p>
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-colors group-hover:border-sky-200 group-hover:bg-sky-50 group-hover:text-sky-700">
            <GitHubIcon className="h-4 w-4" />
          </span>
        </div>

        <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-sky-700">
          {title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
          <ul className="flex flex-wrap gap-2">
            {tech.map((item) => (
              <li
                key={item}
                className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 transition-colors group-hover:bg-sky-50 group-hover:text-sky-700"
              >
                {item}
              </li>
            ))}
          </ul>
          <span className="inline-flex items-center gap-1 text-xs font-medium text-sky-700 opacity-0 transition-opacity group-hover:opacity-100">
            View repo
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </div>
      </article>
    </a>
  );
}
