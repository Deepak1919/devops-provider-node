export type CaseStudy = {
  slug: string;
  client: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  metrics: Array<{
    label: string;
    value: string;
  }>;
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "release-speed",
    client: "B2B SaaS Platform",
    headline: "Release cycles cut from four hours to eight minutes.",
    summary:
      "A growing product team needed safer releases across dozens of services without slowing feature delivery.",
    challenge:
      "Manual approvals, inconsistent environments, and weak rollback patterns made every deployment high-stress.",
    solution:
      "We implemented GitOps-based delivery, environment promotion controls, automated checks, and documented rollback paths.",
    metrics: [
      { label: "Deployment time", value: "4h -> 8m" },
      { label: "Services covered", value: "50+" },
      { label: "Weekly deployments", value: "200" },
    ],
    stack: ["Kubernetes", "ArgoCD", "GitLab CI", "Helm"],
  },
  {
    slug: "cost-and-scale",
    client: "Consumer Marketplace",
    headline: "Infrastructure spend reduced while traffic capacity increased.",
    summary:
      "The platform was scaling quickly, but cloud spend and node pressure were rising faster than revenue confidence.",
    challenge:
      "Underutilized clusters, weak autoscaling, and limited observability led to expensive overprovisioning.",
    solution:
      "We tuned cluster sizing, introduced autoscaling guardrails, and added dashboards that exposed waste before it became normal.",
    metrics: [
      { label: "Infra cost reduction", value: "38%" },
      { label: "Peak traffic headroom", value: "2.4x" },
      { label: "Alert noise reduction", value: "61%" },
    ],
    stack: ["Prometheus", "Grafana", "Terraform", "Cilium"],
  },
  {
    slug: "oncall-stability",
    client: "Fintech Engineering Team",
    headline: "On-call load dropped after platform visibility and runbooks were rebuilt.",
    summary:
      "A distributed team needed predictable incident handling and faster root-cause analysis across critical services.",
    challenge:
      "Pages lacked context, ownership was unclear, and recovery steps lived in tribal knowledge rather than systems.",
    solution:
      "We redesigned observability, added service ownership standards, and shipped incident-ready runbooks with response workflows.",
    metrics: [
      { label: "MTTR improvement", value: "47%" },
      { label: "Night pages avoided", value: "32/mo" },
      { label: "Runbooks shipped", value: "24" },
    ],
    stack: ["Grafana", "Alertmanager", "Ansible", "Vault"],
  },
];
