import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#ffffff",
          padding: "80px 90px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", position: "relative", width: 34, height: 34 }}>
            <div
              style={{
                position: "absolute",
                left: 0,
                bottom: 0,
                width: 22,
                height: 22,
                borderRadius: "50%",
                border: "4px solid #3a5ce5",
                display: "flex",
              }}
            />
            <div
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: 22,
                height: 22,
                borderRadius: "50%",
                border: "4px solid #3a5ce5",
                display: "flex",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 26,
              fontWeight: 800,
              letterSpacing: 0,
              color: "#3a5ce5",
              display: "flex",
            }}
          >
            CLOUDBOND
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              fontSize: 56,
              fontWeight: 800,
              lineHeight: 1.14,
              color: "#3a5ce5",
              maxWidth: 940,
              display: "flex",
            }}
          >
            Network infrastructure for teams running more than one cloud.
          </div>

          <div style={{ fontSize: 20, color: "#5b6373", letterSpacing: 0.5, display: "flex" }}>
            MULTI-CLOUD NETWORKING · INTERCONNECTS · NETWORK SECURITY
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
