import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms and conditions governing use of CloudBond's website and services.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            LEGAL / 02
          </span>
          <h1>Terms of Use</h1>
          <p>Last updated: October 2026</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="legal-body">
            <h2>Use of this site</h2>
            <p>
              This website is provided for informational purposes about
              CloudBond&apos;s products and services. You may browse and use
              the content on this site for personal, non-commercial
              reference.
            </p>

            <h2>No warranty</h2>
            <p>
              Content on this site is provided &ldquo;as is&rdquo; without
              warranties of any kind, express or implied, regarding
              accuracy, completeness, or fitness for a particular purpose.
            </p>

            <h2>Intellectual property</h2>
            <p>
              All content, trademarks, and branding on this site belong to
              CloudBond Ltd unless otherwise noted, and may not be
              reproduced without permission.
            </p>

            <h2>Changes to these terms</h2>
            <p>
              We may update these terms from time to time. Continued use of
              the site after changes are posted constitutes acceptance of
              the revised terms.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent through our{" "}
              <Link href="/contact">contact page</Link>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
