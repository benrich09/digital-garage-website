import { useState } from "react";

type Page = "home" | "how" | "owners" | "providers" | "download";

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
  { title: "Roadside assistance", desc: "Flat tire, battery, breakdown — request a mechanic who is already nearby and watch them arrive on the map." },
  { title: "Garage booking", desc: "Browse nearby workshops, compare services and ratings, and book a slot without calling around." },
  { title: "Vehicle profiles", desc: "Save multiple cars with make, model, plate and service history so every request starts faster." },
  { title: "Live tracking & ETA", desc: "See when the mechanic accepts, leaves, and arrives. No more guessing or endless calls." },
  { title: "Transparent pricing", desc: "Get clear estimates before work starts. Pay securely in-app and keep digital receipts." },
  { title: "Ratings & history", desc: "Rate every job and keep a full record of past services for insurance or resale." },
];

const providerFeatures = [
  { title: "Live request feed", desc: "See roadside and booking requests in your coverage area the moment they are created." },
  { title: "Accept & manage jobs", desc: "Accept, update status (en route, arrived, in progress, completed) with clear timers." },
  { title: "Earnings dashboard", desc: "Track completed jobs, customer payments, and platform commission in one place." },
  { title: "Garage profile", desc: "List services, opening hours, capabilities and photos so the right jobs find you." },
  { title: "Performance insights", desc: "Ratings, response time and job history help you grow reputation and win more work." },
  { title: "Instant notifications", desc: "Get alerted the second a new request matches your area and services." },
];

function StoreButtons({ light = false }: { light?: boolean }) {
  const base = light
    ? "bg-white text-slate-900 hover:bg-slate-100 shadow-lg"
    : "bg-slate-900 text-white hover:bg-slate-800";
  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-3 rounded-xl px-5 py-3.5 transition ${base}`}>
        <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76c.12.06.26.09.4.09.16 0 .32-.05.46-.14l11.3-6.53-2.68-2.68-9.48 9.26zM1.5 2.7v18.6c0 .2.06.39.17.55l9.7-9.45L1.67 2.15A1 1 0 001.5 2.7zm19.6 8.7l-2.9-1.67-3.1 3.02 3.1 3.02 2.9-1.67c.7-.4.7-1.4 0-1.7zM4.04.29A1 1 0 003.18.34l9.48 9.26 2.68-2.68L4.04.29z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] leading-none opacity-80">GET IT ON</p>
          <p className="text-base font-semibold leading-tight">Google Play</p>
        </div>
      </a>
      <a href="https://apps.apple.com" target="_blank" rel="noreferrer" className={`inline-flex items-center gap-3 rounded-xl px-5 py-3.5 transition ${base}`}>
        <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.98 1.08-3.13-1.05.05-2.31.7-3.07 1.58-.67.76-1.26 1.98-1.1 3.15 1.16.09 2.36-.63 3.09-1.6z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] leading-none opacity-80">Download on the</p>
          <p className="text-base font-semibold leading-tight">App Store</p>
        </div>
      </a>
    </div>
  );
}

function Navbar({ page, setPage }: { page: Page; setPage: (p: Page) => void }) {
  const [open, setOpen] = useState(false);
  const link = (id: Page, label: string) => (
    <button
      onClick={() => { setPage(id); setOpen(false); }}
      className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
        page === id ? "bg-green-50 text-green-700" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      }`}
    >
      {label}
    </button>
  );
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <button onClick={() => setPage("home")} className="flex items-center gap-3">
          <img src="/logo.png" alt="Smart Garage" className="h-11 w-11 object-contain" />
          <div className="text-left">
            <span className="block font-display text-lg font-bold leading-none tracking-tight text-slate-900">Smart Garage</span>
            <span className="mt-0.5 block text-[11px] font-medium text-slate-500">Help on the road · Service at the garage</span>
          </div>
        </button>
        <nav className="hidden items-center gap-1 md:flex">
          {link("home", "Home")}
          {link("how", "How it works")}
          {link("owners", "For owners")}
          {link("providers", "For providers")}
          <button
            onClick={() => setPage("download")}
            className="ml-2 rounded-full bg-green-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-600/25 hover:bg-green-700"
          >
            Get the app
          </button>
        </nav>
        <button className="rounded-xl p-2.5 hover:bg-slate-100 md:hidden" onClick={() => setOpen(!open)}>
          <svg className="h-6 w-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <div className="space-y-1 border-t border-slate-100 px-4 py-4 md:hidden">
          {link("home", "Home")}
          {link("how", "How it works")}
          {link("owners", "For owners")}
          {link("providers", "For providers")}
          <button onClick={() => { setPage("download"); setOpen(false); }} className="mt-2 w-full rounded-xl bg-green-600 py-3 text-sm font-semibold text-white">
            Get the app
          </button>
        </div>
      )}
    </header>
  );
}

