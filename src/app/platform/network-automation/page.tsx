import type { Metadata } from "next";
import Link from "next/link";
import {
  FileCode2,
  MousePointerClick,
  LayoutTemplate,
  History,
  RotateCcw,
  Workflow,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InlineCTA from "@/components/shared/InlineCTA";

export const metadata: Metadata = {
  title: "Network Automation",
  description:
    "Provision, change, and tear down network paths through code and APIs, not change-request tickets.",
  alternates: { canonical: "/platform/network-automation" },
  openGraph: {
    title: "Network Automation | CloudBond",
    description:
      "Provision, change, and tear down network paths through code and APIs, not change-request tickets.",
    url: "/platform/network-automation",
  },
};

const capabilities = [
  { label: "Infrastructure-as-code", icon: FileCode2 },
  { label: "Self-service connections", icon: MousePointerClick },
  { label: "Policy templates", icon: LayoutTemplate },
  { label: "Versioned change tracking", icon: History },
  { label: "Automated rollback", icon: RotateCcw },
  { label: "CI/CD integration", icon: Workflow },
];

const outcomes = [
  "Network changes ship in a pull request",
  "No more waiting on a ticket queue",
  "Full audit trail of every topology change",
  "Consistent configuration across every environment",
];

export default function NetworkAutomationPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            04 / NETWORK AUTOMATION
          </span>

          <ScrollReveal className="detail-hero-grid">
            <h1>Provision network paths through code, not change tickets.</h1>

            <div>
              <p>
                Application code goes through review and CI. Network
                changes, at most companies, go through a Slack message and a
                prayer. CloudBond treats connectivity the same way you treat
                everything else you ship.
              </p>
              <Link href="/contact" className="button button-primary">
                Talk to an engineer <span>↗</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="container">
          <ScrollReveal className="section-heading align-left">
            <span className="eyebrow">CAPABILITIES</span>
            <h2>Network changes that move at engineering speed.</h2>
          </ScrollReveal>

          <div className="capability-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <ScrollReveal
                  as="article"
                  className="glow-card"
                  key={item.label}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <div className="glow-card-icon">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>
                  <h3>{item.label}</h3>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">WHY IT MATTERS</span>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(24px, 2.8vw, 36px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                A ticket queue is not a network strategy.
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 18 }}>
                When every network change goes through a manual request, the
                network becomes the slowest part of shipping anything. We
                replace that with declarative configuration your team can
                review, test, and deploy through the same pipeline as your
                application code.
              </p>
            </div>

            <div className="outcome-list">
              {outcomes.map((outcome) => (
                <div className="outcome-row" key={outcome}>
                  <CheckCircle2 size={18} strokeWidth={1.8} />
                  <p>{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <InlineCTA
        eyebrow="NETWORKING AS CODE"
        heading="See your topology as declarative config."
      />
    </main>
  );
}
