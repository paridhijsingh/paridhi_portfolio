import type { MDXComponents } from "mdx/types";
import type { ComponentPropsWithoutRef } from "react";

const components: MDXComponents = {
  h1: (props: ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mt-2 mb-6 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl"
      {...props}
    />
  ),
  h2: (props: ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-10 mb-4 text-2xl font-semibold tracking-tight text-slate-900"
      {...props}
    />
  ),
  h3: (props: ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 mb-3 text-xl font-semibold tracking-tight text-slate-900"
      {...props}
    />
  ),
  p: (props: ComponentPropsWithoutRef<"p">) => (
    <p className="mb-5 text-base leading-relaxed text-slate-600" {...props} />
  ),
  a: (props: ComponentPropsWithoutRef<"a">) => (
    <a
      className="font-medium text-sky-700 underline decoration-sky-300 underline-offset-4 transition-colors hover:text-sky-600"
      {...props}
    />
  ),
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mb-5 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-600"
      {...props}
    />
  ),
  ol: (props: ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mb-5 list-decimal space-y-2 pl-6 text-base leading-relaxed text-slate-600"
      {...props}
    />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="leading-relaxed" {...props} />
  ),
  blockquote: (props: ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mb-5 border-l-4 border-sky-300 bg-sky-50/60 py-2 pl-4 text-slate-600 italic"
      {...props}
    />
  ),
  code: (props: ComponentPropsWithoutRef<"code">) => {
    const isBlock = Boolean(props.className);
    if (isBlock) {
      return (
        <code
          className={`font-mono text-sm leading-relaxed text-sky-100 ${props.className ?? ""}`}
          {...props}
        />
      );
    }

    return (
      <code
        className="rounded-md bg-slate-100 px-1.5 py-0.5 font-mono text-[0.9em] text-sky-800"
        {...props}
      />
    );
  },
  pre: (props: ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mb-6 overflow-x-auto rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm shadow-sm"
      {...props}
    />
  ),
  hr: (props: ComponentPropsWithoutRef<"hr">) => (
    <hr className="my-10 border-slate-200" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
