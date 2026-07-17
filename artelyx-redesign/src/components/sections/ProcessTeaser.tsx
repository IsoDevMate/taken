import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { processSteps } from '@/lib/images'
import { images } from '@/lib/images'

export function ProcessTeaser() {
  return (
    <section className="relative overflow-hidden bg-graphite section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <SectionLabel>How It Works</SectionLabel>
            <h2 className="mt-6 font-display text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
              Four steps to your{' '}
              <span className="italic text-accent-light">perfect print.</span>
            </h2>
            <p className="mt-8 max-w-md leading-relaxed text-cream/45">
              Upload, refine, preview, and order — each step designed to give
              you complete confidence before production begins.
            </p>
            <Link
              to="/how-it-works"
              className="group mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.25em] text-accent-light transition-colors hover:text-cream"
            >
              See Full Process
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="space-y-0">
            {processSteps.map((step, i) => (
              <Reveal key={step.step} index={i} className="group border-t border-white/5 py-8 first:border-t-0 lg:py-10">
                <div className="flex items-start gap-6">
                  <span className="font-mono text-[11px] text-accent/50">
                    {step.step}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-cream transition-colors group-hover:text-accent-light">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-cream/35">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-20 overflow-hidden">
          <img
            src={images.galleryWall}
            alt="Gallery wall installation"
            className="h-[40vh] w-full object-cover opacity-60 lg:h-[50vh]"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  )
}
