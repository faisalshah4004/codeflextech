# Codeflextech — Agency Website

Official website for **Codeflextech**, a full-service IT agency delivering software development, design, SEO, and dedicated engineering teams to businesses worldwide.

🌐 **Live:** [codeflextech.com](https://codeflextech.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Syne (display) + DM Sans (body) |
| Notifications | Sonner |
| Deployment | Vercel |

---

## Project Structure

```
codeflextech/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # Root layout — Navbar, Footer, WhatsApp
│   ├── globals.css             # Global styles, CSS variables
│   ├── page.tsx                # Home page
│   ├── about/
│   │   ├── page.tsx            # Server component (metadata)
│   │   └── AboutClient.tsx     # Client component (animations)
│   ├── services/
│   │   ├── page.tsx
│   │   └── ServicesClient.tsx
│   ├── hire-a-team/
│   │   └── page.tsx
│   ├── portfolio/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav, mobile menu, active link detection
│   │   └── Footer.tsx          # Footer links, social icons
│   └── shared/
│       ├── SectionLabel.tsx    # Reusable section label pill
│       └── WhatsAppButton.tsx  # Fixed floating WhatsApp button
│
├── hooks/                      # Custom React hooks
├── lib/                        # Utility functions
├── public/                     # Static assets (images, icons)
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero, services, stats, portfolio preview, testimonials, CTA |
| `/services` | All 9 services with process section |
| `/hire-a-team` | Team augmentation — roles, engagement models, how it works |
| `/portfolio` | 6 case studies with metrics |
| `/about` | Story, values, team, location |
| `/contact` | Multi-service form, sidebar info, WhatsApp link |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/codeflextech/codeflextech-website.git
cd codeflextech-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

---

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# Site
NEXT_PUBLIC_SITE_URL=https://codeflextech.com

# WhatsApp (your number with country code, no + or spaces)
NEXT_PUBLIC_WHATSAPP_NUMBER=923001234567

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/codeflextech/discovery

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Key Conventions

### Server vs Client Components

This project follows Next.js App Router conventions:

- **Server components** (`page.tsx`) — handle metadata exports only, no hooks
- **Client components** (`*Client.tsx`) — handle all UI, animations, and interactivity

```tsx
// page.tsx — server component
import type { Metadata } from 'next'
import ServicesClient from './ServicesClient'

export const metadata: Metadata = { title: '...' }

export default function ServicesPage() {
  return <ServicesClient />
}
```

```tsx
// ServicesClient.tsx — client component
'use client'

export default function ServicesClient() {
  // framer-motion, useState, useEffect all fine here
}
```

### Import Aliases

All internal imports use the `@/` alias (configured in `tsconfig.json`):

```tsx
import Navbar from '@/components/layout/Navbar'
import { SectionLabel } from '@/components/shared/SectionLabel'
```

### Link Navigation

Always use Next.js `Link` — never TanStack Router or React Router:

```tsx
import Link from 'next/link'

<Link href="/contact">Get a Quote</Link>
```

### Active Route Detection

Use `usePathname()` from `next/navigation` for active link styling:

```tsx
import { usePathname } from 'next/navigation'

const pathname = usePathname()
// pathname === '/services' → apply active class
```

---

## Services Offered

1. Software Development (PHP, Laravel, Node.js)
2. Mobile App Development (Flutter, React Native)
3. Graphic Design (Branding, Print, Digital)
4. Video Animation (2D, Motion Graphics)
5. SEO (On-Page, Technical, Local)
6. SEO Content Writing
7. Social Media Marketing
8. Google Ads Management
9. Dedicated Teams / Team Augmentation

---

## Deployment

This project is deployed on **Hostinger** 

### Deploy your own

[![Deploy with Hostinger](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/codeflextech/codeflextech-website)

1. Push to GitHub
2. Import repo at [Hostinger](https://hostinger.com)
3. Add environment variables in Vercel dashboard
4. Deploy — done

### Custom domain

In Vercel dashboard → Project → Settings → Domains → Add `codeflextech.com`

---

## Roadmap

- [ ] `/products` — Showcase 3 internal products
- [ ] `/careers` — Job listings and application form
- [ ] `/blog` — Content hub for SEO
- [ ] `/blog/[slug]` — Individual blog posts (Sanity CMS)
- [ ] `/services/[slug]` — Dedicated page per service
- [ ] `/case-studies/[slug]` — Deep dive project pages
- [ ] `/pricing` — Transparent pricing tiers
- [ ] Contact form backend (Resend API)
- [ ] Google Analytics 4 integration
- [ ] Sitemap + robots.txt (next-sitemap)

---

## Contact

**Codeflextech**
- 🌐 [codeflextech.com](https://codeflextech.com)
- 📧 hello@codeflextech.com
- 💼 [LinkedIn](https://linkedin.com/company/codeflextech)
- 💬 [WhatsApp](https://wa.me/923216808401)
- 📍 Faisalabad, Pakistan (PKT — UTC+5)

---

© 2025 Codeflextech. All rights reserved.