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
    deliverable: "Ongoing SRE and platform support for delivery teams",
    price: "$5-8K/mo",
    features: [
      "Dedicated SRE hours",
      "Incident response",
      "Continuous optimization",
      "Quarterly reviews",
    ],
    popular: false,
  },
];

export const serviceCapabilities = [
  "Kubernetes architecture and operations",
  "CI/CD modernization and release safety",
  "Observability, incident response, and SRE practices",
  "Infrastructure cost optimization and capacity planning",
  "Platform documentation, runbooks, and team enablement",
  "Security baseline hardening for delivery infrastructure",
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
    title: "Handover",
    description:
      "We leave behind documentation, runbooks, and working practices your team can sustain.",
  },
];
