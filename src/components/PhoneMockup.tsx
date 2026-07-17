interface PhoneMockupProps {
  variant: "carOwner" | "provider";
}

/**
 * A hand-built phone frame recreating each app's actual home screen
 * (gradient status card, quick-action circles, bottom nav) — not a
 * generic placeholder screenshot, since we don't have real device
 * captures yet. Swap the inner content for a real <img> once
 * screenshots exist; the frame/bezel can stay as-is.
 */
export function PhoneMockup({ variant }: PhoneMockupProps) {
  const isCarOwner = variant === "carOwner";

  return (
    <div className="relative mx-auto w-[260px] select-none">
      {/* Bezel */}
      <div className="relative rounded-[2.5rem] border-[10px] border-asphalt-light bg-asphalt-light shadow-2xl shadow-black/50">
        <div className="absolute left-1/2 top-0 z-10 h-5 w-28 -translate-x-1/2 rounded-b-2xl bg-asphalt-light" />
        <div className="overflow-hidden rounded-[1.75rem] bg-white">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[10px] font-medium text-asphalt">
            <span>9:41</span>
            <div className="flex gap-1">
              <div className="h-2 w-3 rounded-sm bg-asphalt/70" />
              <div className="h-2 w-2 rounded-full bg-asphalt/70" />
            </div>
          </div>

          {/* Greeting */}
          <div className="flex items-center justify-between px-5 py-2">
            <span className="font-display text-sm font-medium text-asphalt">
              Hi, {isCarOwner ? "Car" : "Garage"} 👋
            </span>
            <div className="h-5 w-5 rounded-full border border-asphalt/20" />
          </div>

          {/* Gradient status card */}
          <div className="mx-4 rounded-2xl bg-gradient-to-br from-brand to-brand-dark p-4 shadow-lg shadow-brand/30">
            <p className="text-[10px] text-white/80">
              {isCarOwner ? "Welcome back" : "This month's earnings"}
            </p>
            <p className="mt-1 font-display text-lg font-bold text-white">
              {isCarOwner ? "All set for today" : "312,000 TZS"}
            </p>
            <p className="mt-1 text-[9px] text-white/70">
              {isCarOwner ? "Need help? Use the actions below." : "6 jobs completed"}
            </p>
          </div>

          {/* Quick actions */}
          <div className="mt-4 grid grid-cols-4 gap-2 px-4">
            {(isCarOwner
              ? ["Garage", "Mechanic", "Nearby", "Support"]
              : ["Bookings", "Requests", "Profile", "Stats"]
            ).map((label) => (
              <div key={label} className="flex flex-col items-center gap-1">
                <div className="h-9 w-9 rounded-full bg-brand" />
                <span className="text-center text-[7px] font-medium leading-tight text-asphalt/70">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* Recent activity */}
          <div className="mt-4 space-y-2 px-4 pb-6">
            <p className="text-[9px] font-semibold text-asphalt/60">Recent activity</p>
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-2 rounded-lg bg-stone-50 p-2">
                <div className="h-6 w-6 shrink-0 rounded-full bg-brand/15" />
                <div className="h-1.5 w-full rounded-full bg-stone-200" />
              </div>
            ))}
          </div>

          {/* Bottom nav */}
          <div className="flex items-center justify-around border-t border-stone-100 py-2.5">
            {(isCarOwner ? 3 : 4) === 3
              ? ["Home", "History", "Profile"].map((label, i) => (
                  <div key={label} className="flex flex-col items-center gap-0.5">
                    <div className={`h-3 w-3 rounded-sm ${i === 0 ? "bg-brand" : "bg-asphalt/20"}`} />
                    <span className={`text-[6px] font-medium ${i === 0 ? "text-brand" : "text-asphalt/40"}`}>
                      {label}
                    </span>
                  </div>
                ))
              : ["Home", "History", "Stats", "Profile"].map((label, i) => (
                  <div key={label} className="flex flex-col items-center gap-0.5">
                    <div className={`h-3 w-3 rounded-sm ${i === 0 ? "bg-brand" : "bg-asphalt/20"}`} />
                    <span className={`text-[6px] font-medium ${i === 0 ? "text-brand" : "text-asphalt/40"}`}>
                      {label}
                    </span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
