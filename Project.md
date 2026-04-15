# CLAUDE.md - Transparo Agency Website Development Guide

> **Purpose**: This document serves as the primary reference for AI-assisted development of client websites. Feed this file to Claude Code, Cursor, or any AI coding assistant to ensure consistent, high-quality output across all projects.

---

## 🏢 Project Context

**Agency**: Transparo
**Client**: Significanz
**Project**: Significanz Website Redesign
**Start Date**: December 2024

### Client Brief Summary
- **Business Type**: Executive Coaching & Leadership Consultancy
- **Target Audience**: Corporate executives, international teams, and leaders in transition seeking personal development, cross-cultural competency, and leadership coaching
- **Primary Goal**: Lead generation - get executives to book discovery calls and inquire about coaching services
- **Key Differentiator**: Outdoor coaching in natural environments + nearly 20 years experience + founder's impressive corporate background (Maersk, Lundbeck, Copenhagen Airports, CBS)

### Founder Profile
**Stinne Madsen** - Founder & Executive Coach
- Global HR Director at Folkekirkens Nødhjælp (DanChurchAid)
- Global HR Director at Lundbeck
- Head of Learning & Development at Copenhagen Airports
- HR Consultant at Maersk Group
- Faculty at CBS Executive Fonden
- Certified Psychotherapist & Tech Sociologist
- SingularityU Nordic Executive Programme alumnus

---

## 🎯 Design Philosophy

### Design Direction: Ultra-Minimalist Executive

> "Sophistication is elimination." — Less is more. Every element must earn its place.

This website should feel like a premium, high-end consulting brand. Think Apple meets Aesop. The design communicates confidence through restraint.

### Core Design Principles

**1. Radical Simplicity**
- Maximum whitespace
- One idea per screen
- Typography does the heavy lifting
- No decorative elements that don't serve a purpose
- If in doubt, remove it

**2. Restrained Color Usage**
- Black and white dominate (95% of the visual space)
- Red appears only for critical moments: CTAs, hover states, key accents
- Red should feel like a whisper, not a shout
- When red appears, it commands attention because it's rare

**3. Typography as Design**
- Large, confident headlines
- Generous line-height and letter-spacing
- Contrast through weight and size, not color
- Let the words breathe

**4. Purposeful Animation**
- Subtle, refined micro-interactions
- No flashy transitions
- Animation should feel inevitable, not surprising
- Smooth scroll, gentle fades, understated reveals

**5. Premium Photography**
- High-quality nature imagery (outdoor coaching differentiator)
- Black and white or desaturated imagery
- Portraits of Stinne should feel authentic, not corporate
- Avoid stock photo aesthetics

### Visual References
- Apple.com (restraint, typography, whitespace)
- Aesop.com (sophisticated minimalism)
- Rapha.cc (premium feel, editorial quality)
- Kinfolk magazine aesthetic

---

## 🎨 Design System

### Color Palette
```typescript
// tailwind.config.ts
const colors = {
  // Primary - Black
  black: {
    DEFAULT: '#0A0A0A',
    soft: '#1A1A1A',
    muted: '#2A2A2A',
  },
  // Secondary - White/Off-white
  white: {
    DEFAULT: '#FFFFFF',
    soft: '#FAFAFA',
    warm: '#F5F5F3',
  },
  // Accent - Red (used sparingly)
  red: {
    DEFAULT: '#C41E3A',      // Primary red - elegant, not aggressive
    light: '#E8354D',        // Hover states
    dark: '#9A1830',         // Active states
  },
  // Neutral grays
  gray: {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#E5E5E5',
    300: '#D4D4D4',
    400: '#A3A3A3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  }
}
```

### Color Usage Rules
```
BACKGROUNDS:    white.DEFAULT, white.soft, white.warm
TEXT:           black.DEFAULT (headings), gray.600 (body), gray.400 (captions)
BORDERS:        gray.200 (subtle), black.DEFAULT (strong)
ACCENTS:        red.DEFAULT (CTAs only, hover states, active nav)
```

