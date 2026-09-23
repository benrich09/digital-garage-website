import { useState } from 'react'
import { useLang } from '../i18n/LanguageContext'
import type { Page, SetPage } from '../types'

export function Navbar({
  page,
  setPage,
  overHero,
}: {
  page: Page
  setPage: SetPage
  overHero: boolean
}) {
  const { lang, setLang, t } = useLang()
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const solid = !overHero

  const go = (id: Page) => {
    setPage(id)
    setOpen(false)
    setLangOpen(false)
  }

  const link = (id: Page, label: string) => (
    <button
      onClick={() => go(id)}
      className={`block w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition md:inline-block md:w-auto md:px-3 md:py-2 ${
        page === id
          ? solid
            ? 'bg-green-50 text-green-700'
            : 'bg-white/20 text-white'
          : solid
            ? 'text-slate-700 hover:bg-slate-100'
            : 'text-white/90 hover:bg-white/15'
      }`}
    >
      {label}
    </button>
  )

  const LangSwitch = ({ mobile = false }: { mobile?: boolean }) => {
    const currentFlag = lang === 'sw' ? '🇹🇿' : '🇬🇧'
    const currentLabel = lang === 'sw' ? 'SW' : 'EN'
    return (
      <div className={`relative ${mobile ? 'px-4 py-2' : ''}`}>
        <button
          type="button"
          onClick={() => setLangOpen(!langOpen)}
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-xs font-semibold transition ${
            solid ? 'text-slate-700 hover:bg-slate-100' : 'text-white/90 hover:bg-white/15'
          }`}
          aria-label="Language"
          aria-expanded={langOpen}
        >
          <span className="text-base leading-none">{currentFlag}</span>
          <span>{currentLabel}</span>
          <svg className={`h-3.5 w-3.5 transition ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {langOpen && (
          <div
            className={`absolute z-50 mt-1.5 min-w-[9.5rem] overflow-hidden rounded-xl border border-slate-100 bg-white py-1 shadow-xl ${
              mobile ? 'left-4' : 'right-0'
            }`}
          >
            <button
              type="button"
              onClick={() => { setLang('en'); setLangOpen(false) }}
              className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition hover:bg-green-50 ${
                lang === 'en' ? 'bg-green-50 font-semibold text-green-800' : 'text-slate-700'
              }`}
            >
              <span className="text-base leading-none">🇬🇧</span>
              <span>English</span>
              {lang === 'en' && <span className="ml-auto text-green-600">✓</span>}
            </button>
            <button
              type="button"
              onClick={() => { setLang('sw'); setLangOpen(false) }}
              className={`flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition hover:bg-green-50 ${
                lang === 'sw' ? 'bg-green-50 font-semibold text-green-800' : 'text-slate-700'
              }`}
            >
              <span className="text-base leading-none">🇹🇿</span>
              <span>Kiswahili</span>
              {lang === 'sw' && <span className="ml-auto text-green-600">✓</span>}
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? 'border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
        <button onClick={() => go('home')} className="flex items-center gap-3">
          <img src="/logo.png" alt="Smart Garage" className="h-11 w-11 object-contain sm:h-12 sm:w-12" />
          <div className="text-left">
            <span className={`block font-display text-lg font-bold leading-none ${solid ? 'text-slate-900' : 'text-white'}`}>
              Smart Garage
            </span>
            <span className={`mt-0.5 block text-[11px] font-medium ${solid ? 'text-slate-500' : 'text-green-200'}`}>
              {t.brandTag}
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-0.5 md:flex">
          {link('home', t.nav.home)}
          {link('how', t.nav.how)}
          {link('owners', t.nav.owners)}
          {link('providers', t.nav.providers)}
          <LangSwitch />
          <button
            onClick={() => go('download')}
            className={`ml-1 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              solid
                ? 'bg-green-600 text-white hover:bg-green-700'
                : 'bg-white text-green-800 hover:bg-green-50'
            }`}
          >
            {t.nav.getApp}
          </button>
        </nav>

        <button
          className={`rounded-xl p-2.5 md:hidden ${solid ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/15'}`}
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M8 4 L4 8 L8 12" />
              <path d="M16 4 L20 8 L16 12" />
              <path d="M4 8 L20 16" />
              <path d="M20 8 L4 16" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div
            className={`flex flex-col border-t px-2 py-3 rounded-b-2xl backdrop-blur-xl ${
              solid ? 'border-slate-100 bg-white/95 shadow-lg' : 'border-white/20 bg-slate-900/85 shadow-xl'
            }`}
          >
            {link('home', t.nav.home)}
            {link('how', t.nav.how)}
            {link('owners', t.nav.owners)}
            {link('providers', t.nav.providers)}
            <LangSwitch mobile />
            <div className="mx-2 mt-2 space-y-2 border-t border-slate-200/30 pt-3">
              <button onClick={() => go('download')} className="w-full rounded-xl bg-green-600 py-3 text-sm font-semibold text-white">
                {t.nav.getApp}
              </button>
              <button onClick={() => go('register-owner')} className="w-full rounded-xl bg-green-50 py-3 text-sm font-semibold text-green-700">
                {t.nav.registerOwner}
              </button>
              <button onClick={() => go('register-provider')} className="w-full rounded-xl border border-green-200 py-3 text-sm font-semibold text-green-800">
                {t.nav.registerProvider}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
