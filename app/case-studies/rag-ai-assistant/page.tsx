"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Bot, Database, Search } from "lucide-react";

type Stage = {
  id: string;
  label: string;
  what: string;
  why: string;
  tech: string;
};

const PIPELINE: Stage[] = [
  {
    id: "documents",
    label: "Documents",
    what: "Raw documents are collected as the source corpus.",
    why: "Answers are only as strong as the source material.",
    tech: "Document corpus (project knowledge base)",
  },
  {
    id: "unstructured",
    label: "Unstructured.io",
    what: "Content is parsed into clean sections and metadata.",
    why: "Reliable extraction improves downstream retrieval quality.",
    tech: "Unstructured.io",
  },
  {
    id: "processing",
    label: "Processing",
    what: "Text is normalized and chunked for retrieval-ready indexing.",
    why: "Chunk structure directly affects retrieval recall and precision.",
    tech: "Python data processing",
  },
  {
    id: "hybrid",
    label: "Hybrid Retrieval",
    what: "Sparse and dense search strategies are combined per query.",
    why: "Hybrid retrieval catches both keyword matches and semantic intent.",
    tech: "RAG retrieval strategy",
  },
  {
    id: "bm25-dense",
    label: "BM25 + Dense Retrieval",
    what: "BM25 and embedding-based retrievers return candidate context.",
    why: "Dual retrieval improves coverage across query styles.",
    tech: "BM25 + dense vectors",
  },
  {
    id: "reranking",
    label: "Cross-Encoder Reranking",
    what: "A reranker reorders candidates by relevance to the query.",
    why: "Reranking improves top-context quality before generation.",
    tech: "Cross-encoder reranker",
  },
  {
    id: "llm",
    label: "LLM",
    what: "The language model synthesizes an answer from retrieved context.",
    why: "Grounded generation reduces hallucination risk.",
    tech: "OpenAI SDK / LLM APIs",
  },
  {
    id: "answer",
    label: "Answer",
    what: "The final response is returned with concise, context-aware output.",
    why: "The product goal is useful answers, not raw retrieval output.",
    tech: "Application response layer",
  },
];

const DECISIONS = [
  {
    title: "Hybrid retrieval",
    detail:
      "Combines lexical and semantic signals so retrieval is resilient to both exact terms and paraphrased intent.",
  },
  {
    title: "Reranking",
    detail:
      "Improves answer quality by promoting the most query-relevant chunks before generation.",
  },
  {
    title: "Query optimization",
    detail:
      "Treats query structure as a first-class input so retrieval can adapt to different user phrasing.",
  },
  {
    title: "Agentic workflows",
    detail:
      "Supports multi-step orchestration patterns where retrieval, reasoning, and response formatting can be separated.",
  },
] as const;

const SIMULATED_MESSAGES = [
  {
    role: "user",
    text: "What components are involved in the RAG response pipeline?",
  },
  {
    role: "assistant",
    text: "Simulated response: Documents are processed, retrieved with hybrid search, reranked, then sent to the LLM for a grounded answer.",
  },
] as const;

