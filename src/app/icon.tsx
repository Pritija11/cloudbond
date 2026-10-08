export const dynamic = "force-static";
import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
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
          borderRadius: 7,
        }}
      >
        <div style={{ display: "flex", position: "relative", width: 20, height: 20 }}>
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: 13,
              height: 13,
              borderRadius: "50%",
              border: "2.4px solid #3a5ce5",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: 13,
              height: 13,
              borderRadius: "50%",
              border: "2.4px solid #3a5ce5",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
