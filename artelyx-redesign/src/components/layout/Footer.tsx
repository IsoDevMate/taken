import { Link } from 'react-router-dom'
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
  Explore: [
    { label: 'Gallery', href: '/gallery' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Materials', href: '/materials' },
    { label: 'Pricing', href: '/pricing' },
  ],
  Studio: [
    { label: 'Upload Photo', href: '/studio' },
    { label: 'My Account', href: '/account' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/contact' },
    { label: 'Terms of Service', href: '/contact' },
    { label: 'Returns', href: '/contact' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center border border-cream/30">
                <div className="h-3 w-3 rotate-45 border border-cream/50" />
              </div>
              <span className="font-display text-xl tracking-[0.25em] text-cream">
                ARTELYX
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/40">
              Gallery-quality metal wall art. Turn your favourite photo into a
              luminous, frameless masterpiece.
            </p>
            <div className="mt-8 flex gap-3">
              <a
                href="https://instagram.com/artelyxstudios"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-cream/50 transition-all duration-300 hover:border-accent/40 hover:text-cream"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href="/contact"
                className="flex h-11 w-11 items-center justify-center border border-white/10 text-cream/50 transition-all duration-300 hover:border-accent/40 hover:text-cream"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-cream/50">
                {title}
              </h4>
              <ul className="mt-5 space-y-3.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-cream/35 transition-colors duration-300 hover:text-cream"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-10 md:flex-row">
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
