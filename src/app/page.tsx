import { site } from "@/lib/site";

const btn =
  "inline-flex items-center justify-center rounded-sm px-5 py-3 font-semibold transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-teal/40 focus-visible:ring-offset-2 focus-visible:ring-offset-paper";
const primary = `${btn} bg-teal text-white hover:bg-teal-dark`;
const secondary = `${btn} border-2 border-teal text-teal hover:bg-teal-tint`;
const onDark = `${btn} bg-white text-teal-dark hover:bg-teal-tint focus-visible:ring-white/60 focus-visible:ring-offset-teal-dark`;
const onDarkLine = `${btn} border-2 border-white text-white hover:bg-white/10 focus-visible:ring-white/60 focus-visible:ring-offset-teal-dark`;

function Download({ cls = primary }: Readonly<{ cls?: string }>) {
  return (
    <a href={site.downloadUrl} className={cls}>
      {site.downloadLabel}
    </a>
  );
}
function WhatsApp({ cls = secondary }: Readonly<{ cls?: string }>) {
  return (
    <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className={cls}>
      {site.whatsappLabel}
    </a>
  );
}
const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8";
const h2 = "font-display text-3xl sm:text-4xl font-semibold leading-tight tracking-tight";
const link =
  "text-teal underline underline-offset-4 hover:text-teal-dark focus:outline-none focus-visible:ring-4 focus-visible:ring-teal/40";

