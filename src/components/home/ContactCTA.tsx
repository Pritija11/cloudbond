import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ContactCTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <ScrollReveal className="cta-panel">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="eyebrow-dot" />
            READY WHEN YOU ARE
          </span>
          <h2>Ready to connect every cloud you run?</h2>
          <p>
            Tell us what you&apos;re running and where. We&apos;ll map the
            network you actually need.
          </p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-light">
              Talk to an engineer <span>↗</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
