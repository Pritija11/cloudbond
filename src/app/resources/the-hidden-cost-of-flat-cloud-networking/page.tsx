import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InlineCTA from "@/components/shared/InlineCTA";

export const metadata: Metadata = {
  title: "The hidden cost of flat, unmanaged cloud networking",
  description:
    "Egress fees and redundant transit quietly become one of the largest line items in cloud spend.",
  alternates: { canonical: "/resources/the-hidden-cost-of-flat-cloud-networking" },
  openGraph: {
    title: "The hidden cost of flat, unmanaged cloud networking | CloudBond",
    description:
      "Egress fees and redundant transit quietly become one of the largest line items in cloud spend.",
    url: "/resources/the-hidden-cost-of-flat-cloud-networking",
    type: "article",
    publishedTime: "2026-09-29",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The hidden cost of flat, unmanaged cloud networking",
  description:
    "Egress fees and redundant transit quietly become one of the largest line items in cloud spend.",
  datePublished: "2026-09-29",
  author: { "@type": "Organization", name: "CloudBond" },
  publisher: { "@type": "Organization", name: "CloudBond" },
  mainEntityOfPage: "https://cloudbond.ltd/resources/the-hidden-cost-of-flat-cloud-networking",
};

export default function ArticlePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            COST
          </span>

          <ScrollReveal className="page-hero-grid">
            <h1>The hidden cost of flat, unmanaged cloud networking</h1>

            <div className="page-hero-copy">
              <p>
                Egress fees and redundant transit quietly become one of the
                largest line items in cloud spend.
              </p>
              <span className="mono-label">29 SEP 2026 · 4 MIN READ</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="container">
          <Link href="/resources" className="back-home article-back">
            ← Back to Resources
          </Link>

          <div className="article-body">
            <p>
              Compute and storage get the scrutiny in most cost reviews.
              Networking rarely does — until someone finally reads the
              itemized bill and finds egress sitting near the top.
            </p>

            <h2>Flat networks route traffic the expensive way</h2>
            <p>
              Without deliberate routing policy, traffic between two
              services in the same region can end up taking the longest,
              most expensive path available — out through a public gateway
              and back in, instead of staying on a private, low-cost path
              the whole way. Nobody designed it that way; it&apos;s just
              what happens by default when connectivity isn&apos;t managed.
            </p>

            <h2>Redundant transit adds up quietly</h2>
            <p>
              It&apos;s common to find the same data crossing a
              cloud-to-cloud boundary multiple times — once for
              replication, once for a backup job, once for an analytics
              pipeline — each paying egress independently because nobody
              has a single view of what&apos;s actually moving where.
            </p>

            <h2>Managed connectivity turns variable cost into fixed cost</h2>
            <p>
              A dedicated interconnect or managed network layer usually
              comes with contracted bandwidth pricing instead of per-byte
              egress. For high-volume paths, that alone can be the
              difference between a cost that scales linearly with usage and
              one that doesn&apos;t.
            </p>

            <h2>The fix starts with visibility, not a new contract</h2>
            <p>
              Before signing anything, most teams benefit from simply
              seeing where their cross-environment traffic actually flows.
              It&apos;s common to find that a small number of paths account
              for the majority of transit cost — and those are exactly the
              paths worth moving onto managed connectivity first.
            </p>
          </div>
        </div>
      </section>

      <InlineCTA
        eyebrow="NOT SURE WHERE YOUR EGRESS IS GOING?"
        heading="Map your traffic before you sign a new contract."
      />
    </main>
  );
}
