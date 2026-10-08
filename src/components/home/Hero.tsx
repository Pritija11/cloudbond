import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import NetworkGraphic from "./NetworkGraphic";

const stats = [
  { value: "40+", label: "Interconnect locations" },
  { value: "18ms", label: "Median cross-cloud latency" },
  { value: "99.99%", label: "Network uptime SLA" },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-shell">
        <div className="hero-copy">
          <ScrollReveal>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              MULTI-CLOUD NETWORKING
            </span>

            <h1>
              AWS, Azure, GCP, and your
              <br />
              data center, routed as
              <br />
              <span className="accent-text">one network.</span>
            </h1>

            <p className="hero-description">
              CloudBond replaces the VPN tunnels and manual peering between
              your clouds with a single connectivity layer — one address
              space, one routing policy, one place to look when something
              breaks.
            </p>

            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Talk to an engineer <span>↗</span>
              </Link>
              <Link href="/platform" className="button button-ghost">
                See the platform
              </Link>
            </div>

            <div className="hero-stats">
              {stats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="hero-graphic" delay={2}>
          <NetworkGraphic />
        </ScrollReveal>
      </div>
    </section>
  );
}
