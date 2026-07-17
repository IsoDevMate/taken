import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RootLayout } from '@/components/layout/RootLayout'
import { HomePage } from '@/pages/HomePage'
import { GalleryPage } from '@/pages/GalleryPage'
import { StudioPage } from '@/pages/StudioPage'
import { HowItWorksPage } from '@/pages/HowItWorksPage'
import { MaterialsPage } from '@/pages/MaterialsPage'
import { PricingPage } from '@/pages/PricingPage'
import { AccountPage } from '@/pages/AccountPage'
import { ContactPage } from '@/pages/ContactPage'

function App() {
  return (
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
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
