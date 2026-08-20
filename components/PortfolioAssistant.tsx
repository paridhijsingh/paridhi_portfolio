"use client";

import { useMemo, useState } from "react";
import { Bot, MessageSquare, Send, X } from "lucide-react";
import { PROJECTS, SITE } from "@/lib/constants";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const SUGGESTED_QUESTIONS = [
  "What does Paridhi build?",
  "Tell me about her RAG experience.",
  "What is her strongest project?",
  "What technologies does she use?",
  "Why should I consider her for an AI engineering role?",
] as const;

function mockAssistantResponse(input: string): string {
  const question = input.toLowerCase();

  if (question.includes("what does paridhi build")) {
    return "Paridhi builds AI systems across agentic workflows, RAG architectures, and production ML pipelines. Her projects include multi-agent insurance claims orchestration, MLOps deployment on AWS EKS, and LLM-enhanced analytics applications.";
  }

  if (
    question.includes("rag experience") ||
    question.includes("retrieval") ||
    question.includes("rag")
  ) {
    return "Her portfolio highlights Retrieval-Augmented Generation as a technical focus and shows RAG-style system design patterns in project architecture and case studies, including retrieval, reranking, and grounded response workflows.";
  }

  if (question.includes("strongest project")) {
    return "A strong representative project is the Agentic Insurance Claims Framework, which explores orchestration across LangGraph, OpenAI SDK, Anthropic SDK, and Google ADK. It demonstrates system-level design rather than a single-model prototype.";
  }

  if (question.includes("technologies") || question.includes("tech stack")) {
    return `She works with ${Array.from(
      new Set(PROJECTS.flatMap((project) => project.tech)),
    ).join(", ")}.`;
  }

  if (
    question.includes("why should i consider") ||
    question.includes("ai engineering role")
  ) {
    return `${SITE.name} combines data science fundamentals with practical AI engineering: building orchestration logic, deploying containerized services, and working across LLM application layers. Her portfolio emphasizes implementation depth and system reliability.`;
  }

  return "This assistant currently uses a local mock response layer based on the portfolio content. You can ask about projects, RAG experience, technologies, or AI engineering fit.";
}

export function PortfolioAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "I am a portfolio guide running in mock mode. I can answer questions from the information currently on this site.",
    },
  ]);

  const canSend = input.trim().length > 0;

  const containerClass = useMemo(
    () =>
      `fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-[220] w-[min(92vw,380px)] transition-all duration-300 motion-reduce:transition-none sm:right-5 ${
        open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-95"
      }`,
    [open],
  );

  const submitQuestion = (text: string) => {
    const question = text.trim();
    if (!question) return;

    const response = mockAssistantResponse(question);

    setMessages((current) => [
      ...current,
      { role: "user", content: question },
      { role: "assistant", content: response },
    ]);
    setInput("");
  };

  return (
    <div className={containerClass}>
      {open ? (
        <section className="overflow-hidden rounded-2xl border border-white/[0.08] bg-[#08090D]/95 shadow-2xl shadow-black/50 backdrop-blur-md">
          <header className="flex items-center justify-between border-b border-white/[0.08] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#8B5CF6]/35 bg-[#8B5CF6]/15 text-[#8B5CF6]">
                <Bot className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[#F5F5F5]">
                  Paridhi&apos;s AI Assistant
                </p>
                <p className="font-mono text-[0.64rem] uppercase tracking-[0.14em] text-[#A1A1AA]">
                  mock response layer
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/[0.08] text-[#A1A1AA] transition-colors hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              aria-label="Close assistant"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </header>

          <div className="max-h-[48vh] space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-lg border px-3 py-2 text-sm leading-relaxed ${
                  message.role === "user"
                    ? "ml-8 border-[#22D3EE]/20 bg-[#22D3EE]/10 text-[#F5F5F5]"
                    : "mr-8 border-white/[0.08] bg-[rgba(255,255,255,0.04)] text-[#A1A1AA]"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="border-t border-white/[0.08] px-4 py-3">
            <p className="mb-2 font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#A1A1AA]">
              Suggested questions
            </p>
            <div className="mb-3 flex flex-wrap gap-1.5">
              {SUGGESTED_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => submitQuestion(question)}
                  className="rounded-md border border-white/[0.08] bg-black/20 px-2 py-1 text-left font-mono text-[0.66rem] text-[#A1A1AA] transition-colors hover:border-[#8B5CF6]/35 hover:text-[#F5F5F5]"
                >
                  {question}
                </button>
              ))}
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                submitQuestion(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about projects, RAG, or technologies..."
                className="w-full rounded-lg border border-white/[0.08] bg-black/20 px-3 py-2 text-sm text-[#F5F5F5] placeholder:text-[#A1A1AA]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6]"
              />
              <button
                type="submit"
                disabled={!canSend}
                className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#8B5CF6]/35 bg-[#8B5CF6]/15 text-[#F5F5F5] transition-colors hover:bg-[#8B5CF6]/25 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </form>
          </div>
        </section>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="group ml-auto mt-3 inline-flex min-h-11 items-center gap-2 rounded-full border border-[#8B5CF6]/35 bg-[#08090D]/90 px-4 py-2.5 text-sm font-medium text-[#F5F5F5] shadow-lg shadow-black/30 backdrop-blur-sm transition-all hover:border-[#8B5CF6]/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] motion-reduce:hover:translate-y-0"
      >
        <MessageSquare
          className="h-4 w-4 text-[#22D3EE] transition-colors group-hover:text-[#F5F5F5]"
          aria-hidden="true"
        />
        Ask my portfolio
      </button>
    </div>
  );
}
