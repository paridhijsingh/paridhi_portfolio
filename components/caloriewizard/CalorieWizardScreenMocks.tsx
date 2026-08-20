"use client";

import Image from "next/image";
import {
  Camera,
  Droplets,
  History,
  LineChart,
  Sparkles,
  Wand2,
} from "lucide-react";
import {
  CW_CREAM,
  CW_PAGE_BG,
  CW_PLUM,
  CW_PLUM_DEEP,
  CW_PLUM_SOFT,
  type CalorieWizardScreenId,
} from "@/lib/caloriewizard-theme";

type ScreenProps = {
  className?: string;
};

function ScreenChrome({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden"
      style={{ background: CW_PAGE_BG, color: CW_CREAM }}
    >
      <div
        className="flex items-center justify-between px-3 pb-2 pt-1"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
      >
        <span className="text-[10px] font-semibold tracking-wide text-white/90">
          {title}
        </span>
        <Image
          src="/caloriewizard/mark.png"
          alt=""
          width={18}
          height={18}
          className="rounded-sm opacity-90"
          aria-hidden="true"
        />
      </div>
      <div className="flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

function SegmentedControl({
  options,
  activeIndex = 0,
}: {
  options: string[];
  activeIndex?: number;
}) {
  return (
    <div
      className="flex rounded-lg p-0.5"
      style={{ background: "rgba(255,255,255,0.08)" }}
    >
      {options.map((option, index) => (
        <span
          key={option}
          className="flex-1 rounded-md px-1 py-1 text-center text-[8px] font-medium"
          style={{
            background:
              index === activeIndex ? "rgba(255,255,255,0.14)" : "transparent",
            color: index === activeIndex ? CW_CREAM : "rgba(248,242,246,0.55)",
          }}
        >
          {option}
        </span>
      ))}
    </div>
  );
}

export function DashboardScreenMock({ className = "" }: ScreenProps) {
  const macros = [
    { label: "Protein", value: 42, goal: 150, color: CW_PLUM_SOFT },
    { label: "Carbs", value: 88, goal: 200, color: "#f59e0b" },
    { label: "Fat", value: 24, goal: 65, color: "#22c55e" },
  ];

  return (
    <ScreenChrome title="Dashboard">
      <div className={`space-y-2.5 px-3 py-2.5 ${className}`}>
        <div>
          <p className="text-[11px] font-bold text-white">Good evening</p>
          <p className="text-[8px] leading-relaxed text-white/50">
            Track calories and macros across today, week, month, and year.
          </p>
        </div>

        <SegmentedControl
          options={["Day", "Week", "Month", "Year"]}
          activeIndex={0}
        />

        <div
          className="rounded-xl p-2.5"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="flex items-center justify-between text-[8px]">
            <span className="text-white/55">Calories · Day</span>
            <span style={{ color: CW_PLUM_SOFT }} className="font-semibold">
              1,124 left
            </span>
          </div>
          <div
            className="mt-2 h-1.5 rounded-full"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="h-full rounded-full"
              style={{
                width: "44%",
                background: `linear-gradient(90deg, ${CW_PLUM_SOFT}, ${CW_PLUM})`,
              }}
            />
          </div>
          <div className="mt-2 flex justify-between">
            <div>
              <p className="text-lg font-bold leading-none text-white">876</p>
              <p className="text-[7px] text-white/45">Consumed</p>
            </div>
            <div className="text-right">
              <p className="text-lg font-bold leading-none text-white/70">
                2,000
              </p>
              <p className="text-[7px] text-white/45">Goal</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-1.5">
          {macros.map((macro) => (
            <div
              key={macro.label}
              className="rounded-lg p-1.5"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <p className="text-[7px] text-white/50">{macro.label}</p>
              <p className="text-[10px] font-bold text-white">
                {macro.value}
                <span className="text-[7px] font-normal text-white/45">g</span>
              </p>
              <div
                className="mt-1 h-1 rounded-full"
                style={{ background: "rgba(255,255,255,0.08)" }}
              >
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(macro.value / macro.goal) * 100}%`,
                    background: macro.color,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          className="rounded-xl p-2"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-[8px] font-medium text-white/55">Calorie trend</p>
          <div className="mt-2 flex items-end gap-1 h-14">
            {[32, 48, 40, 62, 55, 70, 44].map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-sm"
                style={{
                  height: `${height}%`,
                  background: `linear-gradient(180deg, ${CW_PLUM_SOFT}, ${CW_PLUM_DEEP})`,
                  opacity: index === 6 ? 1 : 0.55,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </ScreenChrome>
  );
}

export function ScannerScreenMock({ className = "" }: ScreenProps) {
  return (
    <ScreenChrome title="Meal Scanner">
      <div className={`space-y-2 px-3 py-2.5 ${className}`}>
        <div
          className="flex h-[88px] items-center justify-center rounded-xl"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <div className="text-center">
            <Camera
              className="mx-auto h-7 w-7"
              style={{ color: CW_PLUM_SOFT }}
              aria-hidden="true"
            />
            <p className="mt-1 text-[8px] text-white/45">No meal image selected</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5">
          <button
            type="button"
            className="rounded-lg py-1.5 text-[8px] font-semibold text-white"
            style={{ background: CW_PLUM }}
          >
            Take Photo
          </button>
          <button
            type="button"
            className="rounded-lg py-1.5 text-[8px] font-semibold"
            style={{
              background: `${CW_PLUM}22`,
              color: CW_PLUM_SOFT,
              border: `1px solid ${CW_PLUM}40`,
            }}
          >
            Photo Library
          </button>
        </div>

        <div
          className="rounded-lg p-2"
          style={{ background: `${CW_PLUM}28` }}
        >
          <p className="text-[8px] font-semibold text-white">AI Estimation Notice</p>
          <p className="mt-0.5 text-[7px] leading-relaxed text-white/55">
            AI estimates are for guidance. Tap any macro to manually adjust.
          </p>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-1 rounded-lg py-2 text-[8px] font-semibold text-white"
          style={{ background: "#4f46e5" }}
        >
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          Analyze Meal
        </button>

        <div>
          <p className="text-[8px] font-medium text-white/55">Analysis Results</p>
          <p className="mt-1 text-[7px] leading-relaxed text-white/45">
            Snap or upload a meal photo to analyze calories and macros instantly.
          </p>
        </div>
      </div>
    </ScreenChrome>
  );
}

export function RecipeScreenMock({ className = "" }: ScreenProps) {
  return (
    <ScreenChrome title="Recipes">
      <div className={`space-y-2 px-3 py-2.5 ${className}`}>
        <SegmentedControl options={["Create", "Favorites"]} activeIndex={0} />

        <div
          className="rounded-lg p-2"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-[7px] font-medium text-white/50">
            Available Ingredients / Pantry Items
          </p>
          <p className="mt-1 text-[8px] text-white/70">
            oats, almond milk, banana, eggs
          </p>
        </div>

        <div>
          <p className="mb-1 text-[7px] text-white/50">Category</p>
          <SegmentedControl
            options={["Main Course", "Snack", "Dessert"]}
            activeIndex={0}
          />
        </div>

        <div
          className="rounded-lg p-2 space-y-1"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-[7px] text-white/50">Dietary Focus & Health Needs</p>
          <p className="text-[8px] text-white/70">Balanced · None</p>
        </div>

        <div
          className="rounded-lg p-2"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-[7px] text-white/50">Calorie Target: 500 kcal</p>
          <div
            className="mt-1.5 h-1 rounded-full"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            <div
              className="h-full w-1/2 rounded-full"
              style={{ background: CW_PLUM_SOFT }}
            />
          </div>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-1 rounded-lg py-2 text-[8px] font-semibold text-white"
          style={{ background: CW_PLUM }}
        >
          <Wand2 className="h-3 w-3" aria-hidden="true" />
          Craft Gourmet Recipe
        </button>

        <div
          className="rounded-lg p-2"
          style={{ background: "rgba(255,255,255,0.04)" }}
        >
          <p className="text-[7px] text-white/45">
            Enter your available ingredients to craft a healthy, preservative-free
            gourmet recipe...
          </p>
        </div>
      </div>
    </ScreenChrome>
  );
}

export function WaterScreenMock({ className = "" }: ScreenProps) {
  return (
    <ScreenChrome title="Water">
      <div className={`space-y-2.5 px-3 py-2.5 ${className}`}>
        <div
          className="rounded-xl p-2.5"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1 text-[8px] font-semibold text-cyan-300">
              <Droplets className="h-3 w-3" aria-hidden="true" />
              Today&apos;s hydration
            </span>
            <span className="text-[7px] text-white/45">3 glasses</span>
          </div>

          <div className="relative mx-auto mt-2 h-16 w-16">
            <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="rgba(34,211,238,0.2)"
                strokeWidth="10"
              />
              <circle
                cx="50"
                cy="50"
                r="42"
                fill="none"
                stroke="#22d3ee"
                strokeWidth="10"
                strokeLinecap="round"
                strokeDasharray="264"
                strokeDashoffset="176"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <p className="text-sm font-bold text-white">750</p>
              <p className="text-[7px] text-white/45">ml</p>
            </div>
          </div>
          <p className="mt-1 text-center text-[7px] text-white/45">
            Goal 2,000 ml
          </p>
        </div>

        <div className="grid grid-cols-4 gap-1">
          {[250, 500, 750, 1000].map((amount) => (
            <button
              key={amount}
              type="button"
              className="rounded-lg py-1.5 text-[7px] font-medium text-cyan-200"
              style={{
                background: "rgba(34,211,238,0.12)",
                border: "1px solid rgba(34,211,238,0.25)",
              }}
            >
              +{amount}
            </button>
          ))}
        </div>

        <div
          className="rounded-xl p-2"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <p className="text-[8px] font-medium text-white/70">Reminder settings</p>
          <p className="mt-1 text-[7px] text-white/45">
            Every 60 min · 8:00 – 22:00
          </p>
        </div>
      </div>
    </ScreenChrome>
  );
}

export function HistoryScreenMock({ className = "" }: ScreenProps) {
  const meals = [
    {
      name: "Greek yogurt bowl",
      kind: "Breakfast",
      kcal: 320,
      p: 18,
      c: 42,
      f: 8,
    },
    {
      name: "Grilled chicken salad",
      kind: "Lunch",
      kcal: 485,
      p: 38,
      c: 24,
      f: 22,
    },
  ];

  return (
    <ScreenChrome title="History">
      <div className={`space-y-2 px-2 py-2 ${className}`}>
        {meals.map((meal) => (
          <div
            key={meal.name}
            className="flex gap-2 rounded-xl p-2"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
          >
            <div
              className="h-10 w-10 shrink-0 rounded-lg"
              style={{ background: `${CW_PLUM}35` }}
            />
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-1">
                <p className="truncate text-[9px] font-semibold text-white">
                  {meal.name}
                </p>
                <span
                  className="shrink-0 rounded-full px-1.5 py-0.5 text-[6px] font-semibold"
                  style={{
                    background: `${CW_PLUM}30`,
                    color: CW_PLUM_SOFT,
                  }}
                >
                  {meal.kind}
                </span>
              </div>
              <p className="text-[7px] text-white/40">Aug 13, 2:45 PM</p>
              <p className="text-[8px] font-semibold text-white">
                {meal.kcal} kcal
              </p>
              <div className="mt-0.5 flex gap-2 text-[6px] font-medium">
                <span style={{ color: CW_PLUM_SOFT }}>P {meal.p}g</span>
                <span className="text-amber-400">C {meal.c}g</span>
                <span className="text-green-400">F {meal.f}g</span>
              </div>
            </div>
          </div>
        ))}

        <div className="flex items-center justify-center gap-1 pt-1 text-[7px] text-white/35">
          <History className="h-3 w-3" aria-hidden="true" />
          Illustrative entries
        </div>
      </div>
    </ScreenChrome>
  );
}

const SCREEN_COMPONENTS: Record<
  CalorieWizardScreenId,
  React.ComponentType<ScreenProps>
> = {
  dashboard: DashboardScreenMock,
  scanner: ScannerScreenMock,
  recipe: RecipeScreenMock,
  water: WaterScreenMock,
  history: HistoryScreenMock,
};

export function CalorieWizardScreenContent({
  screenId,
  className,
}: {
  screenId: CalorieWizardScreenId;
  className?: string;
}) {
  const Component = SCREEN_COMPONENTS[screenId];
  return <Component className={className} />;
}

export function CalorieWizardScreenIcon({
  screenId,
  className = "h-4 w-4",
}: {
  screenId: CalorieWizardScreenId;
  className?: string;
}) {
  switch (screenId) {
    case "dashboard":
      return <LineChart className={className} aria-hidden="true" />;
    case "scanner":
      return <Camera className={className} aria-hidden="true" />;
    case "recipe":
      return <Wand2 className={className} aria-hidden="true" />;
    case "water":
      return <Droplets className={className} aria-hidden="true" />;
    case "history":
      return <History className={className} aria-hidden="true" />;
  }
}
