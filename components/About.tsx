import {
  Container,
  GitBranch,
  Guitar,
  MapPin,
  Paintbrush,
  PenLine,
  Sparkles,
  Terminal,
  Waypoints,
} from "lucide-react";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

const CAPABILITIES = [
  {
    title: "Systems & Orchestration",
    body: "Designing stateful, multi-agent routing engines using LangGraph and constructing resilient multi-turn orchestrators with the OpenAI SDK.",
    Icon: GitBranch,
  },
  {
    title: "Data Science & ML Engineering",
    body: "Leveraging statistical modeling, data structures, and algorithms to extract signal from noise and build low-latency inference pipelines.",
    Icon: Terminal,
  },
  {
    title: "Infrastructure & DevOps",
    body: "Containerizing, orchestrating, and shipping production-grade applications using Docker, Kubernetes, and Python.",
    Icon: Container,
  },
] as const;

const HUMAN_SIDE = [
  {
    title: "Writing",
    body: (
      <>
        I author{" "}
        <Link
          href="/blog"
          className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-4 transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
        >
          No Filters Attached
        </Link>
        , an interactive digital space where I explore abstract thoughts,
        psychology, and the messiness of personal evolution.
      </>
    ),
    Icon: PenLine,
  },
  {
    title: "Music & Sound",
    body: "I play acoustic fingerstyle guitar and experiment with digital sound production.",
    Icon: Guitar,
  },
  {
    title: "Digital Art & Mindfulness",
    body: "I carve out time daily for digital illustration, alongside a dedicated yoga and meditation practice that keeps my thinking grounded and intentional.",
    Icon: Paintbrush,
  },
] as const;

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-slate-200/70 bg-white/70 px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="Bridging Analytical Rigor with System-Level Engineering"
            description={`Hi, I'm ${SITE.name}. I hold a B.S. in Statistics and Data Science from the University of California, Santa Barbara.`}
          />
        </Reveal>

        <Reveal className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
          <p>
            My work sits at the intersection of mathematical theory and modern
            software architecture. Rather than treating AI models as black
            boxes, I focus on building the resilient infrastructure around
            them—architecting multi-agent orchestration frameworks,
            Retrieval-Augmented Generation (RAG) systems, and scalable machine
            learning pipelines.
          </p>
          <blockquote className="border-l-4 border-emerald-400 bg-emerald-50/60 py-4 pl-5 text-slate-700 italic">
            &ldquo;Great technical systems aren&apos;t just powerful—they are
            predictable, modular, and designed around human behavior.&rdquo;
          </blockquote>
        </Reveal>

        <Reveal className="mt-20">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Technical Focus & Capabilities
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              I view software through a systems lens: data flows must be robust,
              agents must communicate deterministically, and deployments should
              be seamless.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {CAPABILITIES.map(({ title, body, Icon }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 text-sky-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h4 className="mt-4 text-base font-semibold text-slate-900">
                    {title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {[
              { label: "Python", Icon: Terminal },
              { label: "Docker", Icon: Container },
              { label: "Kubernetes", Icon: Waypoints },
              { label: "LangGraph", Icon: GitBranch },
            ].map(({ label, Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
              >
                <Icon className="h-4 w-4 text-sky-600" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-20">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              The Human Side & Creative Endeavors
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              While I love building complex backends, my curiosity extends
              beyond code. I am deeply interested in human psychology, personal
              development, and how individuals navigate creativity and growth.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {HUMAN_SIDE.map(({ title, body, Icon }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-md">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h4 className="mt-4 text-base font-semibold text-slate-900">
                    {title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-sky-50/60 p-8 text-center shadow-sm sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Let&apos;s Connect
            </span>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Whether you want to discuss multi-agent system design, statistics,
              or creative collaboration, I&apos;m always open to meaningful
              conversations.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-700">
              <MapPin className="h-4 w-4 text-sky-600" aria-hidden="true" />
              San Francisco Bay Area / San Ramon, CA
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                <GitHubIcon className="h-4 w-4" />
                github.com/paridhijsingh
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                <LinkedInIcon className="h-4 w-4" />
                linkedin.com/in/paridhijsingh
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2"
              >
                {SITE.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
