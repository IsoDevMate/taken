import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { Showcase } from '@/components/sections/Showcase'
import { ProcessWalkthrough } from '@/components/sections/ProcessWalkthrough'
import { Gallery } from '@/components/sections/Gallery'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { About } from '@/components/sections/About'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'
import { DesignAssistant } from '@/components/DesignAssistant'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <ProcessWalkthrough />
        <Gallery />
        <BeforeAfter />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <DesignAssistant />
    </>
  )
}

export default App
