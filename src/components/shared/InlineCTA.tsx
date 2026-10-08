import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

type InlineCTAProps = {
  eyebrow: string;
  heading: string;
  buttonLabel?: string;
};

export default function InlineCTA({
  eyebrow,
  heading,
  buttonLabel = "Talk to an engineer",
}: InlineCTAProps) {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="container">
        <ScrollReveal className="inline-cta">
          <div>
            <span className="mono-label">{eyebrow}</span>
            <h3>{heading}</h3>
          </div>
          <Link href="/contact" className="button button-ghost">
            {buttonLabel} <span>↗</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
