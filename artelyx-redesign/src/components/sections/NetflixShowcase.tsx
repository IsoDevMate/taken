import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ArrowUpRight, Upload, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { showcaseProducts } from '@/lib/images'

const AUTOPLAY_INTERVAL = 5000

/**
 * Netflix-style hero section.
 *
 * Interaction model:
 *  - Autoplay advances every 5 s (story-mode).
 *  - Scroll DOWN on the section advances to the next slide.
 *  - Scroll UP goes to the previous slide.
 *  - Thumbnail row + prev/next buttons still work.
 *
 * The scroll behaviour gives the user the feeling of "playing" through
 * episodes while the section remains full-screen.
 */
export function NetflixShowcase() {
  const [active, setActive] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const sectionRef = useRef<HTMLElement>(null)
  // Track whether the user is currently "inside" the scroll-hijack zone
  const scrollCooldown = useRef(false)

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
  }, [])

  const goTo = useCallback(
    (index: number, dir: 1 | -1 = 1) => {
      setDirection(dir)
      setActive(index)
      resetTimer()
    },
    [resetTimer]
  )

  const next = useCallback(() => {
    setActive((prev) => {
      const nextIndex = (prev + 1) % showcaseProducts.length
      setDirection(1)
      return nextIndex
    })
    resetTimer()
  }, [resetTimer])

  const prev = useCallback(() => {
    setActive((prev) => {
      const prevIndex = (prev - 1 + showcaseProducts.length) % showcaseProducts.length
      setDirection(-1)
      return prevIndex
    })
    resetTimer()
  }, [resetTimer])

  // Autoplay — restarts whenever `active` changes
  useEffect(() => {
    timerRef.current = setTimeout(next, AUTOPLAY_INTERVAL)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [active, next])

  // ── Scroll-hijack ──────────────────────────────────────────────────────────
  // Track section visibility via IntersectionObserver so we only attach the
  // non-passive wheel listener while the hero is actually fullscreen.
  // This prevents preventDefault from bleeding into page-navigation transitions.
  const isFullyVisible = useRef(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        isFullyVisible.current = entry.intersectionRatio >= 0.9
      },
      { threshold: [0, 0.9, 1.0] }
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleWheel = (e: WheelEvent) => {
      // Only hijack when section fills the viewport
      if (!isFullyVisible.current) return

      const scrollingDown = e.deltaY > 0

      // At the boundary slides, let the page scroll through naturally
      if (scrollingDown && active === showcaseProducts.length - 1) return
      if (!scrollingDown && active === 0) return

      e.preventDefault()

      if (scrollCooldown.current) return
      scrollCooldown.current = true
      setTimeout(() => { scrollCooldown.current = false }, 700)

      if (scrollingDown) {
        next()
      } else {
        prev()
      }
    }

    section.addEventListener('wheel', handleWheel, { passive: false })
    return () => section.removeEventListener('wheel', handleWheel)
  }, [active, next, prev])

  // ── Touch swipe ────────────────────────────────────────────────────────────
  const touchStartY = useRef<number | null>(null)
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return
    const delta = touchStartY.current - e.changedTouches[0].clientY
    if (Math.abs(delta) < 40) return // ignore tiny swipes
    if (delta > 0) {
      if (active < showcaseProducts.length - 1) next()
    } else {
      if (active > 0) prev()
    }
    touchStartY.current = null
  }

  const current = showcaseProducts[active]

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative h-screen w-full overflow-hidden bg-ink"
      aria-label="Custom print experience showcase"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Full-bleed background image ──────────────────────────────────── */}
      <AnimatePresence mode="sync" custom={direction}>
        <motion.div
          key={active}
          custom={direction}
          variants={{
            enter: (d: number) => ({ opacity: 0, scale: 1.04, x: d * 40 }),
            center: { opacity: 1, scale: 1, x: 0 },
            exit: (d: number) => ({ opacity: 0, scale: 0.97, x: d * -40 }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
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

      {/* Gradient vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/50 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/30" />

      {/* ── Left content panel ───────────────────────────────────────────── */}
      <div className="absolute inset-y-0 left-0 z-10 flex w-full max-w-xl flex-col justify-center px-6 sm:px-10 lg:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Overline */}
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent-light">
              Custom Print Experience
            </span>

            {/* Hero headline */}
            <h1 className="mt-4 font-display text-4xl leading-[1.05] text-cream sm:text-5xl lg:text-6xl xl:text-7xl">
              As careful as
              <br />
              <span className="italic text-accent-light">
                your memories deserve.
              </span>
            </h1>

            {/* Slide subtitle */}
            <p className="mt-4 text-sm text-cream/45 sm:text-base">
              {current.title} · {current.size} · Metallic Aluminium Print
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Button variant="primary" size="lg" className="group gap-2 w-full sm:w-auto" asChild>
                <Link to="/studio">
                  <Upload className="h-4 w-4" />
                  Restore My Photo
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto" asChild>
                <Link to="/gallery">
                  <Play className="h-4 w-4 fill-current" />
                  View Gallery
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Slide counter (top-right) ─────────────────────────────────────── */}
      <div className="absolute right-6 top-8 z-10 sm:right-10 lg:right-16">
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-cream/40">
          {String(active + 1).padStart(2, '0')} / {String(showcaseProducts.length).padStart(2, '0')}
        </span>
      </div>

      {/* ── Scroll hint (shown until the user interacts) ─────────────────── */}
      <AnimatePresence>
        {active === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="absolute bottom-32 right-6 z-10 flex flex-col items-center gap-1 sm:right-10 lg:right-16"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cream/30">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="h-4 w-px bg-cream/20"
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Bottom thumbnail row ─────────────────────────────────────────── */}
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
        </div>
      </div>
    </section>
  )
}
