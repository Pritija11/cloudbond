import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

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

export default function ResourcesSection() {
  return (
    <section>
      <div className="container">
        <ScrollReveal className="section-heading align-left">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            FROM THE NETWORK DESK
          </span>
          <h2>Ideas for teams running more than one cloud.</h2>
        </ScrollReveal>

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
  );
}
