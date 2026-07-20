import { WrenchIcon } from "./icons";

export function Hero() {
  return (
    <header className="relative overflow-hidden pb-20 pt-8">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand">
            <WrenchIcon className="h-5 w-5 text-white" />
          </div>
          <span className="font-display text-lg font-bold">Digital Garage</span>
        </div>
        <a
          href="#download"
          className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-chalk transition hover:border-brand hover:text-brand"
        >
          Get the apps
        </a>
      </nav>

      <div className="mx-auto mt-16 max-w-4xl px-6 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-hazard">
          Roadside help, dispatched in minutes
        </p>
        <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Your car breaks down.
          <br />
          <span className="text-brand">Help is already on the way.</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-steel">
          Digital Garage connects car owners with nearby garages and mechanics in
          real time — one platform, two apps, built for the road.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#download"
            className="rounded-full bg-brand px-7 py-3 font-medium text-white shadow-lg shadow-brand/30 transition hover:bg-brand-dark"
          >
            Download for Android
          </a>
          <a
            href="#showcase"
            className="rounded-full border border-white/20 px-7 py-3 font-medium text-chalk transition hover:border-white/40"
          >
            See what it does
          </a>
        </div>
      </div>

      {/* Signature element: diagonal hazard stripe, like reflective
          garage/workshop tape — anchors the page in its subject rather
          than a generic gradient divider. */}
      <div className="hazard-stripe absolute inset-x-0 bottom-0 h-3 opacity-90" />
    </header>
  );
}
