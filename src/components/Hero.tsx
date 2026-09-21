export function Hero() {
  return (
    <header className="relative overflow-hidden">
      {/* Soft radial glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(22,163,74,0.18),transparent)]" />

      <nav className="relative z-10 mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <img
            src="/logo.png"
            alt="Digital Garage"
            className="h-11 w-11 object-contain"
          />
          <div>
            <span className="block font-display text-lg font-bold leading-none tracking-tight">
              Digital Garage
            </span>
            <span className="mt-0.5 block text-[11px] font-medium text-steel">
              Help on the road · Service at the garage
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="#how-it-works"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-steel transition hover:text-chalk sm:inline"
          >
            How it works
          </a>
          <a
            href="#showcase"
            className="hidden rounded-full px-4 py-2 text-sm font-medium text-steel transition hover:text-chalk md:inline"
          >
            Features
          </a>
          <a
            href="#download"
            className="rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/25 transition hover:bg-brand-dark"
          >
            Get the apps
          </a>
        </div>
      </nav>

      <div className="relative z-10 mx-auto max-w-5xl px-6 pb-28 pt-14 text-center sm:pt-20">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand" />
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-brand">
            Roadside help · Garage booking · Live tracking
          </span>
        </div>

        <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-[3.75rem]">
          Your car breaks down.
          <br />
          <span className="bg-gradient-to-r from-brand to-emerald-400 bg-clip-text text-transparent">
            Help is already on the way.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-steel sm:text-lg">
          Digital Garage connects car owners with nearby mechanics and garages
          in real time. One platform, two focused apps — built for the road and
          for the workshop.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/30 transition hover:bg-brand-dark hover:shadow-brand/40"
          >
            Download for Android
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-semibold text-chalk backdrop-blur transition hover:border-white/40 hover:bg-white/10"
          >
            See the apps
          </a>
        </div>

        <div className="mx-auto mt-14 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm text-steel">
          {[
            "Live location matching",
            "Separate apps for owners & providers",
            "Direct APK install · no store required",
          ].map((item) => (
            <span key={item} className="flex items-center gap-2.5">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand/20 text-brand">
                <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hazard stripe accent */}
      <div className="hazard-stripe absolute inset-x-0 bottom-0 h-2.5 opacity-90" />
    </header>
  );
}
