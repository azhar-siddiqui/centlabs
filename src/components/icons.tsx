import type { ReactNode } from "react";

function Svg({
  className = "",
  size = 20,
  children,
}: Readonly<{
  className?: string;
  size?: number;
  children: ReactNode;
}>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`shrink-0 ${className}`}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export function DownloadIcon({ className = "" }: Readonly<{ className?: string }>) {
  return (
    <Svg size={16} className={className}>
      <path d="M12 4v10" />
      <path d="m8 10 4 4 4-4" />
      <path d="M5 19h14" />
    </Svg>
  );
}

export function ChatIcon({
  className = "",
  size = 16,
}: Readonly<{ className?: string; size?: number }>) {
  return (
    <Svg size={size} className={className}>
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </Svg>
  );
}

export function CheckIcon({ className = "" }: Readonly<{ className?: string }>) {
  return (
    <Svg size={16} className={className}>
      <path d="M20 6 9 17l-5-5" />
    </Svg>
  );
}

export function InfoIcon({
  className = "",
  size = 20,
}: Readonly<{ className?: string; size?: number }>) {
  return (
    <Svg size={size} className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <path d="M12 8h.01" />
    </Svg>
  );
}

export function PhoneIcon({ className = "" }: Readonly<{ className?: string }>) {
  return (
    <Svg className={className}>
      <path d="M22 16.9v2a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 1H6a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7 8.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6A2 2 0 0 1 22 16.9Z" />
    </Svg>
  );
}

export function MailIcon({ className = "" }: Readonly<{ className?: string }>) {
  return (
    <Svg className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </Svg>
  );
}

function DashboardIcon() {
  return (
    <Svg>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </Svg>
  );
}

function UserIcon() {
  return (
    <Svg>
      <circle cx="12" cy="8" r="3.25" />
      <path d="M5 19.5a7 7 0 0 1 14 0" />
    </Svg>
  );
}

function UsersIcon() {
  return (
    <Svg>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <circle cx="17" cy="9" r="2.25" />
      <path d="M16.2 14.2a4.8 4.8 0 0 1 4.3 4.8" />
    </Svg>
  );
}

function DocumentIcon() {
  return (
    <Svg>
      <path d="M7 3.5h7l4.5 4.5V20a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1Z" />
      <path d="M14 3.5V8h4.5" />
    </Svg>
  );
}

function FinalizeIcon() {
  return (
    <Svg>
      <circle cx="12" cy="12" r="8" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </Svg>
  );
}

function ListIcon() {
  return (
    <Svg>
      <path d="M9 7h11" />
      <path d="M9 12h11" />
      <path d="M9 17h11" />
      <path d="M4.5 7h.01" />
      <path d="M4.5 12h.01" />
      <path d="M4.5 17h.01" />
    </Svg>
  );
}

function BoxIcon() {
  return (
    <Svg>
      <path d="M21 8 12 3.5 3 8l9 4.5L21 8Z" />
      <path d="M3 8v8l9 4.5 9-4.5V8" />
      <path d="M12 12.5V20.5" />
    </Svg>
  );
}

function LayoutIcon() {
  return (
    <Svg>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 9v11" />
    </Svg>
  );
}

function ShieldIcon() {
  return (
    <Svg>
      <path d="M12 3 5 6v6c0 4.2 2.8 6.8 7 8.5 4.2-1.7 7-4.3 7-8.5V6Z" />
    </Svg>
  );
}

function ReceiptIcon() {
  return (
    <Svg>
      <path d="M6 3.5h12V21l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 21Z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
    </Svg>
  );
}

function PercentIcon() {
  return (
    <Svg>
      <circle cx="7.5" cy="7.5" r="2.25" />
      <circle cx="16.5" cy="16.5" r="2.25" />
      <path d="m17 7-10 10" />
    </Svg>
  );
}

function KeyIcon() {
  return (
    <Svg>
      <circle cx="8" cy="14" r="3.5" />
      <path d="M11.2 14H20" />
      <path d="M17 14v2.5" />
      <path d="M20 14v2" />
    </Svg>
  );
}

function LockIcon() {
  return (
    <Svg>
      <rect x="5" y="11" width="14" height="9.5" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </Svg>
  );
}

function SlidersIcon() {
  return (
    <Svg>
      <path d="M4 7h16" />
      <path d="M4 17h16" />
      <circle cx="9" cy="7" r="2.25" />
      <circle cx="15" cy="17" r="2.25" />
    </Svg>
  );
}

function DatabaseIcon() {
  return (
    <Svg>
      <ellipse cx="12" cy="6.5" rx="7" ry="2.75" />
      <path d="M5 6.5v5.5c0 1.5 3.1 2.75 7 2.75s7-1.25 7-2.75V6.5" />
      <path d="M5 12v5.5c0 1.5 3.1 2.75 7 2.75s7-1.25 7-2.75V12" />
    </Svg>
  );
}

function RefreshIcon() {
  return (
    <Svg>
      <path d="M20 12a8 8 0 0 0-13.7-5.7L4 8.5" />
      <path d="M4 4.5v4h4" />
      <path d="M4 12a8 8 0 0 0 13.7 5.7L20 15.5" />
      <path d="M20 19.5v-4h-4" />
    </Svg>
  );
}

function KeyboardIcon() {
  return (
    <Svg>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M7 10h.01" />
      <path d="M12 10h.01" />
      <path d="M17 10h.01" />
      <path d="M8 14h8" />
    </Svg>
  );
}

const featureIcons: Record<string, () => ReactNode> = {
  Dashboard: DashboardIcon,
  Patients: UserIcon,
  Reports: DocumentIcon,
  "Finalize, print and share": FinalizeIcon,
  "Test catalogue": ListIcon,
  Doctors: UsersIcon,
  Inventory: BoxIcon,
  "Report design": LayoutIcon,
  "Report policies": ShieldIcon,
  Billing: ReceiptIcon,
  Commissions: PercentIcon,
  "First-run setup": KeyIcon,
  "Unlock screen": LockIcon,
  Settings: SlidersIcon,
  Backup: DatabaseIcon,
  Updates: RefreshIcon,
  "Shortcuts and command palette": KeyboardIcon,
};

export function FeatureIcon({ name }: Readonly<{ name: string }>) {
  const Icon = featureIcons[name] ?? DocumentIcon;
  return <Icon />;
}
