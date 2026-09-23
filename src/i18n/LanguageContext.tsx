import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import { translations, type Lang, type TranslationTree } from './translations'

type Ctx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: TranslationTree
}

const LanguageContext = createContext<Ctx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const s = localStorage.getItem('smartgarage-lang')
      return s === 'sw' ? 'sw' : 'en'
    } catch {
      return 'en'
    }
  })

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try {
      localStorage.setItem('smartgarage-lang', l)
    } catch {
      /* ignore */
    }
  }, [])

  const t = translations[lang] as TranslationTree

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within LanguageProvider')
  return ctx
}
