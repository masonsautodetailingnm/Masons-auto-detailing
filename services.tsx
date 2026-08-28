import { createFileRoute, Link } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { addOns, business, packages, premium, sizePricing } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Detailing Services & Pricing | Mason's Mobile Detailing" },
      {
        name: "description",
        content:
          "Exterior, interior and full detail pricing by vehicle size, plus ceramic coating, paint correction and add-ons in Norman, OK.",
      },
      { property: "og:title", content: "Detailing Services & Pricing — Mason's" },
      {
        property: "og:description",
        content: "Transparent pricing by vehicle size. Ceramic coating, paint correction, add-ons.",
      },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <p className="eyebrow">Services</p>
        <h1 className="mt-2 text-6xl sm:text-7xl">
          Priced up front. <span className="gold-text">No surprises.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Listed prices are starting points for a coupe/sedan. Final pricing depends on vehicle size
          and condition — and we always confirm before any work begins.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <article key={p.name} className="overflow-hidden rounded-xl border border-border bg-surface">
              <img src={p.image} alt={p.name} loading="lazy" className="h-52 w-full object-cover" />
              <div className="p-6">
                <h2 className="text-3xl">{p.name}</h2>
                <div className="font-display text-2xl text-primary">from {p.from}</div>
                <p className="mt-3 text-sm text-muted-foreground">{p.blurb}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="text-primary">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
<p className="eyebrow">Premium</p>
          <h2 className="mt-2 text-5xl">Ceramic coating & paint correction</h2>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 font-condensed text-sm font-bold uppercase tracking-[0.16em] text-primary">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-primary" />
            Coming soon
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
{premium.map((s) => (
              <div key={s.name} className="panel relative overflow-hidden p-6">
                <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 font-condensed text-xs font-bold uppercase tracking-[0.16em] text-background">
                  Coming soon
                </div>
                <h3 className="text-3xl">{s.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.blurb}</p>
                <ul className="mt-5 space-y-2">
                  {s.tiers.map((t) => (
                    <li
                      key={t.label}
                      className={`flex items-center justify-between rounded-lg border px-4 py-3 ${
                        t.popular ? "border-primary/60 bg-primary/5" : "border-border bg-background"
                      }`}
                    >
                      <span className="font-condensed text-sm font-semibold uppercase tracking-[0.12em]">
                        {t.label}
                      </span>
                      <span className="font-display text-xl text-primary">{t.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <p className="eyebrow">Pricing by vehicle size</p>
        <h2 className="mt-2 text-5xl">Know before you book</h2>
        <div className="mt-8 overflow-x-auto rounded-xl border border-border">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-surface font-condensed uppercase tracking-[0.14em] text-muted-foreground">
              <tr>
                <th className="px-5 py-4">Vehicle</th>
                <th className="px-5 py-4">Exterior</th>
                <th className="px-5 py-4">Interior</th>
                <th className="px-5 py-4">Full detail</th>
              </tr>
            </thead>
            <tbody>
              {sizePricing.map((r) => (
                <tr key={r.size} className="border-t border-border">
                  <td className="px-5 py-4">{r.size}</td>
                  <td className="px-5 py-4 text-primary">{r.ext}</td>
                  <td className="px-5 py-4 text-primary">{r.int}</td>
                  <td className="px-5 py-4 text-primary">{r.full}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="border-y border-border bg-surface py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="eyebrow">Enhance your detail</p>
          <h2 className="mt-2 text-5xl">Add-on services</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {addOns.map((a) => (
              <div key={a.name} className="rounded-lg border border-border bg-background p-4">
                <div className="font-condensed text-sm font-bold uppercase tracking-[0.12em]">
                  {a.name}
                </div>
                <div className="mt-1 font-display text-xl text-primary">from {a.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-5xl">Not sure which package?</h2>
          <p className="mt-3 text-muted-foreground">
            Tell us the vehicle and what's bugging you about it — we'll recommend the right service
            and quote it same day. Or call{" "}
            <a href={business.phoneHref} className="text-primary">
              {business.phone}
            </a>
            .
          </p>
          <Link
            to="/gallery"
            className="mt-6 inline-block font-condensed text-sm uppercase tracking-[0.16em] text-primary"
          >
            See the results first →
          </Link>
        </div>
        <LeadForm />
      </section>
    </div>
  );
}
