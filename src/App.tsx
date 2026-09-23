import { useState, useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { HowItWorks } from './pages/HowItWorks'
import { Owners } from './pages/Owners'
import { Providers } from './pages/Providers'
import { Download } from './pages/Download'
import { Register } from './pages/Register'
import type { Page } from './types'

function Shell() {
  const [page, setPage] = useState<Page>('home')
  const [scrolled, setScrolled] = useState(false)

  const heroPages: Page[] = [
    'home',
    'how',
    'owners',
    'providers',
    'download',
    'register-owner',
    'register-provider',
  ]
  const overHero = heroPages.includes(page) && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    setScrolled(false)
  }, [page])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <Navbar page={page} setPage={setPage} overHero={overHero} />
      <main>
        {page === 'home' && <Home setPage={setPage} />}
        {page === 'how' && <HowItWorks setPage={setPage} />}
        {page === 'owners' && <Owners setPage={setPage} />}
        {page === 'providers' && <Providers setPage={setPage} />}
        {page === 'download' && <Download />}
        {page === 'register-owner' && <Register role="owner" />}
        {page === 'register-provider' && <Register role="provider" />}
      </main>
      <Footer setPage={setPage} />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <Shell />
    </LanguageProvider>
  )
}
