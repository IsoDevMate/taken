export const images = {
  hero: '/images/Screenshot_20260716_021500_Instagram.jpg',
  galleryWall: '/images/Screenshot_20260716_021520_Instagram.jpg',
  studio1: '/images/Screenshot_20260716_201449_Instagram.jpg',
  studio2: '/images/Screenshot_20260716_201455_Instagram.jpg',
  studio3: '/images/Screenshot_20260716_201500_Instagram.jpg',
  studio4: '/images/Screenshot_20260716_201504_Instagram.jpg',
  studio5: '/images/Screenshot_20260716_201512_Instagram.jpg',
  studio6: '/images/Screenshot_20260716_201514_Instagram.jpg',
  product1: '/images/Screenshot_20260716_021537_Instagram.jpg',
  product2: '/images/Screenshot_20260716_021547_Instagram.jpg',
  product3: '/images/Screenshot_20260716_021653_Instagram.jpg',
  product4: '/images/Screenshot_20260716_021712_Instagram.jpg',
  print1: '/images/Screenshot_20260716_202935_Instagram.jpg',
  print2: '/images/Screenshot_20260716_202940_Instagram.jpg',
  print3: '/images/Screenshot_20260716_202944_Instagram.jpg',
  print4: '/images/Screenshot_20260716_202946_Instagram.jpg',
  print5: '/images/Screenshot_20260716_202949_Instagram.jpg',
  print6: '/images/Screenshot_20260716_203003_Instagram.jpg',
  print7: '/images/Screenshot_20260716_203006_Instagram.jpg',
  print8: '/images/Screenshot_20260716_203009_Instagram.jpg',
  print9: '/images/Screenshot_20260716_203015_Instagram.jpg',
  print10: '/images/Screenshot_20260716_203020_Instagram.jpg',
  print11: '/images/Screenshot_20260716_203023_Instagram.jpg',
  print12: '/images/Screenshot_20260716_203040_Instagram.jpg',
  print13: '/images/Screenshot_20260716_203057_Instagram.jpg',
  print14: '/images/Screenshot_20260716_203103_Instagram.jpg',
  print15: '/images/Screenshot_20260716_203107_Instagram.jpg',
  print16: '/images/Screenshot_20260716_203111_Instagram.jpg',
  print17: '/images/Screenshot_20260716_203116_Instagram.jpg',
  print18: '/images/Screenshot_20260716_203120_Instagram.jpg',
  showcase1: '/images/Screenshot_20260716_203511_Instagram.jpg',
  showcase2: '/images/Screenshot_20260716_203513_Instagram.jpg',
  showcase3: '/images/Screenshot_20260716_203516_Instagram.jpg',
  showcase4: '/images/Screenshot_20260716_203519_Instagram.jpg',
} as const

export const galleryItems = [
  { src: images.studio1, alt: 'Typography portrait metal print', span: 'tall' },
  { src: images.product1, alt: 'Gallery wall installation', span: 'wide' },
  { src: images.print6, alt: 'Custom metal print', span: 'normal' },
  { src: images.studio3, alt: 'Studio showcase', span: 'tall' },
  { src: images.print12, alt: 'Metal wall art', span: 'normal' },
  { src: images.product3, alt: 'Premium print display', span: 'wide' },
  { src: images.print15, alt: 'Aluminium print', span: 'normal' },
  { src: images.showcase1, alt: 'Finished metal print', span: 'tall' },
  { src: images.print9, alt: 'Custom artwork', span: 'normal' },
  { src: images.studio6, alt: 'Artelyx studio piece', span: 'wide' },
  { src: images.print17, alt: 'Wall art collection', span: 'normal' },
  { src: images.product4, alt: 'Gallery installation', span: 'tall' },
] as const

export const showcaseProducts = [
  { src: images.studio1, title: 'Typography Portrait', size: '60 × 60 cm' },
  { src: images.showcase1, title: 'Scriptural Quote', size: '40 × 60 cm' },
  { src: images.product1, title: 'Gallery Collection', size: '90 × 60 cm' },
  { src: images.studio3, title: 'Studio Original', size: '50 × 70 cm' },
  { src: images.print12, title: 'Custom Portrait', size: '45 × 65 cm' },
  { src: images.showcase4, title: 'Limited Edition', size: '80 × 50 cm' },
] as const

export const processSteps = [
  {
    step: '01',
    title: 'Send us your photograph',
    description:
      'Upload a scan or photo of your old image — even phone photos of faded originals work. We assess every detail.',
    icon: 'upload',
  },
  {
    step: '02',
    title: 'We restore every detail',
    description:
      'Our artists repair fading, scratches, tears, and damage by hand. Nothing is automated — every restoration is personal.',
    icon: 'crop',
  },
  {
    step: '03',
    title: 'Printed on premium metal',
    description:
      'Your restored image is dye-sublimated onto brushed aluminium — luminous, frameless, and built to last generations.',
    icon: 'eye',
  },
  {
    step: '04',
    title: 'Delivered ready to display',
    description:
      'Float-mounted and hand-finished in our Nairobi studio. On your wall within 5–7 business days.',
    icon: 'check',
  },
] as const

export const testimonials = [
  {
    quote: 'The quality exceeded every expectation. It looks like it belongs in a gallery, not just my living room.',
    author: 'Sarah M.',
    location: 'Nairobi',
    rating: 5,
  },
  {
    quote: 'Uploaded a family photo and had it on my wall within a week. The metal finish catches light beautifully.',
    author: 'James K.',
    location: 'Mombasa',
    rating: 5,
  },
  {
    quote: 'Finally found a print service that treats your memories like art. Artelyx is in a league of its own.',
    author: 'Amina O.',
    location: 'Kisumu',
    rating: 5,
  },
] as const
