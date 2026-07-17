import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { processSteps } from '@/lib/images'
import { images } from '@/lib/images'

export function ProcessTeaser() {
  return (
    <section id="process" className="relative overflow-hidden bg-warm py-20 md:section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionLabel>The Restoration Process</SectionLabel>
          <h2 className="mt-6 font-display text-3xl leading-tight text-cream md:text-4xl lg:text-5xl">
            From faded photograph to{' '}
            <span className="italic text-accent-light">heirloom art.</span>
          </h2>
        </Reveal>

        <div className="relative mt-12 md:mt-16">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-white/10 md:left-8 md:block" />

          <div className="space-y-8 md:space-y-0">
            {processSteps.map((step, i) => (
              <Reveal
                key={step.step}
                index={i}
                className="relative flex gap-6 md:gap-10 md:py-10"
              >
                <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center border border-accent/40 bg-warm font-mono text-[11px] text-accent-light md:ml-4 md:h-10 md:w-10">
                  {step.step}
                </div>
                <div className="flex-1 pb-2 md:pb-0">
                  <h3 className="font-display text-xl text-cream md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-relaxed text-cream/40 md:text-base">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-12 md:mt-16">
          <img
            src={images.galleryWall}
            alt="Finished metallic prints on gallery wall"
            className="h-48 w-full object-cover sm:h-64 md:h-80 lg:h-96"
            loading="lazy"
          />
        </Reveal>

        <Reveal className="mt-10 text-center md:mt-12">
          <Link
            to="/how-it-works"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light transition-colors hover:text-cream"
          >
            Full process details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