### Typography
```typescript
// tailwind.config.ts
const fontFamily = {
  // Headings - Clean, modern serif or elegant sans
  heading: ['var(--font-heading)', 'Times New Roman', 'serif'],
  // Body - Highly readable sans-serif
  body: ['var(--font-body)', 'system-ui', 'sans-serif'],
}

// Recommended font pairings:
// Option 1: PP Editorial New (heading) + Inter (body)
// Option 2: Canela (heading) + Söhne (body)  
// Option 3: Freight Display (heading) + Neue Haas Grotesk (body)
// Budget option: Playfair Display (heading) + DM Sans (body)

const fontSize = {
  xs: ['0.75rem', { lineHeight: '1.5' }],
  sm: ['0.875rem', { lineHeight: '1.6' }],
  base: ['1rem', { lineHeight: '1.7' }],
  lg: ['1.125rem', { lineHeight: '1.7' }],
  xl: ['1.25rem', { lineHeight: '1.6' }],
  '2xl': ['1.5rem', { lineHeight: '1.4' }],
  '3xl': ['2rem', { lineHeight: '1.3' }],
  '4xl': ['2.5rem', { lineHeight: '1.2' }],
  '5xl': ['3.5rem', { lineHeight: '1.1' }],
  '6xl': ['4.5rem', { lineHeight: '1.05' }],
  '7xl': ['6rem', { lineHeight: '1' }],
}
```

### Spacing Philosophy
```typescript
// Generous, breathing layouts
const spacing = {
  section: {
    sm: 'py-16 md:py-24',
    md: 'py-24 md:py-32',
    lg: 'py-32 md:py-48',
  },
  container: {
    narrow: 'max-w-2xl',      // ~672px - for text content
    default: 'max-w-4xl',     // ~896px - standard
    wide: 'max-w-6xl',        // ~1152px - for grids
    full: 'max-w-7xl',        // ~1280px - hero sections
  }
}
```

---

## 🛠️ Tech Stack

### Core Framework
```
Next.js 15+ (App Router)
├── TypeScript (strict mode)
├── Tailwind CSS v4
├── Motion (formerly Framer Motion)
├── Lenis (smooth scrolling)
└── React Server Components (default)
```

### Deployment & Hosting
```
Vercel
├── Vercel Postgres (database)
├── Edge Functions
├── Image Optimization (next/image)
├── Analytics
└── Speed Insights
```

### Content Management
```
Payload CMS 3.x
├── Self-hosted on Vercel
├── PostgreSQL database
├── Rich text editor
├── Media management
└── Live preview
```

### Integrations
- **Booking**: Cal.com or Calendly embed
- **Forms**: Formspark (client-side POST to submit-form.com)
- **Analytics**: Vercel Analytics + Google Analytics 4

---

## 📁 Project Structure

```
significanz/
├── app/
│   ├── (site)/
│   │   ├── page.tsx                    # Home
│   │   ├── om-stinne/                  # About Stinne
│   │   │   └── page.tsx
│   │   ├── ydelser/                    # Services overview
│   │   │   ├── page.tsx
│   │   │   ├── executive-coaching/
│   │   │   │   └── page.tsx
│   │   │   ├── outdoor-coaching/
│   │   │   │   └── page.tsx
│   │   │   ├── team-coaching/
│   │   │   │   └── page.tsx
│   │   │   ├── ledelsesudvikling/
│   │   │   │   └── page.tsx
│   │   │   └── cross-culture/
│   │   │       └── page.tsx
│   │   ├── tilgang/                    # Approach/Methodology
│   │   │   └── page.tsx
│   │   ├── kontakt/                    # Contact
│   │   │   └── page.tsx
│   │   └── book/                       # Booking page
│   │       └── page.tsx
│   ├── (payload)/                      # Payload admin
│   │   └── admin/
│   │       └── [[...segments]]/
│   │           └── page.tsx
│   ├── api/
│   │   ├── contact/
│   │   │   └── route.ts
│   │   └── [...payload]/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Container.tsx
│   │   ├── Text.tsx
│   │   └── Link.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTA.tsx
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   └── forms/
│       └── ContactForm.tsx
├── lib/
│   ├── utils.ts
│   └── payload/
│       └── config.ts
├── payload/
│   ├── collections/
│   │   ├── Pages.ts
│   │   ├── Services.ts
│   │   ├── Testimonials.ts
│   │   └── Media.ts
│   └── payload.config.ts
├── public/
│   ├── fonts/
│   └── images/
├── .env.local
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🧩 Component Patterns

### Button Component (Minimalist)
```tsx
// components/ui/Button.tsx
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-black text-white hover:bg-gray-800',
        secondary: 'bg-transparent text-black border border-black hover:bg-black hover:text-white',
        accent: 'bg-red text-white hover:bg-red-dark',
        ghost: 'bg-transparent text-black hover:text-red',
        link: 'bg-transparent text-black underline underline-offset-4 hover:text-red',
      },
      size: {
        sm: 'h-10 px-5 text-sm',
        md: 'h-12 px-8 text-base',
        lg: 'h-14 px-10 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
```

### Container Component
```tsx
// components/ui/Container.tsx
import { cn } from '@/lib/utils'

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: 'narrow' | 'default' | 'wide' | 'full'
}

