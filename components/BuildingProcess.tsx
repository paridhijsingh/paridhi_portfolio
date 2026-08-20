"use client";

import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    num: "01",
    title: "Understand the problem",
    body: "Define constraints, inputs, and what success looks like before writing code.",
  },
  {
    num: "02",
    title: "Design the system",
    body: "Map data flows, agent boundaries, and where failures need to be handled.",
  },
  {
    num: "03",
    title: "Build and evaluate",
    body: "Ship incrementally, measure against real workloads, and validate outputs.",
  },
  {
    num: "04",
    title: "Iterate",
    body: "Refine architecture based on what breaks, drifts, or stops scaling.",
  },
] as const;

function ProcessConnector({
  orientation,
  visible,
  index,
}: {
  orientation: "horizontal" | "vertical";
  visible: boolean;
  index: number;
}) {
  if (orientation === "horizontal") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 80 12"
        className="hidden h-3 w-full shrink-0 lg:block"
        preserveAspectRatio="none"
      >
        <line
          x1="0"
          y1="6"
          x2="80"
          y2="6"
          stroke="rgba(139,92,246,0.35)"
          strokeWidth="1"
          strokeDasharray="4 4"
          className={`process-line motion-reduce:opacity-80 ${visible ? "process-line-active" : "opacity-30"}`}
          style={{ animationDelay: `${index * 0.4}s` }}
        />
      </svg>
    );
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 48"
      className="mx-auto h-12 w-3 shrink-0 lg:hidden"
    >
      <line
        x1="6"
        y1="0"
        x2="6"
        y2="48"
        stroke="rgba(139,92,246,0.35)"
        strokeWidth="1"
        strokeDasharray="4 4"
        className={`process-line motion-reduce:opacity-80 ${visible ? "process-line-active" : "opacity-30"}`}
        style={{ animationDelay: `${index * 0.4}s` }}
      />
    </svg>
  );
}

export function BuildingProcess() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref}>
      <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-start lg:gap-3">
        {STEPS.map((step, index) => (
          <div key={step.num} className="contents">
            <article
              className={`rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-5 transition-all duration-700 motion-reduce:transition-none ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <p className="font-mono text-xs text-[#22D3EE]">{step.num}</p>
              <h4 className="mt-2 font-[family-name:var(--font-heading)] text-sm font-semibold text-[#F5F5F5]">
                {step.title}
              </h4>
              <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA]">
                {step.body}
              </p>
            </article>
            {index < STEPS.length - 1 ? (
              <div className="flex w-16 items-center self-center pt-6">
                <ProcessConnector
                  orientation="horizontal"
                  visible={visible}
                  index={index}
                />
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="flex flex-col items-stretch lg:hidden">
        {STEPS.map((step, index) => (
          <div key={step.num}>
            <article
              className={`rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-5 transition-all duration-700 motion-reduce:transition-none ${
                visible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <p className="font-mono text-xs text-[#22D3EE]">{step.num}</p>
              <h4 className="mt-2 font-[family-name:var(--font-heading)] text-base font-semibold text-[#F5F5F5]">
                {step.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                {step.body}
              </p>
            </article>
            {index < STEPS.length - 1 ? (
              <ProcessConnector
                orientation="vertical"
                visible={visible}
                index={index}
              />
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
