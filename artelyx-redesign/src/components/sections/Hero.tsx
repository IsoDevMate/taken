import { useRef, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Upload } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { images } from '@/lib/images'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

export function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video || reducedMotion) return

    const handleCanPlay = () => setVideoReady(true)
    video.addEventListener('canplaythrough', handleCanPlay)

    // If already ready (cached)
    if (video.readyState >= 3) setVideoReady(true)

    return () => video.removeEventListener('canplaythrough', handleCanPlay)
  }, [reducedMotion])

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-[100dvh] items-end overflow-hidden bg-ink"
    >
      {/* Background media — video with image fallback */}
      <div className="absolute inset-0">
        {/* Fallback image — always rendered, hidden once video is ready */}
        <img
          src={images.hero}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            videoReady && !reducedMotion ? 'opacity-0' : 'opacity-100'
          }`}
        />

        {/* Ambient video — muted, autoplay, no controls */}
        {!reducedMotion && (
          <video
            ref={videoRef}
            src="/video/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
              videoReady ? 'opacity-100' : 'opacity-0'
            }`}
          />
        )}

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-10 lg:pb-32 lg:pt-32">
        <div className="max-w-xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-[2.4rem] leading-[1.06] text-cream sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Memories,
            <br />
            <span className="italic text-accent-light">on metal.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.42, duration: 0.7 }}
            className="mt-4 text-sm leading-relaxed text-cream/50 sm:text-base"
          >
            Photo restoration &amp; premium aluminium prints — Nairobi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.58, duration: 0.7 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Button variant="primary" size="lg" className="group w-full sm:w-auto" asChild>
              <Link to="/studio">
                <Upload className="h-4 w-4" />
                Restore My Photo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
              <a href="#before-after">See the result</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
