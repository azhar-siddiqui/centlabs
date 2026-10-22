"use client";

import { Download, WhatsApp } from "@/components/actions";
import { useEffect, useState } from "react";

export function MobileDock() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById("hero-cta");
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting), {
      rootMargin: "-72px 0px 0px 0px",
      threshold: 0,
    });
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper px-4 pt-3 shadow-[0_-10px_30px_-24px_rgba(19,33,30,0.6)] md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
      <nav aria-label="Quick actions" className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-2">
        <WhatsApp variant="secondary" label="WhatsApp" className="w-full px-2" />
        <Download label="Download" className="w-full px-2" />
      </nav>
    </div>
  );
}
