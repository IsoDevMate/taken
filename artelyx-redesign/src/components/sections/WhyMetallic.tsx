import { Shield, Sparkles, Clock, Heart } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'

const reasons = [
  {
    icon: Heart,
    title: 'Preserves what matters',
    description:
      'We treat every photograph as irreplaceable — restoring faded details before printing on metal.',
  },
  {
    icon: Sparkles,
    title: 'Metallic luminosity',
    description:
      'Premium aluminium catches light like no paper print can. Colours feel alive on your wall.',
  },
  {
    icon: Shield,
    title: 'Built to last generations',
    description:
      'UV-resistant inks and archival materials mean your restored memory stays vivid for decades.',
  },
  {
    icon: Clock,
    title: '500+ photos restored',
    description:
      'Years of careful restoration work across Nairobi and beyond. Your photo is in trusted hands.',
  },
]

export function WhyMetallic() {
  return (
    <section id="why" className="bg-stone section-padding">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <SectionLabel>Why Metallic Prints</SectionLabel>
          <h2 className="mt-6 font-display text-3xl leading-tight text-cream md:text-4xl lg:text-5xl">
            This isn&apos;t printing a photo.{' '}
            <span className="italic text-accent-light">
              It&apos;s preserving a memory.
            </span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-20 lg:grid-cols-4 lg:gap-8">
          {reasons.map((item, i) => (
            <Reveal key={item.title} index={i} className="glass p-6 md:p-8">
              <item.icon className="h-5 w-5 text-accent-light" strokeWidth={1.5} />
              <h3 className="mt-5 font-display text-xl text-cream">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-cream/40">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
