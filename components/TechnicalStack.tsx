"use client";

import { useMemo, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

type CategoryId =
  | "ai-ml"
  | "llm-rag"
  | "backend"
  | "cloud"
  | "data"
  | "devtools";

type TechNode = {
  name: string;
  description: string;
  x: number;
  y: number;
};

type Category = {
  id: CategoryId;
  label: string;
  nodes: readonly TechNode[];
};

const CATEGORIES: readonly Category[] = [
  {
    id: "ai-ml",
    label: "AI / ML",
    nodes: [
      {
        name: "Scikit-Learn",
        description: "Used in ML model training workflows.",
        x: 15,
        y: 30,
      },
      {
        name: "LangGraph",
        description: "Used for stateful graph-based agent orchestration.",
        x: 46,
        y: 18,
      },
      {
        name: "OpenAI",
        description: "Used for LLM-powered recommendation and response steps.",
        x: 76,
        y: 36,
      },
      {
        name: "Pydantic",
        description: "Used for schema validation in structured API calls.",
        x: 30,
        y: 70,
      },
      {
        name: "NumPy",
        description: "Used for numerical operations in data workflows.",
        x: 66,
        y: 74,
      },
    ],
  },
  {
    id: "llm-rag",
    label: "LLM / RAG",
    nodes: [
      {
        name: "OpenAI SDK",
        description: "Integrates model inference into multi-step systems.",
        x: 17,
        y: 28,
      },
      {
        name: "Anthropic SDK",
        description: "Used for comparative orchestration across LLM providers.",
        x: 46,
        y: 18,
      },
      {
        name: "LangGraph",
        description: "Routes state across multi-turn agentic workflows.",
        x: 76,
        y: 34,
      },
      {
        name: "Unstructured.io",
        description: "Parses unstructured documents for search workflows.",
        x: 28,
        y: 68,
      },
      {
        name: "Cross-Encoder Reranking",
        description: "Improves relevance ordering before generation.",
        x: 67,
        y: 74,
      },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    nodes: [
      {
        name: "Python",
        description: "Primary implementation language across AI systems.",
        x: 14,
        y: 30,
      },
      {
        name: "FastAPI",
        description: "API framework used for inference and data endpoints.",
        x: 46,
        y: 20,
      },
      {
        name: "REST APIs",
        description: "Service interfaces for integration and clients.",
        x: 78,
        y: 34,
      },
      {
        name: "SQL",
        description: "Stores and queries application data and weather records.",
        x: 27,
        y: 70,
      },
      {
        name: "Pydantic",
        description: "Schema typing and request/response validation.",
        x: 64,
        y: 72,
      },
    ],
  },
  {
    id: "cloud",
    label: "Cloud",
    nodes: [
      {
        name: "AWS EKS",
        description: "Production target for Kubernetes-based deployments.",
        x: 15,
        y: 32,
      },
      {
        name: "AWS S3",
        description: "Referenced in cloud tooling and environment setup.",
        x: 46,
        y: 18,
      },
      {
        name: "CloudWatch",
        description: "Configured for logging and basic metrics dashboards.",
        x: 78,
        y: 34,
      },
      {
        name: "Docker",
        description: "Container runtime for portable cloud deployments.",
        x: 28,
        y: 70,
      },
      {
        name: "Kubernetes",
        description: "Orchestrates distributed service deployment and scaling.",
        x: 65,
        y: 72,
      },
    ],
  },
  {
    id: "data",
    label: "Data",
    nodes: [
      {
        name: "SQL",
        description: "Persistent storage layer for structured records.",
        x: 14,
        y: 28,
      },
      {
        name: "Pandas",
        description: "Used for shaping and analysis of tabular datasets.",
        x: 45,
        y: 18,
      },
      {
        name: "Jupyter",
        description: "Notebook workflow for exploratory analysis.",
        x: 78,
        y: 34,
      },
      {
        name: "Data Analysis",
        description: "Threat pattern and trend analysis across cybersecurity data.",
        x: 28,
        y: 70,
      },
      {
        name: "Statistics",
        description: "Core methodology for inference and model reasoning.",
        x: 65,
        y: 72,
      },
    ],
  },
  {
    id: "devtools",
    label: "Developer Tools",
    nodes: [
      {
        name: "Git",
        description: "Version control across project iteration and review.",
        x: 16,
        y: 30,
      },
      {
        name: "Docker",
        description: "Standardized local and staging runtime setup.",
        x: 46,
        y: 18,
      },
      {
        name: "Linux / VMs",
        description: "Used for script execution and environment testing.",
        x: 78,
        y: 35,
      },
      {
        name: "Shell Scripting",
        description: "Automation scripts for test and system workflows.",
        x: 27,
        y: 69,
      },
      {
        name: "Selenium",
        description: "Browser automation for interaction testing.",
        x: 66,
        y: 74,
      },
    ],
  },
] as const;

function StackGraph({ nodes }: { nodes: readonly TechNode[] }) {
  return (
    <div className="relative h-[20rem] overflow-hidden rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-4 sm:h-[22rem]">
      <svg
        aria-hidden="true"
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="none"
      >
        {nodes.map((node, index) =>
          index < nodes.length - 1 ? (
            <line
              key={`${node.name}-${nodes[index + 1].name}`}
              x1={node.x}
              y1={node.y}
              x2={nodes[index + 1].x}
              y2={nodes[index + 1].y}
              stroke="rgba(34,211,238,0.25)"
              strokeWidth="0.45"
              strokeDasharray="2 2"
              className="animate-[flowPulse_3.4s_ease-in-out_infinite] motion-reduce:opacity-60"
              style={{ animationDelay: `${index * 140}ms` }}
            />
          ) : null,
        )}
      </svg>

      {nodes.map((node, index) => (
        <div
          key={node.name}
          className="group absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        >
          <button
            type="button"
            className="rounded-md border border-white/[0.08] bg-[#08090D]/90 px-2.5 py-1 font-mono text-[0.68rem] text-[#F5F5F5] transition-all hover:-translate-y-0.5 hover:border-[#8B5CF6]/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
          >
            {node.name}
          </button>
          <div className="pointer-events-none absolute left-1/2 top-[115%] z-10 w-52 -translate-x-1/2 rounded-md border border-white/[0.08] bg-[#08090D] p-2 text-[0.68rem] leading-relaxed text-[#A1A1AA] opacity-0 shadow-lg shadow-black/40 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
            {node.description}
          </div>
          <span
            aria-hidden="true"
            className="absolute left-1/2 top-[-0.45rem] h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#22D3EE] opacity-60"
            style={{ animationDelay: `${index * 120}ms` }}
          />
        </div>
      ))}
    </div>
  );
}

export function TechnicalStack() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>(
    CATEGORIES[0].id,
  );

  const selected = useMemo(
    () => CATEGORIES.find((category) => category.id === activeCategory),
    [activeCategory],
  );

  return (
    <section id="stack" className="scroll-mt-24 px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="Technical stack"
            title="Systems, models, and tooling."
            description="Select a category to inspect the technologies and how they connect."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="mb-6 flex flex-wrap gap-2">
            {CATEGORIES.map((category) => {
              const isActive = category.id === activeCategory;
              return (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full border px-3.5 py-1.5 font-mono text-xs transition-all ${
                    isActive
                      ? "border-[#8B5CF6]/45 bg-[#8B5CF6]/12 text-[#F5F5F5]"
                      : "border-white/[0.08] bg-black/20 text-[#A1A1AA] hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5]"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          {selected ? <StackGraph nodes={selected.nodes} /> : null}
        </Reveal>
      </div>
    </section>
  );
}
