import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Gallery', href: '#gallery' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-ink/80 backdrop-blur-xl border-b border-white/5 py-3'
            : 'bg-transparent py-6'
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8">
          <a href="#" className="group flex items-center gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center border border-cream/40">
              <div className="h-3 w-3 rotate-45 border border-cream/60" />
            </div>
            <span className="font-serif text-xl tracking-[0.2em] text-cream">
              ARTELYX
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-medium uppercase tracking-[0.15em] text-cream/60 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button variant="ghost" size="sm" className="uppercase tracking-wider">
              Sign In
            </Button>
            <Button size="sm" className="uppercase tracking-wider">
              Upload Photo
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden text-cream"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink/95 backdrop-blur-xl md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-serif text-3xl text-cream"
              >
                {link.label}
              </a>
            ))}
            <Button size="lg" className="mt-4 uppercase tracking-wider">
              Upload Photo
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
