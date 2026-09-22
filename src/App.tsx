const steps = [
  {
    num: "01",
    title: "Request help or book a garage",
    desc: "Open the Smart Garage app, describe the problem or choose a service, share your location and vehicle details. Roadside requests go live instantly; planned bookings let you pick a preferred time slot.",
  },
  {
    num: "02",
    title: "Get matched with nearby providers",
    desc: "Verified mechanics and garages in your area see the request. They can accept, send an offer with ETA and price estimate, or you can browse and book a specific garage yourself.",
  },
  {
    num: "03",
    title: "Track in real time",
    desc: "Follow acceptance, departure, and arrival on the map. Status updates and push notifications keep you informed so you never have to chase the mechanic on the phone.",
  },
  {
    num: "04",
    title: "Complete, pay & rate",
    desc: "Once the job is done, pay the provider directly through the app. Rate the service, keep the digital receipt, and build your vehicle service history for next time.",
  },
];

const ownerFeatures = [
  {
    title: "Roadside assistance",
    desc: "Flat tire, battery, breakdown — request a mechanic who is already nearby and watch them arrive on the map.",
  },
  {
    title: "Garage booking",
    desc: "Browse nearby workshops, compare services and ratings, and book a slot without calling around.",
  },
  {
    title: "Vehicle profiles",
    desc: "Save multiple cars with make, model, plate and service history so every request starts faster.",
  },
  {
    title: "Live tracking & ETA",
    desc: "See when the mechanic accepts, leaves, and arrives. No more guessing or endless calls.",
  },
  {
    title: "Transparent pricing",
    desc: "Get clear estimates before work starts. Pay securely in-app and keep digital receipts.",
  },
  {
    title: "Ratings & history",
    desc: "Rate every job and keep a full record of past services for insurance or resale.",
  },
];

const providerFeatures = [
  {
    title: "Live request feed",
    desc: "See roadside and booking requests in your coverage area the moment they are created.",
  },
  {
    title: "Accept & manage jobs",
    desc: "Accept, update status (en route, arrived, in progress, completed) with clear timers.",
  },
  {
    title: "Earnings dashboard",
    desc: "Track completed jobs, customer payments, and platform commission in one place.",
  },
  {
    title: "Garage profile",
    desc: "List services, opening hours, capabilities and photos so the right jobs find you.",
  },
  {
    title: "Performance insights",
    desc: "Ratings, response time and job history help you grow reputation and win more work.",
  },
  {
    title: "Instant notifications",
    desc: "Get alerted the second a new request matches your area and services.",
  },
];

const benefits = [
  {
    icon: "📍",
    title: "Nearby by design",
    desc: "Matching prioritises providers close to you so help arrives faster and jobs stay practical for mechanics.",
  },
  {
    icon: "⚡",
    title: "Real-time everything",
    desc: "Status, location and messages move live — no waiting on phone calls or outdated SMS.",
  },
  {
    icon: "🛡️",
    title: "Clear roles & records",
    desc: "Owners manage vehicles and requests. Providers manage jobs and earnings. Everyone has a clear history.",
  },
  {
    icon: "⭐",
    title: "Built for trust",
    desc: "Verified providers, ratings, receipts and reporting tools protect both sides of every job.",
  },
];

