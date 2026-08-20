import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "RAG AI Assistant Case Study | Paridhi Jay Singh",
  description:
    "Interactive walkthrough of a RAG system pipeline with retrieval, reranking, and grounded response design.",
};

export default function RagCaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
