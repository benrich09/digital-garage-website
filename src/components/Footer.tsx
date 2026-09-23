import { useLang } from '../i18n/LanguageContext'
import { StoreButtons } from './StoreButtons'
import type { SetPage } from '../types'

const WHATSAPP = 'https://wa.me/255746795020'
const PHONE_DISPLAY = '+255 746 795 020'
const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.smartgarage.app'
const APP_STORE = 'https://apps.apple.com/app/smart-garage'
const PLAY_STORE_PROVIDER = 'https://play.google.com/store/apps/details?id=com.smartgarage.provider'
const APP_STORE_PROVIDER = 'https://apps.apple.com/app/smart-garage-provider'

export function Footer({ setPage }: { setPage: SetPage }) {
  const { t } = useLang()

  return (
    <>
      <section className="bg-green-600 py-12 text-white">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <img src="/logo.png" alt="" className="mx-auto mb-4 h-14 w-14 object-contain brightness-0 invert" />
          <h2 className="font-display text-xl font-bold sm:text-2xl">{t.home.getToday}</h2>
          <p className="mt-2 text-sm text-green-100">{t.home.getTodaySub}</p>
          <div className="mt-6 flex justify-center">
            <StoreButtons light />
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 bg-slate-900 text-slate-400">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <img src="/logo.png" alt="Smart Garage" className="h-12 w-12 object-contain" />
                <div>
                  <span className="block font-display font-semibold text-white">Smart Garage</span>
                  <span className="text-xs">{t.brandTag}</span>
                </div>
              </div>
              <p className="mt-4 max-w-xs text-sm leading-relaxed">{t.footer.tagline}</p>
              <p className="mt-2 text-sm">
                <a href={WHATSAPP} className="hover:text-white">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
            <div className="flex flex-wrap gap-12 text-sm">
              <div>
                <p className="font-semibold text-white">{t.footer.pages}</p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <button onClick={() => setPage('how')} className="hover:text-white">
                      {t.nav.how}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setPage('owners')} className="hover:text-white">
                      {t.nav.owners}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setPage('providers')} className="hover:text-white">
                      {t.nav.providers}
                    </button>
                  </li>
                  <li>
                    <button onClick={() => setPage('download')} className="hover:text-white">
                      {t.nav.getApp}
                    </button>
                  </li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-white">{t.footer.apps}</p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <a href={PLAY_STORE} target="_blank" rel="noreferrer" className="hover:text-white">
                      {t.footer.ownerPlay}
                    </a>
                  </li>
                  <li>
                    <a href={PLAY_STORE_PROVIDER} target="_blank" rel="noreferrer" className="hover:text-white">
                      {t.footer.providerPlay}
                    </a>
                  </li>
                  <li>
                    <a href={APP_STORE} target="_blank" rel="noreferrer" className="hover:text-white">
                      {t.footer.ownerStore}
                    </a>
                  </li>
                  <li>
                    <a href={APP_STORE_PROVIDER} target="_blank" rel="noreferrer" className="hover:text-white">
                      {t.footer.providerStore}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm sm:text-left">
            © {new Date().getFullYear()} Smart Garage. {t.footer.rights}
          </div>
        </div>
      </footer>
    </>
  )
}
