import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'group relative inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-sans text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'gradient-border bg-white/[0.06] text-cream backdrop-blur-md hover:bg-white/[0.1] hover:shadow-[0_0_40px_rgba(168,180,192,0.12)] active:scale-[0.98]',
        primary:
          'bg-accent text-ink hover:bg-accent-light hover:shadow-[0_0_50px_rgba(168,180,192,0.25)] active:scale-[0.98]',
        outline:
          'border border-white/15 bg-transparent text-cream hover:border-accent/40 hover:bg-white/[0.04]',
        ghost:
          'text-cream/60 hover:text-cream hover:bg-white/[0.04]',
        link:
          'text-accent-light underline-offset-4 hover:text-cream hover:underline',
      },
      size: {
        default: 'h-12 px-7',
        sm: 'h-10 px-5 text-xs tracking-wide',
        lg: 'h-14 px-10 text-base tracking-wide',
        icon: 'h-11 w-11',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
