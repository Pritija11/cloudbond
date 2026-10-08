import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "CloudBond — Multi-Cloud Networking & Connectivity",
    short_name: "CloudBond",
    description:
      "CloudBond connects your clouds, data centers, and edge locations into one secure, observable network.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3a5ce5",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
