"use client";

import { Download, WhatsApp } from "@/components/actions";
import { Logo } from "@/components/logo";
import { site } from "@/lib/site";
import { wrap } from "@/lib/ui";
import { useEffect, useId, useRef, useState } from "react";

function MenuGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseGlyph() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden="true"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDialogElement>(null);
  const panelId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = site.nav
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((element): element is HTMLElement => element !== null);
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        setActive((current) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (visible) return `#${visible.target.id}`;
          if (entries.some((entry) => !entry.isIntersecting && `#${entry.target.id}` === current)) {
            return "";
          }
          return current;
        });
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.4] },
    );
    for (const element of elements) observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const panel = panelRef.current;
    panel?.querySelector<HTMLElement>("a, button")?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panel) return;
      const items = [...panel.querySelectorAll<HTMLElement>("a, button")];
      const first = items[0];
      const last = items.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setOpen(false);
    };

    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  function closeFromLink() {
    document.body.style.overflow = "";
    setOpen(false);
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line pt-[env(safe-area-inset-top)] ${
        open ? "bg-paper" : "bg-paper/90 backdrop-blur-md"
      } ${scrolled && !open ? "shadow-[0_10px_30px_-24px_rgba(19,33,30,0.55)]" : ""}`}
    >
      <div className={`${wrap} flex h-16 items-center justify-between gap-3`}>
        <a href="#top" className="min-w-0 rounded-md" onClick={closeFromLink}>
          <Logo />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={active === item.href ? "true" : undefined}
              className={`text-sm font-semibold ${
                active === item.href ? "text-teal" : "text-ink/75 hover:text-ink"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <WhatsApp variant="secondary" className="max-xl:hidden" />
          <Download />
        </div>

        <button
          ref={buttonRef}
          type="button"
          className="grid size-11 cursor-pointer place-items-center rounded-lg border border-line bg-sheet lg:hidden"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <CloseGlyph /> : <MenuGlyph />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open ? (
        <dialog
          ref={panelRef}
          id={panelId}
          open
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-x-0 bottom-0 z-50 m-0 h-auto w-auto max-w-none overflow-y-auto overscroll-contain border-0 bg-paper px-5 py-4 text-ink lg:hidden top-[calc(4rem+env(safe-area-inset-top))]"
        >
          <nav aria-label="Mobile" className="mx-auto flex w-full max-w-6xl flex-col">
            {site.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                aria-current={active === item.href ? "true" : undefined}
                onClick={closeFromLink}
                className={`rounded-lg px-2 py-3 text-lg font-semibold ${
                  active === item.href ? "text-teal" : "text-ink"
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <WhatsApp variant="secondary" className="w-full" />
              <Download className="w-full" />
            </div>
          </nav>
        </dialog>
      ) : null}

      <noscript>
        <nav
          aria-label="Sections"
          className={`${wrap} flex flex-wrap gap-x-4 gap-y-2 pb-4 lg:hidden`}
        >
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="py-1 text-sm font-semibold">
              {item.label}
            </a>
          ))}
        </nav>
      </noscript>
    </header>
  );
}
