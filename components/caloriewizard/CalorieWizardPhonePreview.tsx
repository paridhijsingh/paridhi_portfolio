"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type TouchEvent,
} from "react";
import { CalorieWizardPhoneFrame } from "@/components/caloriewizard/CalorieWizardPhoneFrame";
import {
  CalorieWizardScreenIcon,
} from "@/components/caloriewizard/CalorieWizardScreenMocks";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { CALORIEWIZARD_SCREENS } from "@/lib/caloriewizard-theme";

const STEP_MIN_HEIGHT = "min-h-[52vh]";

type CalorieWizardPhonePreviewProps = {
  className?: string;
  mode?: "immersive" | "embedded";
};

export function CalorieWizardPhonePreview({
  className = "",
  mode = "immersive",
}: CalorieWizardPhonePreviewProps) {
  const reduceMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);
  const touchStartX = useRef<number | null>(null);
  const activeIndexRef = useRef(0);

  const activeScreen = CALORIEWIZARD_SCREENS[activeIndex];
  const previousScreen = CALORIEWIZARD_SCREENS[previousIndex];

  const setIndex = useCallback((nextIndex: number) => {
    const clamped = Math.max(
      0,
      Math.min(nextIndex, CALORIEWIZARD_SCREENS.length - 1),
    );
    if (clamped === activeIndexRef.current) return;
    setPreviousIndex(activeIndexRef.current);
    activeIndexRef.current = clamped;
    setActiveIndex(clamped);
  }, []);

  useEffect(() => {
    if (mode !== "immersive") return;
    if (typeof window === "undefined") return;
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;

    const observers: IntersectionObserver[] = [];

    stepRefs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIndex(index);
          }
        },
        {
          root: null,
          rootMargin: "-38% 0px -38% 0px",
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, [setIndex, mode]);

  const showImmersiveDesktop = mode === "immersive";

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(delta) < 40) return;
    if (delta < 0) setIndex(activeIndex + 1);
    else setIndex(activeIndex - 1);
  };

  return (
    <section
      className={`rounded-2xl border border-white/[0.08] bg-[rgba(255,255,255,0.03)] p-6 sm:p-8 ${className}`}
      aria-label="CalorieWizard interactive app preview"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#22D3EE]">
            Product demo
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-heading)] text-2xl font-semibold text-[#F5F5F5]">
            Explore the app
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#A1A1AA]">
            {mode === "embedded"
              ? "UI replicas from the CalorieWizard SwiftUI codebase — swipe or tap indicators to preview core flows."
              : "UI replicas built from the CalorieWizard SwiftUI codebase — scroll on desktop or swipe on mobile to walk through core flows."}
          </p>
        </div>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-[#A1A1AA] lg:hidden">
          {mode === "embedded" ? "Swipe or tap to explore" : "Swipe to explore"}
        </p>
      </div>

      {/* Desktop immersive: scroll-driven walkthrough */}
      {showImmersiveDesktop ? (
        <div className="mt-8 hidden lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(300px,360px)] lg:gap-10">
        <div className="relative">
          {CALORIEWIZARD_SCREENS.map((screen, index) => (
            <div
              key={screen.id}
              ref={(node) => {
                stepRefs.current[index] = node;
              }}
              className={`flex ${STEP_MIN_HEIGHT} items-center py-6`}
            >
              <div
                className={`max-w-md transition-all duration-500 motion-reduce:transition-none ${
                  activeIndex === index
                    ? "translate-y-0 opacity-100"
                    : "translate-y-2 opacity-35"
                }`}
              >
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[#22D3EE]">
                  {String(index + 1).padStart(2, "0")} · {screen.title}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-semibold text-[#F5F5F5]">
                  {screen.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A1A1AA]">
                  {screen.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="sticky top-24 self-start">
          <div className="flex items-center gap-5">
            <div
              className="hidden min-w-[120px] flex-1 xl:block motion-reduce:transition-none transition-all duration-500"
              aria-live="polite"
            >
              <p
                className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#22D3EE]"
              >
                Now showing
              </p>
              <p className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-[#F5F5F5]">
                {activeScreen.label}
              </p>
            </div>

            <CalorieWizardPhoneFrame
              activeScreenId={activeScreen.id}
              previousScreenId={previousScreen.id}
              animate={!reduceMotion}
            />
          </div>

          <ScreenProgress
            activeIndex={activeIndex}
            onSelect={setIndex}
            className="mt-5"
          />
        </div>
        </div>
      ) : null}

      {/* Mobile + embedded: swipeable carousel */}
      <div className={`${showImmersiveDesktop ? "mt-6 lg:hidden" : "mt-8"}`}>
        <div
          className="touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-start justify-center gap-4">
            <div className="text-center sm:text-left">
              <p
                className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-[#22D3EE]"
                aria-live="polite"
              >
                {activeScreen.label}
              </p>
              <p className="mt-1 text-sm text-[#A1A1AA]">
                {activeScreen.description}
              </p>
            </div>
          </div>

          <div className="mt-4 flex justify-center">
            <CalorieWizardPhoneFrame
              activeScreenId={activeScreen.id}
              previousScreenId={previousScreen.id}
              animate={!reduceMotion}
            />
          </div>
        </div>

        <ScreenProgress
          activeIndex={activeIndex}
          onSelect={setIndex}
          className="mt-5"
        />
      </div>
    </section>
  );
}

function ScreenProgress({
  activeIndex,
  onSelect,
  className = "",
}: {
  activeIndex: number;
  onSelect: (index: number) => void;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center gap-2 ${className}`}
      role="tablist"
      aria-label="App screens"
    >
      {CALORIEWIZARD_SCREENS.map((screen, index) => {
        const isActive = index === activeIndex;
        return (
          <button
            key={screen.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            aria-label={`${screen.label} — ${screen.title}`}
            onClick={() => onSelect(index)}
            className={`inline-flex min-h-9 min-w-9 items-center justify-center rounded-full border transition-all duration-300 motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8B5CF6] ${
              isActive
                ? "border-[#8B5CF6]/50 bg-[#8B5CF6]/20 text-[#F5F5F5]"
                : "border-white/[0.08] bg-black/20 text-[#A1A1AA] hover:border-[#8B5CF6]/30"
            }`}
          >
            <CalorieWizardScreenIcon
              screenId={screen.id}
              className={`h-3.5 w-3.5 ${isActive ? "text-[#a8849a]" : ""}`}
            />
          </button>
        );
      })}
    </div>
  );
}
