import { useLang } from '../i18n/LanguageContext'
import { providerTypes } from '../data/services'
import { PageHero } from '../components/PageHero'
import { StoreButtons } from '../components/StoreButtons'
import type { SetPage } from '../types'

export function Providers({ setPage }: { setPage: SetPage }) {
  const { lang, t } = useLang()

  return (
    <div>
      <PageHero eyebrow={t.providers.eyebrow} title={t.providers.title}>
        <p className="mt-4 max-w-lg text-slate-200">{t.providers.sub}</p>
      </PageHero>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-2xl font-bold text-slate-900">{t.providers.whoTitle}</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {providerTypes.map((p) => (
              <div
                key={p.id}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={lang === 'sw' ? p.titleSw : p.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display font-bold text-slate-900">
                    {lang === 'sw' ? p.titleSw : p.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{lang === 'sw' ? p.descSw : p.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl bg-slate-900 p-8 text-center text-white">
            <h3 className="font-display text-xl font-bold">{t.providers.downloadTitle}</h3>
            <p className="mt-2 text-sm text-slate-300">{t.providers.downloadSub}</p>
            <div className="mt-6 flex justify-center">
              <StoreButtons light provider />
            </div>
            <button
              onClick={() => setPage('register-provider')}
              className="mt-6 text-sm font-semibold text-green-300 hover:underline"
            >
              {t.providers.orRegister}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
