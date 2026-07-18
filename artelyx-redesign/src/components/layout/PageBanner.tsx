import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { images } from '@/lib/images'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

interface PageBannerProps {
  title: string
  subtitle?: string
  accent?: string // italicised portion of title
}

/**
 * Shared banner used on all inner pages (not Home, not Gallery).
 * Uses the same hero image / video background as the original Hero section.
 */
export function PageBanner({ title, subtitle, accent }: PageBannerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [videoReady, setVideoReady] = useState(false)
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const video = videoRef.current
    if (!video || reducedMotion) return

    const handleCanPlay = () => setVideoReady(true)
    video.addEventListener('canplaythrough', handleCanPlay)
    if (video.readyState >= 3) setVideoReady(true)

    return () => video.removeEventListener('canplaythrough', handleCanPlay)
  }, [reducedMotion])

  // Split title into plain + accent parts
  const plainTitle = accent ? title.replace(accent, '') : title

  return (
    <section className="relative flex min-h-[42vh] items-end overflow-hidden bg-ink pt-24">
      {/* Background media */}
      <div className="absolute inset-0">
        <img
          src={images.hero}
          alt=""
          aria-hidden="true"
          fetchPriority="high"
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
            videoReady && !reducedMotion ? 'opacity-0' : 'opacity-100'
          }`}
        />

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

        {/* Heavy overlay so text reads cleanly over any image */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-14 sm:px-6 sm:pb-16 lg:px-10 lg:pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-4xl leading-[1.06] text-cream sm:text-5xl md:text-6xl"
        >
          {accent ? (
            <>
              {plainTitle}
              <span className="italic text-accent-light">{accent}</span>
            </>
          ) : (
            title
          )}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 max-w-md text-sm leading-relaxed text-cream/50 sm:text-base"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
