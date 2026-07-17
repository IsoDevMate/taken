import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import { Upload, Crop, Eye, Check, Sparkles } from 'lucide-react'
import { processSteps } from '@/lib/images'
import { images } from '@/lib/images'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { cn } from '@/lib/utils'

gsap.registerPlugin(ScrollTrigger)

const icons = { upload: Upload, crop: Crop, eye: Eye, check: Check }

export function ProcessWalkthrough() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=300%',
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const step = Math.min(
            Math.floor(self.progress * processSteps.length),
            processSteps.length - 1
          )
          setActiveStep(step)
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const ActiveIcon = icons[processSteps[activeStep].icon as keyof typeof icons]

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative min-h-screen bg-warm"
    >
      <div className="mx-auto flex min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:px-10">
        <div className="flex-1">
          <SectionLabel>Custom Print Experience</SectionLabel>
          <h2 className="mt-6 font-display text-4xl leading-tight text-cream md:text-5xl lg:text-6xl">
            As easy as
            <br />
            <span className="italic text-accent-light">drag and drop.</span>
          </h2>

          <div className="mt-16 space-y-0">
            {processSteps.map((step, i) => {
              const Icon = icons[step.icon as keyof typeof icons]
              const isActive = i === activeStep
              const isPast = i < activeStep

              return (
                <motion.div
                  key={step.step}
                  className={cn(
                    'border-l border-white/10 py-7 pl-8 transition-all duration-500',
                    isActive
                      ? 'border-accent/60 opacity-100'
                      : isPast
                        ? 'border-accent/20 opacity-50'
                        : 'opacity-25'
                  )}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        'flex h-10 w-10 shrink-0 items-center justify-center transition-colors duration-500',
                        isActive
                          ? 'bg-accent text-ink'
                          : 'border border-white/10 text-cream/30'
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                        Step {step.step}
                      </span>
                      <h3 className="mt-1 font-display text-2xl text-cream">
                        {step.title}
                      </h3>
                      <p
                        className={cn(
                          'mt-2 max-w-md text-sm leading-relaxed transition-all duration-500',
                          isActive ? 'text-cream/60' : 'text-cream/25'
                        )}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="relative hidden flex-1 items-center justify-center lg:flex">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-accent/10 to-transparent blur-2xl" />
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-72 overflow-hidden border border-white/10 bg-ink shadow-2xl"
            >
              <div className="flex items-center justify-between bg-charcoal px-4 py-2">
                <span className="font-mono text-[10px] text-cream/40">
                  Artelyx Preview
                </span>
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-cream/15" />
                  <div className="h-2 w-2 rounded-full bg-cream/15" />
                </div>
              </div>

              <div className="relative aspect-[9/16] bg-charcoal">
                <img
                  src={
                    activeStep === 0
                      ? images.studio2
                      : activeStep === 1
                        ? images.studio4
                        : activeStep === 2
                          ? images.galleryWall
                          : images.showcase1
                  }
                  alt="Preview"
                  className="h-full w-full object-cover"
                />

                {activeStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-x-4 bottom-4 space-y-2 glass p-4"
                  >
                    <div className="flex items-center gap-2 font-mono text-[10px] text-accent-light">
                      <Sparkles className="h-3 w-3" />
                      Resolution: Excellent
                    </div>
                    <div className="font-mono text-[10px] text-cream/50">
                      Best orientation: Portrait
                    </div>
                    <div className="font-mono text-[10px] text-cream/50">
                      Recommended: 60 × 90 cm
                    </div>
                  </motion.div>
                )}

                {activeStep >= 2 && (
                  <div className="absolute inset-x-3 bottom-3 flex gap-1">
                    {['Living', 'Bedroom', 'Office'].map((room, i) => (
                      <span
                        key={room}
                        className={cn(
                          'flex-1 py-1.5 text-center font-mono text-[9px] uppercase tracking-wider',
                          i === 0 && activeStep === 2
                            ? 'bg-accent text-ink'
                            : 'bg-ink/60 text-cream/50'
                        )}
                      >
                        {room}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute -right-6 -top-6 flex h-16 w-16 items-center justify-center"
            >
              <ActiveIcon className="h-6 w-6 text-accent-light" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
