import type { Metadata } from "next";
import Link from "next/link";
import { ClipboardList, Cable, Landmark, Rocket, AlertTriangle, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InlineCTA from "@/components/shared/InlineCTA";

export const metadata: Metadata = {
  title: "Global Expansion",
  description:
    "Open a new region without reinventing your network — consistent policy, routing, and compliance from day one.",
  alternates: { canonical: "/solutions/global-expansion" },
  openGraph: {
    title: "Global Expansion | CloudBond",
    description:
      "Open a new region without reinventing your network — consistent policy, routing, and compliance from day one.",
    url: "/solutions/global-expansion",
  },
};

const stages = [
  { number: "01", title: "Scope", icon: ClipboardList, text: "Understand latency, compliance, and data residency requirements for the new region." },
  { number: "02", title: "Connect", icon: Cable, text: "Extend your existing network and policy model into the new region's infrastructure." },
  { number: "03", title: "Localize", icon: Landmark, text: "Apply region-specific routing and compliance policy without duplicating your whole stack." },
  { number: "04", title: "Launch", icon: Rocket, text: "Go live with the same operational model your team already knows." },
];

const signals = [
  "Expansion is blocked waiting on a region built from scratch",
  "Each region has its own hand-configured compliance posture",
  "No consistent way to monitor latency across regions",
  "Every new region feels like standing up a new company network",
];

const outcomes = [
  "New regions launch in weeks, not quarters",
  "One policy model enforced across every region",
  "Consistent latency visibility, globally",
  "Compliance boundaries enforced automatically",
];

export default function GlobalExpansionPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            02 / GLOBAL EXPANSION
          </span>

          <ScrollReveal className="detail-hero-grid">
            <h1>Open a new region without reinventing your network.</h1>

            <div>
              <p>
                Most teams redesign their network from scratch for every
                new region. CloudBond extends the network you already run
                into wherever you expand next, with the same policy and
                routing you already know.
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
            <span className="eyebrow">THE PROCESS</span>
            <h2>Four stages, repeatable for every new region.</h2>
          </ScrollReveal>

          <div className="stage-grid">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <ScrollReveal
                  as="article"
                  className="stage-card"
                  key={stage.number}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <div className="stage-card-top">
                    <span className="mono-label">{stage.number}</span>
                    <Icon size={20} strokeWidth={1.7} color="var(--accent)" />
                  </div>
                  <h3>{stage.title}</h3>
                  <p>{stage.text}</p>
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
              <span className="eyebrow">SIGNALS</span>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(24px, 2.8vw, 36px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Signs expansion is outrunning your network.
              </h2>

              <div className="outcome-list" style={{ marginTop: 28 }}>
                {signals.map((signal) => (
                  <div className="outcome-row" key={signal}>
                    <AlertTriangle size={18} strokeWidth={1.8} color="#f5a623" />
                    <p>{signal}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="eyebrow">OUTCOMES</span>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(24px, 2.8vw, 36px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                What repeatable expansion looks like.
              </h2>

              <div className="outcome-list" style={{ marginTop: 28 }}>
                {outcomes.map((outcome) => (
                  <div className="outcome-row" key={outcome}>
                    <CheckCircle2 size={18} strokeWidth={1.8} />
                    <p>{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <InlineCTA
        eyebrow="EXPANDING INTO A NEW REGION?"
        heading="Make your next region a playbook, not a project."
      />
    </main>
  );
}
