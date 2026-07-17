import { useEffect, useState } from "react";
import { AndroidIcon, AppleIcon, ShareIcon, PlusSquareIcon } from "./icons";

type Platform = "android" | "ios" | "other";

function detectPlatform(): Platform {
  const ua = navigator.userAgent;
  if (/android/i.test(ua)) return "android";
  if (/iphone|ipad|ipod/i.test(ua)) return "ios";
  return "other";
}

interface AppLinkCardProps {
  name: string;
  tagline: string;
  apkHref: string;
}

function AppLinkCard({ name, tagline, apkHref }: AppLinkCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-asphalt-light p-6">
      <p className="font-display text-lg font-bold">{name}</p>
      <p className="mt-1 text-sm text-steel">{tagline}</p>
      <a
        href={apkHref}
        download
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-white transition hover:bg-brand-dark"
      >
        <AndroidIcon className="h-4 w-4" />
        Download APK
      </a>
      <p className="mt-2 font-mono text-[11px] text-steel/70">
        Android 8.0+ · Allow "install from unknown sources" on first install
      </p>
    </div>
  );
}

export function DownloadSection() {
  const [platform, setPlatform] = useState<Platform>("other");

  useEffect(() => {
    setPlatform(detectPlatform());
  }, []);

  return (
    <section id="download" className="relative border-t border-white/10 bg-asphalt-light/30 py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-hazard">Get on the road</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">Install both apps</h2>
          <p className="mx-auto mt-4 max-w-lg text-steel">
            Car owners and garages each get their own app. Android installs the APK
            directly; iPhone adds this page to your Home Screen as a shortcut to
            get here fast next time.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <AppLinkCard
            name="Digital Garage — Car Owner"
            tagline="Book a garage, request a mechanic, track them in real time."
            apkHref="/downloads/digital-garage-car-owner.apk"
          />
          <AppLinkCard
            name="Digital Garage — Provider"
            tagline="For garage owners and mechanics: manage requests and jobs."
            apkHref="/downloads/digital-garage-provider.apk"
          />
        </div>

        <div className="mt-14 grid gap-6 rounded-2xl border border-white/10 bg-asphalt p-8 sm:grid-cols-2">
          <div className={platform === "android" ? "opacity-100" : "opacity-60"}>
            <div className="flex items-center gap-2 text-brand">
              <AndroidIcon className="h-5 w-5" />
              <p className="font-medium text-chalk">On Android</p>
              {platform === "android" && (
                <span className="rounded-full bg-brand/15 px-2 py-0.5 font-mono text-[10px] text-brand">
                  Your device
                </span>
              )}
            </div>
            <ol className="mt-3 space-y-1.5 text-sm text-steel">
              <li>1. Tap "Download APK" above for your app</li>
              <li>2. Open the downloaded file from your notifications</li>
              <li>3. Allow install from this source if prompted</li>
              <li>4. Tap Install</li>
            </ol>
          </div>

          <div className={platform === "ios" ? "opacity-100" : "opacity-60"}>
            <div className="flex items-center gap-2 text-brand">
              <AppleIcon className="h-5 w-5" />
              <p className="font-medium text-chalk">On iPhone</p>
              {platform === "ios" && (
                <span className="rounded-full bg-brand/15 px-2 py-0.5 font-mono text-[10px] text-brand">
                  Your device
                </span>
              )}
            </div>
            <ol className="mt-3 space-y-1.5 text-sm text-steel">
              <li className="flex items-center gap-1.5">
                1. Tap <ShareIcon className="h-3.5 w-3.5" /> Share in Safari
              </li>
              <li className="flex items-center gap-1.5">
                2. Choose <PlusSquareIcon className="h-3.5 w-3.5" /> Add to Home Screen
              </li>
              <li>3. Tap Add — this page now opens like an app</li>
            </ol>
            <p className="mt-2 text-xs text-steel/70">
              iOS doesn't support installing Android APKs directly — this adds a
              fast home-screen shortcut back to this page instead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
