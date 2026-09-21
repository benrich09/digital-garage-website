export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-asphalt-light/40 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Digital Garage"
                className="h-10 w-10 object-contain"
              />
              <div>
                <span className="block font-display text-lg font-semibold text-chalk">
                  Digital Garage
                </span>
                <span className="text-xs text-steel">
                  Help on the road · Service at the garage
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-steel">
              Roadside help and garage booking, dispatched in minutes. One
              platform for car owners, mechanics, and garages.
            </p>
          </div>

          <div className="flex flex-wrap gap-12 text-sm">
            <div>
              <p className="font-semibold text-chalk">Apps</p>
              <ul className="mt-3 space-y-2 text-steel">
                <li>
                  <a href="#download" className="transition hover:text-brand">
                    Car Owner app
                  </a>
                </li>
                <li>
                  <a href="#download" className="transition hover:text-brand">
                    Provider app
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-chalk">Learn</p>
              <ul className="mt-3 space-y-2 text-steel">
                <li>
                  <a href="#how-it-works" className="transition hover:text-brand">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="#showcase" className="transition hover:text-brand">
                    Features
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-chalk">Support</p>
              <ul className="mt-3 space-y-2 text-steel">
                <li>
                  <a href="#download" className="transition hover:text-brand">
                    Download
                  </a>
                </li>
                <li>
                  <a href="#" className="transition hover:text-brand">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-steel sm:flex-row">
          <p>
            © {new Date().getFullYear()} Digital Garage. Roadside help,
            dispatched in minutes.
          </p>
          <div className="flex gap-6">
            <a href="#" className="transition hover:text-brand">
              Privacy
            </a>
            <a href="#" className="transition hover:text-brand">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
