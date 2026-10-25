import { ChatIcon, DownloadIcon } from "@/components/icons";
import { site } from "@/lib/site";

const base =
  "inline-flex min-h-11 touch-manipulation items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 text-sm font-semibold transition-colors";

const variants = {
  primary: "bg-teal text-white hover:bg-teal-dark",
  secondary: "border border-line bg-sheet text-ink hover:border-teal/40 hover:bg-teal-tint",
  onDark: "bg-white text-teal-dark hover:bg-teal-tint",
  onDarkLine: "border border-white/40 text-white hover:bg-white/10",
} as const;

type Variant = keyof typeof variants;

export function Download({
  variant = "primary",
  className = "",
  label = site.downloadLabel,
}: Readonly<{
  variant?: Variant;
  className?: string;
  label?: string;
}>) {
  return (
    <a
      href={site.downloadUrl}
      className={`${base} ${variants[variant]} ${className}`}
      aria-label={label === site.downloadLabel ? undefined : site.downloadLabel}
    >
      <DownloadIcon />
      {label}
    </a>
  );
}

export function WhatsApp({
  variant = "secondary",
  className = "",
  label = site.whatsappLabel,
}: Readonly<{
  variant?: Variant;
  className?: string;
  label?: string;
}>) {
  const opens = `${site.whatsappLabel}, opens in a new tab`;
  const custom = label !== site.whatsappLabel;
  return (
    <a
      href={site.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variants[variant]} ${className}`}
      aria-label={custom ? opens : undefined}
    >
      <ChatIcon />
      {label}
      {custom ? null : <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
