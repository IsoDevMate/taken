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
    q: 'How long does restoration take?',
    a: 'Most restorations are completed within 5–7 business days. Complex damage may take slightly longer — we will always confirm the timeline before starting.',
  },
  {
    q: 'Can you repair torn or heavily damaged photos?',
    a: 'Yes. We regularly restore torn, water-damaged, and heavily faded photographs. Send us what you have — even a phone photo of the original — and we will assess what is possible.',
  },
  {
    q: 'What if I only have a phone photo of the original?',
    a: 'That is more common than you might think. Send us the best image you have via upload or WhatsApp. We will evaluate quality and advise on what restoration can achieve.',
  },
  {
    q: 'What sizes and finishes do you offer?',
    a: 'Sizes range from 30 × 45 cm to 90 × 120 cm. Choose matte for subtle elegance or gloss for maximum vibrancy. All prints include float-mount hardware.',
  },
  {
    q: 'Do you ship outside Nairobi?',
    a: 'Yes — we ship nationwide across Kenya. Free delivery within Nairobi. Secure packaging ensures your print arrives safely.',
  },
] as const
