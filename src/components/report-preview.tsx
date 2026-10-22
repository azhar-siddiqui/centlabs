import { InfoIcon } from "@/components/icons";
import { Mark } from "@/components/logo";
import { site } from "@/lib/site";

const sidebar = ["Dashboard", "Patients", "Reports", "Billing", "Inventory"];

export function ReportPreview() {
  const { year, sampleDate } = site;
  return (
    <figure className="mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
      <div className="overflow-hidden rounded-lg border border-line bg-sheet shadow-[0_24px_50px_-28px_rgba(19,33,30,0.45)]">
        <div aria-hidden="true">
          <div className="flex items-center bg-chrome">
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
            <ul className="hidden border-r border-line bg-paper py-3 sm:block">
              {sidebar.map((item) => {
                const current = item === "Reports";
                return (
                  <li
                    key={item}
                    className={`border-l-2 px-3 py-1.5 text-xs ${
                      current
                        ? "border-teal bg-teal-tint font-semibold text-teal"
                        : "border-transparent text-muted"
                    }`}
                  >
                    {item}
                  </li>
                );
              })}
            </ul>

            <div className="bg-sheet p-4 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold tracking-[0.14em] text-muted uppercase">
                    Report
                  </p>
                  <p className="mt-1 font-mono text-lg font-medium tracking-tight text-ink sm:text-xl">
                    RPT-{year}-01428
                  </p>
                </div>
                <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 rounded-full bg-teal-tint px-2.5 py-1 text-xs font-semibold text-teal">
                  <span className="size-1.5 rounded-full bg-teal" /> Finalized
                </span>
              </div>

              <dl className="mt-4 space-y-1 text-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-2.5 py-2">
                  <dt className="text-muted">Patient code</dt>
                  <dd className="font-mono text-[13px] font-medium">PAT-{year}-00311</dd>
                </div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-2.5 py-2">
                  <dt className="text-muted">Sample date</dt>
                  <dd className="font-medium">{sampleDate}</dd>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-md bg-amber-tint px-2.5 py-2">
                  <dt className="font-medium text-amber">Haemoglobin</dt>
                  <dd className="flex items-center gap-2 font-semibold">
                    9.8 g/dL{" "}
                    <span className="rounded-full bg-sheet px-2 py-0.5 text-[11px] font-semibold text-amber">
                      Low
                    </span>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <p className="flex items-center gap-2 border-t border-amber/20 bg-amber-tint px-3 py-2 text-xs font-medium text-amber">
          <InfoIcon size={14} />
          Sample label. Not a real patient.
        </p>
      </div>
    </figure>
  );
}