function Home({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      <section className="relative min-h-[85vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
        </div>
        <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-500/20 px-3.5 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-green-200">
                Roadside help · Garage booking · Live tracking
              </span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your car breaks down.
              <br />
              <span className="text-green-400">Help is already on the way.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Smart Garage connects car owners with nearby mechanics and garages in real time.
              One platform, two focused apps — built for the road and for the workshop.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setPage("download")}
                className="rounded-full bg-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-400"
              >
                Download the app
              </button>
              <button
                onClick={() => setPage("how")}
                className="rounded-full border-2 border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                See how it works
              </button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-300">
              {["Live location matching", "Owner & Provider apps", "Play Store & App Store"].map((t) => (
                <span key={t} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500/30 text-green-300">
                    <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4 sm:px-6">
          {[
            { value: "2 apps", label: "Owner + Provider" },
            { value: "Live", label: "Map tracking" },
            { value: "Verified", label: "Mechanics & garages" },
            { value: "Direct", label: "In-app payments" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-green-600 sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <button
              onClick={() => setPage("owners")}
              className="group relative overflow-hidden rounded-2xl text-left shadow-lg"
            >
              <img src="/section-owners.jpg" alt="For car owners" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-300">For car owners</p>
                <h3 className="mt-1 font-display text-2xl font-bold">Help when you need it</h3>
                <p className="mt-2 text-sm text-slate-300">Roadside assistance, garage booking, live tracking →</p>
              </div>
            </button>
            <button
              onClick={() => setPage("providers")}
              className="group relative overflow-hidden rounded-2xl text-left shadow-lg"
            >
              <img src="/bg-workshop.jpg" alt="For providers" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-300">For garages & mechanics</p>
                <h3 className="mt-1 font-display text-2xl font-bold">Turn demand into paid work</h3>
                <p className="mt-2 text-sm text-slate-300">Live requests, job control, earnings →</p>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-green-600 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Get Smart Garage today</h2>
          <p className="mt-2 text-green-100">Available on Google Play and the App Store</p>
          <div className="mt-8 flex justify-center">
            <StoreButtons light />
          </div>
        </div>
      </section>
    </>
  );
}

function HowPage() {
  return (
    <div>
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="absolute inset-0">
          <img src="/bg-garage.jpg" alt="" className="h-full w-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-white/95 to-white" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">Process</p>
            <h1 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">How Smart Garage works</h1>
            <p className="mt-3 text-slate-600">From request to completed job — four clear steps for car owners and providers.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.num} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-green-300 hover:shadow-md">
                <span className="font-display text-sm font-bold text-green-600">{s.num}</span>
                <h3 className="mt-3 font-display text-lg font-bold text-slate-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function OwnersPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/section-owners.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">For car owners</p>
          <h1 className="mt-3 max-w-xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Help when you need it. Control when you book.
          </h1>
          <p className="mt-4 max-w-lg text-slate-200">
            Whether you are stuck on the roadside or planning a service visit, Smart Garage connects you to nearby mechanics and garages.
          </p>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ownerFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ProvidersPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/bg-workshop.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/50" />
        </div>
        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">For garages & mechanics</p>
          <h1 className="mt-3 max-w-xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Turn nearby demand into booked, paid work.
          </h1>
          <p className="mt-4 max-w-lg text-slate-200">
            See live service requests around you, send offers, manage the job from acceptance to completion, and track what you earn.
          </p>
        </div>
      </section>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {providerFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="font-display text-lg font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function DownloadPage() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-green-900/90" />
        </div>
        <div className="relative mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 sm:py-32">
          <img src="/logo.png" alt="" className="mx-auto h-20 w-20 object-contain brightness-0 invert" />
          <h1 className="mt-6 font-display text-3xl font-bold text-white sm:text-4xl">Get Smart Garage</h1>
          <p className="mt-3 text-green-100">
            Separate apps for car owners and service providers. Free to download on Google Play and the App Store.
          </p>
          <div className="mt-10 flex justify-center">
            <StoreButtons light />
          </div>
          <div className="mt-12 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <h3 className="font-display text-lg font-bold text-white">Car Owner app</h3>
              <p className="mt-2 text-sm text-green-100">Request roadside help, book garages, track mechanics, manage vehicles and payments.</p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur">
              <h3 className="font-display text-lg font-bold text-white">Provider app</h3>
              <p className="mt-2 text-sm text-green-100">Receive live requests, manage jobs, track earnings and grow your garage reputation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="border-t border-slate-800 bg-slate-900 text-slate-400">
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
              Roadside help and garage booking, dispatched in minutes.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="font-semibold text-white">Pages</p>
              <ul className="mt-3 space-y-2">
                <li><button onClick={() => setPage("how")} className="hover:text-white">How it works</button></li>
                <li><button onClick={() => setPage("owners")} className="hover:text-white">For owners</button></li>
                <li><button onClick={() => setPage("providers")} className="hover:text-white">For providers</button></li>
                <li><button onClick={() => setPage("download")} className="hover:text-white">Download</button></li>
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
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar page={page} setPage={setPage} />
      <main>
        {page === "home" && <Home setPage={setPage} />}
        {page === "how" && <HowPage />}
        {page === "owners" && <OwnersPage />}
        {page === "providers" && <ProvidersPage />}
        {page === "download" && <DownloadPage />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
