import {
  Bell,
  Bot,
  BrainCircuit,
  Search,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type AIUseCase = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const aiUseCases: AIUseCase[] = [
  {
    icon: Bell,
    title: "Incident triage copilots",
    description:
      "Route noisy alerts into useful response context with incident summaries, likely causes, and next actions.",
  },
  {
    icon: Search,
    title: "Runbook search and retrieval",
    description:
      "Make operational documentation actually usable during incidents by turning it into fast, contextual assistance.",
  },
  {
    icon: BrainCircuit,
    title: "Deployment risk scoring",
    description:
      "Use change context, test history, and service dependencies to highlight releases that need stronger safeguards.",
  },
  {
    icon: TrendingUp,
    title: "Capacity and cost forecasting",
    description:
      "Combine telemetry and infrastructure patterns to spot waste, forecast growth, and plan scaling earlier.",
  },
  {
    icon: Bot,
    title: "Ops workflow automation",
    description:
      "Use AI where it reduces repetitive toil across ticket enrichment, environment checks, and operational follow-ups.",
  },
  {
    icon: ShieldCheck,
    title: "Guardrailed platform assistance",
    description:
      "Add AI into delivery operations with approval gates, audit trails, and clear human control over production actions.",
  },
];

export const aiPrinciples = [
  "Use AI where it removes operational drag, not where it adds risk to production changes.",
  "Keep humans in control for approvals, infrastructure mutations, and customer-impacting actions.",
  "Tie AI work to delivery outcomes such as lower MTTR, better release confidence, and less platform toil.",
];

export const aiDeliverables = [
  "AI-readiness assessment for your delivery and operations workflows",
  "Use-case prioritization with security, governance, and ROI constraints",
  "Implementation plan for copilots, retrieval systems, and workflow automation",
  "Guardrails for approval, observability, prompt governance, and auditability",
];
