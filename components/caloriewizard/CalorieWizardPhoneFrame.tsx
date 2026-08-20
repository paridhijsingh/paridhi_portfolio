"use client";

import { CalorieWizardScreenContent } from "@/components/caloriewizard/CalorieWizardScreenMocks";
import { CW_PLUM, type CalorieWizardScreenId } from "@/lib/caloriewizard-theme";

type CalorieWizardPhoneFrameProps = {
  activeScreenId: CalorieWizardScreenId;
  previousScreenId?: CalorieWizardScreenId;
  animate?: boolean;
  className?: string;
};

export function CalorieWizardPhoneFrame({
  activeScreenId,
  previousScreenId,
  animate = true,
  className = "",
}: CalorieWizardPhoneFrameProps) {
  const showTransition = animate && previousScreenId && previousScreenId !== activeScreenId;

  return (
    <div
      className={`relative mx-auto w-[min(100%,280px)] ${className}`}
      aria-label="CalorieWizard app preview"
    >
      <div
        className="absolute -inset-3 rounded-[2.6rem] opacity-60 blur-2xl motion-reduce:opacity-40"
        style={{
          background: `radial-gradient(circle at 50% 30%, ${CW_PLUM}55, transparent 70%)`,
        }}
        aria-hidden="true"
      />

      <div
        className="relative rounded-[2.35rem] p-[3px] shadow-2xl shadow-black/50"
        style={{
          background: `linear-gradient(145deg, #2a2430 0%, #121018 45%, #1e1824 100%)`,
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        <div className="rounded-[2.2rem] p-[7px]" style={{ background: "#0a0a0c" }}>
          <div
            className="relative overflow-hidden rounded-[1.85rem]"
            style={{
              aspectRatio: "9 / 19.2",
              background: "#120c10",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div
              className="absolute left-1/2 top-2 z-20 h-[5px] w-[28%] -translate-x-1/2 rounded-full bg-black/80"
              aria-hidden="true"
            />

            <div className="relative h-full w-full pt-5">
              {showTransition ? (
                <>
                  <div className="cw-screen-exit absolute inset-0">
                    <CalorieWizardScreenContent screenId={previousScreenId} />
                  </div>
                  <div className="cw-screen-enter absolute inset-0">
                    <CalorieWizardScreenContent screenId={activeScreenId} />
                  </div>
                </>
              ) : (
                <CalorieWizardScreenContent screenId={activeScreenId} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
