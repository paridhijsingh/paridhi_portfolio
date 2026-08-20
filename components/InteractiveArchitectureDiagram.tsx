"use client";

import { useState } from "react";
import type { ArchitectureNode } from "@/lib/project-case-studies";

type InteractiveArchitectureDiagramProps = {
  nodes: readonly ArchitectureNode[];
  animated?: boolean;
};

function FlowArrow({
  animated,
  delay = 0,
}: {
  animated: boolean;
  delay?: number;
}) {
  return (
    <div className="flex flex-col items-center py-1">
      <svg
        viewBox="0 0 12 24"
        aria-hidden="true"
        className="h-5 w-3 text-[#22D3EE]/50"
      >
        <line
          x1="6"
          y1="0"
          x2="6"
          y2="18"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="3 3"
          className={
            animated
              ? "motion-reduce:opacity-60 animate-[flowPulse_2.4s_ease-in-out_infinite]"
              : "opacity-60"
          }
          style={{ animationDelay: `${delay}ms` }}
        />
        <path
          d="M3 16 L6 22 L9 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

export function InteractiveArchitectureDiagram({
  nodes,
  animated = true,
}: InteractiveArchitectureDiagramProps) {
  const [activeId, setActiveId] = useState<string | null>(
    nodes[0]?.id ?? null,
  );

  const activeNode = nodes.find((node) => node.id === activeId);

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,220px)_1fr]">
      <div className="flex flex-col items-center">
        {nodes.map((node, index) => (
          <div key={node.id} className="flex w-full flex-col items-center">
            <button
              type="button"
              onClick={() => setActiveId(node.id)}
              className={`w-full rounded-lg border px-3 py-2.5 font-mono text-xs transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] ${
                activeId === node.id
                  ? "border-[#8B5CF6]/50 bg-[#8B5CF6]/15 text-[#F5F5F5] shadow-lg shadow-[#8B5CF6]/10"
                  : "border-white/[0.08] bg-[rgba(255,255,255,0.04)] text-[#A1A1AA] hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5]"
              }`}
            >
              {node.label}
            </button>
            {index < nodes.length - 1 ? (
              <FlowArrow animated={animated} delay={index * 200} />
            ) : null}
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-white/[0.08] bg-black/25 p-5">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#22D3EE]">
          Component detail
        </p>
        {activeNode ? (
          <>
            <h4 className="mt-2 font-[family-name:var(--font-heading)] text-base font-semibold text-[#F5F5F5]">
              {activeNode.label}
            </h4>
            <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
              {activeNode.explanation}
            </p>
          </>
        ) : (
          <p className="mt-3 text-sm text-[#A1A1AA]">
            Select a component to view its role in the architecture.
          </p>
        )}
      </div>
    </div>
  );
}
