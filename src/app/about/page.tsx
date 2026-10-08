import type { Metadata } from "next";
import Link from "next/link";
import { ShieldQuestion, RefreshCw, Activity, Lock } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import InlineCTA from "@/components/shared/InlineCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "CloudBond is a multi-cloud networking company. Learn about our principles and why engineering teams trust us with their network.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About CloudBond",
    description:
      "CloudBond is a multi-cloud networking company. Learn about our principles and why engineering teams trust us with their network.",
    url: "/about",
  },
};

const principles = [
  {
    number: "01",
    title: "Boring is a feature",
    icon: ShieldQuestion,
    text: "Reliable infrastructure doesn't need to be interesting. We optimize for predictable, not clever.",
  },
  {
    number: "02",
    title: "Automate the tedious parts",
    icon: RefreshCw,
    text: "If a network change can be templated, it should never require a human in the loop.",
  },
  {
    number: "03",
    title: "Observable by default",
    icon: Activity,
    text: "Opening a support ticket to find out if a link is healthy means we've already failed.",
  },
  {
    number: "04",
    title: "Security isn't a separate project",
    icon: Lock,
    text: "Every connection we provision is encrypted and policy-scoped from the start.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            <span className="eyebrow-dot" />
            ABOUT CLOUDBOND
          </span>

          <ScrollReveal className="page-hero-grid">
            <h1>We build the network layer other infrastructure depends on.</h1>

            <div className="page-hero-copy">
              <p>
                CloudBond is a multi-cloud networking company. We design and
                operate the connectivity layer between clouds, data centers,
                and edge locations for teams who&apos;ve outgrown ad hoc VPNs
                and manual peering.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="container">
          <ScrollReveal className="two-col">
            <div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(26px, 3vw, 40px)",
                  fontWeight: 600,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                }}
              >
                Infrastructure that disappears, in a good way.
              </h2>
            </div>

            <div>
              <p style={{ color: "var(--muted)", fontSize: "16px" }}>
                Good networking is invisible — teams notice it only when
                it&apos;s gone. We&apos;re obsessed with connections that
                never need daily attention: provisioned once, observable
                always, and durable enough that nobody has to think about
                them again.
              </p>
              <Link href="/contact" className="text-link">
                Talk to an engineer <span>↗</span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section>
        <div className="container">
          <ScrollReveal className="section-heading align-left">
            <span className="eyebrow">HOW WE WORK</span>
            <h2>Four principles behind every network we build.</h2>
          </ScrollReveal>

          <div className="capability-grid">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <ScrollReveal
                  as="article"
                  className="glow-card"
                  key={principle.number}
                  delay={((index % 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6}
                >
                  <span className="glow-card-number">{principle.number}</span>
                  <div className="glow-card-icon">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <InlineCTA
        eyebrow="BUILDING SOMETHING THAT NEEDS A STRONGER NETWORK?"
        heading="Let's talk about what you're running."
      />
    </main>
  );
}
