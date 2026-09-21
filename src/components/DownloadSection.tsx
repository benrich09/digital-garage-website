import { AndroidIcon } from "./icons";

interface ApkVariant {
  label: string;
  filename: string;
  recommended?: boolean;
  note: string;
}

const variants: ApkVariant[] = [
  {
    label: "Recommended (arm64-v8a)",
    filename: "app-arm64-v8a-release.apk",
    recommended: true,
    note: "Covers almost every Android phone from the last ~6 years",
  },
  {
    label: "Older devices (armeabi-v7a)",
    filename: "app-armeabi-v7a-release.apk",
    note: "For older/budget Android phones",
  },
  {
    label: "x86_64",
    filename: "app-x86_64-release.apk",
    note: "Rare on real phones — mainly Android emulators",
  },
];

interface AppLinksProps {
  name: string;
  tagline: string;
  folder: "car-owner" | "provider";
  audience: string;
}

function AppLinks({ name, tagline, folder, audience }: AppLinksProps) {
  const recommended = variants.find((v) => v.recommended)!;
  const others = variants.filter((v) => !v.recommended);

  return (
    <div className="rounded-2xl border border-white/10 bg-asphalt-light p-6">
      <p className="font-mono text-[11px] uppercase tracking-wider text-hazard">
        {audience}
      </p>
      <p className="mt-1 font-display text-lg font-bold">{name}</p>
      <p className="mt-1 text-sm text-steel">{tagline}</p>

      <a
        href={`/downloads/${folder}/${recommended.filename}`}
        download
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
      >
        <AndroidIcon className="h-4 w-4" />
        Download APK
      </a>
      <p className="mt-2 font-mono text-[11px] text-steel/70">{recommended.note}</p>

      <details className="mt-4 group">
        <summary className="cursor-pointer text-xs font-medium text-brand hover:underline">
          Not the right device? Other download options
        </summary>
        <div className="mt-3 space-y-2 border-l border-white/10 pl-4">
          {others.map((v) => (
            <div key={v.filename}>
              <a
                href={`/downloads/${folder}/${v.filename}`}
                download
                className="text-sm font-medium text-chalk hover:text-brand"
              >
                {v.label}
              </a>
              <p className="text-xs text-steel/70">{v.note}</p>
            </div>
          ))}
        </div>
      </details>
    </div>
  );
}

export function DownloadSection() {
  return (
    <section id="download" className="relative border-t border-white/10 bg-asphalt-light/30 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-hazard">
            Get on the road
          </p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">
            Install the right app
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-steel">
            Car owners and service providers each get a dedicated app. Available
            for Android — download the APK directly, no Play Store required.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <AppLinks
            name="Digital Garage — Car Owner"
            tagline="Request a mechanic, book a garage, track live, manage vehicles, and keep history & receipts."
            folder="car-owner"
            audience="Car owners"
          />
          <AppLinks
            name="Digital Garage — Provider"
            tagline="Receive live requests, manage active jobs, track commissions, and grow your garage profile."
            folder="provider"
            audience="Garages & mechanics"
          />
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-asphalt p-8">
            <div className="flex items-center gap-2 text-brand">
              <AndroidIcon className="h-5 w-5" />
              <p className="font-medium text-chalk">How to install</p>
            </div>
            <ol className="mt-3 space-y-1.5 text-sm text-steel">
              <li>1. Tap &quot;Download APK&quot; for the app you need</li>
              <li>2. Open the file from your notifications or Downloads</li>
              <li>3. Allow install from this source if Android asks</li>
              <li>4. Tap Install and open the app</li>
            </ol>
          </div>

          <div className="rounded-2xl border border-white/10 bg-asphalt p-8">
            <p className="font-medium text-chalk">Which app do I need?</p>
            <ul className="mt-3 space-y-2 text-sm text-steel">
              <li>
                <span className="font-medium text-chalk">Car Owner</span> — if
                you drive and need roadside help or garage bookings.
              </li>
              <li>
                <span className="font-medium text-chalk">Provider</span> — if you
                run a garage or work as a mechanic and want to receive jobs.
              </li>
            </ul>
            <p className="mt-4 text-xs text-steel/80">
              Both apps talk to the same platform. Accounts and roles stay
              separate so each side gets a focused experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
