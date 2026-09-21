import { ShieldIcon, ClockIcon, MapPinIcon, StarIcon } from "./icons";

const benefits = [
  {
    icon: <MapPinIcon className="h-6 w-6" />,
    title: "Nearby by design",
    description:
      "Requests and bookings are matched to providers close to you so help arrives faster and jobs stay practical for mechanics and garages.",
  },
  {
    icon: <ClockIcon className="h-6 w-6" />,
    title: "Live, not delayed",
    description:
      "Status updates, incoming requests, and job progress move in real time — so nobody is stuck waiting on phone calls or outdated messages.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6" />,
    title: "Clear roles, clear records",
    description:
      "Car owners manage vehicles, requests, payments, and reviews. Providers manage jobs, profile, and commissions. Admin keeps the platform healthy.",
  },
  {
    icon: <StarIcon className="h-6 w-6" />,
    title: "Built for trust",
    description:
      "Ratings, history, receipts, and reporting tools help both sides know what happened and resolve issues when they arise.",
  },
];

export function Benefits() {
  return (
    <section className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-hazard">
            Why it works
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">
            Built for the road and the workshop
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel">
            Digital Garage is not a generic marketplace. It is focused on
            roadside assistance and garage services — with separate experiences
            that respect how each side actually works.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="flex gap-4 rounded-2xl border border-white/10 bg-asphalt-light/30 p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                {b.icon}
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-chalk">
                  {b.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-steel">
                  {b.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
