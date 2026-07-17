import { WrenchIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-steel sm:flex-row">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-brand">
            <WrenchIcon className="h-4 w-4 text-white" />
          </div>
          <span className="font-display font-semibold text-chalk">Digital Garage</span>
        </div>
        <p>© {new Date().getFullYear()} Digital Garage. Roadside help, dispatched in minutes.</p>
      </div>
    </footer>
  );
}
