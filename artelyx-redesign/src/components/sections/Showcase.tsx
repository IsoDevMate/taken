import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { showcaseProducts } from '@/lib/images'

gsap.registerPlugin(ScrollTrigger)

export function Showcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    const track = trackRef.current
    if (!section || !track) return

    const ctx = gsap.context(() => {
      const scrollWidth = track.scrollWidth - window.innerWidth

      gsap.to(track, {
        x: -scrollWidth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative overflow-hidden bg-charcoal"
    >
      <div className="absolute left-0 top-0 z-10 flex h-full w-1/3 items-center bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent px-6 lg:px-16">
        <div>
          <SectionLabel>Collection</SectionLabel>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            Framed by
            <br />
            <span className="italic">light itself.</span>
          </h2>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream/45">
            Each piece is printed on premium aluminium with a luminous,
            frameless finish that catches every ray of light.
          </p>
          <Link
            to="/gallery"
            className="group mt-8 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light transition-colors hover:text-cream"
          >
            View Full Gallery
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex h-screen items-center gap-6 pl-[35vw] pr-12"
      >
        {showcaseProducts.map((product, i) => (
          <div
            key={product.title}
            className="group relative h-[70vh] w-[45vw] max-w-xl shrink-0 overflow-hidden"
          >
            <img
              src={product.src}
              alt={product.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="text-[10px] uppercase tracking-[0.2em] text-accent-light">
                0{i + 1}
              </span>
              <h3 className="mt-1 font-serif text-2xl text-cream">
                {product.title}
              </h3>
              <p className="mt-1 text-sm text-cream/50">{product.size}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
