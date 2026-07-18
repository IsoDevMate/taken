import { useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { DesignAssistant } from '@/components/DesignAssistant'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'
import { SpotlightCursor } from '@/components/effects/SpotlightCursor'
import { useIsMobile } from '@/hooks/useMediaQuery'

export function RootLayout() {
  const location = useLocation()
  const isMobile = useIsMobile()
  const showSpotlight = location.pathname === '/' && !isMobile

  // useLayoutEffect fires synchronously after DOM mutations but before paint,
  // so scroll is reset before Reveal/whileInView components measure their position.
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
  }, [location.pathname])

  return (
    <>
      {showSpotlight && <SpotlightCursor />}
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {!isMobile && <DesignAssistant />}
      <WhatsAppButton />
    </>
  )
}
