import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { images } from '@/lib/images'

export function About() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="about" className="bg-ink">
      <div className="grid lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-[50vh] overflow-hidden lg:min-h-[80vh]"
        >
          <img
            src={images.studio6}
            alt="Artelyx studio"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </motion.div>

        <div className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-32">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>About Artelyx</SectionLabel>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl">
              Built for
              <br />
              image-led spaces.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-cream/50">
              Every piece starts as a blank aluminium sheet. We print your image
              with precision, mount it frameless, and deliver a finished work
              that catches light like nothing else on your wall.
            </p>
            <p className="mt-4 max-w-md text-base leading-relaxed text-cream/50">
              Artelyx isn&apos;t a print shop — it&apos;s a gallery experience
              for your home. Premium materials, white-glove handling, and a
              finish that makes people stop and stare.
            </p>

            <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-12">
              {[
                { value: '500+', label: 'Prints Delivered' },
                { value: '5–7', label: 'Day Turnaround' },
                { value: '100%', label: 'Satisfaction' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-serif text-3xl text-cream md:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-cream/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
