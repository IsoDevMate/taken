import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { showcaseProducts } from '@/lib/images'

/**
 * Showcase — horizontal scroll on desktop, vertical grid on mobile.
 *
 * Uses native CSS overflow-x scroll + scroll-snap instead of GSAP ScrollTrigger
 * pinning. This keeps the section self-contained and never mutates body styles,
 * so navigating away is always clean.
 */
function ShowcaseHeader() {
  return (
    <>
      <SectionLabel>Real Work</SectionLabel>
      <h2 className="mt-4 font-display text-3xl leading-tight text-cream md:text-5xl lg:text-6xl">
        Restored. Printed.
        <br />
        <span className="italic text-accent-light">Treasured.</span>
      </h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/45 md:mt-6">
        Every piece begins as a faded or damaged photograph — restored by hand,
        then printed on premium metallic aluminium.
      </p>
      <Link
        to="/gallery"
        className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light transition-colors hover:text-cream md:mt-8"
      >
        View Full Gallery
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </>
  )
}

export function Showcase() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} id="showcase" className="bg-charcoal py-20 md:py-32">
      {/* ── Mobile / tablet: standard grid ─────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 lg:hidden lg:px-10">
        <ShowcaseHeader />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
          {showcaseProducts.slice(0, 4).map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative aspect-[3/4] overflow-hidden"
            >
              <img
                src={product.src}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
                  0{i + 1}
                </span>
                <h3 className="mt-0.5 font-display text-lg text-cream">{product.title}</h3>
                <p className="text-xs text-cream/50">{product.size}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Desktop: horizontal drag-scroll with snap ────────────────────── */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-7xl px-6 lg:px-16">
          <ShowcaseHeader />
        </div>

        {/* Scrollable track — no pinning, just overflow-x scroll */}
        <div
          className="mt-10 flex gap-5 overflow-x-auto px-6 pb-6 lg:px-16"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {showcaseProducts.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative h-[65vh] w-[38vw] max-w-lg shrink-0 overflow-hidden"
              style={{ scrollSnapAlign: 'start' }}
            >
              <img
                src={product.src}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
                  0{i + 1}
                </span>
                <h3 className="mt-1 font-display text-2xl text-cream">{product.title}</h3>
                <p className="mt-1 text-sm text-cream/50">{product.size}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
