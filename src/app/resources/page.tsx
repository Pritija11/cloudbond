import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionCTA from "@/components/shared/SectionCTA";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Practical perspectives on multi-cloud networking, interconnects, and network architecture from the CloudBond network desk.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources | CloudBond",
    description:
      "Practical perspectives on multi-cloud networking, interconnects, and network architecture from the CloudBond network desk.",
    url: "/resources",
  },
};

const articles = [
  {
    slug: "multi-cloud-needs-its-own-network-layer",
    category: "NETWORKING",
    date: "14 OCT 2026",
    title: "Why multi-cloud needs its own network layer",
    excerpt:
      "Treating cross-cloud connectivity as an afterthought is the most common multi-cloud mistake.",
  },
  {
    slug: "interconnects-vs-vpns",
    category: "ARCHITECTURE",
    date: "06 OCT 2026",
    title: "Interconnects vs. VPNs: what actually changes",
    excerpt:
      "A practical comparison of private interconnects and traditional VPN-based cloud networking.",
  },
  {
    slug: "the-hidden-cost-of-flat-cloud-networking",
    category: "COST",
    date: "29 SEP 2026",
    title: "The hidden cost of flat, unmanaged cloud networking",
    excerpt:
      "Egress fees and redundant transit quietly become one of the largest line items in cloud spend.",
  },
];

export default function ResourcesPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            RESOURCES
          </span>

          <ScrollReveal className="page-hero-grid">
            <h1>Thinking about the network behind modern infrastructure.</h1>

            <div className="page-hero-copy">
              <p>
                Practical perspectives on multi-cloud networking,
                interconnects, automation, and security.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="list-page-grid">
            {articles.map((article, index) => (
              <ScrollReveal
                as="article"
                className="list-page-card"
                key={article.slug}
                delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
              >
                <div className="list-card-top">
                  <span>{article.category}</span>
                  <span>{article.date}</span>
                </div>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <Link href={`/resources/${article.slug}`} className="text-link">
                  Read article <span>↗</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <SectionCTA
        eyebrow="HAVE A NETWORKING PROBLEM?"
        heading="Have a problem worth thinking through?"
        description="We're happy to talk even before there's a formal project."
      />
    </main>
  );
}
