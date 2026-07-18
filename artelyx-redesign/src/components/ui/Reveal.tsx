import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

const variants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

interface RevealProps {
  children: React.ReactNode
  className?: string
  index?: number
  as?: 'div' | 'section' | 'article'
}

export function Reveal({
  children,
  className,
  index = 0,
  as = 'div',
}: RevealProps) {
  const Component = motion[as]

  return (
    <Component
      custom={index}
      initial="hidden"
      whileInView="visible"
      // amount: 0 means trigger as soon as any part of the element enters the viewport.
      // once: true so it only animates in once, not on every scroll.
      // No negative margin — negative margins cause elements at the top of a freshly
      // navigated page to be considered "out of view" and never animate in.
      viewport={{ once: true, amount: 0 }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </Component>
  )
}
