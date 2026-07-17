import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Gallery } from '@/components/sections/Gallery'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'

export function GalleryPage() {
  return (
    <div className="bg-ink pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-16 pt-20 lg:px-10 lg:pb-24 lg:pt-32">
        <Reveal>
          <SectionLabel>Gallery</SectionLabel>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[1.05] text-cream md:text-6xl lg:text-7xl">
            Every wall tells a{' '}
            <span className="italic text-accent-light">story.</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-cream/45">
            Browse finished pieces from our studio. Each print is a unique
            transformation of a personal moment into gallery-quality metal art.
          </p>
        </Reveal>
      </div>
      <Gallery showHeader={false} />
      <div className="section-padding bg-charcoal">
        <Reveal className="mx-auto max-w-7xl px-6 text-center lg:px-10">
          <p className="font-display text-3xl text-cream md:text-4xl">
            Ready to create your own?
          </p>
          <Link
            to="/studio"
            className="group mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent-light transition-colors hover:text-cream"
          >
            Open Studio
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </Reveal>
      </div>
    </div>
  )
}
