const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://cloudbond.ltd/#organization",
      name: "CloudBond",
      legalName: "CloudBond Ltd",
      url: "https://cloudbond.ltd",
      logo: "https://cloudbond.ltd/icon",
      image: "https://cloudbond.ltd/opengraph-image",
      description:
        "CloudBond connects your clouds, data centers, and edge locations into one secure, observable network. Multi-cloud networking, interconnects, and hybrid connectivity built for scale.",
      foundingDate: "2024",
      email: "hello@cloudbond.ltd",
      telephone: "+977-1-4478123",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Battisputali",
        addressLocality: "Kathmandu",
        addressCountry: "NP",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          telephone: "+977-1-4478123",
          email: "hello@cloudbond.ltd",
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
      ],
      sameAs: [
        "https://github.com/cloudbond",
        "https://linkedin.com/company/cloudbond",
        "https://x.com/cloudbond",
      ],
      knowsAbout: [
        "Multi-Cloud Networking",
        "Cloud Interconnects",
        "Hybrid Cloud Connectivity",
        "Network Automation",
        "Secure Connectivity",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://cloudbond.ltd/#website",
      url: "https://cloudbond.ltd",
      name: "CloudBond",
      publisher: {
        "@id": "https://cloudbond.ltd/#organization",
      },
      inLanguage: "en-US",
    },
  ],
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
