import { MessageCircle } from 'lucide-react'

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  )
}

const footerLinks = {
  Shop: ['Upload Photo', 'Browse Gallery', 'Pricing', 'Gift Cards'],
  Company: ['About Us', 'Process', 'FAQs', 'Contact'],
  Legal: ['Privacy Policy', 'Terms of Service', 'Returns'],
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-cream/40">
                <div className="h-3 w-3 rotate-45 border border-cream/60" />
              </div>
              <span className="font-serif text-xl tracking-[0.2em] text-cream">
                ARTELYX
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream/40">
              Gallery-quality metal wall art. Turn your favourite photo into a
              luminous, frameless masterpiece.
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://instagram.com/artelyxstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-cream/50 transition-colors hover:border-white/30 hover:text-cream"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center border border-white/10 text-cream/50 transition-colors hover:border-white/30 hover:text-cream"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-medium uppercase tracking-[0.15em] text-cream/60">
                {title}
              </h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-cream/40 transition-colors hover:text-cream"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="text-xs text-cream/30">
            &copy; {new Date().getFullYear()} Artelyx Studios. All rights reserved.
          </p>
          <p className="text-xs text-cream/30">
            Crafted with precision in Kenya
          </p>
        </div>
      </div>
    </footer>
  )
}
