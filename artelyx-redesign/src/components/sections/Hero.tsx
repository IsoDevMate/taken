import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ArrowRight, Upload } from 'lucide-react'
import gsap from 'gsap'
import { Button } from '@/components/ui/button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { images } from '@/lib/images'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { stiffness: 80, damping: 20 }
  const x = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig)
  const y = useSpring(useTransform(mouseY, [-0.5, 0.5], [-15, 15]), springConfig)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(imageRef.current, {
        scale: 1.08,
        duration: 20,
        ease: 'none',
        repeat: -1,
        yoyo: true,
      })
    }, heroRef)
    return () => ctx.revert()
  }, [])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = heroRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-end overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        <motion.div
          ref={imageRef}
          style={{ x, y }}
          className="absolute inset-0 scale-105"
        >
          <img
            src={images.hero}
            alt="Artelyx metal prints on gallery wall"
            className="h-full w-full object-cover object-center"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:px-8 lg:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <SectionLabel className="mb-6">Premium Metal Wall Art</SectionLabel>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl leading-[1.05] text-cream md:text-7xl lg:text-8xl"
          >
            Your walls deserve{' '}
            <span className="italic text-accent-light">better stories.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-8 max-w-lg text-lg leading-relaxed text-cream/60"
          >
            Turn your favourite photo into gallery-quality metal wall art.
            Crafted on premium aluminium with a luminous, frameless finish.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Button variant="primary" size="lg" className="group" asChild>
              <Link to="/studio">
                <Upload className="h-4 w-4" />
                Upload My Photo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/gallery">Browse Gallery</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 right-6 hidden lg:block"
        >
          <div className="flex flex-col items-center gap-2 text-cream/40">
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-12 w-px bg-gradient-to-b from-cream/40 to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
