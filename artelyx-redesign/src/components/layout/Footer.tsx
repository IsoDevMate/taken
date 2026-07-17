import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const WHATSAPP_HREF =
  'https://wa.me/254700000000?text=' +
  encodeURIComponent("Hi Artelyx! I'd like to restore one of my old photographs.")

export function Footer() {
  return (
    <footer id="contact" className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-6 lg:px-10 lg:py-28">
        <div className="text-center">
          <p className="font-display text-[clamp(3rem,15vw,10rem)] leading-none tracking-[0.05em] text-cream/90">
            ARTELYX
          </p>
          <p className="mx-auto mt-6 max-w-md text-base text-cream/40 sm:text-lg">
            Every memory deserves to be remembered beautifully.
          </p>
          <Button variant="primary" size="lg" className="mt-10 w-full sm:w-auto" asChild>
            <Link to="/studio">
              Restore My Photo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/5 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/50">
              Navigate
            </h4>
            <ul className="mt-4 space-y-3">
              {[
                { label: 'Transformation', href: '/#before-after' },
                { label: 'Process', href: '/#process' },
                { label: 'Gallery', href: '/gallery' },
                { label: 'Pricing', href: '/pricing' },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-sm text-cream/35 transition-colors hover:text-cream"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/50">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-cream/35">
              <li>
                <a href="mailto:hello@artelyx.studio" className="hover:text-cream">
                  hello@artelyx.studio
                </a>
              </li>
              <li>+254 700 000 000</li>
              <li>Mon–Sat, 9am–6pm EAT</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/50">
              WhatsApp
            </h4>
            <p className="mt-4 text-sm leading-relaxed text-cream/35">
              The fastest way to send us your photo for restoration.
            </p>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-[#25D366] transition-opacity hover:opacity-80"
            >
              <MessageCircle className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/50">
              Follow
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href="https://instagram.com/artelyxstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-cream/50 transition-colors hover:border-accent/40 hover:text-cream"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-[#25D366] transition-colors hover:border-[#25D366]/50"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" fill="currentColor" strokeWidth={0} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-8 sm:flex-row">
          <p className="font-mono text-[11px] text-cream/25">
            &copy; {new Date().getFullYear()} Artelyx Studios
          </p>
          <p className="font-mono text-[11px] text-cream/25">
            Crafted with precision in Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}
