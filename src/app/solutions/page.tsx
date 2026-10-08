import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionCTA from "@/components/shared/SectionCTA";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "CloudBond solutions for cloud migration networking, global expansion, and network modernization.",
  alternates: { canonical: "/solutions" },
  openGraph: {
    title: "Solutions | CloudBond",
    description:
      "CloudBond solutions for cloud migration networking, global expansion, and network modernization.",
    url: "/solutions",
  },
};

const solutions = [
  {
    number: "01",
    slug: "cloud-migration",
    title: "Cloud Migration Networking",
    problem:
      "Moving to the cloud means your network has to exist in two places at once during the transition.",
    approach:
      "We build the interconnect and routing layer that keeps on-prem and cloud environments in sync throughout the move.",
  },
  {
    number: "02",
    slug: "global-expansion",
    title: "Global Expansion",
    problem:
      "A new region means new latency, new compliance rules, and a network that has to reach a place it's never been.",
    approach:
      "CloudBond extends your existing network into new regions using the same policy and routing model you already run.",
  },
  {
    number: "03",
    slug: "network-modernization",
    title: "Network Modernization",
    problem:
      "Legacy MPLS circuits and hardware VPNs weren't built for cloud-speed change.",
    approach:
      "We replace static, hardware-bound networking with a software-defined layer that changes as fast as your infrastructure does.",
  },
];

export default function SolutionsPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            SOLUTIONS
          </span>

          <ScrollReveal className="page-hero-grid">
            <h1>Start with the networking problem. Build toward the right system.</h1>

            <div className="page-hero-copy">
              <p>
                Three situations where connectivity becomes the bottleneck —
                and how CloudBond is built to solve each one.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="container">
          <ScrollReveal className="solution-block">
            <div className="solution-block-list">
              <h2>Solution Paths</h2>

              {solutions.map((solution) => (
                <div className="solution-row" key={solution.slug}>
                  <div className="solution-row-top">
                    <span>{solution.number}</span>
                    <h3>{solution.title}</h3>
                  </div>
                  <p>{solution.problem}</p>
                  <p style={{ marginTop: 8 }}>
                    <strong style={{ color: "#ffffff" }}>Approach: </strong>
                    {solution.approach}
                  </p>
                  <Link href={`/solutions/${solution.slug}`} className="solution-row-link">
                    See the solution
                  </Link>
                </div>
              ))}
            </div>

            <div className="solution-block-visual">
              <div
                style={{
                  width: 220,
                  height: 220,
                  borderRadius: "50%",
                  background: "#ffffff",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--shadow-md)",
                }}
              >
                <div style={{ fontSize: 56, fontWeight: 800, color: "var(--accent)" }}>3</div>
                <div
                  style={{
                    fontSize: 12.5,
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    color: "var(--muted)",
                    textTransform: "uppercase",
                    textAlign: "center",
                    maxWidth: 140,
                  }}
                >
                  Paths engineered for specific transitions
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <SectionCTA
        eyebrow="DIFFERENT PROBLEM?"
        heading="Not sure which solution fits your situation?"
        description="Tell us what you're trying to solve and we'll point you in the right direction."
      />
    </main>
  );
}
