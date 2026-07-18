import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { showcaseProducts } from '@/lib/images'

const AUTOPLAY_INTERVAL = 5000

export function NetflixShowcase() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const goTo = useCallback(
    (index: number, dir: 1 | -1 = 1) => {
      setDirection(dir)
      setActive(index)
    },
    []
  )

  const next = useCallback(() => {
    const nextIndex = (active + 1) % showcaseProducts.length
    goTo(nextIndex, 1)
  }, [active, goTo])

  const prev = useCallback(() => {
    const prevIndex = (active - 1 + showcaseProducts.length) % showcaseProducts.length
    goTo(prevIndex, -1)
  }, [active, goTo])

  // Autoplay
  useEffect(() => {
    timerRef.current = setTimeout(next, AUTOPLAY_INTERVAL)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [active, next])

  const current = showcaseProducts[active]

  return (
    <section
      id="showcase"
      className="relative h-screen w-full overflow-hidden bg-ink"
      aria-label="Our work showcase"
    >
      {/* Full-bleed background image */}
      <AnimatePresence mode="sync" custom={direction}>
        <motion.div
          key={active}
          custom={direction}
          variants={{
            enter: (d: number) => ({ opacity: 0, x: d * 60 }),
            center: { opacity: 1, x: 0 },
            exit: (d: number) => ({ opacity: 0, x: d * -60 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <img
            src={current.src}
            alt={current.title}
            className="h-full w-full object-cover object-center"
            draggable={false}
          />
        </motion.div>
      </AnimatePresence>

      {/* Gradient overlays — mimics Netflix dark vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />

      {/* Left content panel */}
      <div className="absolute inset-y-0 left-0 z-10 flex w-full max-w-lg flex-col justify-end px-6 pb-36 sm:px-10 lg:px-16 lg:pb-44">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Meta tag */}
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-light">
              Artelyx — {String(active + 1).padStart(2, '0')} / {String(showcaseProducts.length).padStart(2, '0')}
            </span>

            {/* Title */}
            <h2 className="mt-3 font-display text-3xl leading-tight text-cream sm:text-4xl lg:text-5xl xl:text-6xl">
              {current.title}
            </h2>

            {/* Size badge */}
            <p className="mt-2 text-sm text-cream/45">{current.size} · Metallic Aluminium Print</p>

            {/* Actions */}
            <div className="mt-6 flex items-center gap-3">
              <Button variant="primary" size="lg" className="group gap-2" asChild>
                <Link to="/studio">
                  <Play className="h-4 w-4 fill-current" />
                  Order This Print
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2" asChild>
                <Link to="/gallery">
                  More
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom thumbnail row */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-8 sm:px-10 lg:px-16">
        <div className="flex items-end gap-2 sm:gap-3">
          {showcaseProducts.map((product, i) => (
            <button
              key={product.title}
              onClick={() => goTo(i, i > active ? 1 : -1)}
              className={`group relative shrink-0 overflow-hidden rounded transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light ${
                i === active
                  ? 'h-16 w-24 ring-2 ring-accent-light sm:h-20 sm:w-32'
                  : 'h-12 w-16 opacity-50 hover:opacity-80 sm:h-16 sm:w-24'
              }`}
              aria-label={`View ${product.title}`}
              aria-current={i === active ? 'true' : undefined}
            >
              <img
                src={product.src}
                alt={product.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {/* Progress bar on active */}
              {i === active && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-ink/40">
                  <motion.div
                    className="h-full bg-accent-light"
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: AUTOPLAY_INTERVAL / 1000, ease: 'linear' }}
                    key={active}
                  />
                </div>
              )}
            </button>
          ))}

          {/* Prev / Next */}
          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={prev}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/60 transition hover:border-cream/50 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={next}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 text-cream/60 transition hover:border-cream/50 hover:text-cream focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-light"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
