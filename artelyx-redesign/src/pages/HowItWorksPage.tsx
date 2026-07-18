import { ProcessWalkthrough } from '@/components/sections/ProcessWalkthrough'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PageBanner } from '@/components/layout/PageBanner'

export function HowItWorksPage() {
  return (
    <>
      <PageBanner
        title="From photo to "
        accent="masterpiece."
        subtitle="Four deliberate steps. Each one designed to give you complete confidence before your print enters production."
      />
      <ProcessWalkthrough />
      <div className="section-padding bg-warm">
        <Reveal className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="font-display text-3xl text-cream md:text-4xl">
            Ready to begin?
          </p>
          <Button variant="primary" size="lg" className="mt-10" asChild>
            <Link to="/studio">
              Open Studio
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </Reveal>
      </div>
    </>
  )
}
