export const wrap = "mx-auto w-full max-w-6xl px-5 sm:px-8";

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
