import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { images } from '@/lib/images'

export function TeamTrust() {
  return (
    <section id="about" className="bg-graphite section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <Reveal className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-auto lg:min-h-[480px]">
            <img
              src={images.studio6}
              alt="Artelyx restoration artist at work"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>

          <Reveal index={1}>
            <SectionLabel>Who We Are</SectionLabel>
            <h2 className="mt-6 font-display text-3xl leading-tight text-cream md:text-4xl lg:text-5xl">
              Real people caring for{' '}
              <span className="italic text-accent-light">your memories.</span>
            </h2>
            <p className="mt-6 leading-relaxed text-cream/45">
              Artelyx started because we believe faded family photographs
              deserve more than a drawer. Our studio in Nairobi carefully
              restores every detail — scratches, tears, fading — before
              transforming your image into a luminous metallic print.
            </p>
            <p className="mt-4 leading-relaxed text-cream/45">
              When you send us a photo, you&apos;re not uploading a file.
              You&apos;re trusting us with a piece of your history.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-white/10 pt-10">
              {[
                { value: '500+', label: 'Photos Restored' },
                { value: '5–7', label: 'Day Turnaround' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl text-cream md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-cream/35">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="group mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light transition-colors hover:text-cream"
            >
              Get in touch
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
