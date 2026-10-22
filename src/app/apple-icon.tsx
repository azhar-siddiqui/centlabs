import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: "#0b6b63",
        padding: "40px 36px",
      }}
    >
      <div
        style={{
          width: 28,
          height: 52,
          backgroundColor: "#ffffff",
          borderRadius: 6,
          marginRight: 12,
        }}
      />
      <div
        style={{
          width: 28,
          height: 96,
          backgroundColor: "#ffffff",
          borderRadius: 6,
          marginRight: 12,
        }}
      />
      <div style={{ width: 28, height: 74, backgroundColor: "#ffffff", borderRadius: 6 }} />
    </div>,
    { ...size },
  );
}
