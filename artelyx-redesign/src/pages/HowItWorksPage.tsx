import { ProcessWalkthrough } from '@/components/sections/ProcessWalkthrough'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export function HowItWorksPage() {
  return (
    <>
      <div className="bg-ink pt-28">
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-20 lg:px-10 lg:pt-32">
          <Reveal>
            <SectionLabel>Process</SectionLabel>
            <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-cream md:text-6xl lg:text-7xl">
              From photo to{' '}
              <span className="italic text-accent-light">masterpiece.</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/45">
              Four deliberate steps. Each one designed to give you complete
              confidence before your print enters production.
            </p>
          </Reveal>
        </div>
      </div>
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