function StoreButtons() {
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="https://play.google.com/store"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76c.12.06.26.09.4.09.16 0 .32-.05.46-.14l11.3-6.53-2.68-2.68-9.48 9.26zM1.5 2.7v18.6c0 .2.06.39.17.55l9.7-9.45L1.67 2.15A1 1 0 001.5 2.7zm19.6 8.7l-2.9-1.67-3.1 3.02 3.1 3.02 2.9-1.67c.7-.4.7-1.4 0-1.7zM4.04.29A1 1 0 003.18.34l9.48 9.26 2.68-2.68L4.04.29z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] leading-none opacity-80">GET IT ON</p>
          <p className="text-sm font-semibold leading-tight">Google Play</p>
        </div>
      </a>
      <a
        href="https://apps.apple.com"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-3 rounded-xl bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800"
      >
        <svg className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.98 1.08-3.13-1.05.05-2.31.7-3.07 1.58-.67.76-1.26 1.98-1.1 3.15 1.16.09 2.36-.63 3.09-1.6z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] leading-none opacity-80">Download on the</p>
          <p className="text-sm font-semibold leading-tight">App Store</p>
        </div>
      </a>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#" className="flex items-center gap-3">
            <img src="/logo.png" alt="Smart Garage" className="h-11 w-11 object-contain" />
            <div>
              <span className="block font-display text-lg font-bold leading-none tracking-tight">
                Smart Garage
              </span>
              <span className="mt-0.5 block text-[11px] font-medium text-slate-500">
                Help on the road · Service at the garage
              </span>
            </div>
          </a>
          <nav className="hidden items-center gap-1 md:flex">
            <a href="#how" className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900">
              How it works
            </a>
            <a href="#owners" className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900">
              For owners
            </a>
            <a href="#providers" className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-slate-900">
              For providers
            </a>
            <a href="#download" className="ml-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/25 hover:bg-brand-dark">
              Get the app
            </a>
          </nav>
          <a href="#download" className="rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white md:hidden">
            Download
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/bg-workshop.jpg"
            alt=""
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-brand-soft/40" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-3.5 py-1.5">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-dark">
                Roadside help · Garage booking · Live tracking
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Your car breaks down.
              <br />
              <span className="text-brand">Help is already on the way.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Smart Garage connects car owners with nearby mechanics and garages in real time.
              One platform, two focused apps — built for the road and for the workshop.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
              >
                Download the app
              </a>
              <a
                href="#how"
                className="inline-flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-brand/40 hover:bg-brand-soft/50"
              >
                See how it works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-600">
              {["Live location matching", "Separate apps for owners & providers", "Available on Play Store & App Store"].map(
                (t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15 text-brand">
                      <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {t}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4 sm:px-6">
          {[
            { value: "2 apps", label: "Owner + Provider" },
            { value: "Live", label: "Map tracking" },
            { value: "Verified", label: "Mechanics & garages" },
            { value: "Direct", label: "In-app payments" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-brand sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Process</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              How Smart Garage works
            </h2>
            <p className="mt-3 text-slate-600">
              From request to completed job — four clear steps for car owners and providers.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div
                key={s.num}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand/30 hover:shadow-md"
              >
                <span className="font-display text-sm font-bold text-brand">{s.num}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For car owners */}
      <section id="owners" className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">For car owners</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Help when you need it. Control when you book.
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                Whether you are stuck on the roadside or planning a service visit, Smart Garage
                connects you to nearby mechanics and garages — with live tracking, clear pricing,
                and your vehicle history in one place.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {ownerFeatures.map((f) => (
                  <li key={f.title} className="rounded-xl border border-slate-100 bg-slate-50 p-4">
                    <p className="font-semibold text-slate-900">{f.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/bg-garage.jpg"
                alt="Garage workshop"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <p className="font-display text-lg font-bold">Smart Garage — Owner app</p>
                <p className="mt-1 text-sm text-white/80">Request · Track · Book · Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For providers */}
      <section id="providers" className="border-t border-slate-200 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 overflow-hidden rounded-2xl shadow-xl lg:order-1">
              <img
                src="/bg-workshop.jpg"
                alt="Auto workshop"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">For garages & mechanics</p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Turn nearby demand into booked, paid work.
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                See live service requests around you, send offers, manage the job from acceptance
                to completion, and track what you earn — all in one dedicated Provider app.
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {providerFeatures.map((f) => (
                  <li key={f.title} className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
                    <p className="font-semibold text-slate-900">{f.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Why Smart Garage</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Built for the road and the workshop
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-brand/30 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-2xl">
                  {b.icon}
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download */}
      <section id="download" className="border-t border-slate-200 bg-gradient-to-br from-brand to-brand-dark py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <img src="/logo.png" alt="" className="mx-auto h-16 w-16 object-contain brightness-0 invert" />
          <h2 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">
            Get Smart Garage today
          </h2>
          <p className="mt-3 text-brand-soft">
            Separate apps for car owners and service providers. Available on Google Play and the App Store.
          </p>
          <div className="mt-8 flex justify-center">
            <StoreButtons />
          </div>
          <p className="mt-6 text-sm text-white/70">
            Car Owner app · Provider app · Free to download
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-900 text-slate-400">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Smart Garage" className="h-10 w-10 object-contain" />
                <div>
                  <span className="block font-display font-semibold text-white">Smart Garage</span>
                  <span className="text-xs">Help on the road · Service at the garage</span>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed">
                Roadside help and garage booking, dispatched in minutes. One platform for car owners,
                mechanics and garages.
              </p>
            </div>
            <div className="flex flex-wrap gap-12 text-sm">
              <div>
                <p className="font-semibold text-white">Product</p>
                <ul className="mt-3 space-y-2">
                  <li><a href="#how" className="hover:text-white">How it works</a></li>
                  <li><a href="#owners" className="hover:text-white">For owners</a></li>
                  <li><a href="#providers" className="hover:text-white">For providers</a></li>
                  <li><a href="#download" className="hover:text-white">Download</a></li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white">Get the apps</p>
                <ul className="mt-3 space-y-2">
                  <li><a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="hover:text-white">Google Play</a></li>
                  <li><a href="https://apps.apple.com" target="_blank" rel="noreferrer" className="hover:text-white">App Store</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm sm:text-left">
            © {new Date().getFullYear()} Smart Garage. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
