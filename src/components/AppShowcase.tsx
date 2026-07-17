import type { ReactNode } from "react";
import { PhoneMockup } from "./PhoneMockup";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface AppShowcaseProps {
  eyebrow: string;
  title: string;
  description: string;
  features: Feature[];
  variant: "carOwner" | "provider";
  reversed?: boolean;
}

export function AppShowcase({
  eyebrow,
  title,
  description,
  features,
  variant,
  reversed = false,
}: AppShowcaseProps) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div
        className={`flex flex-col items-center gap-14 lg:flex-row ${
          reversed ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-hazard">{eyebrow}</p>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 max-w-md text-steel">{description}</p>

          <ul className="mt-8 space-y-5">
            {features.map((f) => (
              <li key={f.title} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  {f.icon}
                </div>
                <div>
                  <p className="font-medium text-chalk">{f.title}</p>
                  <p className="mt-0.5 text-sm text-steel">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex-1">
          <PhoneMockup variant={variant} />
        </div>
      </div>
    </section>
  );
}
