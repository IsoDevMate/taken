import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { galleryItems } from '@/lib/images'
import { cn } from '@/lib/utils'

export function Gallery() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="gallery" className="bg-ink py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent-light">
              Gallery
            </p>
            <h2 className="mt-4 font-serif text-4xl text-cream md:text-5xl lg:text-6xl">
              Every piece tells
              <br />
              <span className="italic">a story.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/50">
            From family portraits to bold typography — see what our customers
            have created. Your photo could be next.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'group relative mb-4 break-inside-avoid overflow-hidden',
                item.span === 'tall' && 'sm:mb-6',
                item.span === 'wide' && 'sm:col-span-2'
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={cn(
                  'w-full object-cover transition-transform duration-700 group-hover:scale-105',
                  item.span === 'tall' ? 'aspect-[3/4]' : item.span === 'wide' ? 'aspect-[16/10]' : 'aspect-square'
                )}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/30" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-500 group-hover:translate-y-0">
                <span className="text-xs text-cream/80">{item.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
