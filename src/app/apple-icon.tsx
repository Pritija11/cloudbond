export const dynamic = "force-static";
import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ffffff",
        }}
      >
        <div style={{ display: "flex", position: "relative", width: 110, height: 110 }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "13px solid #3a5ce5",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 72,
              height: 72,
              borderRadius: "50%",
              border: "13px solid #3a5ce5",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
