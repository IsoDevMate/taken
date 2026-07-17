import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { galleryItems } from '@/lib/images'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { cn } from '@/lib/utils'

interface GalleryProps {
  showHeader?: boolean
}

export function Gallery({ showHeader = true }: GalleryProps) {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section ref={ref} id="gallery" className="bg-charcoal pb-32 lg:pb-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {showHeader && (
          <div className="flex flex-col items-start justify-between gap-8 pb-20 md:flex-row md:items-end">
            <div>
              <SectionLabel>Gallery</SectionLabel>
              <h2 className="mt-6 font-display text-4xl text-cream md:text-5xl lg:text-6xl">
                Every piece tells
                <br />
                <span className="italic text-accent-light">a story.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-cream/45">
              From family portraits to bold typography — see what our customers
              have created.
            </p>
          </div>
        )}

        <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.06,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={cn(
                'group relative mb-5 break-inside-avoid overflow-hidden',
                item.span === 'tall' && 'sm:mb-8'
              )}
            >
              <img
                src={item.src}
                alt={item.alt}
                className={cn(
                  'w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]',
                  item.span === 'tall'
                    ? 'aspect-[3/4]'
                    : item.span === 'wide'
                      ? 'aspect-[16/10]'
                      : 'aspect-square'
                )}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/20" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-full p-5 transition-transform duration-500 group-hover:translate-y-0">
                <span className="font-mono text-[11px] text-cream/70">{item.alt}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
