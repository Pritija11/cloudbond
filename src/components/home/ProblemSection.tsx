import ScrollReveal from "@/components/ui/ScrollReveal";

const points = [
  {
    label: "FRAGMENTED",
    text: "Each cloud provider has its own networking model, its own gateways, its own rules.",
  },
  {
    label: "SLOW TO CHANGE",
    text: "Opening a new region or connecting a new provider means weeks of manual configuration.",
  },
  {
    label: "HARD TO SECURE",
    text: "Point-to-point VPNs and ad hoc peering create a security surface nobody can fully see.",
  },
  {
    label: "EXPENSIVE TO SCALE",
    text: "Egress costs and redundant transit pile up when every connection is built separately.",
  },
];

export default function ProblemSection() {
  return (
    <section className="statement-section">
      <div className="container">
        <ScrollReveal className="statement-grid">
          <h2>
            AWS has VPCs. Azure has VNets. GCP has its own model
            entirely. None of them were built to talk to each other.
          </h2>

          <p>
            Most teams duct-tape their multi-cloud network together with
            VPNs, manual peering, and provider-specific tooling. CloudBond
            replaces that patchwork with one connectivity layer that works
            the same way everywhere you run infrastructure.
          </p>
        </ScrollReveal>

        <div className="statement-points">
          {points.map((point, index) => (
            <ScrollReveal
              key={point.label}
              className="statement-point"
              delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <span>{point.label}</span>
              <p>{point.text}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
