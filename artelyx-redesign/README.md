# Artelyx Redesign

Premium cinematic landing page for Artelyx Studios — gallery-quality metal wall art.

## Stack

- **React 19** + **TypeScript** + **Vite**
- **Tailwind CSS v4**
- **shadcn/ui** (Button component + design tokens)
- **GSAP** (ScrollTrigger — horizontal showcase, sticky process walkthrough)
- **Framer Motion** (hero parallax, scroll reveals, floating testimonials)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Sections

| Section | Description |
|---------|-------------|
| **Hero** | Full-viewport gallery wall, slow zoom, mouse parallax, two clear CTAs |
| **Showcase** | Horizontal scroll gallery pinned with GSAP ScrollTrigger |
| **Process** | Sticky walkthrough — phone preview updates as you scroll |
| **Gallery** | Pinterest-style masonry layout using real Artelyx product photos |
| **Before/After** | Drag slider comparing original photo vs metal print |
| **About** | Split layout — full-bleed studio image + editorial copy |
| **Testimonials** | Floating cards with marquee background |
| **CTA** | Poster-like fullscreen call to action |
| **Design Assistant** | Floating panel — 3 questions → size/finish/orientation recommendation |

## Images

Product photos live in `public/images/` (copied from the original `images/` folder).

## Build

```bash
npm run build
npm run preview
```
