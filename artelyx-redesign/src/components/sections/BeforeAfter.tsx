import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { images } from '@/lib/images'

export function BeforeAfter() {
  const ref = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [sliderPos, setSliderPos] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setSliderPos((x / rect.width) * 100)
  }, [])

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true)
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    updatePosition(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = () => setIsDragging(false)

  return (
    <section ref={ref} className="relative overflow-hidden bg-charcoal py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-light">
              Before & After
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl">
              From photo to
              <br />
              <span className="italic">masterpiece.</span>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/50">
              Drag the slider to see the transformation. Your everyday photo
              becomes a luminous metal print with depth, clarity, and a finish
              that catches every ray of light.
            </p>

            <div className="mt-10 flex gap-8">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-cream/40">
                  Before
                </span>
                <p className="mt-1 font-serif text-lg text-cream">Original Photo</p>
              </div>
              <div className="h-12 w-px bg-cream/10" />
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-accent-light">
                  After
                </span>
                <p className="mt-1 font-serif text-lg text-cream">Metal Print</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            ref={containerRef}
            className="relative aspect-[4/5] cursor-ew-resize select-none overflow-hidden md:aspect-[3/4]"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
          >
            <img
              src={images.studio5}
              alt="Metal print result"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />

            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src={images.studio2}
                alt="Original photo"
                className="absolute inset-0 h-full w-full object-cover brightness-90 saturate-75"
                draggable={false}
              />
              <div className="absolute inset-0 bg-ink/20" />
            </div>

            <div
              className="absolute top-0 bottom-0 z-10 w-0.5 bg-cream shadow-lg"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-cream bg-ink shadow-xl">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M5 4L1 8L5 12" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
                  <path d="M11 4L15 8L11 12" stroke="currentColor" strokeWidth="1.5" className="text-cream" />
                </svg>
              </div>
            </div>

            <span className="absolute left-4 top-4 bg-ink/70 px-3 py-1 text-[10px] uppercase tracking-wider text-cream/70 backdrop-blur-sm">
              Original
            </span>
            <span className="absolute right-4 top-4 bg-accent/80 px-3 py-1 text-[10px] uppercase tracking-wider text-cream backdrop-blur-sm">
              Metal Print
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
