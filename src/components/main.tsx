import { site } from "@/lib/site";
import { telHref, wrap } from "@/lib/ui";
import type { ReactNode } from "react";
import { Download, WhatsApp } from "./actions";
import { ChatIcon, CheckIcon, FeatureIcon, InfoIcon, MailIcon, PhoneIcon } from "./icons";
import { ReportPreview } from "./report-preview";

const diskScale = ["18%", "46%", "100%"];

export default function MainSection() {
  const { hero, capacity: cap, local } = site;
  const channels = [
    {
      href: site.whatsappUrl,
      title: site.whatsappLabel,
      detail: site.phone,
      external: true,
      icon: <ChatIcon size={20} />,
    },
    {
      href: telHref(site.phone),
      title: "Phone",
      detail: site.phone,
      external: false,
      icon: <PhoneIcon />,
    },
    {
      href: `mailto:${site.email}`,
      title: "Email",
      detail: site.email,
      external: false,
      icon: <MailIcon />,
    },
  ];

  return (
    <main id="top" tabIndex={-1} className="flex-1 outline-none">
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="hero-wash pointer-events-none absolute inset-x-0 top-0 -z-10 h-144"
        />
        <div
          className={`${wrap} grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24`}
        >
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-teal">
              For pathology and veterinary labs in India
            </p>
            <h1 className="mt-4 font-display text-[2.35rem] leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.35rem]">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted">
              {hero.text}
            </p>
            <div id="hero-cta" className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Download className="w-full sm:w-auto" />
              <WhatsApp className="w-full sm:w-auto" />
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{hero.note}</p>
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {hero.facts.map((fact) => (
                <li
                  key={fact}
                  className="flex items-start gap-3 py-3 text-sm font-semibold leading-snug"
                >
                  <CheckIcon className="mt-0.5 text-teal" />
                  <span>{fact}</span>
                </li>
              ))}
            </ul>
          </div>
          <ReportPreview />
        </div>
      </section>

      <section aria-label="What is included" className="border-y border-line bg-sheet">
        <ul
          className={`${wrap} grid grid-cols-2 gap-x-4 gap-y-3 py-4 sm:grid-cols-3 lg:grid-cols-6 lg:py-5`}
        >
          {site.strip.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm leading-snug font-semibold">
              <CheckIcon className="mt-0.5 text-teal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="features" className={`${wrap} py-20 sm:py-24`}>
        <SectionIntro title="What the software does">
          <p className="mt-5 max-w-2xl border-l-2 border-teal pl-4 text-muted">{site.vetNote}</p>
        </SectionIntro>
        <div className="mt-12 space-y-14">
          {site.groups.map((group, index) => (
            <div
              key={group.title}
              className="grid gap-6 border-t border-line pt-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12"
            >
              <div className="lg:sticky lg:top-24 lg:self-start">
                <p className="font-mono text-sm font-medium text-teal">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                  {group.title}
                </h3>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {group.items.map((item) => (
                  <article
                    key={item.t}
                    className="flex h-full flex-col rounded-xl border border-line bg-sheet p-5 transition-colors hover:border-teal/40"
                  >
                    <span className="grid size-10 place-items-center rounded-lg bg-teal-tint text-teal">
                      <FeatureIcon name={item.t} />
                    </span>
                    <h4 className="mt-4 font-display text-lg font-semibold tracking-tight">
                      {item.t}
                    </h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-pretty text-muted">
                      {item.d}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-teal-tint py-20 sm:py-24">
        <div className={wrap}>
          <SectionIntro title="How a day works" />
          <ol className="mt-12 grid gap-0 md:grid-cols-4 md:gap-6">
            {site.days.map((step, index) => {
              const last = index === site.days.length - 1;
              return (
                <li key={step.t} className="relative flex gap-4 md:block">
                  {last ? null : (
                    <span
                      aria-hidden="true"
                      className="absolute top-5 left-10 hidden h-px bg-teal/25 md:block right-0"
                    />
                  )}
                  <div className="flex flex-col items-center md:block">
                    <span
                      aria-hidden="true"
                      className="relative z-10 grid size-10 shrink-0 place-items-center rounded-full bg-teal font-display text-lg font-semibold text-white ring-4 ring-teal-tint"
                    >
                      {index + 1}
                    </span>
                    {last ? null : (
                      <span aria-hidden="true" className="w-px flex-1 bg-teal/25 md:hidden" />
                    )}
                  </div>
                  <div className={last ? "md:mt-4" : "pb-8 md:mt-4 md:pb-0"}>
                    <h3 className="font-display text-xl font-semibold tracking-tight">{step.t}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{step.d}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section id="capacity" className={`${wrap} py-20 sm:py-24`}>
        <SectionIntro title={cap.title}>
          <p className="mt-4 text-lg leading-relaxed text-pretty text-muted">{cap.intro}</p>
        </SectionIntro>

        <h3 className="mt-12 font-display text-xl font-semibold tracking-tight">
          What fits on disk
        </h3>
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {cap.sizes.map((size, index) => (
            <div key={size.l} className="rounded-xl border border-line bg-sheet p-5">
              <p className="font-display text-4xl font-semibold tracking-tight tabular-nums">
                {size.n}
              </p>
              <p className="mt-1 text-muted">{size.l}</p>
              <div
                aria-hidden="true"
                className="mt-5 h-1.5 overflow-hidden rounded-full bg-teal-tint"
              >
                <div
                  className="h-full rounded-full bg-teal"
                  style={{ width: diskScale[index] ?? "100%" }}
                />
              </div>
            </div>
          ))}
        </div>

        <h3 className="mt-12 font-display text-xl font-semibold tracking-tight">The ceiling</h3>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {cap.big.map((item) => (
            <div key={item.l} className="rounded-xl bg-teal-tint px-5 py-5">
              <p className="font-display text-3xl font-semibold tracking-tight text-teal sm:text-4xl">
                {item.n}
              </p>
              <p className="mt-1 text-ink/80">{item.l}</p>
            </div>
          ))}
        </div>

        <ul className="mt-10 max-w-3xl space-y-3">
          {cap.points.map((point) => (
            <li key={point} className="flex items-start gap-3 leading-relaxed">
              <CheckIcon className="mt-1 text-teal" />
              <span>{point}</span>
            </li>
          ))}
        </ul>

        <div
          role="note"
          className="mt-8 flex max-w-3xl gap-3 rounded-xl border border-amber/25 bg-amber-tint p-4 sm:p-5"
        >
          <InfoIcon className="mt-0.5 text-amber" />
          <p className="font-semibold leading-relaxed">{cap.warning}</p>
        </div>

        <div className="mt-8">
          <Download />
        </div>
      </section>

      <section id="local" className="border-y border-line bg-sheet py-20 sm:py-24">
        <div className={wrap}>
          <SectionIntro title={local.title} />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {local.items.map((item) => (
              <li
                key={item.t}
                className="rounded-xl border border-line bg-paper p-5 shadow-[inset_0_2px_0_0_var(--color-teal)]"
              >
                <h3 className="font-display text-xl font-semibold tracking-tight">{item.t}</h3>
                <p className="mt-2 leading-relaxed text-pretty text-muted">{item.d}</p>
              </li>
            ))}
          </ul>
          <p className="mt-8 rounded-xl border border-line bg-paper px-5 py-4 font-semibold leading-relaxed">
            {local.honest}
          </p>
        </div>
      </section>

      <section id="contact" className={`${wrap} py-20 sm:py-24`}>
        <SectionIntro title={site.contact.title}>
          <p className="mt-4 text-lg leading-relaxed text-muted">{site.contact.text}</p>
        </SectionIntro>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {channels.map((channel) => (
            <li key={channel.title}>
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex h-full flex-col rounded-xl border border-line bg-sheet p-5 transition-colors hover:border-teal/40"
              >
                <span className="grid size-10 place-items-center rounded-lg bg-teal-tint text-teal">
                  {channel.icon}
                </span>
                <span className="mt-4 font-display text-xl font-semibold tracking-tight">
                  {channel.title}
                  {channel.external && <span className="sr-only"> (opens in a new tab)</span>}
                </span>
                <span className="mt-1 text-sm wrap-break-word text-muted">{channel.detail}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="surface-dark bg-teal-dark text-white">
        <div className={`${wrap} py-16 sm:py-20`}>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                {site.band.title}
              </h2>
              <p className="mt-3 text-lg text-white/80">{site.band.text}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Download variant="onDark" className="w-full sm:w-auto" />
              <WhatsApp variant="onDarkLine" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

type SectionIntroProps = {
  title: string;
  children?: ReactNode;
};

function SectionIntro({ title, children }: Readonly<SectionIntroProps>) {
  return (
    <div className="max-w-2xl">
      <h2 className="font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        {title}
      </h2>
      {children}
    </div>
  );
}
