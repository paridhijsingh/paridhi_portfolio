import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

const components: MDXComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mt-2 mb-6 font-[family-name:var(--font-heading)] text-3xl font-semibold tracking-tight text-[#F5F5F5] sm:text-4xl"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-10 mb-4 font-[family-name:var(--font-heading)] text-2xl font-semibold tracking-tight text-[#F5F5F5]"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold tracking-tight text-[#F5F5F5]"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-5 text-base leading-relaxed text-[#A1A1AA]" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="font-medium text-[#8B5CF6] underline decoration-[#8B5CF6]/40 underline-offset-4 transition-colors hover:text-[#22D3EE]"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mb-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-[#A1A1AA]"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mb-5 list-decimal space-y-2 pl-6 text-base leading-relaxed text-[#A1A1AA]"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mb-5 border-l-2 border-[#8B5CF6] py-2 pl-4 text-[#A1A1AA] italic"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => {
    const isBlock = Boolean(props.className);
    if (isBlock) {
      return (
        <code
          className={`font-mono text-sm leading-relaxed text-[#22D3EE] ${props.className ?? ""}`}
          {...props}
        />
      );
    }

    return (
      <code
        className="rounded-md border border-white/[0.08] bg-black/30 px-1.5 py-0.5 font-mono text-[0.9em] text-[#22D3EE]"
        {...props}
      />
    );
  },
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mb-6 overflow-x-auto rounded-xl border border-white/[0.08] bg-black/40 p-4 text-sm"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-10 border-white/[0.08]" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
