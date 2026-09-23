import { useState, type FormEvent } from 'react'
import { useLang } from '../i18n/LanguageContext'
import { PageHero } from '../components/PageHero'
import { StoreButtons } from '../components/StoreButtons'

export function Register({ role }: { role: 'owner' | 'provider' }) {
  const { t } = useLang()
  const [done, setDone] = useState(false)
  const isOwner = role === 'owner'

  if (done) {
    return (
      <PageHero eyebrow={t.register.doneTitle} title={t.register.doneTitle}>
        <div className="mt-6 max-w-md">
          <img src="/logo.png" alt="Smart Garage" className="h-16 w-16 object-contain" />
          <p className="mt-4 text-slate-200">{t.register.doneBody}</p>
          <div className="mt-8">
            <StoreButtons light provider={!isOwner} />
          </div>
        </div>
      </PageHero>
    )
  }

  return (
    <div>
      <PageHero
        eyebrow={isOwner ? t.nav.registerOwner : t.nav.registerProvider}
        title={isOwner ? t.register.ownerTitle : t.register.providerTitle}
      >
        <p className="mt-3 text-slate-200">{isOwner ? t.register.ownerSub : t.register.providerSub}</p>
      </PageHero>
      <div className="mx-auto max-w-md px-4 py-14 sm:px-6 sm:py-16">
        <div className="mb-6 text-center">
          <img src="/logo.png" alt="Smart Garage" className="mx-auto h-16 w-16 object-contain" />
        </div>
        <form
          className="space-y-3.5"
          onSubmit={(e: FormEvent) => {
            e.preventDefault()
            setDone(true)
          }}
        >
          <input required type="text" placeholder={t.register.fullName} className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500" />
          <input required type="email" placeholder={t.register.email} className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500" />
          <input required type="tel" placeholder={t.register.phone} className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500" />
          <input required type="password" placeholder={t.register.password} className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500" />
          {!isOwner && (
            <>
              <input type="text" placeholder={t.register.businessName} className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500" />
              <select className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:ring-2 focus:ring-green-500">
                <option value="">{t.register.serviceType}</option>
                <option>Garage / mechanics</option>
                <option>Breakdown / roadside</option>
                <option>Change tyre</option>
                <option>Wheel alignment and balance</option>
                <option>Car wash</option>
                <option>Spare parts shop</option>
              </select>
            </>
          )}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-xs font-semibold text-slate-700">{t.register.idDoc}</p>
            <p className="mt-1 text-[11px] text-slate-500">{t.register.idDocHint}</p>
            <input required type="file" accept="image/*,.pdf" className="mt-3 w-full text-xs text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-green-600 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white" />
          </div>
          {!isOwner && (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold text-slate-700">{t.register.tradeDoc}</p>
              <p className="mt-1 text-[11px] text-slate-500">{t.register.tradeHint}</p>
              <input type="file" accept="image/*,.pdf" className="mt-3 w-full text-xs text-slate-600 file:mr-3 file:rounded-lg file:border-0 file:bg-slate-700 file:px-3 file:py-2 file:text-xs file:font-semibold file:text-white" />
            </div>
          )}
          <label className="flex items-start gap-2 text-xs text-slate-600">
            <input required type="checkbox" className="mt-0.5 rounded border-slate-300 text-green-600" />
            <span>{t.register.agree}</span>
          </label>
          <button type="submit" className="w-full rounded-xl bg-green-600 py-3.5 text-sm font-semibold text-white hover:bg-green-700">
            {isOwner ? t.register.submitOwner : t.register.submitProvider}
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-slate-500">{t.register.afterNote}</p>
      </div>
    </div>
  )
}
