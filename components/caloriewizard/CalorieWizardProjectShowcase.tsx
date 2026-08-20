"use client";

import Link from "next/link";
import { CalorieWizardPhonePreview } from "@/components/caloriewizard/CalorieWizardPhonePreview";

export function CalorieWizardProjectShowcase() {
  return (
    <div className="mt-8">
      <CalorieWizardPhonePreview mode="embedded" />
      <div className="mt-4 flex justify-center">
        <Link
          href="/case-studies/caloriewizard"
          className="inline-flex min-h-10 items-center gap-1.5 font-mono text-xs text-[#A1A1AA] transition-colors hover:text-[#22D3EE] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#22D3EE]"
        >
          Open full CalorieWizard case study
        </Link>
      </div>
    </div>
  );
}
