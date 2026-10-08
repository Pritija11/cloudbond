import type { Metadata } from "next";
import Link from "next/link";
import { Search, Cable, ArrowRightLeft, Scissors, AlertTriangle, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InlineCTA from "@/components/shared/InlineCTA";

export const metadata: Metadata = {
  title: "Cloud Migration Networking",
  description:
    "Move to the cloud without losing the network you already trust — interconnects, staged cutover, and full dependency visibility.",
  alternates: { canonical: "/solutions/cloud-migration" },
  openGraph: {
    title: "Cloud Migration Networking | CloudBond",
    description:
      "Move to the cloud without losing the network you already trust — interconnects, staged cutover, and full dependency visibility.",
    url: "/solutions/cloud-migration",
  },
};

const stages = [
  { number: "01", title: "Assess", icon: Search, text: "Map current network dependencies and what needs to stay reachable throughout the move." },
  { number: "02", title: "Connect", icon: Cable, text: "Stand up interconnects between on-prem and target cloud environments before anything moves." },
  { number: "03", title: "Migrate", icon: ArrowRightLeft, text: "Move workloads in waves, with both environments fully routable the entire time." },
  { number: "04", title: "Cut Over", icon: Scissors, text: "Decommission legacy paths once traffic has fully shifted, with nothing left dangling." },
];

const signals = [
  "A single VPN tunnel carries all cross-environment traffic",
  "No one has full visibility into what's actually talking to what",
  "DNS cutover is planned as a manual step on migration day",
  "Compliance hasn't reviewed the new network boundary yet",
];

const outcomes = [
  "Zero-downtime cutover windows",
  "Full dependency map before the first workload moves",
  "A rollback path if something doesn't go as planned",
  "One network identity before, during, and after",
];

export default function CloudMigrationPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            01 / CLOUD MIGRATION
          </span>

          <ScrollReveal className="detail-hero-grid">
            <h1>Move to the cloud without losing the network you already trust.</h1>

            <div>
              <p>
                Migrations fail at the network layer more often than
                anywhere else. CloudBond keeps both environments fully
                connected and routable for the entire transition.
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
            <h2>Four stages, no surprise cutover weekend.</h2>
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
                Signs your migration network isn&apos;t ready yet.
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
                What a well-networked migration looks like.
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
        eyebrow="PLANNING A MIGRATION?"
        heading="Map the network before you move a single workload."
      />
    </main>
  );
}
