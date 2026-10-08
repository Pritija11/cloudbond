import type { Metadata } from "next";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InlineCTA from "@/components/shared/InlineCTA";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Illustrative CloudBond engagements across multi-cloud networking, interconnects, hybrid connectivity, and network automation.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | CloudBond",
    description:
      "Illustrative CloudBond engagements across multi-cloud networking, interconnects, hybrid connectivity, and network automation.",
    url: "/case-studies",
  },
};

const caseStudies = [
  {
    type: "ILLUSTRATIVE ENGAGEMENT",
    title: "From five VPNs to one network",
    description:
      "A fintech running AWS, GCP, and two data centers consolidated onto a single CloudBond network, cutting cross-cloud latency in half.",
    tags: ["Multi-Cloud", "Fintech", "Latency"],
  },
  {
    type: "ILLUSTRATIVE ENGAGEMENT",
    title: "Interconnects for a 40ms-to-9ms migration",
    description:
      "Replaced public-internet cloud transit with dedicated interconnects for a media platform processing live video at scale.",
    tags: ["Interconnects", "Media", "Streaming"],
  },
  {
    type: "ILLUSTRATIVE ENGAGEMENT",
    title: "A hybrid bridge for a six-month data center exit",
    description:
      "Kept a legacy ERP system reachable throughout a phased migration out of a leased data center.",
    tags: ["Hybrid", "Migration", "Enterprise"],
  },
  {
    type: "ILLUSTRATIVE ENGAGEMENT",
    title: "Network provisioning in pull requests",
    description:
      "Moved a platform team off manual firewall tickets onto a fully code-reviewed network change process.",
    tags: ["Automation", "DevOps", "Platform"],
  },
];

export default function CaseStudiesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            CASE STUDIES
          </span>

          <ScrollReveal className="page-hero-grid">
            <h1>Networking work focused on the systems behind the product.</h1>

            <div className="page-hero-copy">
              <p>
                Illustrative engagements shown to demonstrate the type of
                connectivity problems CloudBond is built to solve.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="container">
          {caseStudies.map((study, index) => (
            <ScrollReveal
              as="article"
              className="case-study-row"
              key={study.title}
              delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <span className="case-study-type">{study.type}</span>

              <div>
                <h3>{study.title}</h3>
                <p>{study.description}</p>
              </div>

              <div className="case-study-tags">
                {study.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </ScrollReveal>
          ))}

          <p
            className="mono-label"
            style={{ marginTop: 36, display: "block" }}
          >
            Illustrative engagements shown to demonstrate the type of
            connectivity problems CloudBond is built to solve.
          </p>
        </div>
      </section>

      <InlineCTA
        eyebrow="HAVE A DIFFERENT PROBLEM?"
        heading="Tell us what your network looks like today."
      />
    </main>
  );
}
