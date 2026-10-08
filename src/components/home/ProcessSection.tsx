import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    number: "01",
    title: "Map",
    text: "We map your current connectivity — clouds, data centers, and the links between them.",
  },
  {
    number: "02",
    title: "Connect",
    text: "CloudBond provisions interconnects and routing across every environment you run.",
  },
  {
    number: "03",
    title: "Secure",
    text: "Zero-trust policies and encrypted transit are applied to every path automatically.",
  },
  {
    number: "04",
    title: "Observe",
    text: "Real-time visibility into latency, throughput, and route health across the network.",
  },
];

export default function ProcessSection() {
  return (
    <section>
      <div className="container">
        <ScrollReveal className="section-heading">
          <span className="eyebrow" style={{ justifyContent: "center" }}>
            <span className="eyebrow-dot" />
            HOW IT WORKS
          </span>
          <h2>From first connection to full mesh.</h2>
        </ScrollReveal>

        <div className="process-grid">
          {steps.map((step, index) => (
            <ScrollReveal
              as="article"
              className="process-step"
              key={step.number}
              delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
            >
              <span className="process-step-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
