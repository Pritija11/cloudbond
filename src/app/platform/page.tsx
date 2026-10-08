import type { Metadata } from "next";
import Link from "next/link";
import { Network, Cable, Waypoints, Workflow, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionCTA from "@/components/shared/SectionCTA";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "CloudBond's platform connects multi-cloud networking, interconnects, hybrid connectivity, automation, and security into one network layer.",
  alternates: { canonical: "/platform" },
  openGraph: {
    title: "Platform | CloudBond",
    description:
      "CloudBond's platform connects multi-cloud networking, interconnects, hybrid connectivity, automation, and security into one network layer.",
    url: "/platform",
  },
};

const items = [
  {
    number: "01",
    slug: "multi-cloud-networking",
    title: "Multi-Cloud Networking",
    description:
      "Connect AWS, Azure, GCP, and on-prem into a single routable network with consistent addressing and policy.",
    icon: Network,
  },
  {
    number: "02",
    slug: "cloud-interconnects",
    title: "Cloud Interconnects",
    description:
      "Private, high-bandwidth links between clouds and data centers that never touch the public internet.",
    icon: Cable,
  },
  {
    number: "03",
    slug: "hybrid-connectivity",
    title: "Hybrid Connectivity",
    description:
      "Bridge legacy data centers and cloud workloads without re-architecting either side of the connection.",
    icon: Waypoints,
  },
  {
    number: "04",
    slug: "network-automation",
    title: "Network Automation",
    description:
      "Provision, change, and tear down network paths through code and APIs, not change-request tickets.",
    icon: Workflow,
  },
  {
    number: "05",
    slug: "secure-connectivity",
    title: "Secure Connectivity",
    description:
      "Zero-trust segmentation and encrypted transit applied automatically across every link in the network.",
    icon: ShieldCheck,
  },
];

export default function PlatformPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            THE PLATFORM
          </span>

          <ScrollReveal className="page-hero-grid">
            <h1>Infrastructure networking for teams running more than one cloud.</h1>

            <div className="page-hero-copy">
              <p>
                Five connected layers that replace VPN sprawl, manual
                peering, and provider-specific tooling with one network you
                actually understand.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="container">
          <ScrollReveal className="solution-block">
            <div className="solution-block-list">
              <h2>Platform Categories</h2>

              {items.map((item) => (
                <div className="solution-row" key={item.slug}>
                  <div className="solution-row-top">
                    <span>{item.number}</span>
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                  <Link href={`/platform/${item.slug}`} className="solution-row-link">
                    Learn more
                  </Link>
                </div>
              ))}
            </div>

            <div className="solution-block-visual">
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 16,
                }}
              >
                {items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.slug}
                      style={{
                        width: 72,
                        height: 72,
                        borderRadius: 16,
                        background: "#ffffff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--accent)",
                        boxShadow: "var(--shadow-md)",
                      }}
                    >
                      <Icon size={28} strokeWidth={1.6} />
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionCTA
        eyebrow="NOT SURE WHERE TO START?"
        heading="Tell us what you're running. We'll map the network."
        description="Every CloudBond engagement starts with a connectivity map of what you have today."
      />
    </main>
  );
}
