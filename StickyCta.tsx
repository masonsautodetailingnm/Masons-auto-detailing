import { Link } from "@tanstack/react-router";
import { business } from "@/lib/site-data";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="flex gap-2.5">
        <a
          href={business.phoneHref}
          className="flex-1 rounded-lg border border-primary/50 py-3 text-center font-condensed text-sm font-bold uppercase tracking-[0.14em] text-primary"
        >
          Call / Text
        </a>
        <Link
          to="/book"
          className="flex-1 rounded-lg py-3 text-center font-condensed text-sm font-bold uppercase tracking-[0.14em] gold-fill"
        >
          Get Free Quote
        </Link>
      </div>
    </div>
  );
}
