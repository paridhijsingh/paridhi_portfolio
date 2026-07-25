import { SITE } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

const iconLinkStyles =
  "inline-flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition-colors hover:bg-white hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/70 bg-white/80 px-6 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm font-medium text-slate-700">
            © {year} {SITE.name}
          </p>
          <p className="mt-1 text-sm text-slate-500">
            Architecting intelligent systems, one layer at a time.
          </p>
        </div>

        <div className="flex items-center gap-1">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={iconLinkStyles}
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={iconLinkStyles}
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={`mailto:${SITE.email}`}
            aria-label={`Email ${SITE.name}`}
            className="ml-2 text-sm text-slate-500 transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
          >
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
