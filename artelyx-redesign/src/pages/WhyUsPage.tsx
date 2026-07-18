import { TeamTrust } from '@/components/sections/TeamTrust'
import { Testimonials } from '@/components/sections/Testimonials'
import { PageBanner } from '@/components/layout/PageBanner'
import { CTA } from '@/components/sections/CTA'

export function WhyUsPage() {
  return (
    <>
      <PageBanner
        title="Why choose "
        accent="Artelyx?"
        subtitle="Real people, real craft — caring for your memories like they're our own."
      />
      <TeamTrust />
      <Testimonials />
      <CTA />
    </>
  )
}
