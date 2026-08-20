import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/constants";

type SubpageNavProps = {
  label: string;
  backHref?: string;
  backLabel?: string;
};

export function SubpageNav({
  label,
  backHref = "/#writing",
  backLabel = "Back to portfolio",
}: SubpageNavProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#08090D]/90 backdrop-blur-sm">
      <nav
        aria-label="Subpage"
        className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8"
      >
        <Link
          href="/"
          className="font-[family-name:var(--font-heading)] text-base font-semibold tracking-tight text-[#F5F5F5] transition-colors hover:text-[#8B5CF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
        >
          {SITE.shortName}
          <span className="text-[#8B5CF6]">.</span>
        </Link>

        <p className="hidden font-mono text-xs uppercase tracking-[0.16em] text-[#22D3EE] sm:block">
          {label}
        </p>

        <Link
          href={backHref}
          className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] px-3 py-2 text-sm font-medium text-[#A1A1AA] transition-colors hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          {backLabel}
        </Link>
      </nav>
    </header>
  );
}