const sizes = {
  narrow: 'max-w-2xl',
  default: 'max-w-4xl',
  wide: 'max-w-6xl',
  full: 'max-w-7xl',
}

export function Container({ children, className, size = 'default' }: ContainerProps) {
  return (
    <div className={cn('mx-auto px-6 lg:px-8', sizes[size], className)}>
      {children}
    </div>
  )
}
```

### Minimalist Hero
```tsx
// components/sections/Hero.tsx
'use client'

import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { motion } from 'motion/react'

export function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <Container size="wide">
        <div className="max-w-4xl">
          <motion.h1 
            className="font-heading text-5xl md:text-6xl lg:text-7xl text-black tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Unlock your leadership potential
          </motion.h1>
          
          <motion.p 
            className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            Executive coaching that transforms leaders. 
            In nature and in conversation.
          </motion.p>
          
          <motion.div 
            className="mt-12 flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Button variant="primary" size="lg">
              Book en samtale
            </Button>
            <Button variant="secondary" size="lg">
              Se ydelser
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
```

### Minimalist Header
```tsx
// components/layout/Header.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Ydelser', href: '/ydelser' },
  { name: 'Om Stinne', href: '/om-stinne' },
  { name: 'Tilgang', href: '/tilgang' },
  { name: 'Kontakt', href: '/kontakt' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <Container size="full">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="font-heading text-xl tracking-tight">
            Significanz
          </Link>

          {/* Navigation */}
          <ul className="hidden md:flex items-center gap-10">
            {navigation.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-black transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link 
            href="/book"
            className="hidden md:inline-flex text-sm text-red hover:text-red-dark transition-colors duration-300"
          >
            Book samtale
          </Link>

          {/* Mobile menu button */}
          <button className="md:hidden p-2">
            <span className="sr-only">Menu</span>
            <div className="w-6 h-0.5 bg-black mb-1.5" />
            <div className="w-6 h-0.5 bg-black" />
          </button>
        </nav>
      </Container>
    </header>
  )
}
```

---

## 🎬 Animation Patterns (Minimal & Refined)

### Smooth Scroll Setup (Lenis)
```tsx
// app/providers.tsx
'use client'

import { ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return <>{children}</>
}
```

### Fade In Animation
```tsx
// components/animations/FadeIn.tsx
'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function FadeIn({ children, delay = 0, className }: FadeInProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1] 
      }}
    >
      {children}
    </motion.div>
  )
}
```

### Text Reveal (Elegant)
```tsx
// components/animations/TextReveal.tsx
'use client'

import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

interface TextRevealProps {
  children: string
  className?: string
}

export function TextReveal({ children, className }: TextRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <span ref={ref} className={className}>
      <span className="sr-only">{children}</span>
      <motion.span
        aria-hidden
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {children}
      </motion.span>
    </span>
  )
}
```

### Hover Link Underline
```tsx
// components/ui/AnimatedLink.tsx
'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

interface AnimatedLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function AnimatedLink({ href, children, className }: AnimatedLinkProps) {
  return (
    <Link href={href} className={`relative inline-block group ${className}`}>
      {children}
      <motion.span 
        className="absolute bottom-0 left-0 h-px bg-red"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      />
    </Link>
  )
}
```

---

## 📄 Page Content Structure

### Homepage
```
1. HERO
   - Large headline: "Unlock your leadership potential"
   - Subtext: Brief value proposition
   - CTAs: Book samtale + Se ydelser

2. INTRO (brief)
   - 2-3 sentences about Significanz
   - Small photo of Stinne or nature

3. SERVICES OVERVIEW
   - 5 services in clean grid/list
   - Title + one line description each
   - Link to individual pages

4. OUTDOOR COACHING HIGHLIGHT
   - Full-width nature image
   - Headline about outdoor coaching differentiator
   - Brief description

5. ABOUT PREVIEW
   - Photo of Stinne
   - Key credentials (Maersk, Lundbeck, etc.)
   - Link to full bio

6. TESTIMONIAL (single, powerful)
   - One strong quote
   - Name + company

7. CTA SECTION
   - "Klar til at tage næste skridt?"
   - Book button
```

### Service Page Template
```
1. HERO
   - Service name
   - One-sentence description

2. INTRODUCTION
   - What this service is
   - Who it's for

3. APPROACH
   - How Stinne works
   - Methodology/framework

4. OUTCOMES
   - What clients achieve
   - Benefits

5. CTA
   - Book a conversation
```

### About Page (Om Stinne)
```
1. INTRO
   - Professional photo
   - Brief personal statement

2. PHILOSOPHY
   - Her approach to coaching
   - What she believes

