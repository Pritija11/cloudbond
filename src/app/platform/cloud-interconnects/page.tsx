import type { Metadata } from "next";
import Link from "next/link";
import {
  Cable,
  Gauge,
  ShieldHalf,
  Zap,
  Building2,
  Plug,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InlineCTA from "@/components/shared/InlineCTA";

export const metadata: Metadata = {
  title: "Cloud Interconnects",
  description:
    "Private, high-bandwidth links between clouds and data centers that never touch the public internet — dedicated circuits with redundant failover.",
  alternates: { canonical: "/platform/cloud-interconnects" },
  openGraph: {
    title: "Cloud Interconnects | CloudBond",
    description:
      "Private, high-bandwidth links between clouds and data centers that never touch the public internet — dedicated circuits with redundant failover.",
    url: "/platform/cloud-interconnects",
  },
};

const capabilities = [
  { label: "Dedicated circuits", icon: Cable },
  { label: "Sub-10ms regional latency", icon: Gauge },
  { label: "Redundant failover paths", icon: ShieldHalf },
  { label: "Elastic bandwidth, 1–100Gbps", icon: Zap },
  { label: "Carrier-neutral", icon: Building2 },
  { label: "Direct cloud on-ramps", icon: Plug },
];

const outcomes = [
  "Remove the public internet from critical paths",
  "Predictable latency between every region",
  "Lower egress costs than internet-routed transit",
  "One contract instead of five carrier relationships",
];

export default function CloudInterconnectsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            02 / CLOUD INTERCONNECTS
          </span>

          <ScrollReveal className="detail-hero-grid">
            <h1>Private links between every cloud and data center you run.</h1>

            <div>
              <p>
                Dedicated, carrier-grade circuits connect your environments
                directly — bypassing the public internet entirely for
                predictable latency and bandwidth you can actually plan
                around.
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
            <h2>Built for traffic that can&apos;t afford to be unpredictable.</h2>
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
                The internet was never built for your production traffic.
              </h2>
              <p style={{ color: "var(--muted)", marginTop: 18 }}>
                Public internet routing between clouds means variable
                latency, unpredictable packet loss, and egress bills that
                scale with every byte. A dedicated interconnect turns that
                into a known, contracted quantity.
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
        eyebrow="PREDICTABLE BY DESIGN"
        heading="Get your critical traffic off the public internet."
      />
    </main>
  );
}
