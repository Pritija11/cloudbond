import type { Metadata } from "next";
import Link from "next/link";
import {
  Waypoints,
  Server,
  MoveRight,
  Search,
  Gauge,
  GitBranch,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InlineCTA from "@/components/shared/InlineCTA";

export const metadata: Metadata = {
  title: "Hybrid Connectivity",
  description:
    "Bridge legacy data centers and cloud workloads without re-architecting either side of the connection.",
  alternates: { canonical: "/platform/hybrid-connectivity" },
  openGraph: {
    title: "Hybrid Connectivity | CloudBond",
    description:
      "Bridge legacy data centers and cloud workloads without re-architecting either side of the connection.",
    url: "/platform/hybrid-connectivity",
  },
};

const capabilities = [
  { label: "Transparent L3 extension", icon: Waypoints },
  { label: "Legacy-friendly, no DC rewiring", icon: Server },
  { label: "Free workload mobility", icon: MoveRight },
  { label: "Consistent DNS & discovery", icon: Search },
  { label: "Bandwidth-aware routing", icon: Gauge },
  { label: "Phased migration support", icon: GitBranch },
];

const outcomes = [
  "Migrate at your own pace, not all at once",
  "No dual-stack DNS headaches",
  "Legacy apps keep working through the transition",
  "One network identity across old and new infrastructure",
];

export default function HybridConnectivityPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            03 / HYBRID CONNECTIVITY
          </span>

          <ScrollReveal className="detail-hero-grid">
            <h1>Bridge data centers and cloud workloads without re-architecting.</h1>

            <div>
              <p>
                Your data center doesn&apos;t need to disappear overnight.
                CloudBond extends your existing network into the cloud so
                workloads can move on your timeline, not a forced deadline.
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
            <h2>A bridge, not a forced migration.</h2>
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
                Not every workload is ready to move today.
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 18 }}>
                Forced, all-at-once migrations are how outages happen.
                CloudBond lets your data center and cloud environments share
                one network identity, so you can move workloads one at a
                time, test as you go, and never have a service that&apos;s
                unreachable mid-transition.
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
        eyebrow="MIGRATE ON YOUR TIMELINE"
        heading="Still running critical workloads on-prem?"
      />
    </main>
  );
}
