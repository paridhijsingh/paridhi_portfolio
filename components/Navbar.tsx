"use client";

import { useEffect, useState } from "react";
import {
  Download,
  FolderKanban,
  Home,
  Mail,
  Menu,
  PenLine,
  UserRound,
  X,
  type LucideIcon,
} from "lucide-react";
import { SITE } from "@/lib/constants";

const NAV_ITEMS: {
  href: string;
  label: string;
  Icon: LucideIcon;
}[] = [
  { href: "#home", label: "Home", Icon: Home },
  { href: "#about", label: "About", Icon: UserRound },
  { href: "#projects", label: "Projects", Icon: FolderKanban },
  { href: "/blog", label: "Writing", Icon: PenLine },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#08090D]/90 backdrop-blur-sm">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="font-[family-name:var(--font-heading)] text-base font-semibold tracking-tight text-[#F5F5F5] transition-colors hover:text-[#8B5CF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
        >
          {SITE.shortName}
          <span className="text-[#8B5CF6]">.</span>
        </a>

        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map(({ href, label, Icon }) => (
              <li key={href}>
                <a
                  href={href}
                  className="inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium text-[#A1A1AA] transition-colors hover:bg-white/[0.04] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href={SITE.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-2 text-sm font-medium text-[#F5F5F5] transition-colors hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Resume
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] text-[#A1A1AA] transition-colors hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] md:hidden"
        >
          {open ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden border-t border-white/[0.08] bg-[#08090D]/98 transition-[max-height,opacity] duration-300 ease-in-out motion-reduce:transition-none md:hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4 sm:px-8">
          {NAV_ITEMS.map(({ href, label, Icon }) => (
            <li key={href}>
              <a
                href={href}
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-[#A1A1AA] transition-colors hover:bg-white/[0.04] hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              >
                <Icon className="h-4 w-4 text-[#8B5CF6]" aria-hidden="true" />
                {label}
              </a>
            </li>
          ))}
          <li className="mt-2">
            <a
              href={SITE.resume}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-2.5 text-sm font-medium text-[#F5F5F5] transition-colors hover:bg-[#8B5CF6]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
