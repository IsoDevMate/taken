import { useState, useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Upload, Crop, Eye, ArrowRight, ImagePlus } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/button'
import { images } from '@/lib/images'
import { cn } from '@/lib/utils'

type StudioStep = 'upload' | 'crop' | 'preview'

export function StudioPage() {
  const [step, setStep] = useState<StudioStep>('upload')
  const [preview, setPreview] = useState<string | null>(null)

  const handleUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    
    try {
      const url = URL.createObjectURL(file)
      setPreview(url)
      setStep('crop')
    } catch (error) {
      console.error('Error creating object URL:', error)
    }
  }, [])

  // Cleanup object URL when component unmounts or preview changes
  useEffect(() => {
    return () => {
      if (preview && preview.startsWith('blob:')) {
        URL.revokeObjectURL(preview)
      }
    }
  }, [preview])

  return (
    <div className="min-h-screen bg-ink pt-24 sm:pt-28">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-6 sm:py-16 lg:px-10 lg:py-24">
        <Reveal>
          <SectionLabel>Upload</SectionLabel>
          <h1 className="mt-5 font-display text-3xl leading-[1.08] text-cream sm:mt-6 sm:text-4xl md:text-5xl">
            Send us your{' '}
            <span className="italic text-accent-light">photograph.</span>
          </h1>
          <p className="mt-4 max-w-lg text-sm text-cream/45 sm:text-base">
            Upload a scan or phone photo of your old image. We will assess,
            restore, and print it on premium metallic aluminium.
          </p>
        </Reveal>

        <div className="mt-10 flex gap-1 overflow-x-auto no-scrollbar sm:mt-12 sm:gap-2">
          {(['upload', 'crop', 'preview'] as const).map((s, i) => (
            <button
              key={s}
              type="button"
              onClick={() => preview && setStep(s)}
              className={cn(
                'relative px-5 py-2.5 font-mono text-[11px] uppercase tracking-[0.2em] transition-all duration-500 glass-hover',
                step === s
                  ? 'text-cream glass-strong'
                  : 'text-cream/30 hover:text-cream/60'
              )}
            >
              {step === s && (
                <motion.div
                  layoutId="studio-tab"
                  className="absolute inset-0 glass-strong"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative">
                0{i + 1} {s}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-16">
          <Reveal index={1} className="relative">
            {step === 'upload' && (
              <label className="group flex aspect-[4/5] cursor-pointer flex-col items-center justify-center border border-dashed border-white/15 glass-hover transition-all duration-500 hover:border-accent/40">
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleUpload}
                />
                <div className="flex h-16 w-16 items-center justify-center border border-white/10 glass-mirror transition-colors group-hover:border-accent/40">
                  <ImagePlus className="h-6 w-6 text-cream/40 group-hover:text-accent-light" />
                </div>
                <p className="mt-6 font-display text-2xl text-cream">
                  Drop your photo
                </p>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/30">
                  JPG, PNG — min 2000px
                </p>
              </label>
            )}

            {step === 'crop' && preview && (
              <div className="relative aspect-[4/5] overflow-hidden bg-graphite glass-hover">
                <img
                  src={preview}
                  alt="Your upload"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-8 border border-accent/30" />
              </div>
            )}

            {step === 'preview' && (
              <div className="relative aspect-[4/5] overflow-hidden glass-hover">
                <img
                  src={preview ?? images.hero}
                  alt="Room preview"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
                <p className="absolute bottom-6 left-6 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/50">
                  Living room preview
                </p>
              </div>
            )}
          </Reveal>

          <Reveal index={2} className="flex flex-col justify-center">
            {step === 'upload' && (
              <>
                <Upload className="h-8 w-8 text-accent-light" />
                <h2 className="mt-6 font-display text-3xl text-cream">
                  Start with your best photo
                </h2>
                <p className="mt-4 leading-relaxed text-cream/45">
                  We analyse resolution, orientation, and composition to
                  recommend the perfect print size for your image.
                </p>
              </>
            )}

            {step === 'crop' && (
              <>
                <Crop className="h-8 w-8 text-accent-light" />
                <h2 className="mt-6 font-display text-3xl text-cream">
                  Refine the framing
                </h2>
                <p className="mt-4 leading-relaxed text-cream/45">
                  Drag to reposition. The crop guide shows exactly how your
                  image will appear on metal.
                </p>
                <Button
                  className="mt-8 w-fit glass-hover"
                  onClick={() => setStep('preview')}
                >
                  Preview in Room
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </>
            )}

            {step === 'preview' && (
              <>
                <Eye className="h-8 w-8 text-accent-light" />
                <h2 className="mt-6 font-display text-3xl text-cream">
                  See it on your wall
                </h2>
                <p className="mt-4 leading-relaxed text-cream/45">
                  Preview how your print will look in a real space before
                  committing to a size and finish.
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <Button variant="primary" className="glass-mirror" asChild>
                    <Link to="/pricing">
                      Choose Size & Order
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="glass-hover" onClick={() => setStep('crop')}>
                    Adjust Crop
                  </Button>
                </div>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </div>
  )
}
