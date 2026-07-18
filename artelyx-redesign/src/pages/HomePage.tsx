import { BeforeAfter } from '@/components/sections/BeforeAfter'
import { ProcessTeaser } from '@/components/sections/ProcessTeaser'
import { NetflixShowcase } from '@/components/sections/NetflixShowcase'
import { Showcase } from '@/components/sections/Showcase'
import { CTA } from '@/components/sections/CTA'

export function HomePage() {
  return (
    <>
      <NetflixShowcase />
      <BeforeAfter />
      <ProcessTeaser />
      <Showcase />
      <CTA />
    </>
  )
}
