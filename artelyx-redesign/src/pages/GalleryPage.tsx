import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Gallery } from '@/components/sections/Gallery'
import { PageBanner } from '@/components/layout/PageBanner'
import { Reveal } from '@/components/ui/Reveal'

export function GalleryPage() {
  return (
    <>
      <PageBanner
        title="Every wall tells a "
        accent="story."
        subtitle="Browse finished pieces from our studio. Each print is a unique transformation of a personal moment into gallery-quality metal art."
      />
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
    </>
  )
}
