import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "CloudBond's privacy policy covering how we collect, use, and protect your information.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main>
      <section className="legal-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            LEGAL / 01
          </span>
          <h1>Privacy Policy</h1>
          <p>Last updated: October 2026</p>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="legal-body">
            <h2>Information we collect</h2>
            <p>
              When you contact CloudBond through our website, we collect the
              information you provide directly — your name, work email,
              company, and the details of your inquiry. We do not collect
              payment information through this site.
            </p>

            <h2>How we use information</h2>
            <p>
              Information submitted through our contact form is used only
              to respond to your inquiry and to understand your networking
              requirements. We do not sell or rent contact information to
              third parties.
            </p>

            <h2>Cookies and analytics</h2>
            <p>
              This site may use basic, privacy-respecting analytics to
              understand aggregate traffic patterns. No personally
              identifying information is tied to this data.
            </p>

            <h2>Data retention</h2>
            <p>
              We retain inquiry information only as long as necessary to
              respond to your request and maintain a record of
              correspondence, after which it is deleted.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy can be directed to
              hello@cloudbond.ltd or through our contact page.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
