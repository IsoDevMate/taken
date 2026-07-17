export type PricingTier = {
  size: string
  label: string
  price: string
  description: string
  featured?: boolean
}

export const pricingTiers: PricingTier[] = [
  {
    size: '30 × 45 cm',
    label: 'Compact',
    price: 'KES 4,500',
    description: 'Perfect for hallways, desks, and intimate spaces.',
  },
  {
    size: '50 × 70 cm',
    label: 'Standard',
    price: 'KES 8,500',
    description: 'Our most popular size. Ideal for bedrooms and offices.',
    featured: true,
  },
  {
    size: '60 × 90 cm',
    label: 'Statement',
    price: 'KES 12,500',
    description: 'Command attention above a sofa or dining table.',
  },
  {
    size: '90 × 120 cm',
    label: 'Gallery',
    price: 'KES 18,500',
    description: 'Museum-scale presence for living rooms and lobbies.',
  },
]

export const materialFeatures = [
  {
    title: 'Premium Aluminium',
    description:
      '1.5mm brushed aluminium substrate with a luminous, frameless finish that catches every ray of light.',
  },
  {
    title: 'UV-Resistant Inks',
    description:
      'Archival-grade dye sublimation ensures colours stay vivid for decades without fading.',
  },
  {
    title: 'Float Mount System',
    description:
      'Hidden aluminium brackets create a floating effect, sitting 15mm off the wall.',
  },
  {
    title: 'Hand-Finished Edges',
    description:
      'Every print is inspected and finished by hand in our Nairobi studio.',
  },
] as const

export const faqs = [
  {
    q: 'What resolution does my photo need?',
    a: 'We recommend at least 300 DPI at your chosen print size. Our studio tool checks this automatically when you upload.',
  },
  {
    q: 'How long does delivery take?',
    a: 'Standard orders ship within 5–7 business days. Express delivery is available in Nairobi within 48 hours.',
  },
  {
    q: 'Can I preview before ordering?',
    a: 'Yes. Our studio lets you crop, refine, and preview your print in a room mockup before checkout.',
  },
  {
    q: 'What finishes are available?',
    a: 'Choose between a matte finish for subtle elegance or a gloss finish for maximum vibrancy and depth.',
  },
] as const
