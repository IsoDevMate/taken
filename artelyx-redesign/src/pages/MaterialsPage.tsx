import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { About } from '@/components/sections/About'
import { Reveal } from '@/components/ui/Reveal'
import { materialFeatures } from '@/lib/content'
import { PageBanner } from '@/components/layout/PageBanner'

export function MaterialsPage() {
  return (
    <>
      <PageBanner
        title="Built to last "
        accent="generations."
        subtitle="Every Artelyx print starts with premium aluminium and archival inks — engineered for depth, durability, and that unmistakable metallic luminosity."
      />

      <div className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 pb-16 pt-16 lg:px-10 lg:pb-24 lg:pt-20">
          <div className="grid gap-px bg-white/5 md:grid-cols-2">
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
    </>
  )
}
