import { BrandTile } from "@/lib/brand-icon";
import { ImageResponse } from "next/og";

const sizes = [32, 48, 192, 512] as const;

export function generateImageMetadata() {
  return sizes.map((size) => ({
    id: String(size),
    size: { width: size, height: size },
    contentType: "image/png",
  }));
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const size = Number(await id);

  return new ImageResponse(<BrandTile size={size} />, {
    width: size,
    height: size,
  });
}
