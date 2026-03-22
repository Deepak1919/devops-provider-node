export type ServicePackage = {
  name: string;
  timeline: string;
  deliverable: string;
  price: string;
  features: string[];
  popular: boolean;
};

export const servicePackages: ServicePackage[] = [
  {
    name: "Kubernetes Audit",
    timeline: "5 days",
    deliverable: "Security, reliability, and cost review with a prioritized roadmap",
    price: "$3-5K",
    features: [
      "Cluster security scan",
      "Cost optimization report",
      "Architecture roadmap",
      "Executive summary",
    ],
    popular: false,
  },
  {
    name: "CI/CD Accelerator",
    timeline: "2 weeks",
    deliverable: "Production-ready delivery pipeline with safer release controls",
    price: "$8-12K",
    features: [
      "GitOps pipeline setup",
      "Automated testing",
      "Rollback strategies",
      "Team training session",
    ],
    popular: true,
  },
  {
    name: "Platform Build",
    timeline: "4-6 weeks",
    deliverable: "Complete Kubernetes platform foundation with monitoring and docs",
    price: "$20-35K",
    features: [
      "Full K8s platform",
      "Monitoring and alerting",
      "Runbooks and documentation",
      "2 weeks of support",
    ],
    popular: false,
  },
  {
    name: "Fractional DevOps",
    timeline: "Monthly",
    deliverable: "Ongoing DevOps, SRE, and platform support for delivery teams",
    price: "$5-8K/mo",
    features: [
      "Dedicated SRE hours",
      "DevOps support for releases and platform operations",
      "Incident response",
      "Continuous optimization",
      "Quarterly reviews",
    ],
    popular: false,
  },
  {
    name: "AI Ops Enablement",
    timeline: "2-3 weeks",
    deliverable: "Operational AI use-case plan with guardrails and implementation direction",
    price: "$6-10K",
    features: [
      "AI use-case assessment",
      "Runbook and search workflow design",
      "Risk and governance controls",
      "Implementation roadmap",
    ],
    popular: false,
  },
];

export const serviceCapabilities = [
  "Kubernetes architecture and operations",
  "CI/CD modernization and release safety",
  "Ongoing DevOps support for release engineering and platform operations",
  "Observability, incident response, and SRE practices",
  "Infrastructure cost optimization and capacity planning",
  "Platform documentation, runbooks, and team enablement",
  "Security baseline hardening for delivery infrastructure",
  "AI-assisted operations use cases with delivery-safe guardrails",
];

export const serviceWorkflow = [
  {
    step: "01",
    title: "Assess",
    description:
      "We review your current platform, deployment workflow, incidents, and team bottlenecks.",
  },
  {
    step: "02",
    title: "Implement",
    description:
      "We make the highest-impact fixes first, focusing on release safety, reliability, and speed.",
  },
  {
    step: "03",
    title: "Stabilize",
    description:
      "We validate the new workflows, strengthen observability, and reduce operational surprises before handover.",
  },
  {
    step: "04",
    title: "Handover",
    description:
      "We leave behind documentation, runbooks, and working practices your team can sustain.",
  },
  {
    step: "05",
    title: "Support",
    description:
      "Where needed, we continue with DevOps support, optimization, and review cycles so the platform keeps improving after launch.",
  },
];
