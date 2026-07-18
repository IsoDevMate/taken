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
    const preloadImages: string[] = []
    
    Promise.all(
      preloadImages.map(src => {
        const img = new Image()
        img.src = src
        return new Promise(resolve => {
          img.onload = resolve
          img.onerror = resolve
        })
      })
    ).then(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    })
  }, [])

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingAnimation onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <BrowserRouter>
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
      )}
    </>
  )
}

export default App
