import { useState, useEffect } from "react";

type Page =
  | "home"
  | "how"
  | "owners"
  | "providers"
  | "download"
  | "register-owner"
  | "register-provider";

const PLAY_STORE = "https://play.google.com/store/apps/details?id=com.smartgarage.app";
const APP_STORE = "https://apps.apple.com/app/smart-garage";
const PLAY_STORE_PROVIDER = "https://play.google.com/store/apps/details?id=com.smartgarage.provider";
const APP_STORE_PROVIDER = "https://apps.apple.com/app/smart-garage-provider";
const PHONE = "255746795020";
const PHONE_DISPLAY = "+255 746 795 020";
const WHATSAPP = `https://wa.me/${PHONE}`;

const providerTypes = [
  { title: "Garages and mechanics", desc: "Full workshop services, diagnostics, repairs and scheduled maintenance.", image: "/services/garage.jpg" },
  { title: "Breakdown / roadside", desc: "On-the-spot help when a vehicle fails: jump start, tow coordination and emergency fixes.", image: "/services/breakdown.jpg" },
  { title: "Change tyre", desc: "Punctures, swaps and tyre fitting on the road or at a fixed location.", image: "/services/tyre.jpg" },
  { title: "Wheel alignment and balance", desc: "Alignment, balancing and related suspension and wheel services.", image: "/services/alignment.jpg" },
  { title: "Car wash", desc: "Exterior wash, interior clean and detailing providers near the customer.", image: "/services/car-wash.jpg" },
  { title: "Spare parts shops", desc: "Parts retailers who supply genuine or compatible spares linked to jobs.", image: "/services/spare-parts.jpg" },
];

const stepsOwner = [
  { num: "01", title: "Request help or book", desc: "Describe the problem or pick a service, share location and vehicle. Roadside goes live instantly. Bookings let you choose a slot." },
  { num: "02", title: "Get matched", desc: "Nearby verified providers see the request: mechanics, tyre, wash, alignment, parts shops or full garages." },
  { num: "03", title: "Track in real time", desc: "Follow acceptance, ETA and arrival on the map with push updates." },
  { num: "04", title: "Complete, pay and rate", desc: "Pay in-app, keep the receipt, rate the job and grow your vehicle history." },
];

const stepsProvider = [
  { num: "01", title: "Register and verify", desc: "Create a Provider account, upload ID and any trade documents. Choose services: garage, breakdown, tyre, alignment, wash or parts." },
  { num: "02", title: "Receive live requests", desc: "Jobs in your coverage area appear in the app. Accept, decline or send an offer with ETA and estimate." },
  { num: "03", title: "Manage the job", desc: "Update status: en route, arrived, in progress, completed. Customer tracks you live." },
  { num: "04", title: "Get paid and grow", desc: "Customer pays you. Track earnings and commission. Ratings help you win more work." },
];

const ownerFeatures = [
  { title: "Roadside / breakdown", desc: "Request help when stranded. Nearby breakdown providers respond fast." },
  { title: "Change tyre", desc: "Flat or swap with specialised tyre providers or mobile fitters." },
  { title: "Wheel alignment and balance", desc: "Book alignment and balancing at trusted workshops." },
  { title: "Car wash", desc: "Find and book nearby wash and detailing services." },
  { title: "Spare parts shops", desc: "Locate parts shops linked to your repair job." },
  { title: "Full garage booking", desc: "Browse workshops, compare services and book a slot." },
  { title: "Live tracking", desc: "See acceptance, departure and arrival on the map." },
  { title: "Vehicle profiles", desc: "Save cars, history and preferences for faster requests." },
];

