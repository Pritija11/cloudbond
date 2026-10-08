"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Target } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/SocialIcons";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setSubmitted(true);

    event.currentTarget.reset();
  }

  useEffect(() => {
    if (!submitted) return;

    const timer = window.setTimeout(() => {
      setSubmitted(false);
    }, 2000);

    return () => window.clearTimeout(timer);
  }, [submitted]);

  return (
    <main>
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">
            <ScrollReveal className="contact-info">
              <span className="eyebrow">
                <span className="eyebrow-dot" />
                CLOUDBOND / INTAKE
              </span>

              <h2>
                Let&apos;s map
                <br />
                your network.
              </h2>

              <p>
                Tell us which clouds, data centers, and regions you&apos;re
                running, and what&apos;s getting in the way of treating them
                as one network.
              </p>

              <div className="contact-details">
                <div className="contact-detail-row">
                  <div className="contact-info-icon">
                    <Mail size={19} strokeWidth={1.7} />
                  </div>
                  <div>
                    <span>EMAIL</span>
                    <p>hello@cloudbond.ltd</p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-info-icon">
                    <Phone size={19} strokeWidth={1.7} />
                  </div>
                  <div>
                    <span>PHONE</span>
                    <p>+977 01-4478123</p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-info-icon">
                    <MapPin size={19} strokeWidth={1.7} />
                  </div>
                  <div>
                    <span>LOCATION</span>
                    <p>Battisputali, Kathmandu, Nepal</p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-info-icon">
                    <Target size={19} strokeWidth={1.7} />
                  </div>
                  <div>
                    <span>FOCUS</span>
                    <p>Multi-Cloud · Interconnects · Network Security</p>
                  </div>
                </div>

                <div className="contact-detail-row">
                  <div className="contact-info-icon">
                    <GithubIcon size={18} strokeWidth={1.7} />
                  </div>
                  <div>
                    <span>ELSEWHERE</span>
                    <div className="contact-social-row">
                      <a
                        href="https://github.com/cloudbond"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <GithubIcon size={17} strokeWidth={1.7} />
                      </a>
                      <a
                        href="https://linkedin.com/company/cloudbond"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <LinkedinIcon size={17} strokeWidth={1.7} />
                      </a>
                      <a
                        href="https://x.com/cloudbond"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="X"
                      >
                        <XIcon size={17} strokeWidth={1.7} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="contact-form-wrapper" delay={2}>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>

                <div className="form-field">
                  <label htmlFor="email">Work email</label>
                  <input id="email" name="email" type="email" placeholder="you@company.com" required />
                </div>

                <div className="form-field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" type="text" placeholder="Your company" />
                </div>

                <div className="form-field">
                  <label htmlFor="topic">What do you need help with?</label>

                  <select id="topic" name="topic" defaultValue="">
                    <option value="" disabled>
                      Select an area
                    </option>
                    <option value="multi-cloud">Multi-Cloud Networking</option>
                    <option value="interconnects">Cloud Interconnects</option>
                    <option value="hybrid">Hybrid Connectivity</option>
                    <option value="automation">Network Automation</option>
                    <option value="security">Secure Connectivity</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div className="form-field">
                  <label htmlFor="message">Tell us about the network</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="What are you running, and where does it break down?"
                    required
                  />
                </div>

                <button type="submit" className="button button-primary form-submit">
                  Send inquiry <span>↗</span>
                </button>

                {submitted && (
                  <div className="form-success" role="status">
                    <span>✓</span>
                    Thanks — your inquiry has been received.
                  </div>
                )}
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--line)", paddingTop: 0 }}>
        <div className="container">
          <ScrollReveal>
            <Link href="/" className="back-home">
              ← Back to CloudBond
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
