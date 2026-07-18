import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/button'
import { pricingTiers, faqs } from '@/lib/content'
import { cn } from '@/lib/utils'
import { PageBanner } from '@/components/layout/PageBanner'

export function PricingPage() {
  return (
    <>
      <PageBanner
        title="Invest in something "
        accent="permanent."
        subtitle="Transparent pricing. Free shipping within Nairobi. Delivered in 5–7 business days."
      />

      <div className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
          <div className="mt-0 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pricingTiers.map((tier, i) => (
              <Reveal
                key={tier.size}
                index={i}
                className={cn(
                  'relative p-8 lg:p-10 transition-all duration-500',
                  tier.featured
                    ? 'glass-strong'
                    : 'border border-white/5 hover:border-white/10'
                )}
              >
                {tier.featured && (
                  <span className="absolute -top-3 left-8 bg-accent px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-ink">
                    Popular
                  </span>
                )}
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent-light">
                  {tier.label}
                </p>
                <p className="mt-4 font-display text-3xl text-cream">
                  {tier.size}
                </p>
                <p className="mt-6 font-display text-4xl text-cream">
                  {tier.price}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-cream/40">
                  {tier.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-32">
            <SectionLabel>FAQ</SectionLabel>
            <div className="mt-12 divide-y divide-white/5">
              {faqs.map((faq) => (
                <details key={faq.q} className="group py-8">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-display text-xl text-cream transition-colors group-open:text-accent-light">
                    {faq.q}
                    <span className="ml-4 text-cream/30 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 max-w-2xl leading-relaxed text-cream/40">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-32 text-center">
            <div className="inline-flex items-center gap-2 text-cream/40">
              <Check className="h-4 w-4 text-accent-light" />
              <span className="text-sm">Free shipping in Nairobi</span>
            </div>
            <Button variant="primary" size="lg" className="mt-8" asChild>
              <Link to="/studio">
                Start Creating
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </>
  )
}
