import { Hero } from '@/components/sections/Hero'
import { Showcase } from '@/components/sections/Showcase'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { ProcessTeaser } from '@/components/sections/ProcessTeaser'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <Showcase />
      <BeforeAfter />
      <ProcessTeaser />
      <Testimonials />
      <CTA />
    </>
  )
}
