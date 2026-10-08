import type { Metadata } from "next";
import Link from "next/link";
import { ListChecks, Layers, ArrowRightLeft, Trash2, AlertTriangle, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InlineCTA from "@/components/shared/InlineCTA";

export const metadata: Metadata = {
  title: "Network Modernization",
  description:
    "Replace legacy MPLS circuits and hardware VPNs with a software-defined network that changes as fast as your infrastructure does.",
  alternates: { canonical: "/solutions/network-modernization" },
  openGraph: {
    title: "Network Modernization | CloudBond",
    description:
      "Replace legacy MPLS circuits and hardware VPNs with a software-defined network that changes as fast as your infrastructure does.",
    url: "/solutions/network-modernization",
  },
};

const stages = [
  { number: "01", title: "Audit", icon: ListChecks, text: "Inventory every circuit, VPN, and hardware dependency in the current network." },
  { number: "02", title: "Parallel Build", icon: Layers, text: "Stand up the software-defined replacement alongside the legacy network." },
  { number: "03", title: "Cutover", icon: ArrowRightLeft, text: "Shift traffic path by path, validating each one before moving to the next." },
  { number: "04", title: "Decommission", icon: Trash2, text: "Retire legacy circuits and hardware once nothing depends on them." },
];

const signals = [
  "Network changes take weeks because they need a hardware truck roll",
  "MPLS circuit costs keep climbing while bandwidth needs grow faster",
  "No one fully trusts the as-built network diagram anymore",
  "Core hardware is nearing end-of-life with no modernization plan",
];

const outcomes = [
  "Network changes ship like software, not hardware orders",
  "Meaningful reduction in fixed circuit costs",
  "A topology that matches what's actually documented",
  "No more emergency hardware replacement projects",
];

export default function NetworkModernizationPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            03 / NETWORK MODERNIZATION
          </span>

          <ScrollReveal className="detail-hero-grid">
            <h1>Replace legacy MPLS and hardware VPNs with software-defined networking.</h1>

            <div>
              <p>
                Hardware-bound networks can&apos;t move at the speed your
                infrastructure does. CloudBond migrates you to a
                software-defined layer without a flag-day cutover.
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
            <h2>Four stages, no flag-day cutover.</h2>
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
                Signs your network is overdue for modernization.
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
                What a modernized network looks like.
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
        eyebrow="RUNNING ON LEGACY HARDWARE?"
        heading="Replace the hardware before it replaces your roadmap."
      />
    </main>
  );
}
