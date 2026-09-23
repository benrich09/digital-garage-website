import type { ReactNode } from 'react'

export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string
  title: string
  children?: ReactNode
}) {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img src="/hero-bg.jpg" alt="" className="h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-900/70 to-slate-900/40" />
      </div>
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-300">{eyebrow}</p>
        )}
        <h1 className="mt-3 max-w-2xl font-display text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {children}
      </div>
    </section>
  )
}
