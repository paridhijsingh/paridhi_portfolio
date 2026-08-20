"use client";

import { Download, Menu, X } from "lucide-react";
import { useEffect, useState, type MouseEvent } from "react";
import { NAV_ITEMS } from "@/lib/navigation";
import { SITE } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

type CoverNavProps = {
  onNavigate?: (href: string) => void;
};

const linkClass =
  "rounded-md px-3 py-2 text-sm font-medium text-[#A1A1AA] transition-colors hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]";

const iconLinkClass =
  "inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] text-[#A1A1AA] transition-all hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]";

export function CoverNav({ onNavigate }: CoverNavProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (!onNavigate) return;
    event.preventDefault();
    setOpen(false);
    onNavigate(href);
  };

  return (
    <header className="relative z-10 border-b border-white/[0.06]">
      <nav
        aria-label="Cover"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 sm:px-8"
      >
        <a
          href="#"
          onClick={(event) => event.preventDefault()}
          className="font-[family-name:var(--font-heading)] text-base font-semibold tracking-tight text-[#F5F5F5]"
        >
          {SITE.shortName}
          <span className="text-[#8B5CF6]">.</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(event) => handleNavClick(event, href)}
                  className={linkClass}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2 border-l border-white/[0.08] pl-6">
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={iconLinkClass}
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={iconLinkClass}
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] px-3.5 py-2 text-sm font-medium text-[#A1A1AA] transition-all hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="cover-mobile-menu"
          className={`${iconLinkClass} lg:hidden`}
        >
          {open ? (
            <X className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Menu className="h-4 w-4" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="cover-mobile-menu"
        className={`overflow-hidden border-t border-white/[0.06] transition-[max-height,opacity] duration-300 ease-in-out motion-reduce:transition-none lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 sm:px-8">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(event) => handleNavClick(event, href)}
                className="block min-h-11 rounded-md px-3 py-2.5 text-sm font-medium text-[#A1A1AA] transition-colors hover:bg-white/[0.04] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 border-t border-white/[0.06] px-6 py-4 sm:px-8">
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className={iconLinkClass}
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className={iconLinkClass}
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-white/[0.08] px-3.5 py-2 text-sm font-medium text-[#A1A1AA] transition-all hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5]"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
