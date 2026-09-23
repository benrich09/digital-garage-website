import { useLang } from '../i18n/LanguageContext'

const PLAY_STORE = 'https://play.google.com/store/apps/details?id=com.smartgarage.app'
const APP_STORE = 'https://apps.apple.com/app/smart-garage'
const PLAY_STORE_PROVIDER = 'https://play.google.com/store/apps/details?id=com.smartgarage.provider'
const APP_STORE_PROVIDER = 'https://apps.apple.com/app/smart-garage-provider'

export function StoreButtons({
  light = false,
  provider = false,
}: {
  light?: boolean
  provider?: boolean
}) {
  const { t } = useLang()
  const play = provider ? PLAY_STORE_PROVIDER : PLAY_STORE
  const app = provider ? APP_STORE_PROVIDER : APP_STORE
  const base = light
    ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg'
    : 'bg-slate-900 text-white hover:bg-slate-800'

  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      <a href={play} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-3 rounded-xl px-5 py-3.5 transition ${base}`}>
        <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.18 23.76c.12.06.26.09.4.09.16 0 .32-.05.46-.14l11.3-6.53-2.68-2.68-9.48 9.26zM1.5 2.7v18.6c0 .2.06.39.17.55l9.7-9.45L1.67 2.15A1 1 0 001.5 2.7zm19.6 8.7l-2.9-1.67-3.1 3.02 3.1 3.02 2.9-1.67c.7-.4.7-1.4 0-1.7zM4.04.29A1 1 0 003.18.34l9.48 9.26 2.68-2.68L4.04.29z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] leading-none opacity-80">{t.stores.getItOn}</p>
          <p className="text-base font-semibold leading-tight">{t.stores.googlePlay}</p>
        </div>
      </a>
      <a href={app} target="_blank" rel="noreferrer" className={`inline-flex items-center gap-3 rounded-xl px-5 py-3.5 transition ${base}`}>
        <svg className="h-8 w-8 shrink-0" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.22-1.98 1.08-3.13-1.05.05-2.31.7-3.07 1.58-.67.76-1.26 1.98-1.1 3.15 1.16.09 2.36-.63 3.09-1.6z" />
        </svg>
        <div className="text-left">
          <p className="text-[10px] leading-none opacity-80">{t.stores.downloadOn}</p>
          <p className="text-base font-semibold leading-tight">{t.stores.appStore}</p>
        </div>
      </a>
    </div>
  )
}