3. CREDENTIALS
   - Career history (Maersk, Lundbeck, etc.)
   - Education
   - Certifications

4. PERSONAL
   - Brief personal touch
   - Why she does this work

5. CTA
   - Book conversation
```

---

## 🔍 SEO Configuration

### Metadata
```typescript
// app/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://significanz.dk'),
  title: {
    default: 'Significanz | Executive Coaching & Ledelsesudvikling',
    template: '%s | Significanz',
  },
  description: 'Executive coaching og ledelsesudvikling med Stinne Madsen. Outdoor coaching, cross-culture træning og personlig udvikling for ledere.',
  keywords: [
    'executive coaching',
    'executive coaching Danmark',
    'ledelsesudvikling',
    'outdoor coaching',
    'cross-culture træning',
    'ledercoaching København',
    'coaching for ledere',
  ],
  authors: [{ name: 'Stinne Madsen' }],
  creator: 'Transparo',
  openGraph: {
    type: 'website',
    locale: 'da_DK',
    url: 'https://significanz.dk',
    siteName: 'Significanz',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Significanz - Executive Coaching',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}
```

### JSON-LD Schema
```typescript
// components/JsonLd.tsx
export function LocalBusinessJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Significanz',
    description: 'Executive coaching og ledelsesudvikling',
    url: 'https://significanz.dk',
    telephone: '+45 XX XX XX XX',
    email: 'kontakt@significanz.dk',
    founder: {
      '@type': 'Person',
      name: 'Stinne Madsen',
      jobTitle: 'Executive Coach & Founder',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gudmevej 11',
      addressLocality: 'Kastrup',
      postalCode: '2770',
      addressCountry: 'DK',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Denmark',
    },
    serviceType: [
      'Executive Coaching',
      'Leadership Development',
      'Cross-Cultural Training',
      'Team Coaching',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

---

## ⚡ Performance Targets

### Core Web Vitals
- **LCP**: < 2.0s
- **FID**: < 50ms
- **CLS**: < 0.05

### Lighthouse Targets
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## 🚀 Deployment Checklist

### Pre-Launch
- [ ] All placeholder content replaced
- [ ] Contact form tested
- [ ] Booking integration working
- [ ] Professional email setup (@significanz.dk)
- [ ] Analytics configured
- [ ] Favicon and OG images created
- [ ] Mobile responsive on all pages
- [ ] Cross-browser tested
- [ ] Accessibility audit passed
- [ ] Page speed optimized

### Environment Variables
```bash
# .env.local

# Payload CMS
DATABASE_URI=
PAYLOAD_SECRET=

# Site
NEXT_PUBLIC_SITE_URL=https://significanz.dk

# Forms
NEXT_PUBLIC_FORMSPARK_ID=

# Analytics
NEXT_PUBLIC_GA_ID=
```

---

## 📝 Content Notes

### Tone of Voice
- Professional but warm
- Confident, not aggressive
- Personal, using "jeg" (I)
- Grounded, authentic
- No jargon or buzzwords

### Key Messages to Emphasize
1. **Outdoor coaching** - The unique differentiator
2. **20 years experience** - Credibility
3. **Corporate background** - Maersk, Lundbeck, etc.
4. **Transformation focus** - Results-oriented
5. **Personal approach** - Not a corporate training company

### Photography Direction
- Nature imagery (Danish landscapes, forests, beaches)
- Authentic portraits (not corporate headshots)
- Black and white or desaturated color
- Light, airy, breathing room
- Premium quality, editorial feel

---

## 📦 Package Dependencies

```json
{
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "payload": "^3.0.0",
    "@payloadcms/next": "^3.0.0",
    "@payloadcms/db-postgres": "^3.0.0",
    "@payloadcms/richtext-lexical": "^3.0.0",
    "motion": "^11.0.0",
    "lenis": "^1.1.0",
    "tailwindcss": "^4.0.0",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.2.0",
    "react-hook-form": "^7.50.0",
    "zod": "^3.22.0",
    "@hookform/resolvers": "^3.3.0",
    "resend": "^3.0.0"
  },
  "devDependencies": {
    "typescript": "^5.3.0",
    "@types/node": "^20.0.0",
    "@types/react": "^19.0.0"
  }
}
```

---

## 🔧 Useful Commands

```bash
# Development
pnpm dev                 # Start dev server
pnpm build               # Production build
pnpm start               # Start production server
pnpm lint                # Run ESLint

# Payload CMS
pnpm payload:generate    # Generate Payload types

# Type checking
pnpm typecheck           # Run TypeScript compiler
```

---

*Last updated: December 2024*
*Template version: 2.0 - Significanz*