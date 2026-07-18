import { useRef, useState, useCallback } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
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

  const handleStart = useCallback((clientX: number) => {
    setIsDragging(true)
    updatePosition(clientX)
  }, [updatePosition])

  const handleMove = useCallback((clientX: number) => {
    if (!isDragging) return
    updatePosition(clientX)
  }, [isDragging, updatePosition])

  const handleEnd = useCallback(() => {
    setIsDragging(false)
  }, [])

  // Mouse events
  const handlePointerDown = (e: React.PointerEvent) => {
    e.preventDefault()
    ;(e.target as HTMLElement).setPointerCapture(e.pointerId)
    handleStart(e.clientX)
  }

  const handlePointerMove = (e: React.PointerEvent) => {
    e.preventDefault()
    handleMove(e.clientX)
  }

  const handlePointerUp = (e: React.PointerEvent) => {
    e.preventDefault()
    ;(e.target as HTMLElement).releasePointerCapture?.(e.pointerId)
    handleEnd()
  }

  // Touch events for better mobile support
  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault()
    handleStart(e.touches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault()
    handleMove(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    e.preventDefault()
    handleEnd()
  }

  return (
    <section ref={ref} id="before-after" className="relative overflow-hidden bg-graphite py-20 md:section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Before & After</SectionLabel>
            <h2 className="mt-4 font-display text-3xl leading-tight text-cream sm:text-4xl md:text-5xl">
              Drag to see the
              <br />
              <span className="italic text-accent-light">transformation.</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/45 sm:mt-6">
              Every faded photograph holds a story. Drag the slider to see how
              we restore detail and print it as luminous metallic art.
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
            className="relative aspect-[4/5] cursor-ew-resize select-none overflow-hidden touch-none md:aspect-[3/4]"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{ touchAction: 'none' }}
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
              <div className="absolute top-1/2 left-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border-2 border-cream bg-ink shadow-xl md:h-10 md:w-10 transition-all duration-200 hover:scale-110 hover:bg-accent/10">
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
