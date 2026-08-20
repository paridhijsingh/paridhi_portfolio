"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight, Camera, ChefHat, Cloud, Droplets, History, LineChart } from "lucide-react";
import { CalorieWizardPhonePreview } from "@/components/caloriewizard/CalorieWizardPhonePreview";
import { SubpageNav } from "@/components/SubpageNav";

type Feature = {
  id: string;
  icon: React.ReactNode;
  title: string;
  body: string;
};

type Node = {
  id: string;
  label: string;
  explanation: string;
};

const FEATURES: readonly Feature[] = [
  {
    id: "analyze",
    icon: <Camera className="h-4 w-4" aria-hidden="true" />,
    title: "Analyze",
    body: "Take or select a meal photo and use Gemini to estimate food, calories, and macros.",
  },
  {
    id: "track",
    icon: <LineChart className="h-4 w-4" aria-hidden="true" />,
    title: "Track",
    body: "Track calories, protein, carbohydrates, and fat across different time periods.",
  },
  {
    id: "recipe",
    icon: <ChefHat className="h-4 w-4" aria-hidden="true" />,
    title: "Recipe Wizard",
    body: "Enter available ingredients and use Gemini to generate structured recipes with nutrition information.",
  },
  {
    id: "hydrate",
    icon: <Droplets className="h-4 w-4" aria-hidden="true" />,
    title: "Hydrate",
    body: "Track water intake and configure hydration reminders.",
  },
  {
    id: "sync",
    icon: <Cloud className="h-4 w-4" aria-hidden="true" />,
    title: "Sync",
    body: "Use Supabase authentication and cloud synchronization.",
  },
  {
    id: "history",
    icon: <History className="h-4 w-4" aria-hidden="true" />,
    title: "History",
    body: "Review previously analyzed and logged meals.",
  },
];

const ARCHITECTURE: readonly Node[] = [
  {
    id: "iphone",
    label: "iPhone",
    explanation: "Primary client runtime for capture, tracking, and recipe interactions.",
  },
  {
    id: "swiftui",
    label: "SwiftUI",
    explanation: "UI and state-driven app experience across scanner, dashboard, and wizard flows.",
  },
  {
    id: "swiftdata",
    label: "SwiftData",
    explanation: "Local persistence layer for on-device nutrition and hydration records.",
  },
  {
    id: "gemini",
    label: "Google Gemini",
    explanation: "AI layer used for meal analysis interpretation and recipe generation support.",
  },
  {
    id: "meal-ai",
    label: "Meal Analysis / Recipe Generation",
    explanation: "Feature workflows that transform user input into nutrition and recipe outputs.",
  },
  {
    id: "supabase-auth",
    label: "Supabase Auth",
    explanation: "Authentication layer for signed-in user context.",
  },
  {
    id: "postgres",
    label: "PostgreSQL",
    explanation: "Cloud data storage backing synchronized records.",
  },
  {
    id: "rls",
    label: "Row-Level Security",
    explanation: "Data access controls to isolate user-specific records.",
  },
];

const TEST_ITEMS = [
  "AI meal analysis",
  "Recipe generation",
  "Authentication",
  "Cloud synchronization",
  "Nutrition tracking",
  "Hydration reminders",
  "Cross-device data behavior",
] as const;

export default function CalorieWizardCaseStudyPage() {
  const [activeNodeId, setActiveNodeId] = useState(ARCHITECTURE[0].id);

  const activeNode = useMemo(
    () => ARCHITECTURE.find((node) => node.id === activeNodeId) ?? ARCHITECTURE[0],
    [activeNodeId],
  );

  return (
    <div className="lab-grid min-h-full bg-[#08090D]">
      <SubpageNav
        label="CalorieWizard"
        backHref="/#work"
        backLabel="Back to projects"
      />

      <main id="main-content" className="mx-auto max-w-6xl px-6 py-12 sm:px-8 sm:py-16">
        <section className="rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-6 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
            CALORIEWIZARD
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-5xl">
            Snap, Track, and Transform.
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-[#A1A1AA]">
            An AI-powered SwiftUI nutrition app currently in testing.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#22D3EE]/25 bg-[#22D3EE]/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.12em] text-[#F5F5F5]">
            iOS · SwiftUI · AI · TESTING
          </p>
        </section>

        <CalorieWizardPhonePreview className="mt-10" />

        <section className="mt-10 rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#F5F5F5]">
            What it does
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((feature) => (
              <article
                key={feature.id}
                className="rounded-xl border border-white/[0.08] bg-black/25 p-4 transition-colors hover:border-[#8B5CF6]/30"
              >
                <p className="inline-flex items-center gap-2 font-[family-name:var(--font-heading)] text-base text-[#F5F5F5]">
                  <span className="text-[#22D3EE]">{feature.icon}</span>
                  {feature.title}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">{feature.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#F5F5F5]">
            Under the hood
          </h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,260px)_1fr]">
            <div className="space-y-2">
              {ARCHITECTURE.map((node, index) => (
                <div key={node.id}>
                  <button
                    type="button"
                    onClick={() => setActiveNodeId(node.id)}
                    className={`w-full min-h-11 rounded-lg border px-3 py-2.5 text-left font-mono text-xs transition-all ${
                      activeNodeId === node.id
                        ? "border-[#8B5CF6]/50 bg-[#8B5CF6]/15 text-[#F5F5F5]"
                        : "border-white/[0.08] bg-black/20 text-[#A1A1AA] hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5]"
                    }`}
                  >
                    {node.label}
                  </button>
                  {index < ARCHITECTURE.length - 1 ? (
                    <div className="flex justify-center py-1.5" aria-hidden="true">
                      <ArrowRight className="h-4 w-4 rotate-90 text-[#8B5CF6]/70" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-black/25 p-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#22D3EE]">
                Component explanation
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-[#F5F5F5]">
                {activeNode.label}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                {activeNode.explanation}
              </p>
              <div className="mt-5 rounded-lg border border-dashed border-white/[0.12] p-3">
                <p className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#22D3EE]">
                  Layers represented
                </p>
                <p className="mt-2 text-xs text-[#A1A1AA]">
                  iPhone → SwiftUI → SwiftData → Google Gemini → Meal Analysis / Recipe Generation → Supabase Auth → PostgreSQL → Row-Level Security
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#F5F5F5]">
              Why I built it
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
              I wanted to build an AI system that translates everyday meal logging
              into something practical on iOS: analyze photos, track nutrition,
              generate recipes from available ingredients, and keep data synced
              across sessions while I validate behavior in real usage.
            </p>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
            <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#F5F5F5]">
              What I&apos;m testing
            </h2>
            <ul className="mt-5 space-y-2">
              {TEST_ITEMS.map((item) => (
                <li
                  key={item}
                  className="inline-flex w-full items-center justify-between rounded-lg border border-white/[0.08] bg-black/25 px-3 py-2 text-sm"
                >
                  <span className="text-[#F5F5F5]">{item}</span>
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-[#A1A1AA]">
                    In testing
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#F5F5F5]">
            What&apos;s next
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
            No additional future roadmap items are explicitly documented in this
            repository yet beyond the current testing scope.
          </p>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-[#22D3EE]">
            Currently in testing.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://github.com/paridhijsingh/CalorieWizard"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View on GitHub
            </a>
            <Link href="/#work" className="btn-secondary">
              Back to projects
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
