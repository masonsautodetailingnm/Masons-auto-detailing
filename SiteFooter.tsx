import { Link } from "@tanstack/react-router";
import { business } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface pb-24 pt-14 md:pb-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <img src={business.logo} alt="" className="h-9 w-auto" />
            <span className="font-display text-2xl gold-text">Mason's</span>
          </div>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Professional mobile detailing serving {business.city} and everything within{" "}
            {business.radius}. Your car is our passion.
          </p>
        </div>

        <div>
          <h3 className="eyebrow">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={business.phoneHref} className="hover:text-primary">
                {business.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${business.email}`} className="break-all hover:text-primary">
                {business.email}
              </a>
            </li>
            <li>{business.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/services" className="hover:text-primary">
                Services & Pricing
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-primary">
                Photo Gallery
              </Link>
            </li>
            <li>
              <Link to="/book" className="hover:text-primary">
                Book a Detail
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow">Follow</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={business.facebook} target="_blank" rel="noreferrer" className="hover:text-primary">
                Facebook
              </a>
            </li>
            <li>
              <a href={business.google} target="_blank" rel="noreferrer" className="hover:text-primary">
                Google Reviews
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-7xl px-5 text-xs text-muted-foreground lg:px-8">
        © {new Date().getFullYear()} {business.name} · Norman, Oklahoma
      </p>
    </footer>
  );
}
