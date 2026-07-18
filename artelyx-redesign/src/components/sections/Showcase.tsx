import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { showcaseProducts } from '@/lib/images'
import { useIsMobile } from '@/hooks/useMediaQuery'

gsap.registerPlugin(ScrollTrigger)

function ShowcaseHeader() {
  return (
    <>
      <SectionLabel>Real Work</SectionLabel>
      <h2 className="mt-4 font-display text-3xl leading-tight text-cream md:text-5xl lg:text-6xl">
        Restored. Printed.
        <br />
        <span className="italic text-accent-light">Treasured.</span>
      </h2>
      <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/45 md:mt-6">
        Every piece begins as a faded or damaged photograph — restored by hand,
        then printed on premium metallic aluminium.
      </p>
      <Link
        to="/gallery"
        className="group mt-6 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light transition-colors hover:text-cream md:mt-8"
      >
        View Full Gallery
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </Link>
    </>
  )
}

function ProductCard({
  product,
  index,
  className,
}: {
  product: (typeof showcaseProducts)[number]
  index: number
  className?: string
}) {
  return (
    <div className={className}>
      <div className="group relative aspect-[3/4] overflow-hidden md:aspect-auto md:h-[70vh]">
        <img
          src={product.src}
          alt={product.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent md:opacity-0 md:transition-opacity md:duration-500 md:group-hover:opacity-100" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:translate-y-4 md:p-8 md:opacity-0 md:transition-all md:duration-500 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
            0{index + 1}
          </span>
          <h3 className="mt-1 font-display text-lg text-cream md:text-2xl">
            {product.title}
          </h3>
          <p className="mt-0.5 text-xs text-cream/50 md:text-sm">{product.size}</p>
        </div>
      </div>
    </div>
  )
}

export function Showcase() {
  const sectionRef = useRef<HTMLElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  useEffect(() => {
    if (isMobile) return

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
          // Kill the pin spacer cleanly on leave so body padding is removed
          onLeaveBack: () => ScrollTrigger.refresh(),
        },
      })
    }, section)

    return () => {
      // ctx.revert() kills the ScrollTrigger AND removes the pin spacer from body
      ctx.revert()
      // Force a ScrollTrigger refresh so any residual spacers are cleared
      ScrollTrigger.refresh()
    }
  }, [isMobile])

  if (isMobile) {
    return (
      <section id="showcase" className="bg-charcoal py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <ShowcaseHeader />
          <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
            {showcaseProducts.slice(0, 4).map((product, i) => (
              <ProductCard key={product.title} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      ref={sectionRef}
      id="showcase"
      className="relative hidden overflow-hidden bg-charcoal lg:block"
    >
      <div className="absolute left-0 top-0 z-10 flex h-full w-1/3 items-center bg-gradient-to-r from-charcoal via-charcoal/90 to-transparent px-6 lg:px-16">
        <div>
          <ShowcaseHeader />
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
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-light">
                0{i + 1}
              </span>
              <h3 className="mt-1 font-display text-2xl text-cream">
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
