"use client";

import {
  BarChart3,
  Bot,
  BrainCircuit,
  Database,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

type Capability = {
  title: string;
  description: string;
  tech: readonly string[];
  Icon: LucideIcon;
};

const CAPABILITIES: Capability[] = [
  {
    title: "AI Engineering",
    description:
      "End-to-end ML pipelines—from model training to deployment on Kubernetes and AWS.",
    tech: ["Python", "FastAPI", "Docker", "Kubernetes"],
    Icon: BrainCircuit,
  },
  {
    title: "RAG Systems",
    description:
      "Retrieval-augmented pipelines that ground LLM outputs in reliable context.",
    tech: ["Python", "LangGraph"],
    Icon: Database,
  },
  {
    title: "LLM Applications",
    description:
      "API-driven apps combining real-time data with model-powered recommendations.",
    tech: ["OpenAI", "OpenAI SDK", "FastAPI"],
    Icon: Sparkles,
  },
  {
    title: "Agentic Workflows",
    description:
      "Stateful multi-agent orchestration across LangGraph and SDK-based routing.",
    tech: ["LangGraph", "OpenAI SDK", "Anthropic SDK"],
    Icon: Bot,
  },
  {
    title: "Data Science",
    description:
      "Statistical modeling and analysis—extracting signal from complex datasets.",
    tech: ["Python", "Jupyter", "Statistics"],
    Icon: BarChart3,
  },
];

function CapabilityCard({
  capability,
  active,
  onActivate,
}: {
  capability: Capability;
  active: boolean;
  onActivate: () => void;
}) {
  const { title, description, tech, Icon } = capability;

  return (
    <article
      onMouseEnter={onActivate}
      onFocus={onActivate}
      tabIndex={0}
      className={`group relative flex h-full flex-col rounded-xl border p-5 outline-none transition-all duration-300 motion-reduce:transition-none ${
        active
          ? "-translate-y-1 border-[#8B5CF6]/40 bg-[rgba(139,92,246,0.08)] shadow-lg shadow-[#8B5CF6]/5"
          : "border-white/[0.08] bg-[rgba(255,255,255,0.04)] hover:-translate-y-1 hover:border-[#8B5CF6]/25"
      }`}
    >
      <span
        className={`flex h-9 w-9 items-center justify-center rounded-lg border transition-colors duration-300 ${
          active
            ? "border-[#8B5CF6]/40 bg-[#8B5CF6]/15 text-[#8B5CF6]"
            : "border-[#8B5CF6]/20 bg-[#8B5CF6]/10 text-[#8B5CF6] group-hover:border-[#8B5CF6]/35"
        }`}
      >
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>

      <h3 className="mt-4 font-[family-name:var(--font-heading)] text-base font-semibold text-[#F5F5F5]">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#A1A1AA]">
        {description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-1.5">
        {tech.map((label) => (
          <li
            key={label}
            className={`rounded-md border px-2 py-0.5 font-mono text-[0.68rem] transition-colors duration-300 ${
              active
                ? "border-[#22D3EE]/30 bg-[#22D3EE]/10 text-[#22D3EE]"
                : "border-white/[0.08] bg-black/20 text-[#A1A1AA] group-hover:border-white/[0.12]"
            }`}
          >
            {label}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function CapabilityCards() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {CAPABILITIES.map((capability, index) => (
          <div
            key={capability.title}
            className={
              index < 3 ? "lg:col-span-2" : "sm:col-span-1 lg:col-span-3"
            }
          >
            <CapabilityCard
              capability={capability}
              active={activeIndex === index}
              onActivate={() => setActiveIndex(index)}
            />
          </div>
        ))}
      </div>

      <p className="mt-5 text-center font-mono text-xs text-[#A1A1AA]/70">
        Hover or focus a card to explore
      </p>
    </div>
  );
}
