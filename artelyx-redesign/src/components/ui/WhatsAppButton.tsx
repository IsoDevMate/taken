import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

const WHATSAPP_NUMBER = '254700000000'
const WHATSAPP_MESSAGE =
  "Hi Artelyx! I'd like to restore one of my old photographs."

export function WhatsAppButton({ className }: { className?: string }) {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={cn(
        'fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 active:scale-95 md:bottom-6 md:right-6 md:h-16 md:w-16',
        className
      )}
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" strokeWidth={0} />
    </a>
  )
}
