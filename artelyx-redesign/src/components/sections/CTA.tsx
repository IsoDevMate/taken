import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionLabel } from '@/components/ui/SectionLabel'
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
          className="h-full w-full object-cover opacity-25"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/70" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-40 text-center lg:px-10 lg:py-56">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>Start Creating</SectionLabel>
          <h2 className="mt-8 font-display text-5xl leading-[1.05] text-cream md:text-7xl lg:text-8xl">
            Your wall is
            <br />
            <span className="italic text-accent-light">waiting.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-lg text-cream/45">
            Upload your photo now and see it transformed into gallery-quality
            metal wall art in seconds.
          </p>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
