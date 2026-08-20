import {
  GraduationCap,
  Guitar,
  MapPin,
  Paintbrush,
  PenLine,
} from "lucide-react";
import Link from "next/link";
import { BuildingProcess } from "@/components/BuildingProcess";
import { CapabilityCards } from "@/components/CapabilityCards";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";

const PERSONAL_ITEMS = [
  {
    label: "Education",
    value: `B.S. ${SITE.education}`,
    Icon: GraduationCap,
  },
  {
    label: "Location",
    value: "San Francisco Bay Area / San Ramon, CA",
    Icon: MapPin,
  },
  {
    label: "Writing",
    value: (
      <>
        Author of{" "}
        <Link
          href="/blog"
          className="font-medium text-[#8B5CF6] underline decoration-[#8B5CF6]/40 underline-offset-4 transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
        >
          No Filters Attached
        </Link>
      </>
    ),
    Icon: PenLine,
  },
  {
    label: "Music",
    value: "Acoustic fingerstyle guitar and digital sound production.",
    Icon: Guitar,
  },
  {
    label: "Outside the lab",
    value: "Daily digital illustration, yoga, and meditation.",
    Icon: Paintbrush,
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-white/[0.08] px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="More than a résumé."
            description={`${SITE.role}. Statistics & Data Science graduate building production AI systems—not slide decks.`}
          />
        </Reveal>

        <Reveal delay={80}>
          <CapabilityCards />
        </Reveal>

        <Reveal className="mt-24">
          <div className="mb-10 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
              Process
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
              How I think about building
            </h3>
          </div>
          <BuildingProcess />
        </Reveal>

        <Reveal className="mt-24">
          <div className="rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
              Beyond the stack
            </p>
            <h3 className="mt-3 font-[family-name:var(--font-heading)] text-xl font-semibold text-[#F5F5F5]">
              {SITE.name}
            </h3>

            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {PERSONAL_ITEMS.map(({ label, value, Icon }) => (
                <li
                  key={label}
                  className="flex gap-3 rounded-lg border border-white/[0.06] bg-black/15 p-4"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-white/[0.08] text-[#8B5CF6]">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#A1A1AA]/80">
                      {label}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-[#A1A1AA]">
                      {value}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-center text-sm text-[#A1A1AA]">
              <a
                href={`mailto:${SITE.email}`}
                className="font-medium text-[#F5F5F5] transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
              >
                {SITE.email}
              </a>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
