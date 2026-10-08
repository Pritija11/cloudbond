import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://cloudbond.ltd"),

  title: {
    default: "CloudBond — Multi-Cloud Networking & Connectivity",
    template: "%s | CloudBond",
  },

  description:
    "CloudBond connects your clouds, data centers, and edge locations into one secure, observable network. Multi-cloud networking, interconnects, and hybrid connectivity built for scale.",

  keywords: [
    "CloudBond",
    "multi-cloud networking",
    "cloud interconnect",
    "hybrid cloud connectivity",
    "network automation",
    "cloud networking",
    "SD-WAN",
    "network as a service",
  ],

  applicationName: "CloudBond",
  category: "technology",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "CloudBond — Multi-Cloud Networking & Connectivity",
    description:
      "One network for every cloud. CloudBond connects your infrastructure across clouds, data centers, and edge locations.",
    url: "https://cloudbond.ltd",
    siteName: "CloudBond",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "CloudBond — Multi-Cloud Networking & Connectivity",
    description:
      "One network for every cloud. CloudBond connects your infrastructure across clouds, data centers, and edge locations.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
