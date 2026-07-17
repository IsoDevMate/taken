import { motion, type Variants } from 'framer-motion'
import { cn } from '@/lib/utils'

const variants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.9,
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
      viewport={{ once: true, margin: '-80px' }}
      variants={variants}
      className={cn(className)}
    >
      {children}
    </Component>
  )
}
