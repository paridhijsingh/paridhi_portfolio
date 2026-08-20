import { PROJECTS } from "@/lib/constants";

export type ArchitectureNode = {
  id: string;
  label: string;
  explanation: string;
};

export type ProjectCaseStudy = {
  id: string;
  title: string;
  cardTitle?: string;
  cardCategory?: string;
  tagline: string;
  cardSubline?: string;
  description: string;
  highlight: string;
  status?: string;
  tech: readonly string[];
  github: string;
  demo?: string;
  caseStudyHref?: string;
  isAI: boolean;
  architecture: readonly ArchitectureNode[];
  problem: string;
  approach: string;
  implementation: string;
  results: string;
};

export const PROJECT_CASE_STUDIES: readonly ProjectCaseStudy[] = [
  {
    id: "caloriewizard",
    title: "CalorieWizard",
    cardTitle: "CALORIEWIZARD",
    cardCategory: "AI · iOS · SWIFTUI",
    tagline: "Snap, Track, and Transform.",
    cardSubline:
      "An iOS nutrition companion that combines computer vision, nutrition tracking, recipe generation, hydration tracking, and cloud sync.",
    description:
      "An AI-powered iOS nutrition app that turns meal photos into calorie and macro insights and uses Gemini to generate personalized recipes.",
    highlight: "AI · iOS · SwiftUI",
    status: "Currently in testing",
    tech: [
      "SwiftUI",
      "SwiftData",
      "Google Gemini",
      "Supabase",
      "PostgreSQL",
      "Swift Charts",
      "PhotosUI",
    ],
    github: "https://github.com/paridhijsingh/CalorieWizard",
    caseStudyHref: "/case-studies/caloriewizard",
    isAI: true,
    architecture: [
      {
        id: "capture",
        label: "Meal Photo",
        explanation: "PhotosUI captures meal images for analysis.",
      },
      {
        id: "analysis",
        label: "Nutrition Analysis",
        explanation:
          "Image and nutrition logic estimate calories and macro breakdowns.",
      },
      {
        id: "gemini",
        label: "Gemini Recipes",
        explanation:
          "Google Gemini generates personalized recipe suggestions from nutrition context.",
      },
      {
        id: "tracking",
        label: "Tracking",
        explanation:
          "Daily nutrition and hydration logs are managed in the app layer.",
      },
      {
        id: "cloud",
        label: "Cloud Sync",
        explanation:
          "Supabase/PostgreSQL provide synchronized data and persistence.",
      },
    ],
    problem:
      "Nutrition tracking apps often make logging and interpretation manual. CalorieWizard aims to simplify this using meal-photo workflows and AI-assisted guidance.",
    approach:
      "Use SwiftUI for iOS experience, integrate meal-photo nutrition analysis, and add Gemini-powered recipe generation with persistent cloud data.",
    implementation:
      "Built as an iOS app using SwiftUI and SwiftData, with Supabase/PostgreSQL sync, Swift Charts visualization, and PhotosUI capture flows.",
    results:
      "Currently in testing. The app is in active development and validation, not presented as a finished production system.",
  },
  {
    id: "insurance-claims-ai-workflow",
    title: PROJECTS[0].title,
    tagline:
      "Local LangGraph workflow: deterministic control, bounded LLM judgment.",
    description: PROJECTS[0].description,
    highlight: PROJECTS[0].highlight,
    tech: PROJECTS[0].tech,
    github: PROJECTS[0].href,
    isAI: true,
    architecture: [
      {
        id: "validation",
        label: "Validation",
        explanation:
          "Pydantic validates claim intake before the graph runs.",
      },
      {
        id: "policy",
        label: "Policy",
        explanation:
          "Deterministic policy lookup verifies coverage eligibility in code.",
      },
      {
        id: "ocr",
        label: "OCR",
        explanation:
          "Document OCR extraction runs as a deterministic tool step.",
      },
      {
        id: "retry",
        label: "Retry Router",
        explanation:
          "Code-level OCR retry routing loops failures or forces escalation after max attempts.",
      },
      {
        id: "fraud",
        label: "Fraud",
        explanation:
          "Deterministic fraud scoring produces signals before any LLM call.",
      },
      {
        id: "safety",
        label: "Safety",
        explanation:
          "Safety rails in Python block unsafe approve paths and skip the LLM when required steps fail.",
      },
      {
        id: "ollama",
        label: "Ollama",
        explanation:
          "Optional local Ollama model provides bounded final judgment only on verified facts.",
      },
      {
        id: "decision",
        label: "Decision",
        explanation:
          "Structured APPROVE / REJECT / ESCALATE output with post-LLM guards in code.",
      },
    ],
    problem:
      "Chat-only claim agents often mix tool choice, retries, and final decisions in free text—hard to test and easy to silently approve unsafe paths.",
    approach:
      "Separate deterministic control logic (validation, policy, OCR, fraud, retries, safety) from a bounded LLM judgment step. LangGraph orchestrates the graph; Ollama is optional and local-only.",
    implementation:
      "Python package with Pydantic models, injectable policy/OCR/fraud tools, LangGraph nodes and OCR retry router, FakeLLM for tests, optional Ollama for structured DecisionOutput, CLI execution, logging, and pytest plus evaluation harnesses. Not a production insurance claims system.",
    results:
      "78 automated tests passing. 20 LLM-judgment evaluation cases. On the expanded L07–L20 suite with llama3.2, reported accuracy improved from 29% (prompt v1) to 79% (prompt v2); 0 safety violations across reported Ollama evaluations. These are local evaluation results on a small suite—not production accuracy. Fully local; no cloud API keys required.",
  },
  {
    id: "agentic-insurance-claims",
    title: PROJECTS[1].title,
    tagline:
      "Multi-framework agentic AI for insurance claims automation.",
    description: PROJECTS[1].description,
    highlight: PROJECTS[1].highlight,
    tech: [...PROJECTS[1].tech, "Google ADK"],
    github: PROJECTS[1].href,
    isAI: true,
    architecture: [
      {
        id: "intake",
        label: "Claim Intake",
        explanation:
          "Insurance claims enter the pipeline for agentic automation.",
      },
      {
        id: "orchestration",
        label: "Orchestration",
        explanation:
          "LLM orchestration patterns coordinate multi-step claim handling.",
      },
      {
        id: "routing",
        label: "Agent Routing",
        explanation:
          "LangGraph and SDK-based routers manage agent handoffs across frameworks.",
      },
      {
        id: "frameworks",
        label: "Framework Layer",
        explanation:
          "Explores OpenAI SDK, LangGraph, Anthropic SDK, and Google ADK in parallel.",
      },
      {
        id: "response",
        label: "Response",
        explanation:
          "Processed claim output from the orchestrated agent workflow.",
      },
    ],
    problem:
      "Insurance claims automation requires coordinating multiple LLM frameworks and agent patterns—not a single-model call.",
    approach:
      "Build a multi-framework agentic system that compares orchestration approaches across OpenAI SDK, LangGraph, Anthropic SDK, and Google ADK.",
    implementation:
      "Python-based agentic framework with LangGraph routing, SDK adapters, and stateful multi-turn orchestration for claims workflows.",
    results:
      "Explores orchestration patterns across frameworks. See the repository for implementation details and framework comparisons.",
  },
  {
    id: "medical-insurance-mlops",
    title: PROJECTS[2].title,
    tagline:
      "End-to-end MLOps from regression training to AWS EKS deployment.",
    description: PROJECTS[2].description,
    highlight: PROJECTS[2].highlight,
    tech: PROJECTS[2].tech,
    github: PROJECTS[2].href,
    isAI: true,
    architecture: [
      {
        id: "train",
        label: "Train",
        explanation:
          "Regression model training on medical insurance data.",
      },
      {
        id: "build",
        label: "Build",
        explanation:
          "Docker images package the model and FastAPI serving layer.",
      },
      {
        id: "deploy",
        label: "Deploy",
        explanation:
          "Kubernetes manifests deploy the pipeline to AWS EKS.",
      },
      {
        id: "serve",
        label: "Serve",
        explanation:
          "FastAPI exposes the trained model for inference requests.",
      },
    ],
    problem:
      "A trained regression model needs a reproducible path from development to production on Kubernetes.",
    approach:
      "Pipeline the full MLOps lifecycle—train, containerize, orchestrate, and deploy on AWS EKS with FastAPI.",
    implementation:
      "Python training pipeline, Docker containerization, Kubernetes deployment configs, and FastAPI inference endpoints.",
    results:
      "End-to-end pipeline from model training to production deployment. See the repository for deployment steps and configuration.",
  },
  {
    id: "weather-analytics-engine",
    title: PROJECTS[3].title,
    tagline:
      "Real-time weather data, SQL persistence, and LLM-powered recommendations.",
    description: PROJECTS[3].description,
    highlight: PROJECTS[3].highlight,
    tech: PROJECTS[3].tech,
    github: PROJECTS[3].href,
    caseStudyHref: "/case-studies/rag-ai-assistant",
    isAI: true,
    architecture: [
      {
        id: "api",
        label: "Weather API",
        explanation:
          "Real-time weather APIs supply live data to the application.",
      },
      {
        id: "sql",
        label: "SQL Store",
        explanation:
          "SQL database persists weather records for querying and analysis.",
      },
      {
        id: "processing",
        label: "Processing",
        explanation:
          "FastAPI handles ingestion, transformation, and request routing.",
      },
      {
        id: "llm",
        label: "LLM",
        explanation:
          "OpenAI generates recommendations from weather context.",
      },
      {
        id: "response",
        label: "Response",
        explanation:
          "Recommendations returned to the client via the API layer.",
      },
    ],
    problem:
      "Weather data needs persistent storage and intelligent recommendations—not just raw API responses.",
    approach:
      "Containerize a FastAPI app that ingests weather APIs, stores data in SQL, and layers OpenAI-powered recommendations on top.",
    implementation:
      "Dockerized FastAPI service with SQL persistence, external weather API integration, and OpenAI recommendation endpoints.",
    results:
      "Combines real-time weather ingestion with LLM recommendations. See the repository for API usage and setup.",
  },
  {
    id: "cybersecurity-threat-analysis",
    title: PROJECTS[4].title,
    tagline:
      "Analysis of global cybersecurity threats from 2015–2024.",
    description: PROJECTS[4].description,
    highlight: PROJECTS[4].highlight,
    tech: PROJECTS[4].tech,
    github: PROJECTS[4].href,
    isAI: false,
    architecture: [
      {
        id: "ingest",
        label: "Ingest",
        explanation:
          "Global cybersecurity threat datasets spanning 2015–2024.",
      },
      {
        id: "analyze",
        label: "Analyze",
        explanation:
          "Python and Jupyter notebooks process and explore the data.",
      },
      {
        id: "insights",
        label: "Insights",
        explanation:
          "Patterns in attacks, industry impacts, and security trends.",
      },
    ],
    problem:
      "Understanding decade-long trends in global cybersecurity threats requires structured analysis across years of data.",
    approach:
      "Analyze threat datasets in Jupyter to surface attack patterns, industry impacts, and security trends from 2015–2024.",
    implementation:
      "Python data analysis workflow in Jupyter notebooks with exploratory and summary outputs.",
    results:
      "Insights into attack patterns, industry impacts, and security trends across the 2015–2024 dataset.",
  },
] as const;

export function getProjectById(id: string): ProjectCaseStudy | undefined {
  return PROJECT_CASE_STUDIES.find((project) => project.id === id);
}
