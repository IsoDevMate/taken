import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { images } from '@/lib/images'

export function CTA() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0">
        <img
          src={images.galleryWall}
          alt=""
          className="h-full w-full object-cover opacity-20"
          aria-hidden
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/90 to-ink/75" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionLabel>Start Today</SectionLabel>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-cream sm:text-5xl md:text-6xl lg:text-7xl">
            Ready to give a memory
            <br />
            <span className="italic text-accent-light">a second life?</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-base text-cream/45 sm:text-lg">
            Send us your photograph — upload online or message us on WhatsApp.
            We will take it from there.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Button variant="primary" size="lg" className="group w-full sm:w-auto" asChild>
              <Link to="/studio">
                <Upload className="h-4 w-4" />
                Restore My Photo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
