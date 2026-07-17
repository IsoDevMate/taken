import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Upload } from 'lucide-react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { images } from '@/lib/images'
import { useIsMobile, usePrefersReducedMotion } from '@/hooks/useMediaQuery'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (isMobile || reducedMotion) return

    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scale: 1.06,
        duration: 20,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [isMobile, reducedMotion])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <div
          ref={imageRef}
          className="absolute inset-0 scale-105 motion-reduce:scale-100"
        >
          <img
            src={images.hero}
            alt="Restored photograph printed as premium metallic art"
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/30 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-32 lg:pt-32">
        <div className="max-w-2xl lg:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            <SectionLabel className="mb-4 sm:mb-6">
              Photo Restoration & Metallic Prints
            </SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2rem] leading-[1.08] text-cream sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Some memories deserve a{' '}
            <span className="italic text-accent-light">second life.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-5 max-w-md text-base leading-relaxed text-cream/55 sm:mt-6 sm:text-lg"
          >
            Turn faded memories into timeless metallic art. We restore every
            detail, then print on premium aluminium with a luminous finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
          >
            <Button variant="primary" size="lg" className="group w-full sm:w-auto" asChild>
              <Link to="/studio">
                <Upload className="h-4 w-4" />
                Restore My Photo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#before-after">See the Transformation</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
