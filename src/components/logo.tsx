import { site } from "@/lib/site";

export function Mark({ className = "size-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={`shrink-0 text-teal ${className}`} aria-hidden="true">
      <rect width="32" height="32" rx="8" fill="currentColor" />
      <rect x="7.5" y="18" width="4.25" height="8" rx="1.2" fill="#fff" />
      <rect x="13.875" y="10" width="4.25" height="16" rx="1.2" fill="#fff" />
      <rect x="20.25" y="14" width="4.25" height="12" rx="1.2" fill="#fff" />
    </svg>
  );
}

export function Logo() {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5">
      <Mark />
      <span className="truncate font-display text-[1.05rem] font-semibold tracking-tight sm:text-lg">
        {site.name}
      </span>
    </span>
  );
}
