import Link from "next/link";
import { Network, Cable, Waypoints, Workflow, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const items = [
  {
    number: "01",
    slug: "multi-cloud-networking",
    title: "Multi-Cloud Networking",
    description:
      "Connect AWS, Azure, GCP, and on-prem into a single routable network.",
    icon: Network,
  },
  {
    number: "02",
    slug: "cloud-interconnects",
    title: "Cloud Interconnects",
    description:
      "Private, high-bandwidth links between clouds and data centers — no public internet hop.",
    icon: Cable,
  },
  {
    number: "03",
    slug: "hybrid-connectivity",
    title: "Hybrid Connectivity",
    description:
      "Bridge legacy data centers and cloud workloads without re-architecting either side.",
    icon: Waypoints,
  },
  {
    number: "04",
    slug: "network-automation",
    title: "Network Automation",
    description:
      "Provision, change, and tear down network paths through code, not tickets.",
    icon: Workflow,
  },
  {
    number: "05",
    slug: "secure-connectivity",
    title: "Secure Connectivity",
    description:
      "Zero-trust segmentation and encrypted transit applied across every link.",
    icon: ShieldCheck,
  },
];

export default function PlatformSection() {
  return (
    <section>
      <div className="container">
        <ScrollReveal className="section-heading align-left">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            THE PLATFORM
          </span>
          <h2>Five layers. One connected network.</h2>
          <p>
            CloudBond is built as a connectivity layer, not a point tool —
            each piece works on its own, and together they replace your
            entire network stack.
          </p>
        </ScrollReveal>

        <div className="card-grid">
          {items.map((item, index) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                as="article"
                className="glow-card"
                key={item.slug}
                delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              >
                <span className="glow-card-number">{item.number}</span>
                <div className="glow-card-icon">
                  <Icon size={21} strokeWidth={1.7} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <Link href={`/platform/${item.slug}`} className="glow-card-link">
                  Learn more <span>↗</span>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
