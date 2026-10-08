import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

type SectionCTAProps = {
  eyebrow: string;
  heading: string;
  description: string;
  buttonLabel?: string;
};

export default function SectionCTA({
  eyebrow,
  heading,
  description,
  buttonLabel = "Talk to an engineer",
}: SectionCTAProps) {
  return (
    <section className="cta-section">
      <div className="container">
        <ScrollReveal className="cta-panel">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="eyebrow-dot" />
            {eyebrow}
          </span>
          <h2>{heading}</h2>
          <p>{description}</p>
          <div className="hero-actions">
            <Link href="/contact" className="button button-light">
              {buttonLabel} <span>↗</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
