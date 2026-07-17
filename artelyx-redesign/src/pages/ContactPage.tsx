import { MessageCircle, Mail, MapPin } from 'lucide-react'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/button'

export function ContactPage() {
  return (
    <div className="min-h-screen bg-ink pt-28">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-32">
        <div className="grid gap-20 lg:grid-cols-2">
          <Reveal>
            <SectionLabel>Contact</SectionLabel>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-cream md:text-6xl">
              We're here to{' '}
              <span className="italic text-accent-light">help.</span>
            </h1>
            <p className="mt-8 max-w-md leading-relaxed text-cream/45">
              Questions about sizing, finishes, or your order? Reach out —
              we typically respond within a few hours.
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
      </div>
    </div>
  )
}
