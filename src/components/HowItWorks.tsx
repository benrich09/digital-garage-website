const steps = [
  {
    step: "01",
    title: "Request or book",
    description:
      "Car owners request a mechanic for roadside help or book a garage for planned service. Share the problem, location, and vehicle details in a few taps.",
  },
  {
    step: "02",
    title: "Match & respond",
    description:
      "Nearby providers see the request live. They can accept, send an offer, or manage the job from the Provider app while you track progress.",
  },
  {
    step: "03",
    title: "Track & complete",
    description:
      "Follow status from acceptance to arrival and completion. Pay the provider directly, rate the work, and keep receipts and history in the app.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-white/10 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-hazard">
            Simple by design
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">
            How Digital Garage works
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-steel">
            Two apps, one platform. Clear roles for car owners and service
            providers — with real-time updates every step of the way.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div
              key={s.step}
              className="rounded-2xl border border-white/10 bg-asphalt-light/40 p-6"
            >
              <p className="font-mono text-sm font-medium text-brand">{s.step}</p>
              <h3 className="mt-3 font-display text-xl font-bold text-chalk">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-steel">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
