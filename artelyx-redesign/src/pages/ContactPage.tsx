import { MessageCircle, Mail, MapPin } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/button'
import { PageBanner } from '@/components/layout/PageBanner'
import { faqs } from '@/lib/content'

export function ContactPage() {
  return (
    <>
      <PageBanner
        title="We're here to "
        accent="help."
        subtitle="Questions about sizing, finishes, or your order? Reach out — we typically respond within a few hours."
      />

      <div className="bg-ink">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
          <div className="grid gap-20 lg:grid-cols-2">
            {/* ── Contact details ────────────────────────────────────────── */}
            <Reveal>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-6 font-display text-3xl leading-tight text-cream md:text-4xl">
                Get in touch
              </h2>
              <p className="mt-4 max-w-md leading-relaxed text-cream/45">
                Reach us on WhatsApp for the fastest reply, or drop us an
                email and we'll get back to you the same day.
              </p>

              <div className="mt-12 space-y-6">
                {[
                  { icon: MessageCircle, label: 'WhatsApp', value: '+254 700 000 000' },
                  { icon: Mail, label: 'Email', value: 'hello@artelyx.studio' },
                  { icon: MapPin, label: 'Studio', value: 'Nairobi, Kenya' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center border border-white/10">
                      <item.icon className="h-4 w-4 text-accent-light" />
                    </div>
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/30">
                        {item.label}
                      </p>
                      <p className="text-cream">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* ── Contact form ───────────────────────────────────────────── */}
            <Reveal index={1}>
              <form
                className="glass p-10 lg:p-12"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="space-y-8">
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/40">
                      Name
                    </label>
                    <input
                      type="text"
                      className="mt-3 w-full border-b border-white/10 bg-transparent py-3 text-cream outline-none transition-colors focus:border-accent/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/40">
                      Email
                    </label>
                    <input
                      type="email"
                      className="mt-3 w-full border-b border-white/10 bg-transparent py-3 text-cream outline-none transition-colors focus:border-accent/50"
                      placeholder="you@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/40">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="mt-3 w-full resize-none border-b border-white/10 bg-transparent py-3 text-cream outline-none transition-colors focus:border-accent/50"
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <Button variant="primary" className="mt-10 w-full">
                  Send Message
                </Button>
              </form>
            </Reveal>
          </div>

          {/* ── FAQ ─────────────────────────────────────────────────────── */}
          <div className="mt-32">
            <Reveal className="text-center">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-6 font-display text-3xl text-cream md:text-4xl lg:text-5xl">
                Questions we hear often.
              </h2>
            </Reveal>

            <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/5 md:mt-16">
              {faqs.map((faq, i) => (
                <Reveal key={faq.q} index={i} className="py-6 md:py-8">
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left font-display text-lg text-cream md:text-xl">
                      <span>{faq.q}</span>
                      <span
                        className="mt-1 shrink-0 font-mono text-accent-light transition-transform duration-300 group-open:rotate-45"
                        aria-hidden
                      >
                        +
                      </span>
                    </summary>
                    <p className="mt-4 pr-8 text-sm leading-relaxed text-cream/45 md:text-base">
                      {faq.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
