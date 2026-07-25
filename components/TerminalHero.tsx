"use client";

import {
  FormEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { PROJECTS, SITE } from "@/lib/constants";

type HistoryLine = {
  id: number;
  type: "system" | "input" | "output" | "error";
  text: string;
};

const BOOT_MESSAGE =
  "Initializing ML orchestrator... Welcome to Paridhi's portfolio.";

const HELP_TEXT = [
  "Available commands:",
  "  whoami    - About Paridhi",
  "  stack     - Core technical stack",
  "  projects  - Selected orchestrator case studies",
  "  help      - Show this help menu",
  "  clear     - Clear the terminal",
].join("\n");

function runCommand(command: string): string | "CLEAR" {
  const normalized = command.trim().toLowerCase();

  switch (normalized) {
    case "whoami":
      return "Paridhi Jay Singh - AI Engineer & Data Scientist";
    case "stack":
      return "Python, SQL, R, ML, Docker, Kubernetes, AWS";
    case "projects":
      return [
        "Selected projects:",
        ...PROJECTS.map(
          (project, index) =>
            `  ${index + 1}. ${project.title} — ${project.highlight}`,
        ),
        "  Tip: scroll to #projects or visit github.com/paridhijsingh",
      ].join("\n");
    case "help":
      return HELP_TEXT;
    case "clear":
      return "CLEAR";
    case "":
      return "";
    default:
      return `Command not found: ${command}. Type "help" for available commands.`;
  }
}

export function TerminalHero() {
  const [booting, setBooting] = useState(true);
  const [bootText, setBootText] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>([]);
  const [input, setInput] = useState("");
  const [lineId, setLineId] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let index = 0;
    let cancelled = false;

    const typeNext = () => {
      if (cancelled) return;

      if (index <= BOOT_MESSAGE.length) {
        setBootText(BOOT_MESSAGE.slice(0, index));
        index += 1;
        window.setTimeout(typeNext, 28);
        return;
      }

      window.setTimeout(() => {
        if (cancelled) return;
        setBooting(false);
        setHistory([
          {
            id: 0,
            type: "system",
            text: BOOT_MESSAGE,
          },
          {
            id: 1,
            type: "system",
            text: 'Type "help" to explore commands.',
          },
        ]);
        setLineId(2);
        inputRef.current?.focus();
      }, 250);
    };

    const startTimer = window.setTimeout(typeNext, 350);

    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);
    };
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [history, bootText, booting]);

  const focusInput = () => {
    if (!booting) inputRef.current?.focus();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (booting) return;

    const command = input;
    const result = runCommand(command);
    const nextId = lineId;

    if (result === "CLEAR") {
      setHistory([]);
      setLineId(0);
      setInput("");
      return;
    }

    const nextLines: HistoryLine[] = [
      {
        id: nextId,
        type: "input",
        text: command,
      },
    ];

    if (result) {
      nextLines.push({
        id: nextId + 1,
        type: result.startsWith("Command not found") ? "error" : "output",
        text: result,
      });
      setLineId(nextId + 2);
    } else {
      setLineId(nextId + 1);
    }

    setHistory((prev) => [...prev, ...nextLines]);
    setInput("");
  };

  return (
    <section
      id="home"
      className="relative scroll-mt-24 px-6 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16"
    >
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-600">
            Interactive intro
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            {SITE.name}
          </h1>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            Open a shell into the portfolio—type{" "}
            <code className="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-sky-800">
              help
            </code>{" "}
            to begin.
          </p>
        </div>

        <div
          role="region"
          aria-label="Simulated portfolio terminal"
          onClick={focusInput}
          className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/80 shadow-2xl shadow-slate-900/20 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 border-b border-slate-800/80 bg-slate-900/70 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500" aria-hidden="true" />
            <span
              className="h-3 w-3 rounded-full bg-yellow-400"
              aria-hidden="true"
            />
            <span
              className="h-3 w-3 rounded-full bg-green-500"
              aria-hidden="true"
            />
            <p className="ml-3 font-mono text-xs text-slate-400">
              paridhi@portfolio:~
            </p>
          </div>

          <div className="max-h-[28rem] min-h-[22rem] overflow-y-auto p-4 font-mono text-sm leading-relaxed text-slate-200 sm:p-5 sm:text-[0.95rem]">
            {booting ? (
              <p className="whitespace-pre-wrap text-sky-300">
                <span className="text-emerald-400">$</span> {bootText}
                <span
                  aria-hidden="true"
                  className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-sky-300 align-middle"
                />
              </p>
            ) : (
              <>
                {history.map((line) => (
                  <div key={line.id} className="mb-2 whitespace-pre-wrap">
                    {line.type === "input" ? (
                      <p>
                        <span className="text-emerald-400">guest@paridhi</span>
                        <span className="text-slate-500">:</span>
                        <span className="text-sky-400">~</span>
                        <span className="text-slate-500">$ </span>
                        <span className="text-slate-100">{line.text}</span>
                      </p>
                    ) : (
                      <p
                        className={
                          line.type === "error"
                            ? "text-rose-300"
                            : line.type === "system"
                              ? "text-sky-300"
                              : "text-slate-300"
                        }
                      >
                        {line.text}
                      </p>
                    )}
                  </div>
                ))}

                <form onSubmit={handleSubmit} className="flex items-center gap-2">
                  <label htmlFor="terminal-input" className="sr-only">
                    Terminal command
                  </label>
                  <span className="shrink-0">
                    <span className="text-emerald-400">guest@paridhi</span>
                    <span className="text-slate-500">:</span>
                    <span className="text-sky-400">~</span>
                    <span className="text-slate-500">$</span>
                  </span>
                  <div className="relative flex min-w-0 flex-1 items-center">
                    <input
                      id="terminal-input"
                      ref={inputRef}
                      value={input}
                      onChange={(event) => setInput(event.target.value)}
                      autoComplete="off"
                      spellCheck={false}
                      className="w-full bg-transparent font-mono text-slate-100 caret-sky-300 outline-none"
                      aria-label="Enter a terminal command"
                    />
                    {input.length === 0 ? (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 h-4 w-2 animate-pulse bg-sky-300"
                      />
                    ) : null}
                  </div>
                </form>
              </>
            )}
            <div ref={endRef} />
          </div>
        </div>
      </div>
    </section>
  );
}
