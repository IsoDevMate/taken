import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { testimonials } from '@/lib/images'

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-stone py-20 md:section-padding">
      <div className="absolute inset-0 opacity-[0.02]">
        <p className="animate-marquee whitespace-nowrap font-display text-[20vw] leading-none text-cream">
          Gallery Quality &nbsp;&nbsp; Metal Prints &nbsp;&nbsp; Artelyx &nbsp;&nbsp;
          Gallery Quality &nbsp;&nbsp; Metal Prints &nbsp;&nbsp; Artelyx &nbsp;&nbsp;
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="text-center">
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-6 font-display text-4xl text-cream md:text-5xl lg:text-6xl">
            Loved by collectors.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass p-7 md:p-10 lg:p-12"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-accent-light text-accent-light"
                  />
                ))}
              </div>
              <blockquote className="mt-8 font-display text-xl leading-relaxed italic text-cream/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center border border-white/10 font-display text-sm text-accent-light">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm text-cream">{t.author}</p>
                  <p className="font-mono text-[11px] text-cream/30">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
