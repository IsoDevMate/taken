import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { DesignAssistant } from '@/components/DesignAssistant'
import { SpotlightCursor } from '@/components/effects/SpotlightCursor'

export function RootLayout() {
  const location = useLocation()
  const showSpotlight = location.pathname === '/'

  return (
    <>
      {showSpotlight && <SpotlightCursor />}
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <DesignAssistant />
    </>
  )
}
