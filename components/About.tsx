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
          className="font-medium text-[#8B5CF6] underline decoration-[#8B5CF6]/40 underline-offset-4 transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
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

const cardStyles =
  "flex h-full flex-col rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-6 transition-all motion-reduce:transition-none hover:-translate-y-0.5 hover:border-[#8B5CF6]/25";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-y border-white/[0.08] px-6 py-24 sm:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="Bridging Analytical Rigor with System-Level Engineering"
            description={`Hi, I'm ${SITE.name}. I hold a B.S. in Statistics and Data Science from the University of California, Santa Barbara.`}
          />
        </Reveal>

        <Reveal className="mx-auto max-w-3xl space-y-5 text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
          <p>
            My work sits at the intersection of mathematical theory and modern
            software architecture. Rather than treating AI models as black
            boxes, I focus on building the resilient infrastructure around
            them—architecting multi-agent orchestration frameworks,
            Retrieval-Augmented Generation (RAG) systems, and scalable machine
            learning pipelines.
          </p>
          <blockquote className="border-l-2 border-[#8B5CF6] py-2 pl-5 text-[#F5F5F5] italic">
            &ldquo;Great technical systems aren&apos;t just powerful—they are
            predictable, modular, and designed around human behavior.&rdquo;
          </blockquote>
        </Reveal>

        <Reveal className="mt-20">
          <div className="mb-8 text-center">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
              Technical Focus & Capabilities
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#A1A1AA]">
              I view software through a systems lens: data flows must be robust,
              agents must communicate deterministically, and deployments should
              be seamless.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {CAPABILITIES.map(({ title, body, Icon }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className={cardStyles}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 text-[#8B5CF6]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h4 className="mt-4 text-base font-semibold text-[#F5F5F5]">
                    {title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                    {body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <ul className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {[
              { label: "Python", Icon: Terminal },
              { label: "Docker", Icon: Container },
              { label: "Kubernetes", Icon: Waypoints },
              { label: "LangGraph", Icon: GitBranch },
            ].map(({ label, Icon }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-md border border-white/[0.08] bg-black/20 px-3 py-1.5 font-mono text-xs text-[#A1A1AA]"
              >
                <Icon className="h-3.5 w-3.5 text-[#22D3EE]" aria-hidden="true" />
                {label}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-20">
          <div className="mb-8 text-center">
            <h3 className="font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-[#F5F5F5] sm:text-3xl">
              The Human Side & Creative Endeavors
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#A1A1AA]">
              While I love building complex backends, my curiosity extends
              beyond code. I am deeply interested in human psychology, personal
              development, and how individuals navigate creativity and growth.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {HUMAN_SIDE.map(({ title, body, Icon }, index) => (
              <Reveal key={title} delay={index * 80}>
                <article className={cardStyles}>
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#22D3EE]/20 bg-[#22D3EE]/10 text-[#22D3EE]">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <h4 className="mt-4 text-base font-semibold text-[#F5F5F5]">
                    {title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#A1A1AA]">
                    {body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20">
          <div className="rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-8 text-center sm:p-10">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#8B5CF6]/20 bg-[#8B5CF6]/10 px-3 py-1 font-mono text-xs text-[#8B5CF6]">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              Let&apos;s Connect
            </span>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#A1A1AA] sm:text-lg">
              Whether you want to discuss multi-agent system design, statistics,
              or creative collaboration, I&apos;m always open to meaningful
              conversations.
            </p>

            <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#A1A1AA]">
              <MapPin className="h-4 w-4 text-[#22D3EE]" aria-hidden="true" />
              San Francisco Bay Area / San Ramon, CA
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-black/20 px-4 py-2 text-sm font-medium text-[#A1A1AA] transition-all hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
              >
                <GitHubIcon className="h-4 w-4" />
                github.com/paridhijsingh
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-black/20 px-4 py-2 text-sm font-medium text-[#A1A1AA] transition-all hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
              >
                <LinkedInIcon className="h-4 w-4" />
                linkedin.com/in/paridhijsingh
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-4 py-2 text-sm font-medium text-[#F5F5F5] transition-all hover:bg-[#8B5CF6]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D]"
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
