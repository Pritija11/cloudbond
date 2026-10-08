import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with CloudBond to talk through your multi-cloud networking, interconnect, or hybrid connectivity problem.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact CloudBond",
    description:
      "Get in touch with CloudBond to talk through your multi-cloud networking, interconnect, or hybrid connectivity problem.",
    url: "/contact",
  },
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
