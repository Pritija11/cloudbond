import type { Metadata } from "next";
import Link from "next/link";
import {
  Lock,
  Fingerprint,
  Grid3x3,
  Activity,
  ShieldCheck,
  FileSearch,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InlineCTA from "@/components/shared/InlineCTA";

export const metadata: Metadata = {
  title: "Secure Connectivity",
  description:
    "Zero-trust segmentation and encrypted transit applied automatically across every link in the network.",
  alternates: { canonical: "/platform/secure-connectivity" },
  openGraph: {
    title: "Secure Connectivity | CloudBond",
    description:
      "Zero-trust segmentation and encrypted transit applied automatically across every link in the network.",
    url: "/platform/secure-connectivity",
  },
};

const capabilities = [
  { label: "Encrypted transit, every hop", icon: Lock },
  { label: "Identity-aware routing", icon: Fingerprint },
  { label: "Micro-segmentation", icon: Grid3x3 },
  { label: "Continuous posture checks", icon: Activity },
  { label: "Centralized policy engine", icon: ShieldCheck },
  { label: "Audit-ready logging", icon: FileSearch },
];

const outcomes = [
  "Replace flat trust zones with per-workload policy",
  "Meet compliance requirements without new appliances",
  "See every connection attempt, approved or denied",
  "One policy engine instead of five firewall consoles",
];

export default function SecureConnectivityPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            05 / SECURE CONNECTIVITY
          </span>

          <ScrollReveal className="detail-hero-grid">
            <h1>Zero-trust segmentation across every link in the network.</h1>

            <div>
              <p>
                Most teams bolt security onto their network after the fact.
                CloudBond builds it in from the start — every path we
                provision is encrypted, identity-aware, and governed by one
                policy engine.
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
            <h2>Security that travels with the connection.</h2>
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
                A flat network is a single point of failure.
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 18 }}>
                Point-to-point VPNs and broad trust zones mean one
                compromised workload can reach everything else on the
                network. CloudBond applies identity-based policy to every
                connection, so access is scoped to exactly what each
                workload needs — nothing more.
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
        eyebrow="SECURE BY DEFAULT"
        heading="Replace flat trust with real segmentation."
      />
    </main>
  );
}
