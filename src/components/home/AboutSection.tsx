import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AboutSection() {
  return (
    <section>
      <div className="container">
        <ScrollReveal className="two-col">
          <div>
            <span className="eyebrow">
              <span className="eyebrow-dot" />
              WHY CLOUDBOND
            </span>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(26px, 3vw, 40px)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                lineHeight: 1.2,
              }}
            >
              Built by network engineers who got tired of duct tape.
            </h2>
          </div>

          <div>
            <p style={{ color: "var(--muted)", fontSize: "16px" }}>
              CloudBond started as an internal tool for stitching together
              three clouds and two data centers without losing a weekend to
              VPN configs. We built it into a platform because every growing
              engineering team hits the same wall — connectivity that was
              never designed to scale past one provider.
            </p>
            <Link href="/about" className="text-link">
              More about CloudBond <span>↗</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
