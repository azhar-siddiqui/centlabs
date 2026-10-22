"use client";

import { InfoIcon } from "@/components/icons";
import { Mark } from "@/components/logo";
import { useState } from "react";

const screens = ["Dashboard", "Patients", "Reports", "Billing", "Inventory"] as const;

type ScreenName = (typeof screens)[number];

type Row = {
  label: string;
  value: string;
  mono?: boolean;
  tone?: "amber";
  badge?: string;
};

type ReportPreviewScreenProps = {
  year: number;
  sampleDate: string;
};

export function ReportPreviewScreen({ year, sampleDate }: Readonly<ReportPreviewScreenProps>) {
  const [screen, setScreen] = useState<ScreenName>("Reports");
  const view = views(year, sampleDate)[screen];

  return (
    <figure className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
      <div className="overflow-hidden rounded-lg border border-line bg-sheet shadow-[0_24px_50px_-28px_rgba(19,33,30,0.45)]">
        <div aria-hidden="true" className="flex items-center bg-chrome">
          <div className="flex min-w-0 flex-1 items-center gap-2 px-3 py-2">
            <Mark className="size-4" />
            <span className="truncate text-xs text-ink/80">CentLabs Pro</span>
          </div>
          <div className="flex text-ink/60">
            <span className="grid h-8 w-9 place-items-center">
              <svg viewBox="0 0 12 12" className="size-3">
                <path d="M2 6.5h8" stroke="currentColor" strokeWidth="1" />
              </svg>
            </span>
            <span className="grid h-8 w-9 place-items-center">
              <svg viewBox="0 0 12 12" className="size-3">
                <rect
                  x="2.25"
                  y="2.25"
                  width="7.5"
                  height="7.5"
                  fill="none"
                  stroke="currentColor"
                />
              </svg>
            </span>
            <span className="grid h-8 w-9 place-items-center">
              <svg viewBox="0 0 12 12" className="size-3">
                <path d="M3 3l6 6M9 3 3 9" stroke="currentColor" strokeWidth="1" />
              </svg>
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-[132px_minmax(0,1fr)]">
          <nav
            aria-label="Sample screens"
            className="flex gap-1 overflow-x-auto border-b border-line bg-paper px-2 py-2 sm:block sm:border-r sm:border-b-0 sm:px-0 sm:py-3"
          >
            {screens.map((item) => {
              const current = item === screen;
              return (
                <button
                  key={item}
                  type="button"
                  aria-current={current ? "page" : undefined}
                  onClick={() => setScreen(item)}
                  className={`shrink-0 border-l-2 px-3 py-1.5 text-left text-xs sm:block sm:w-full ${
                    current
                      ? "border-teal bg-teal-tint font-semibold text-teal"
                      : "border-transparent text-muted hover:text-ink"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </nav>

          <div className="bg-sheet p-4 sm:p-5" aria-live="polite">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
                  {view.kicker}
                </p>
                <p
                  className={`mt-1 text-lg font-medium tracking-tight text-ink sm:text-xl ${
                    view.monoTitle ? "font-mono" : ""
                  }`}
                >
                  {view.title}
                </p>
              </div>
              <span
                className={`mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                  view.tone === "amber" ? "bg-amber-tint text-amber" : "bg-teal-tint text-teal"
                }`}
              >
                <span
                  className={`size-1.5 rounded-full ${view.tone === "amber" ? "bg-amber" : "bg-teal"}`}
                />
                {view.status}
              </span>
            </div>

            <dl className="mt-4 space-y-1 text-sm">
              {view.rows.map((row) => (
                <div
                  key={row.label}
                  className={`flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-2.5 py-2 ${
                    row.tone === "amber" ? "rounded-md bg-amber-tint" : ""
                  }`}
                >
                  <dt className={row.tone === "amber" ? "font-medium text-amber" : "text-muted"}>
                    {row.label}
                  </dt>
                  <dd
                    className={
                      row.tone === "amber"
                        ? "flex items-center gap-2 font-semibold"
                        : row.mono
                          ? "font-mono text-[13px] font-medium"
                          : "font-medium"
                    }
                  >
                    {row.value}
                    {row.badge ? (
                      <span className="rounded-full bg-sheet px-2 py-0.5 text-[11px] font-semibold text-amber">
                        {row.badge}
                      </span>
                    ) : null}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className="flex items-center gap-2 border-t border-amber/20 bg-amber-tint px-3 py-2 text-xs font-medium text-amber">
          <InfoIcon size={14} />
          Sample screens. Not real lab records.
        </p>
      </div>
    </figure>
  );
}

function views(
  year: number,
  sampleDate: string,
): Record<
  ScreenName,
  {
    kicker: string;
    title: string;
    monoTitle?: boolean;
    status: string;
    tone?: "amber";
    rows: Row[];
  }
> {
  return {
    Dashboard: {
      kicker: "Dashboard",
      title: "Today",
      status: "Open",
      rows: [
        { label: "Reports today", value: "18" },
        { label: "Open drafts", value: "4" },
        { label: "Low stock", value: "2 items", tone: "amber", badge: "Low" },
      ],
    },
    Patients: {
      kicker: "Patients",
      title: "126 on file",
      status: "Sample",
      rows: [
        { label: "Human", value: `PAT-${year}-00311`, mono: true },
        { label: "Canine", value: `PAT-${year}-00308`, mono: true },
        { label: "Feline", value: `PAT-${year}-00294`, mono: true },
      ],
    },
    Reports: {
      kicker: "Report",
      title: `RPT-${year}-01428`,
      monoTitle: true,
      status: "Finalized",
      rows: [
        { label: "Patient code", value: `PAT-${year}-00311`, mono: true },
        { label: "Sample date", value: sampleDate },
        { label: "Haemoglobin", value: "9.8 g/dL", tone: "amber", badge: "Low" },
      ],
    },
    Billing: {
      kicker: "Billing",
      title: `INV-${year}-00814`,
      monoTitle: true,
      status: "Partial",
      tone: "amber",
      rows: [
        { label: "Patient", value: `PAT-${year}-00311`, mono: true },
        { label: "Invoice", value: "₹ 850" },
        { label: "Balance", value: "₹ 350", tone: "amber", badge: "Due" },
      ],
    },
    Inventory: {
      kicker: "Inventory",
      title: "Reagents",
      status: "2 low",
      tone: "amber",
      rows: [
        { label: "Hb reagent", value: "4 kits", tone: "amber", badge: "Low" },
        { label: "EDTA tubes", value: "180" },
        { label: "Glucose kit", value: "2 kits", tone: "amber", badge: "Low" },
      ],
    },
  };
}
