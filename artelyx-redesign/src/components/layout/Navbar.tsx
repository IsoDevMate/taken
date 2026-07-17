import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const homeSections = [
  { label: 'Transformation', href: '#before-after' },
  { label: 'Process', href: '#process' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'FAQ', href: '#faq' },
]

const pageLinks = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Contact', href: '/contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  useEffect(() => {
    if (!isHome) return

    const sections = ['before-after', 'process', 'gallery', 'about', 'faq']
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target.id) {
          setActiveSection(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5] }
    )

    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isHome])

  const navLinks = isHome
    ? [...homeSections, ...pageLinks]
    : [
        { label: 'Home', href: '/' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Process', href: '/how-it-works' },
        { label: 'Contact', href: '/contact' },
      ]

  const linkClass = (href: string) => {
    const isActive = href.startsWith('#')
      ? isHome && activeSection === href
      : location.pathname === href

    return cn(
      'font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300',
      isActive ? 'text-cream' : 'text-cream/45 hover:text-cream'
    )
  }

  const renderLink = (link: { label: string; href: string }) => {
    if (link.href.startsWith('#')) {
      return (
        <a key={link.href} href={link.href} className={linkClass(link.href)}>
          {link.label}
        </a>
      )
    }
    return (
      <Link key={link.href} to={link.href} className={linkClass(link.href)}>
        {link.label}
      </Link>
    )
  }

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled || mobileOpen
            ? 'border-b border-white/5 bg-ink/90 py-3 backdrop-blur-2xl'
            : 'bg-transparent py-4 sm:py-5'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-10">
          <Link to="/" className="group flex items-center gap-2.5 sm:gap-3">
            <div className="flex h-8 w-8 items-center justify-center border border-cream/30 sm:h-9 sm:w-9">
              <div className="h-2.5 w-2.5 rotate-45 border border-cream/50 sm:h-3 sm:w-3" />
            </div>
            <span className="font-display text-lg tracking-[0.2em] text-cream sm:text-xl sm:tracking-[0.25em]">
              ARTELYX
            </span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map(renderLink)}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="primary" size="sm" asChild>
              <Link to="/studio">Restore My Photo</Link>
            </Button>
          </div>

          <button
            type="button"
            className="-mr-1 p-2 text-cream lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col bg-ink/98 backdrop-blur-2xl lg:hidden"
          >
            <div className="flex flex-1 flex-col justify-center gap-7 px-8 pt-20">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.href.startsWith('#') ? (
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block font-display text-3xl text-cream"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="block font-display text-3xl text-cream"
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="border-t border-white/5 p-6">
              <Button variant="primary" size="lg" className="w-full" asChild>
                <Link to="/studio">Restore My Photo</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
