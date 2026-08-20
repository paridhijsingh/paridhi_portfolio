"use client";

type DiagramType = "agentic" | "mlops" | "fullstack" | "data";

const DIAGRAM_MAP: Record<string, DiagramType> = {
  "Agentic systems": "agentic",
  MLOps: "mlops",
  "Full-stack AI": "fullstack",
  "Data science": "data",
};

function Node({
  x,
  y,
  label,
  accent = false,
}: {
  x: number;
  y: number;
  label: string;
  accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x - 36}
        y={y - 12}
        width={72}
        height={24}
        rx={4}
        fill={accent ? "rgba(139,92,246,0.15)" : "rgba(255,255,255,0.04)"}
        stroke={accent ? "rgba(139,92,246,0.4)" : "rgba(255,255,255,0.08)"}
        strokeWidth={1}
      />
      <text
        x={x}
        y={y + 4}
        textAnchor="middle"
        className="fill-[#A1A1AA] font-mono text-[9px]"
      >
        {label}
      </text>
    </g>
  );
}

function FlowLine({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
}) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke="rgba(34,211,238,0.35)"
      strokeWidth={1}
      strokeDasharray="4 4"
      className="motion-reduce:opacity-60 group-hover:animate-[flowPulse_2s_ease-in-out_infinite]"
      style={{ animationDelay: `${delay}ms` }}
    />
  );
}

function AgenticDiagram() {
  return (
    <>
      <Node x={40} y={40} label="Router" accent />
      <Node x={120} y={20} label="Intake" />
      <Node x={120} y={60} label="Policy" />
      <Node x={200} y={40} label="State" accent />
      <FlowLine x1={76} y1={40} x2={84} y2={20} delay={0} />
      <FlowLine x1={76} y1={40} x2={84} y2={60} delay={200} />
      <FlowLine x1={156} y1={40} x2={164} y2={40} delay={400} />
    </>
  );
}

function MlopsDiagram() {
  return (
    <>
      <Node x={40} y={40} label="Train" />
      <Node x={120} y={40} label="Build" accent />
      <Node x={200} y={40} label="Deploy" />
      <FlowLine x1={76} y1={40} x2={84} y2={40} delay={0} />
      <FlowLine x1={156} y1={40} x2={164} y2={40} delay={300} />
    </>
  );
}

function FullstackDiagram() {
  return (
    <>
      <Node x={40} y={40} label="API" accent />
      <Node x={120} y={40} label="SQL" />
      <Node x={200} y={40} label="LLM" accent />
      <FlowLine x1={76} y1={40} x2={84} y2={40} delay={0} />
      <FlowLine x1={156} y1={40} x2={164} y2={40} delay={300} />
    </>
  );
}

function DataDiagram() {
  return (
    <>
      <Node x={40} y={40} label="Ingest" />
      <Node x={120} y={40} label="Analyze" accent />
      <Node x={200} y={40} label="Insights" />
      <FlowLine x1={76} y1={40} x2={84} y2={40} delay={0} />
      <FlowLine x1={156} y1={40} x2={164} y2={40} delay={300} />
    </>
  );
}

type ProjectArchitectureDiagramProps = {
  highlight: string;
  compact?: boolean;
};

export function ProjectArchitectureDiagram({
  highlight,
  compact = false,
}: ProjectArchitectureDiagramProps) {
  const type = DIAGRAM_MAP[highlight] ?? "data";

  return (
    <div
      aria-hidden="true"
      className={`overflow-hidden rounded-lg border border-white/[0.06] bg-black/20 ${
        compact ? "p-1.5" : "mb-5 p-2"
      }`}
    >
      <svg
        viewBox="0 0 240 80"
        className={`w-full ${compact ? "h-14" : "h-16"}`}
        role="img"
        aria-label={`Architecture diagram for ${highlight}`}
      >
        {type === "agentic" ? <AgenticDiagram /> : null}
        {type === "mlops" ? <MlopsDiagram /> : null}
        {type === "fullstack" ? <FullstackDiagram /> : null}
        {type === "data" ? <DataDiagram /> : null}
      </svg>
    </div>
  );
}
