import { Hero } from '@/components/sections/Hero'
import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { WhyMetallic } from '@/components/sections/WhyMetallic'
import { ProcessTeaser } from '@/components/sections/ProcessTeaser'
import { Showcase } from '@/components/sections/Showcase'
import { TeamTrust } from '@/components/sections/TeamTrust'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'

export function HomePage() {
  return (
    <>
      <Hero />
      <BeforeAfter />
      <WhyMetallic />
      <ProcessTeaser />
      <Showcase />
      <TeamTrust />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
