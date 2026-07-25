import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";
import { Reveal } from "@/components/Reveal";

const socialLinkStyles =
  "inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4.5rem)] scroll-mt-24 items-center overflow-hidden px-6 py-20 sm:px-8 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-64 w-64 rounded-full bg-indigo-200/30 blur-3xl" />
      </div>

      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <Reveal>
          <Image
            src="/profile.jpg"
            alt="Paridhi Jay Singh - Profile Picture"
            width={320}
            height={320}
            priority
            className="h-36 w-36 rounded-full border-4 border-white object-cover object-top shadow-xl shadow-sky-900/10 ring-1 ring-slate-200 sm:h-44 sm:w-44"
          />
        </Reveal>

        <Reveal delay={120} className="mt-8">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            {SITE.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-sky-700 sm:text-xl">
            {SITE.role}
          </p>
        </Reveal>

        <Reveal delay={200} className="mt-5">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Architecting intelligent systems and resilient data pipelines—ML
            system design, RAG architectures, and multi-agent orchestration.
          </p>
          <p className="mt-3 text-sm font-medium text-slate-500">
            {SITE.education}
          </p>
        </Reveal>

        <Reveal delay={280} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-6 py-3 text-sm font-medium text-white shadow-md shadow-sky-600/20 transition-all hover:-translate-y-0.5 hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Explore My Work
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
            >
              Get in Touch
            </a>
          </div>
        </Reveal>

        <Reveal delay={340} className="mt-10">
          <div className="flex items-center justify-center gap-3">
            <a
              href={SITE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={socialLinkStyles}
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={SITE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={socialLinkStyles}
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${SITE.email}`}
              aria-label={`Email ${SITE.name}`}
              className={socialLinkStyles}
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
