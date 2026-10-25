import { BrandTile, brand } from "@/lib/brand-icon";
import { site } from "@/lib/site";
import { ImageResponse } from "next/og";

export const alt = site.metaTitle;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: brand.paper,
        color: brand.ink,
        padding: "64px 72px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <BrandTile size={56} />
        <div style={{ marginLeft: 18, fontSize: 32, fontWeight: 600 }}>{site.name}</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
        <div style={{ fontSize: 28, fontWeight: 600, color: brand.teal }}>
          For pathology and veterinary labs in India
        </div>
        <div style={{ marginTop: 18, fontSize: 62, fontWeight: 600, lineHeight: 1.08 }}>
          {site.hero.title}
        </div>
      </div>

      <div style={{ display: "flex", fontSize: 26, color: brand.muted }}>
        <div style={{ marginRight: 36 }}>Works offline</div>
        <div style={{ marginRight: 36 }}>Encrypted on your PC</div>
        <div>Windows</div>
      </div>
    </div>,
    { ...size },
  );
}
