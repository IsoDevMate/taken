import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { About } from '@/components/sections/About'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { materialFeatures } from '@/lib/content'

export function MaterialsPage() {
  return (
    <div className="bg-ink pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-32">
        <Reveal>
          <SectionLabel>Materials</SectionLabel>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-cream md:text-6xl lg:text-7xl">
            Built to last{' '}
            <span className="italic text-accent-light">generations.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/45">
            Every Artelyx print starts with premium aluminium and archival
            inks — engineered for depth, durability, and that unmistakable
            metallic luminosity.
          </p>
        </Reveal>

        <div className="mt-24 grid gap-px bg-white/5 md:grid-cols-2">
          {materialFeatures.map((feature, i) => (
            <Reveal
              key={feature.title}
              index={i}
              className="bg-ink p-10 lg:p-14"
            >
              <span className="font-mono text-[11px] text-accent/60">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-2xl text-cream">
                {feature.title}
              </h3>
              <p className="mt-4 leading-relaxed text-cream/40">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      <About />

      <div className="section-padding bg-charcoal">
        <Reveal className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="font-display text-3xl text-cream">
            Experience the difference yourself.
          </p>
          <Link
            to="/studio"
            className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-light transition-colors hover:text-cream"
          >
            Upload Your Photo
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
