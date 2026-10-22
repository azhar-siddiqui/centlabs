import { Logo } from "@/components/logo";
import { site } from "@/lib/site";
import { telHref, wrap } from "@/lib/ui";

export async function Footer() {
  "use cache";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-sheet">
      <div className={`${wrap} pt-12 pb-28 md:pb-12`}>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">{site.hero.note}</p>
            <p className="mt-4 text-sm text-muted">
              {site.developer.text}
              <span aria-hidden="true"> · </span>
              <a
                className="font-semibold text-teal underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
                href={site.developer.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.developer.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </p>
          </div>

          <nav aria-label="Footer" className="lg:col-span-3">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">
              On this page
            </p>
            <ul className="mt-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex py-1.5 text-sm font-semibold hover:text-teal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <p className="text-xs font-semibold tracking-[0.14em] text-muted uppercase">Contact</p>
            <ul className="mt-3 text-sm">
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex py-1.5 font-semibold hover:text-teal"
                >
                  {site.whatsappLabel}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={telHref(site.phone)}
                  className="inline-flex py-1.5 font-semibold hover:text-teal"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex py-1.5 font-semibold break-all hover:text-teal"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="mt-10 border-t border-line pt-6 text-sm text-muted">
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
