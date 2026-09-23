import { useLang } from '../i18n/LanguageContext'
import { PageHero } from '../components/PageHero'
import type { SetPage } from '../types'

export function HowItWorks({ setPage }: { setPage: SetPage }) {
  const { t } = useLang()

  return (
    <div>
      <PageHero eyebrow={t.how.eyebrow} title={t.how.title}>
        <p className="mt-4 max-w-lg text-slate-200">{t.how.sub}</p>
      </PageHero>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 font-display text-xl font-bold text-green-800">{t.how.forOwners}</h2>
            <div className="space-y-4">
              {t.how.ownerSteps.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-sm font-bold text-green-600">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-1 font-display font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setPage('register-owner')}
              className="mt-6 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white hover:bg-green-700"
            >
              {t.nav.registerOwner}
            </button>
          </div>
          <div>
            <h2 className="mb-6 font-display text-xl font-bold text-slate-800">{t.how.forProviders}</h2>
            <div className="space-y-4">
              {t.how.providerSteps.map((s, i) => (
                <div key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <span className="text-sm font-bold text-green-600">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-1 font-display font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                </div>
              ))}
            </div>
            <button
              onClick={() => setPage('register-provider')}
              className="mt-6 rounded-full border-2 border-green-600 px-6 py-3 text-sm font-semibold text-green-700 hover:bg-green-50"
            >
              {t.nav.registerProvider}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
