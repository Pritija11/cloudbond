import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import BrandMark from "@/components/ui/BrandMark";

const platform = [
  "Multi-Cloud Networking",
  "Cloud Interconnects",
  "Hybrid Connectivity",
  "Network Automation",
  "Secure Connectivity",
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <BrandMark className="footer-logo-mark" />
              CLOUDBOND
            </Link>

            <p>
              One network for every cloud. CloudBond connects your
              infrastructure across clouds, data centers, and edge locations.
            </p>

            <Link href="/contact" className="footer-cta">
              Talk to us <span>↗</span>
            </Link>
          </div>

          <div className="footer-column">
            <span className="footer-label">PLATFORM</span>

            {platform.map((item) => (
              <Link href="/platform" key={item}>
                {item}
              </Link>
            ))}
          </div>

          <div className="footer-column">
            <span className="footer-label">COMPANY</span>

            <Link href="/solutions">Solutions</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/about">About</Link>
            <Link href="/resources">Resources</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <div className="footer-column">
            <span className="footer-label">CONTACT</span>

            <a href="mailto:hello@cloudbond.ltd" className="footer-contact-row">
              <Mail size={14} strokeWidth={1.7} />
              hello@cloudbond.ltd
            </a>
            <a href="tel:+97714478123" className="footer-contact-row">
              <Phone size={14} strokeWidth={1.7} />
              +977 01-4478123
            </a>
            <span className="footer-location footer-contact-row">
              <MapPin size={14} strokeWidth={1.7} />
              Battisputali, Kathmandu, Nepal
            </span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 CloudBond Ltd</span>

          <div>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>

          <span className="footer-status">
            <i />
            NETWORK OPERATIONAL
          </span>
        </div>
      </div>
    </footer>
  );
}
