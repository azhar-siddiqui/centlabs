// Brand tile used by generated icons and the share image.
// Bar positions match the on-page logo in components/logo.tsx.

export const brand = {
  teal: "#0b6b63",
  paper: "#f4f1ea",
  ink: "#13211e",
  muted: "#445751",
};

export function BrandTile({ size }: Readonly<{ size: number }>) {
  const u = (value: number) => Math.max(1, Math.round((value / 32) * size));
  const bar = (height: number, gap: boolean) => (
    <div
      style={{
        width: u(4.25),
        height: u(height),
        backgroundColor: "#ffffff",
        borderRadius: u(1.2),
        marginRight: gap ? u(2.125) : 0,
      }}
    />
  );

  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: brand.teal,
        borderRadius: u(8),
        paddingBottom: u(6),
      }}
    >
      {bar(8, true)}
      {bar(16, true)}
      {bar(12, false)}
    </div>
  );
}
