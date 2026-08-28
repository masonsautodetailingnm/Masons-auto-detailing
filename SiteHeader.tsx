import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { business } from "@/lib/site-data";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/book", label: "Book" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5">
          <img src={business.logo} alt="Mason's Mobile Detailing logo" className="h-9 w-auto" />
          <span className="font-display text-2xl tracking-wide gold-text">Mason's</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="rounded-md px-3 py-2 font-condensed text-sm font-semibold uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-primary [&.active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={business.phoneHref}
            className="ml-2 rounded-md border border-primary/40 px-3 py-2 font-condensed text-sm font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:bg-primary/10"
          >
            {business.phone}
          </a>
          <Link
            to="/book"
            className="ml-1 rounded-md px-4 py-2 font-condensed text-sm font-bold uppercase tracking-[0.14em] gold-fill shadow-gold transition-transform hover:scale-[1.03]"
          >
            Free Quote
          </Link>
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="block h-0.5 w-6 bg-foreground" />
          <span className="block h-0.5 w-6 bg-foreground" />
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 pb-5 pt-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="block py-2.5 font-condensed text-base font-semibold uppercase tracking-[0.14em] text-muted-foreground [&.active]:text-primary"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={business.phoneHref}
            className="mt-2 block rounded-md py-2.5 text-center font-condensed text-base font-bold uppercase tracking-[0.14em] gold-fill"
          >
            Call / Text {business.phone}
          </a>
        </nav>
      )}
    </header>
  );
}
