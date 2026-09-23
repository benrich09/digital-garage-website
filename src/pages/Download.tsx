import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { PageHero } from '../components/PageHero'
import { StoreButtons } from '../components/StoreButtons'

export function Download() {
  const { t } = useLang()
  const [role, setRole] = useState<'customer' | 'provider' | null>(null)

  return (
    <PageHero eyebrow={t.download.eyebrow} title={t.download.title}>
      {!role ? (
        <div className="mt-10 grid max-w-2xl gap-4 sm:grid-cols-2">
          <button
            onClick={() => setRole('customer')}
            className="rounded-2xl border border-white/30 bg-white/10 p-6 text-left backdrop-blur transition hover:bg-white/20"
          >
            <span className="text-3xl">🚗</span>
            <h3 className="mt-3 text-xl font-bold text-white">{t.download.customer}</h3>
            <p className="mt-2 text-sm text-slate-200">{t.download.customerDesc}</p>
          </button>
          <button
            onClick={() => setRole('provider')}
            className="rounded-2xl border border-white/30 bg-white/10 p-6 text-left backdrop-blur transition hover:bg-white/20"
          >
            <span className="text-3xl">🔧</span>
            <h3 className="mt-3 text-xl font-bold text-white">{t.download.provider}</h3>
            <p className="mt-2 text-sm text-slate-200">{t.download.providerDesc}</p>
          </button>
        </div>
      ) : (
        <div className="mt-10 max-w-lg">
          <button onClick={() => setRole(null)} className="mb-4 text-sm font-medium text-green-200 hover:text-white">
            ← {t.download.back}
          </button>
          <h2 className="text-2xl font-bold text-white">
            {role === 'customer' ? t.download.customerApp : t.download.providerApp}
          </h2>
          <p className="mt-2 text-slate-200">
            {role === 'customer' ? t.download.customerHint : t.download.providerHint}
          </p>
          <div className="mt-8">
            <StoreButtons light provider={role === 'provider'} />
          </div>
        </div>
      )}
    </PageHero>
  )
}
