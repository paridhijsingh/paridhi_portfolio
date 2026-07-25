import { ArrowUpRight, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

const socialLinkStyles =
  "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch"
            description="Open to conversations about AI system design, data engineering roles, and collaborations."
          />
        </Reveal>

        <Reveal delay={90}>
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-sky-50/60 p-8 text-center shadow-sm sm:p-12">
            <a
              href={`mailto:${SITE.email}`}
              aria-label={`Email ${SITE.name}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-slate-900 transition-colors hover:text-sky-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 sm:text-xl"
            >
              <Mail className="h-5 w-5 text-sky-600" aria-hidden="true" />
              {SITE.email}
            </a>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className={socialLinkStyles}
              >
                <GitHubIcon className="h-4 w-4" />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className={socialLinkStyles}
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-sky-600/20 transition-all hover:-translate-y-0.5 hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2"
              >
                View Resume
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
