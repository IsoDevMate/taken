import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { images } from '@/lib/images'

export function CTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={images.galleryWall}
          alt=""
          className="h-full w-full object-cover opacity-30"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-32 text-center lg:px-8 lg:py-48">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-accent-light">
            Start Creating
          </p>
          <h2 className="mt-6 font-serif text-5xl leading-[1.05] text-cream md:text-7xl lg:text-8xl">
            Your wall is
            <br />
            <span className="italic">waiting.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-lg text-cream/50">
            Upload your photo now and see it transformed into gallery-quality
            metal wall art in seconds.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Button size="lg" className="group uppercase tracking-wider">
              <Upload className="h-4 w-4" />
              Upload My Photo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="uppercase tracking-wider"
            >
              Browse Gallery
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