function StoreButtons({ light = false, provider = false }: { light?: boolean; provider?: boolean }) {
  const play = provider ? PLAY_STORE_PROVIDER : PLAY_STORE;
  const app = provider ? APP_STORE_PROVIDER : APP_STORE;
  const base = light ? "bg-white text-slate-900 hover:bg-slate-100 shadow-lg" : "bg-slate-900 text-white hover:bg-slate-800";
  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      <a href={play} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-3 rounded-xl px-5 py-3.5 transition ${base}`}>
        <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.12.06.26.09.4.09.16 0 .32-.05.46-.14l11.3-6.53-2.68-2.68-9.48 9.26zM1.5 2.7v18.6c0 .2.06.39.17.55l9.7-9.45L1.67 2.15A1 1 0 001.5 2.7zm19.6 8.7l-2.9-1.67-3.1 3.02 3.1 3.02 2.9-1.67c.7-.4.7-1.4 0-1.7zM4.04.29A1 1 0 003.18.34l9.48 9.26 2.68-2.68L4.04.29z" /></svg>
        <div className="text-left"><p className="text-[10px] leading-none opacity-80">GET IT ON</p><p className="text-base font-semibold leading-tight">Google Play</p></div>
      </a>
      <a href={app} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-3 rounded-xl px-5 py-3.5 transition ${base}`}>
        <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.98 1.08-3.13-1.05.05-2.31.7-3.07 1.58-.67.76-1.26 1.98-1.1 3.15 1.16.09 2.36-.63 3.09-1.6z" /></svg>
        <div className="text-left"><p className="text-[10px] leading-none opacity-80">Download on the</p><p className="text-base font-semibold leading-tight">App Store</p></div>
      </a>
    </div>
  );
}

function PageHero({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: React.ReactNode }) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6">
        {eyebrow && <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">{eyebrow}</p>}
        <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">{title}</h1>
        {children}
      </div>
    </section>
  );
}