export default function RagAssistantCaseStudyPage() {
  const [activeId, setActiveId] = useState(PIPELINE[0].id);
  const activeStage = useMemo(
    () => PIPELINE.find((stage) => stage.id === activeId) ?? PIPELINE[0],
    [activeId],
  );

  return (
    <div className="lab-grid min-h-full bg-[#08090D] px-6 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#A1A1AA] transition-colors hover:text-[#8B5CF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to work
        </Link>

        <section className="mt-10 rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-6 sm:p-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
            RAG case study
          </p>
          <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-5xl">
            Building a RAG system that can find the right information.
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#A1A1AA] sm:text-base">
            Explore each stage of the pipeline as if inspecting a live AI
            system. This page is an interactive technical walkthrough.
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
            System pipeline
          </p>
          <div className="mt-5 grid gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]">
            {PIPELINE.map((stage, index) => (
              <div key={stage.id} className="contents">
                <button
                  type="button"
                  onClick={() => setActiveId(stage.id)}
                  className={`rounded-lg border px-3 py-3 text-left transition-all duration-300 motion-reduce:transition-none ${
                    activeId === stage.id
                      ? "border-[#8B5CF6]/50 bg-[#8B5CF6]/15 shadow-lg shadow-[#8B5CF6]/10"
                      : "border-white/[0.08] bg-black/20 hover:border-[#8B5CF6]/30 hover:bg-black/30"
                  }`}
                >
                  <span className="block font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[#22D3EE]">
                    Stage {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="mt-1 block text-xs font-medium text-[#F5F5F5] sm:text-sm">
                    {stage.label}
                  </span>
                </button>

                {index < PIPELINE.length - 1 ? (
                  <div className="hidden items-center justify-center lg:flex">
                    <ArrowRight
                      className="h-4 w-4 text-[#8B5CF6]/70 animate-[flowPulse_3.2s_ease-in-out_infinite]"
                      style={{ animationDelay: `${index * 120}ms` }}
                      aria-hidden="true"
                    />
                  </div>
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
            <div className="rounded-xl border border-white/[0.08] bg-black/25 p-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#22D3EE]">
                What this component does
              </p>
              <h2 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-semibold text-[#F5F5F5]">
                {activeStage.label}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                {activeStage.what}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#A1A1AA]">
                <span className="font-medium text-[#F5F5F5]">Why it exists:</span>{" "}
                {activeStage.why}
              </p>
            </div>
            <div className="rounded-xl border border-white/[0.08] bg-black/25 p-5">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[#22D3EE]">
                Technology used
              </p>
              <p className="mt-3 inline-flex rounded-md border border-white/[0.08] bg-black/20 px-2.5 py-1 font-mono text-xs text-[#F5F5F5]">
                {activeStage.tech}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
              Ask the system
            </p>
            <p className="mt-3 text-sm text-[#A1A1AA]">
              Simulated inspection UI (not connected to a live backend).
            </p>

            <div className="mt-5 rounded-xl border border-white/[0.08] bg-black/35 p-4">
              <div className="mb-4 flex items-center gap-2 text-xs text-[#A1A1AA]">
                <Bot className="h-3.5 w-3.5 text-[#8B5CF6]" aria-hidden="true" />
                RAG Inspector Console
              </div>
              <div className="space-y-3">
                {SIMULATED_MESSAGES.map((message, index) => (
                  <div
                    key={`${message.role}-${index}`}
                    className={`rounded-lg border px-3 py-2 text-xs leading-relaxed ${
                      message.role === "user"
                        ? "border-[#22D3EE]/20 bg-[#22D3EE]/10 text-[#F5F5F5]"
                        : "border-white/[0.08] bg-black/25 text-[#A1A1AA]"
                    }`}
                  >
                    <span className="mb-1 block font-mono uppercase tracking-[0.12em] text-[10px] text-[#22D3EE]">
                      {message.role}
                    </span>
                    {message.text}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
              Technical decisions
            </p>
            <ul className="mt-5 space-y-3">
              {DECISIONS.map((decision) => (
                <li
                  key={decision.title}
                  className="rounded-lg border border-white/[0.08] bg-black/25 p-3"
                >
                  <p className="inline-flex items-center gap-2 font-medium text-[#F5F5F5]">
                    <Search
                      className="h-3.5 w-3.5 text-[#8B5CF6]"
                      aria-hidden="true"
                    />
                    {decision.title}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#A1A1AA] sm:text-sm">
                    {decision.detail}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8">
          <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
            <Database className="h-3.5 w-3.5" aria-hidden="true" />
            Inspection note
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
            This experience intentionally visualizes internals and decision
            points. It is designed as a technical walkthrough and simulated
            system inspector, not a production inference endpoint.
          </p>
        </section>
      </div>
    </div>
  );
}
