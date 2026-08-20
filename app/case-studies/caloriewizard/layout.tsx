import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CalorieWizard Case Study | Paridhi Jay Singh",
  description:
    "Interactive case study for CalorieWizard, an AI-powered SwiftUI nutrition app currently in testing.",
};

export default function CalorieWizardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