function Navbar({ page, setPage, overHero }: { page: Page; setPage: (p: Page) => void; overHero: boolean }) {
  const [open, setOpen] = useState(false);
  const solid = !overHero;
  const link = (id: Page, label: string) => (
    <button
      onClick={() => { setPage(id); setOpen(false); }}
      className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition md:inline-block md:w-auto md:px-3 md:py-2 ${
        page === id
          ? solid ? "bg-green-50 text-green-700" : "bg-white/20 text-white"
          : solid ? "text-slate-700 hover:bg-slate-100" : "text-white/90 hover:bg-white/15"
      }`}
    >
      {label}
    </button>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solid ? "border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm" : "bg-transparent"}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <button onClick={() => setPage("home")} className="flex items-center gap-3">
          <img src="/logo.png" alt="Smart Garage" className="h-11 w-11 object-contain sm:h-12 sm:w-12" />
          <div className="text-left">
            <span className={`block font-display text-lg font-bold leading-none ${solid ? "text-slate-900" : "text-white"}`}>Smart Garage</span>
            <span className={`mt-0.5 block text-[11px] font-medium ${solid ? "text-slate-500" : "text-green-200"}`}>Help on the road. Service at the garage</span>
          </div>
        </button>
        <nav className="hidden items-center gap-0.5 md:flex">
          {link("home", "Home")}
          {link("how", "How it works")}
          {link("owners", "For owners")}
          {link("providers", "For providers")}
          <button onClick={() => setPage("download")} className={`ml-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${solid ? "bg-green-600 text-white hover:bg-green-700" : "bg-white text-green-800 hover:bg-green-50"}`}>
            Get the app
          </button>
        </nav>
        <button className={`rounded-xl p-2.5 md:hidden ${solid ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/15"}`} onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M8 4 L4 8 L8 12" />
              <path d="M16 4 L20 8 L16 12" />
              <path d="M4 8 L20 16" />
              <path d="M20 8 L4 16" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>
      {open && (
        <div className="md:hidden">
          <div className={`flex flex-col border-t px-2 py-3 rounded-b-2xl backdrop-blur-xl ${
            solid ? "border-slate-100 bg-white/95 shadow-lg" : "border-white/20 bg-slate-900/85 shadow-xl"
          }`}>
            {link("home", "Home")}
            {link("how", "How it works")}
            {link("owners", "For owners")}
            {link("providers", "For providers")}
            <div className="mx-2 mt-2 space-y-2 border-t border-slate-200/30 pt-3">
              <button onClick={() => { setPage("download"); setOpen(false); }} className="w-full rounded-xl bg-green-600 py-3 text-sm font-semibold text-white">Get the app</button>
              <button onClick={() => { setPage("register-owner"); setOpen(false); }} className="w-full rounded-xl bg-green-50 py-3 text-sm font-semibold text-green-700">Register as car owner</button>
              <button onClick={() => { setPage("register-provider"); setOpen(false); }} className="w-full rounded-xl border border-green-200 py-3 text-sm font-semibold text-green-800">Register as provider</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Home({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
        </div>
        <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-green-400/40 bg-green-500/20 px-3.5 py-1.5 backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              <span className="text-xs font-semibold uppercase tracking-wider text-green-200">Roadside · Garage · Tyre · Wash · Parts</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Your car breaks down.<br /><span className="text-green-400">Help is already on the way.</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
              Smart Garage connects car owners with nearby mechanics, breakdown teams, tyre services, car wash, wheel alignment and spare parts shops with live tracking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button onClick={() => setPage("download")} className="rounded-full bg-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 hover:bg-green-400">Download the app</button>
              <button onClick={() => setPage("how")} className="rounded-full border-2 border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">How it works</button>
            </div>
            <div className="mt-10"><StoreButtons light /></div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:grid-cols-4 sm:px-6">
          {[{ value: "2 apps", label: "Owner and Provider" }, { value: "6+", label: "Service types" }, { value: "Live", label: "Map tracking" }, { value: "Direct", label: "In-app payments" }].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-green-600 sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">Services</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900">Provider types on Smart Garage</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {providerTypes.map((p) => (
              <div key={p.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <button onClick={() => setPage("owners")} className="group relative overflow-hidden rounded-2xl text-left shadow-lg">
              <img src="/section-owners.jpg" alt="" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-300">For car owners</p>
                <h3 className="mt-1 font-display text-2xl font-bold">Help when you need it</h3>
              </div>
            </button>
            <button onClick={() => setPage("providers")} className="group relative overflow-hidden rounded-2xl text-left shadow-lg">
              <img src="/bg-workshop.jpg" alt="" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-300">For providers</p>
                <h3 className="mt-1 font-display text-2xl font-bold">Turn demand into paid work</h3>
              </div>
            </button>
          </div>
        </div>
      </section>

      <section className="bg-green-600 py-14">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">Get Smart Garage today</h2>
          <p className="mt-2 text-green-100">Owner app and Provider app on Google Play and the App Store</p>
          <div className="mt-8 flex justify-center"><StoreButtons light /></div>
        </div>
      </section>
    </>
  );
}

function HowPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      <PageHero eyebrow="Process" title="How Smart Garage works">
        <p className="mt-4 max-w-lg text-slate-200">Clear steps for car owners and service providers.</p>
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-display text-xl font-bold text-green-800">For car owners</h2>
            <div className="space-y-4">
              {stepsOwner.map((s) => (
                <div key={s.num} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-sm font-bold text-green-600">{s.num}</span>
                  <h3 className="mt-1 font-display font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setPage("register-owner")} className="mt-6 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700">Register as car owner</button>
          </div>
          <div>
            <h2 className="mb-6 font-display text-xl font-bold text-slate-800">For providers</h2>
            <div className="space-y-4">
              {stepsProvider.map((s) => (
                <div key={s.num} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-sm font-bold text-green-600">{s.num}</span>
                  <h3 className="mt-1 font-display font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
            <button onClick={() => setPage("register-provider")} className="mt-6 rounded-full border-2 border-green-600 px-6 py-3 text-sm font-semibold text-green-700 hover:bg-green-50">Register as provider</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function OwnersPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      <PageHero eyebrow="For car owners" title="Help when you need it. Control when you book.">
        <p className="mt-4 max-w-lg text-slate-200">Roadside, tyre, wash, alignment, parts and full garage booking in one app.</p>
      </PageHero>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ownerFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
                <h3 className="font-display font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
            <h3 className="font-display text-xl font-bold text-slate-900">Download the Car Owner app</h3>
            <p className="mt-2 text-sm text-slate-600">Then register in-app or start below and finish login on mobile.</p>
            <div className="mt-6 flex justify-center"><StoreButtons /></div>
            <button onClick={() => setPage("register-owner")} className="mt-6 text-sm font-semibold text-green-700 hover:underline">Or register on the web first</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProvidersPage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      <PageHero eyebrow="For providers" title="Turn nearby demand into booked, paid work.">
        <p className="mt-4 max-w-lg text-slate-200">Garages, breakdown, tyre, alignment, car wash and spare parts shops.</p>
      </PageHero>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-slate-900">Who can join as a provider?</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {providerTypes.map((p) => (
              <div key={p.title} className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-slate-900">{p.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-center text-white">
            <h3 className="font-display text-xl font-bold">Download the Provider app</h3>
            <p className="mt-2 text-sm text-slate-300">Accept jobs, manage status and track earnings.</p>
            <div className="mt-6 flex justify-center"><StoreButtons light provider /></div>
            <button onClick={() => setPage("register-provider")} className="mt-6 text-sm font-semibold text-green-300 hover:underline">Register as provider on the web</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function DownloadPage() {
  const [role, setRole] = useState<"customer" | "provider" | null>(null);

  return (
    <PageHero eyebrow="Get the app" title="Choose how you use Smart Garage">
      {!role ? (
        <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          <button
            onClick={() => setRole("customer")}
            className="rounded-2xl border border-white/30 bg-white/10 p-6 text-left backdrop-blur transition hover:bg-white/20"
          >
            <span className="text-3xl">🚗</span>
            <h3 className="mt-3 text-xl font-bold text-white">Customer / Car owner</h3>
            <p className="mt-2 text-sm text-slate-200">Request breakdown help, book garage, tyre, wash, alignment and parts.</p>
          </button>
          <button
            onClick={() => setRole("provider")}
            className="rounded-2xl border border-white/30 bg-white/10 p-6 text-left backdrop-blur transition hover:bg-white/20"
          >
            <span className="text-3xl">🔧</span>
            <h3 className="mt-3 text-xl font-bold text-white">Service provider / Business</h3>
            <p className="mt-2 text-sm text-slate-200">Receive jobs as garage, roadside, tyre, wash, alignment or parts shop.</p>
          </button>
        </div>
      ) : (
        <div className="mt-10 max-w-lg">
          <button onClick={() => setRole(null)} className="mb-4 text-sm font-medium text-green-200 hover:text-white">← Back</button>
          <h2 className="text-2xl font-bold text-white">
            {role === "customer" ? "Car Owner app" : "Provider app"}
          </h2>
          <p className="mt-2 text-slate-200">
            {role === "customer"
              ? "Download the Smart Garage app for car owners. Free on Google Play and the App Store."
              : "Download the Smart Garage Provider app for businesses and service providers. Free on Google Play and the App Store."}
          </p>
          <div className="mt-8">
            <StoreButtons light provider={role === "provider"} />
          </div>
        </div>
      )}
    </PageHero>
  );
}

function RegisterForm({ role }: { role: "owner" | "provider" }) {
  const [done, setDone] = useState(false);
  const isOwner = role === "owner";

  if (done) {
    return (
      <PageHero eyebrow="Almost ready" title="Log in on the Smart Garage app">
        <div className="mt-6 max-w-md">
          <img src="/logo.png" alt="Smart Garage" className="h-16 w-16 object-contain" />
          <p className="mt-4 text-slate-200">
            Your {isOwner ? "car owner" : "provider"} registration has been received. Complete verification and log in inside the Smart Garage mobile app with the phone and password you just used.
          </p>
          <div className="mt-8"><StoreButtons light provider={!isOwner} /></div>
        </div>
      </PageHero>
    );
  }

  return (
    <div>
      <PageHero
        eyebrow={isOwner ? "Car owner" : "Provider"}
        title={`Register as ${isOwner ? "Car Owner" : "Provider"}`}
      >
        <p className="mt-3 text-slate-200">{isOwner ? "Request help and book services." : "Receive jobs and grow your business."}</p>
      </PageHero>
      <div className="mx-auto max-w-md px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-6 text-center">
          <img src="/logo.png" alt="Smart Garage" className="mx-auto h-16 w-16 object-contain" />
        </div>
        <form className="space-y-3.5" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
          <input required type="text" placeholder="Full name" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500" />
          <input required type="email" placeholder="Email" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500" />
          <input required type="tel" placeholder="Phone (e.g. 0746795020)" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500" />
          <input required type="password" placeholder="Password" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500" />
          {!isOwner && (
            <>
              <input type="text" placeholder="Business / garage name" className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500" />
              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500">
                <option value="">Primary service type</option>
                <option>Garage / mechanics</option>
                <option>Breakdown / roadside</option>
                <option>Change tyre</option>
                <option>Wheel alignment and balance</option>
                <option>Car wash</option>
                <option>Spare parts shop</option>
              </select>
            </>
          )}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-700">Identity document (required)</p>
            <p className="mt-1 text-[11px] text-slate-500">National ID, passport or driving licence for verification only, kept confidential.</p>
            <input required type="file" accept="image/*,.pdf" className="mt-3 w-full text-xs text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-green-600 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white" />
          </div>
          {!isOwner && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-700">Trade / business document (optional)</p>
              <p className="mt-1 text-[11px] text-slate-500">Licence, BRELA extract or workshop permit builds trust.</p>
              <input type="file" accept="image/*,.pdf" className="mt-3 w-full text-xs text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-700 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white" />
            </div>
          )}
          <label className="flex items-start gap-2 text-xs text-slate-600">
            <input required type="checkbox" className="mt-0.5 rounded border-slate-300 text-green-600" />
            <span>I agree to the Terms and Privacy Policy. Documents are used confidentially for verification only.</span>
          </label>
          <button type="submit" className="w-full rounded-xl bg-green-600 py-3.5 text-sm font-semibold text-white hover:bg-green-700">
            Create {isOwner ? "owner" : "provider"} account
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-slate-500">After registration, log in on the Smart Garage app to continue.</p>
      </div>
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
              <img src="/logo.png" alt="Smart Garage" className="h-12 w-12 object-contain" />
              <div>
                <span className="block font-display font-semibold text-white">Smart Garage</span>
                <span className="text-xs">Help on the road. Service at the garage</span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">Roadside, tyre, wash, alignment, parts and garage booking.</p>
            <p className="mt-2 text-sm"><a href={WHATSAPP} className="hover:text-white">{PHONE_DISPLAY}</a></p>
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
                <li><a href={PLAY_STORE} target="_blank" rel="noreferrer" className="hover:text-white">Google Play (Owner)</a></li>
                <li><a href={PLAY_STORE_PROVIDER} target="_blank" rel="noreferrer" className="hover:text-white">Google Play (Provider)</a></li>
                <li><a href={APP_STORE} target="_blank" rel="noreferrer" className="hover:text-white">App Store (Owner)</a></li>
                <li><a href={APP_STORE_PROVIDER} target="_blank" rel="noreferrer" className="hover:text-white">App Store (Provider)</a></li>
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
  const [scrolled, setScrolled] = useState(false);
  const heroPages: Page[] = ["home", "how", "owners", "providers", "download", "register-owner", "register-provider"];
  const overHero = heroPages.includes(page) && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrolled(false);
  }, [page]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar page={page} setPage={setPage} overHero={overHero} />
      <main>
        {page === "home" && <Home setPage={setPage} />}
        {page === "how" && <HowPage setPage={setPage} />}
        {page === "owners" && <OwnersPage setPage={setPage} />}
        {page === "providers" && <ProvidersPage setPage={setPage} />}
        {page === "download" && <DownloadPage />}
        {page === "register-owner" && <RegisterForm role="owner" />}
        {page === "register-provider" && <RegisterForm role="provider" />}
      </main>
      <Footer setPage={setPage} />
    </div>
  );
}
