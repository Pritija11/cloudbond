import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe2,
  Route,
  Boxes,
  Network,
  SlidersHorizontal,
  Map,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InlineCTA from "@/components/shared/InlineCTA";

export const metadata: Metadata = {
  title: "Multi-Cloud Networking",
  description:
    "One routable network across every cloud you run — unified addressing, cross-cloud routing, and a single policy layer instead of five.",
  alternates: { canonical: "/platform/multi-cloud-networking" },
  openGraph: {
    title: "Multi-Cloud Networking | CloudBond",
    description:
      "One routable network across every cloud you run — unified addressing, cross-cloud routing, and a single policy layer instead of five.",
    url: "/platform/multi-cloud-networking",
  },
};

const capabilities = [
  { label: "Unified addressing", icon: Globe2 },
  { label: "Cross-cloud routing", icon: Route },
  { label: "Provider-agnostic", icon: Boxes },
  { label: "Transit gateway mesh", icon: Network },
  { label: "Policy-based routing", icon: SlidersHorizontal },
  { label: "Live topology view", icon: Map },
];

const outcomes = [
  "Retire one-off VPN tunnels between clouds",
  "Add a new cloud region in hours, not weeks",
  "One routing table instead of five",
  "Full visibility into cross-cloud traffic paths",
];

export default function MultiCloudNetworkingPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            01 / MULTI-CLOUD NETWORKING
          </span>

          <ScrollReveal className="detail-hero-grid">
            <h1>One routable network across every cloud you run.</h1>

            <div>
              <p>
                CloudBond gives every cloud you use — AWS, Azure, GCP, or
                on-prem — a shared address space and routing layer, so they
                behave like one network instead of five disconnected ones.
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
            <h2>Everything needed to treat five clouds as one.</h2>
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
                Three clouds, three routing models, zero shared visibility.
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 18 }}>
                Most teams end up with a different routing model, a
                different VPN gateway, and a different set of rules for
                every provider they adopt. CloudBond collapses that into one
                consistent network layer that your team only has to learn
                once.
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
        eyebrow="MULTI-CLOUD, SIMPLIFIED"
        heading="Run one network instead of five."
      />
    </main>
  );
}
