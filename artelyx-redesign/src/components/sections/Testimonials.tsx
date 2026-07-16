import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '@/lib/images'

export function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-24 text-ink lg:py-32">
      <div className="absolute inset-0 opacity-[0.03]">
        <p className="animate-marquee whitespace-nowrap font-serif text-[20vw] leading-none">
          Gallery Quality &nbsp;&nbsp; Metal Prints &nbsp;&nbsp; Artelyx &nbsp;&nbsp;
          Gallery Quality &nbsp;&nbsp; Metal Prints &nbsp;&nbsp; Artelyx &nbsp;&nbsp;
        </p>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent">
            Testimonials
          </p>
          <h2 className="mt-4 font-serif text-4xl md:text-5xl">
            Loved by collectors.
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 50, rotate: i === 0 ? -2 : i === 2 ? 2 : 0 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, rotate: i === 0 ? -1 : i === 2 ? 1 : 0 }
                  : {}
              }
              transition={{
                delay: i * 0.15,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative bg-white p-8 shadow-sm"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-3.5 w-3.5 fill-accent text-accent"
                  />
                ))}
              </div>
              <blockquote className="mt-6 font-serif text-xl leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-accent/10 font-serif text-sm text-accent">
                  {t.author[0]}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.author}</p>
                  <p className="text-xs text-ink/40">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
