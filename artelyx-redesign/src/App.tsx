import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { GalleryPage } from '@/pages/GalleryPage'
import { StudioPage } from '@/pages/StudioPage'
import { HowItWorksPage } from '@/pages/HowItWorksPage'
import { MaterialsPage } from '@/pages/MaterialsPage'
import { PricingPage } from '@/pages/PricingPage'
import { AccountPage } from '@/pages/AccountPage'
import { ContactPage } from '@/pages/ContactPage'
import { WhyUsPage } from '@/pages/WhyUsPage'
import { LoadingAnimation } from '@/components/ui/LoadingAnimation'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    // BrowserRouter is ALWAYS mounted — never conditionally rendered.
    // Conditionally rendering it causes the entire router tree (and all
    // component state) to be destroyed and re-created, which breaks
    // navigation and leaves pages blank.
    <BrowserRouter>
      <AnimatePresence>
        {isLoading && (
          <LoadingAnimation onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Routes are always rendered; the loading overlay sits on top */}
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="studio" element={<StudioPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="materials" element={<MaterialsPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="account" element={<AccountPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="why-us" element={<WhyUsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
