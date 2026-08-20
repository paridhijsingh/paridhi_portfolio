"use client";

import { useEffect, useMemo, useState } from "react";
import { Download, Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/lib/navigation";
import { SITE } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { useActiveSection } from "@/hooks/useActiveSection";

const SECTION_IDS = NAV_ITEMS.map(({ href }) => href.replace("#", ""));

export function Navbar() {
  const [open, setOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  const iconLinkClass =
    "inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] text-[#A1A1AA] transition-all hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]";

  const navLinkClass = useMemo(
    () => (href: string) => {
      const id = href.replace("#", "");
      const isActive = activeId === id;
      return `nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] ${
        isActive ? "nav-link-active" : ""
      }`;
    },
    [activeId],
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#08090D]/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8"
      >
        <a
          href="#work"
          onClick={closeMenu}
          className="font-[family-name:var(--font-heading)] text-base font-semibold tracking-tight text-[#F5F5F5] transition-colors hover:text-[#8B5CF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
        >
          {SITE.shortName}
          <span className="text-[#8B5CF6]">.</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <a href={href} className={navLinkClass(href)} aria-current={activeId === href.replace("#", "") ? "page" : undefined}>
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
              className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-white/[0.08] px-3.5 py-2 text-sm font-medium text-[#A1A1AA] transition-all hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
            >
              <Download className="h-3.5 w-3.5" aria-hidden="true" />
              Resume
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
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
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/[0.08] bg-[#08090D]/98 transition-[max-height,opacity] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none lg:hidden ${
          open ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 sm:px-8">
          {NAV_ITEMS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className={`block min-h-11 rounded-md px-3 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${
                  activeId === href.replace("#", "")
                    ? "bg-[#8B5CF6]/12 text-[#F5F5F5]"
                    : "text-[#A1A1AA] hover:bg-white/[0.04] hover:text-[#F5F5F5]"
                }`}
                aria-current={activeId === href.replace("#", "") ? "page" : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 border-t border-white/[0.08] px-6 py-4 sm:px-8">
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
            onClick={closeMenu}
            className="inline-flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg border border-white/[0.08] px-3.5 py-2 text-sm font-medium text-[#A1A1AA] transition-all hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
