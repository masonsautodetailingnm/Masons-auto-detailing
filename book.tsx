import { createFileRoute } from "@tanstack/react-router";
import { LeadForm } from "@/components/site/LeadForm";
import { business, gallery } from "@/lib/site-data";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Mobile Detail in Norman, OK | Mason's Mobile Detailing" },
      {
        name: "description",
        content:
          "Request a free detailing quote in 30 seconds. Mobile service across Norman, Moore, Edmond and OKC metro. Call or text 572-235-2991.",
      },
      { property: "og:title", content: "Book a Mobile Detail — Mason's" },
      {
        property: "og:description",
        content: "Free quote in 30 seconds. We come to your driveway.",
      },
    ],
  }),
  component: Book,
});

function Book() {
  return (
    <div className="pt-24">
      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-12 lg:grid-cols-[1fr_1fr] lg:px-8">
        <div>
          <p className="eyebrow">Book</p>
          <h1 className="mt-2 text-6xl sm:text-7xl">
            Free quote,
            <br />
            <span className="gold-text">fast reply.</span>
          </h1>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Fill out the form and we'll confirm your price and a time that works — usually within a
            few hours. Serving {business.city} and everything within {business.radius}.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a
              href={business.phoneHref}
              className="rounded-lg border border-primary/50 px-5 py-4 text-center font-condensed text-sm font-bold uppercase tracking-[0.16em] text-primary"
            >
              Call / Text {business.phone}
            </a>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg px-5 py-4 text-center font-condensed text-sm font-bold uppercase tracking-[0.16em] gold-fill shadow-gold"
            >
              Self-book online
            </a>
          </div>

          <dl className="mt-8 space-y-3 text-sm text-muted-foreground">
            <div>
              <dt className="eyebrow">Hours</dt>
              <dd>{business.hours}</dd>
            </div>
            <div>
              <dt className="eyebrow">Email</dt>
              <dd>
                <a href={`mailto:${business.email}`} className="hover:text-primary">
                  {business.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow">Service area</dt>
              <dd>Norman · Moore · Edmond · Midwest City · OKC Metro</dd>
            </div>
          </dl>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {gallery.slice(0, 3).map((src) => (
              <img
                key={src}
                src={src}
                alt="Detailed vehicle"
                loading="lazy"
                className="aspect-square w-full rounded-lg object-cover"
              />
            ))}
          </div>
        </div>

        <LeadForm />
      </section>
    </div>
  );
}