export default function Home() {
  const { hero, capacity: cap, local } = site;
  return (
    <>
      <header className="sticky top-0 z-50 border-b border-rule bg-paper/95">
        <div className={`${wrap} flex items-center justify-between gap-4 py-3`}>
          <a
            href="#top"
            className="font-display text-xl font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-teal/40"
          >
            {site.name}
          </a>
          <nav aria-label="Main" className="hidden items-center gap-6 md:flex">
            {site.nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-teal">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-3 md:flex">
            <WhatsApp cls={`${secondary} !py-2`} />
            <Download cls={`${primary} !py-2`} />
          </div>
          <details className="relative md:hidden">
            <summary className={`${secondary} cursor-pointer list-none py-2!`}>Menu</summary>
            <div className="absolute right-0 mt-2 flex w-64 flex-col gap-3 rounded-sm border border-rule bg-sheet p-4 shadow-md">
              {site.nav.map((n) => (
                <a key={n.href} href={n.href} className="py-1">
                  {n.label}
                </a>
              ))}
              <WhatsApp />
              <Download />
            </div>
          </details>
        </div>
      </header>

      <main id="top">
        <section
          className={`${wrap} grid gap-12 py-16 sm:py-24 lg:grid-cols-[1.3fr_1fr] lg:items-center`}
        >
          <div>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{hero.text}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Download />
              <WhatsApp />
            </div>
            <p className="mt-3 max-w-md text-sm text-muted">{hero.note}</p>
            <ul className="mt-10 grid max-w-xl gap-3 border-t border-rule pt-6 sm:grid-cols-3">
              {hero.facts.map((f) => (
                <li key={f} className="font-semibold">
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div
            aria-hidden="true"
            className="mx-auto w-full max-w-sm rotate-1 border-2 border-ink bg-sheet p-5 shadow-[6px_6px_0_0_#0B5D5B] motion-reduce:rotate-0"
          >
            <p className="text-sm text-muted">Sample label. Not a real patient.</p>
            <p className="mt-2 font-display text-3xl font-semibold">RPT-2026-01428</p>
            <dl className="mt-4 space-y-2 border-t border-rule pt-4 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted">Patient code</dt>
                <dd>PAT-2026-00311</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Sample date</dt>
                <dd>14 Mar 2026</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Haemoglobin</dt>
                <dd className="font-semibold">9.8 g/dL, low</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted">Status</dt>
                <dd>Finalized</dd>
              </div>
            </dl>
          </div>
        </section>

        <section aria-label="What is included" className="border-y border-rule bg-sheet">
          <ul className={`${wrap} flex flex-wrap gap-x-8 gap-y-2 py-5 font-display text-lg`}>
            {site.strip.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>

        <section id="features" className={`${wrap} py-20`}>
          <h2 className={h2}>What the software does</h2>
          <p className="mt-3 max-w-xl text-muted">{site.vetNote}</p>
          {site.groups.map((g) => (
            <div key={g.title} className="mt-12">
              <h3 className="border-b-2 border-teal pb-2 font-display text-2xl font-semibold">
                {g.title}
              </h3>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((i) => (
                  <article key={i.t} className="border border-rule bg-sheet p-5">
                    <h4 className="font-display text-xl font-semibold">{i.t}</h4>
                    <p className="mt-2 text-muted">{i.d}</p>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="bg-teal-tint py-20">
          <div className={wrap}>
            <h2 className={h2}>How a day works</h2>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {site.days.map((d, i) => (
                <li key={d.t} className="border-t-4 border-teal pt-4">
                  <span className="font-display text-3xl font-semibold text-teal">{i + 1}</span>
                  <h3 className="mt-1 font-display text-xl font-semibold">{d.t}</h3>
                  <p className="mt-2 text-ink/80">{d.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="capacity" className={`${wrap} py-20`}>
          <h2 className={h2}>{cap.title}</h2>
          <p className="mt-4 max-w-2xl text-muted">{cap.intro}</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {cap.big.map((b) => (
              <div key={b.l} className="border-2 border-ink bg-sheet p-6">
                <p className="font-display text-5xl font-semibold text-teal sm:text-6xl">{b.n}</p>
                <p className="mt-1 text-lg">{b.l}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {cap.sizes.map((s) => (
              <div key={s.l} className="border border-rule bg-sheet p-6">
                <p className="font-display text-4xl font-semibold">{s.n}</p>
                <p className="mt-1 text-muted">{s.l}</p>
              </div>
            ))}
          </div>
          <ul className="mt-10 max-w-3xl list-disc space-y-2 pl-5 marker:text-teal">
            {cap.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <p
            role="note"
            className="mt-8 max-w-3xl border-l-4 border-teal bg-teal-tint p-4 font-semibold"
          >
            {cap.warning}
          </p>
          <div className="mt-8">
            <Download />
          </div>
        </section>

        <section className="border-y border-rule bg-sheet py-20">
          <div className={wrap}>
            <h2 className={h2}>{local.title}</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {local.items.map((i) => (
                <div key={i.t}>
                  <h3 className="font-display text-xl font-semibold">{i.t}</h3>
                  <p className="mt-1 text-muted">{i.d}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 font-semibold">{local.honest}</p>
          </div>
        </section>

        <section className="bg-teal-dark py-16 text-white">
          <div
            className={`${wrap} flex flex-col gap-6 md:flex-row md:items-center md:justify-between`}
          >
            <div>
              <h2 className="font-display text-3xl font-semibold">{site.band.title}</h2>
              <p className="mt-2 text-white/90">{site.band.text}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Download cls={onDark} />
              <WhatsApp cls={onDarkLine} />
            </div>
          </div>
        </section>

        <section id="contact" className={`${wrap} py-20`}>
          <h2 className={h2}>{site.contact.title}</h2>
          <p className="mt-3 max-w-xl text-muted">{site.contact.text}</p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <WhatsApp />
            <span className="font-semibold">{site.phone}</span>
          </div>
          <p className="mt-4">
            Email:{" "}
            <a className={link} href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </section>
      </main>

      <footer className="border-t border-rule bg-sheet">
        <div
          className={`${wrap} flex flex-col gap-4 py-8 text-sm md:flex-row md:items-center md:justify-between`}
        >
          <p>
            <span className="font-display text-base font-semibold">{site.name}</span> &copy;{" "}
            {new Date().getFullYear()}
          </p>
          <nav aria-label="Footer" className="flex gap-5">
            {site.nav.map((n) => (
              <a key={n.href} href={n.href} className="hover:text-teal">
                {n.label}
              </a>
            ))}
          </nav>
          <p>
            {site.developer.text} ·{" "}
            <a className={link} href={site.developer.url} target="_blank" rel="noopener noreferrer">
              {site.developer.label}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
