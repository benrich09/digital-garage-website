import { useLang } from '../i18n/LanguageContext'
import { ownerFeatures } from '../data/services'
import { PageHero } from '../components/PageHero'
import { StoreButtons } from '../components/StoreButtons'
import type { SetPage } from '../types'

export function Owners({ setPage }: { setPage: SetPage }) {
  const { lang, t } = useLang()

  return (
    <div>
      <PageHero eyebrow={t.owners.eyebrow} title={t.owners.title}>
        <p className="mt-4 max-w-lg text-slate-200">{t.owners.sub}</p>
      </PageHero>
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ownerFeatures.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="font-display font-bold text-slate-900">
                  {lang === 'sw' ? f.titleSw : f.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{lang === 'sw' ? f.descSw : f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 rounded-2xl border border-green-100 bg-green-50 p-8 text-center">
            <h3 className="font-display text-xl font-bold text-slate-900">{t.owners.downloadTitle}</h3>
            <p className="mt-2 text-sm text-slate-600">{t.owners.downloadSub}</p>
            <div className="mt-6 flex justify-center">
              <StoreButtons />
            </div>
            <button
              onClick={() => setPage('register-owner')}
              className="mt-6 text-sm font-semibold text-green-700 hover:underline"
            >
              {t.owners.orRegister}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
