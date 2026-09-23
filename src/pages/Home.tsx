import { useLang } from '../i18n/LanguageContext'
import { providerTypes } from '../data/services'
import { StoreButtons } from '../components/StoreButtons'
import type { SetPage } from '../types'

export function Home({ setPage }: { setPage: SetPage }) {
  const { lang, t } = useLang()

  const stats = [
    { value: '2 apps', label: t.home.stats.apps },
    { value: '6+', label: t.home.stats.services },
    { value: 'Live', label: t.home.stats.live },
    { value: 'Direct', label: t.home.stats.pay },
  ]

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
              <span className="text-xs font-semibold uppercase tracking-wider text-green-200">{t.home.badge}</span>
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.home.headline1}
              <br />
              <span className="text-green-400">{t.home.headline2}</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">{t.home.sub}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => setPage('download')}
                className="rounded-full bg-green-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-500/30 transition hover:bg-green-400 hover:scale-[1.02]"
              >
                {t.home.download}
              </button>
              <button
                onClick={() => setPage('how')}
                className="rounded-full border-2 border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                {t.home.howCta}
              </button>
            </div>
            <div className="mt-10">
              <StoreButtons light />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-4 py-10 sm:grid-cols-4 sm:gap-6 sm:px-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center transition hover:-translate-y-1 hover:border-green-200 hover:shadow-md"
            >
              <p className="font-display text-2xl font-bold text-green-600 sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-xs text-slate-500 sm:text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-10 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-green-600">{t.home.servicesEyebrow}</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-slate-900">{t.home.servicesTitle}</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {providerTypes.map((p) => (
              <div
                key={p.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={lang === 'sw' ? p.titleSw : p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    {lang === 'sw' ? p.titleSw : p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{lang === 'sw' ? p.descSw : p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <button
              onClick={() => setPage('owners')}
              className="group relative overflow-hidden rounded-2xl text-left shadow-lg"
            >
              <img
                src="/section-owners.jpg"
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-300">{t.home.forOwners}</p>
                <h3 className="mt-1 font-display text-2xl font-bold">{t.home.forOwnersTitle}</h3>
              </div>
            </button>
            <button
              onClick={() => setPage('providers')}
              className="group relative overflow-hidden rounded-2xl text-left shadow-lg"
            >
              <img
                src="/bg-workshop.jpg"
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
              <div className="absolute bottom-0 p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-wider text-green-300">{t.home.forProviders}</p>
                <h3 className="mt-1 font-display text-2xl font-bold">{t.home.forProvidersTitle}</h3>
              </div>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
