import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { beforeAfter, business, gallery } from "@/lib/site-data";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Detailing Photo Gallery | Mason's Mobile Detailing" },
      {
        name: "description",
        content:
          "Before-and-after photos from real mobile details in Norman, OK — interiors, exteriors, paint correction and ceramic coating results.",
      },
      { property: "og:title", content: "Detailing Photo Gallery — Mason's" },
      {
        property: "og:description",
        content: "Real before-and-after results from driveways around Norman, OK.",
      },
      { property: "og:image", content: business.hero },
      { name: "twitter:image", content: business.hero },
    ],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <div className="pt-24">
      <section className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <p className="eyebrow">Gallery</p>
        <h1 className="mt-2 text-6xl sm:text-7xl">
          The <span className="gold-text">receipts.</span>
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Every photo below is a real vehicle detailed in a customer's driveway.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <h2 className="text-4xl">Before & after</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
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
                        tag === "After" ? "gold-fill" : "bg-background/80 text-muted-foreground"
                      }`}
                    >
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
              <div className="bg-surface px-4 py-3 font-condensed text-sm uppercase tracking-[0.16em] text-muted-foreground">
                {ba.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
        <h2 className="text-4xl">Recent details</h2>
        <div className="mt-6 columns-2 gap-4 md:columns-3 lg:columns-4">
          {gallery.map((src) => (
            <img
              key={src}
              src={src}
              alt="Detailed vehicle in Norman, OK"
              loading="lazy"
              className="mb-4 w-full rounded-lg object-cover transition-transform duration-500 hover:scale-[1.02]"
            />
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-surface py-16">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-5xl">Want your car in here?</h2>
            <p className="mt-3 text-muted-foreground">
              Send a quick quote request and we'll get you scheduled. Prefer to talk? Call or text{" "}
              <a href={business.phoneHref} className="text-primary">
                {business.phone}
              </a>
              .
            </p>
          </div>
          <LeadForm compact />
        </div>
      </section>
    </div>
  );
}
