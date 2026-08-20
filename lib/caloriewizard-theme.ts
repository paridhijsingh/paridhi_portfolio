/** Brand colors sampled from CalorieWizard/BrandTheme.swift */
export const CW_PLUM = "#704860";
export const CW_PLUM_DEEP = "#56344a";
export const CW_PLUM_SOFT = "#a8849a";
export const CW_CREAM = "#f8f2f6";
export const CW_PAGE_BG = "#120c10";

export type CalorieWizardScreenId =
  | "dashboard"
  | "scanner"
  | "recipe"
  | "water"
  | "history";

export type CalorieWizardScreen = {
  id: CalorieWizardScreenId;
  label: string;
  title: string;
  description: string;
};

export const CALORIEWIZARD_SCREENS: readonly CalorieWizardScreen[] = [
  {
    id: "dashboard",
    label: "Track your nutrition",
    title: "Dashboard",
    description:
      "Track calories and macros across today, week, month, and year.",
  },
  {
    id: "scanner",
    label: "Analyze a meal",
    title: "Meal Scanner",
    description:
      "Snap or upload a meal photo to analyze calories and macros with Gemini.",
  },
  {
    id: "recipe",
    label: "Generate a recipe",
    title: "Recipe Wizard",
    description:
      "Enter pantry ingredients and craft gourmet recipes with dietary and calorie targets.",
  },
  {
    id: "water",
    label: "Track hydration",
    title: "Water Tracker",
    description:
      "Log daily hydration, set goals, and configure reminder schedules.",
  },
  {
    id: "history",
    label: "Review your history",
    title: "History",
    description:
      "Review analyzed meals with photos, macros, and meal type labels.",
  },
];
