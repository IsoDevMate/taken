import { useEffect } from 'react'
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

  useEffect(() => {
    window.scrollTo(0, 0)
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
