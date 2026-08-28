import { createFileRoute, Link } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import {
  beforeAfter,
  business,
  faqs,
  gallery,
  packages,
  reviews,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mobile Car Detailing in Norman, OK | Mason's Mobile Detailing" },
      {
        name: "description",
        content:
          "We come to you. Interior, exterior, full details and ceramic coating in Norman, OK. Free same-day quotes — call 572-235-2991.",
      },
      { property: "og:title", content: "Mason's Mobile Detailing — Norman, OK" },
      {
        property: "og:description",
        content:
          "Showroom-quality mobile detailing in your driveway. Free quote in 30 seconds.",
      },
      { property: "og:image", content: business.hero },
      { name: "twitter:image", content: business.hero },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={business.hero}
          alt="Freshly detailed car with mirror-gloss paint"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(105deg,oklch(0.13_0.005_60/0.94)_0%,oklch(0.13_0.005_60/0.75)_45%,oklch(0.13_0.005_60/0.35)_100%)]" />
        <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <div className="animate-rise">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/60 px-4 py-1.5 font-condensed text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Mobile · We come to you
            </span>
            <h1 className="mt-5 text-6xl leading-[0.9] sm:text-7xl lg:text-8xl">
              Your car.
              <br />
              <span className="gold-text">Our passion.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Professional detailing brought straight to your driveway in {business.city} — deep
              interior cleans, paint correction, and multi-year ceramic coatings.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book"
                className="rounded-lg px-7 py-4 font-condensed text-base font-bold uppercase tracking-[0.16em] gold-fill shadow-gold transition-transform hover:scale-[1.03]"
              >
                Get a Free Quote
              </Link>
              <a
                href={business.phoneHref}
                className="rounded-lg border border-primary/50 px-7 py-4 font-condensed text-base font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary/10"
              >
                Call / Text {business.phone}
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span>
                <strong className="font-display text-2xl text-primary">5★</strong> average rating
              </span>
              <span>
                <strong className="font-display text-2xl text-primary">30 mi</strong> service radius
              </span>
              <span>
                <strong className="font-display text-2xl text-primary">24 hr</strong> booking
                confirmation
              </span>
            </div>
          </div>

          <div className="animate-rise lg:justify-self-end lg:max-w-md">
            <LeadForm compact />
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {[
            ["We come to you", "Home, office, or anywhere you park"],
            ["Fully equipped", "We bring water, power, and product"],
            ["Honest pricing", "Final price confirmed before we start"],
            ["Fast replies", "Most quotes answered the same day"],
          ].map(([t, d]) => (
            <div key={t}>
              <div className="font-condensed text-sm font-bold uppercase tracking-[0.14em] text-foreground">
                {t}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">{d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="eyebrow">Packages</p>
          <h2 className="mt-2 text-5xl sm:text-6xl">Pick your level of clean</h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <article
              key={p.name}
              className="group overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-primary/50"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} result`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {p.popular && (
                  <span className="absolute left-4 top-4 rounded-full px-3 py-1 font-condensed text-xs font-bold uppercase tracking-[0.16em] gold-fill">
                    Most popular
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-3xl">{p.name}</h3>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="font-display text-2xl text-primary">from {p.from}</span>
                  <span className="text-xs text-muted-foreground">{p.time}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {p.features.slice(0, 5).map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/book"
                  className="mt-6 block rounded-lg border border-primary/50 py-3 text-center font-condensed text-sm font-bold uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary/10"
                >
                  Get this quoted
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Link to="/services" className="font-condensed text-sm uppercase tracking-[0.16em] text-primary">
            See ceramic coating, paint correction & add-ons →
          </Link>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">Proof</p>
              <h2 className="mt-2 text-5xl sm:text-6xl">Before & after</h2>
            </div>
            <Link to="/gallery" className="font-condensed text-sm uppercase tracking-[0.16em] text-primary">
              View full gallery →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {beforeAfter.map((ba, i) => (
              <div key={i} className="overflow-hidden rounded-xl border border-border">
                <div className="grid grid-cols-2">
                  {(
                    [
                      ["Before", ba.before],
                      ["After", ba.after],
                    ] as const
                  ).map(([tag, src]) => (
                    <div key={tag} className="relative aspect-4/3">
                      <img
                        src={src}
                        alt={`${ba.label} ${tag.toLowerCase()}`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                      <span
                        className={`absolute bottom-3 left-3 rounded-full px-2.5 py-1 font-condensed text-[0.65rem] font-bold uppercase tracking-[0.16em] ${
                          tag === "After"
                            ? "gold-fill"
                            : "bg-background/80 text-muted-foreground"
                        }`}
                      >
                        {tag}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="bg-background px-4 py-3 font-condensed text-sm uppercase tracking-[0.16em] text-muted-foreground">
                  {ba.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Recent work</p>
          <h2 className="mt-2 text-5xl sm:text-6xl">Straight from the driveway</h2>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 px-5 sm:grid-cols-3 lg:grid-cols-4 lg:px-8 mx-auto max-w-7xl">
          {gallery.slice(0, 8).map((src, i) => (
            <div
              key={src}
              className={`overflow-hidden rounded-lg ${i % 5 === 0 ? "row-span-2 aspect-2/3" : "aspect-square"}`}
            >
              <img
                src={src}
                alt="Detailed vehicle"
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-y border-border bg-surface py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Simple process</p>
          <h2 className="mt-2 text-5xl sm:text-6xl">Three steps, zero hassle</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              ["Request a quote", "Send the 30-second form or text us. We confirm price and timing fast."],
              ["We show up", "We arrive fully equipped at your home, work, or wherever the car sits."],
              ["Enjoy the shine", "Hand over the keys and get back a car that looks showroom fresh."],
            ].map(([t, d], i) => (
              <div key={t}>
                <div className="flex h-14 w-14 items-center justify-center rounded-full font-display text-2xl gold-fill shadow-gold">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-2xl">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <p className="eyebrow">5-star rated</p>
        <h2 className="mt-2 text-5xl sm:text-6xl">What customers say</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="overflow-hidden rounded-xl border border-border bg-surface">
              <img src={r.img} alt="" loading="lazy" className="h-48 w-full object-cover" />
              <figcaption className="p-6">
                <div className="text-primary">★★★★★</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">"{r.text}"</p>
                <div className="mt-4 font-condensed text-sm font-bold uppercase tracking-[0.14em]">
                  {r.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {r.service} · {r.date}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="border-t border-border bg-surface py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="eyebrow">Questions</p>
            <h2 className="mt-2 text-5xl sm:text-6xl">Good to know</h2>
            <dl className="mt-8 space-y-6">
              {faqs.map((f) => (
                <div key={f.q} className="border-b border-border pb-5">
                  <dt className="font-condensed text-base font-bold uppercase tracking-[0.12em]">
                    {f.q}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div id="quote">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
