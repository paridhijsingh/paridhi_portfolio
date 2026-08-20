import { ArrowUpRight, Mail } from "lucide-react";
import { SITE } from "@/lib/constants";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/SocialIcons";

const linkStyles =
  "inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-black/20 px-5 py-2.5 text-sm font-medium text-[#A1A1AA] transition-all hover:border-[#8B5CF6]/30 hover:text-[#F5F5F5] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] motion-reduce:hover:translate-y-0 hover:-translate-y-0.5";

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
          <div className="rounded-xl border border-white/[0.08] bg-[rgba(255,255,255,0.04)] p-8 text-center sm:p-12">
            <a
              href={`mailto:${SITE.email}`}
              aria-label={`Email ${SITE.name}`}
              className="inline-flex items-center gap-2 text-lg font-semibold text-[#F5F5F5] transition-colors hover:text-[#8B5CF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] sm:text-xl"
            >
              <Mail className="h-5 w-5 text-[#22D3EE]" aria-hidden="true" />
              {SITE.email}
            </a>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={SITE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className={linkStyles}
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
                className={linkStyles}
              >
                <LinkedInIcon className="h-4 w-4" />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
              <a
                href={SITE.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-[#8B5CF6]/30 bg-[#8B5CF6]/10 px-5 py-2.5 text-sm font-medium text-[#F5F5F5] transition-all hover:bg-[#8B5CF6]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08090D] motion-reduce:hover:translate-y-0 hover:-translate-y-0.5"
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
