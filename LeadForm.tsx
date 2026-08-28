import { useState, type FormEvent } from "react";
import { business, serviceOptions, vehicleSizes } from "@/lib/site-data";

const field =
  "w-full rounded-lg border border-input bg-background px-3.5 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
const label = "mb-1.5 block font-condensed text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground";

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(business.formspree, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (!res.ok) throw new Error("failed");
      form.reset();
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="panel p-8 text-center">
        <div className="font-display text-4xl gold-text">Request Received</div>
        <p className="mt-3 text-sm text-muted-foreground">
          Thanks — we'll text or call you back with your quote, usually within a couple of hours.
          Need it sooner? Call{" "}
          <a href={business.phoneHref} className="text-primary">
            {business.phone}
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="panel p-6 sm:p-8">
      <h3 className="font-display text-3xl">Get your free quote</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">
        Takes 30 seconds. We reply fast — usually the same day.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="lf-name">
            Name
          </label>
          <input id="lf-name" name="name" required placeholder="Your name" className={field} />
        </div>
        <div>
          <label className={label} htmlFor="lf-phone">
            Phone
          </label>
          <input
            id="lf-phone"
            name="phone"
            type="tel"
            required
            placeholder="(555) 555-5555"
            className={field}
          />
        </div>
        <div>
          <label className={label} htmlFor="lf-vehicle">
            Vehicle size
          </label>
          <select id="lf-vehicle" name="vehicle_size" required defaultValue="" className={field}>
            <option value="" disabled>
              Select size
            </option>
            {vehicleSizes.map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={label} htmlFor="lf-service">
            Service
          </label>
          <select id="lf-service" name="service" required defaultValue="" className={field}>
            <option value="" disabled>
              Select service
            </option>
            {serviceOptions.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        {!compact && (
          <>
            <div>
              <label className={label} htmlFor="lf-email">
                Email (optional)
              </label>
              <input id="lf-email" name="email" type="email" placeholder="you@email.com" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="lf-address">
                Service address / city
              </label>
              <input id="lf-address" name="address" placeholder="Norman, OK" className={field} />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="lf-notes">
                Anything we should know?
              </label>
              <textarea
                id="lf-notes"
                name="notes"
                rows={3}
                placeholder="Pet hair, preferred days, ceramic questions…"
                className={field}
              />
            </div>
          </>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-lg py-4 font-condensed text-base font-bold uppercase tracking-[0.16em] gold-fill shadow-gold transition-transform hover:scale-[1.01] disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Get My Free Quote"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-destructive">
          Something went wrong. Please call or text {business.phone}.
        </p>
      )}

      <p className="mt-3 text-center text-xs text-muted-foreground">
        No spam. No obligation. Prefer to talk?{" "}
        <a href={business.phoneHref} className="text-primary">
          Call / text {business.phone}
        </a>
      </p>
    </form>
  );
}
