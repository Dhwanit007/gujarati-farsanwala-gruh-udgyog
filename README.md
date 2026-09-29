# Gujarati Farsanwala Gruh Udhyog — Next.js Website

A modern, responsive Next.js website for **Gujarati Farsanwala Gruh Udhyog** — authentic Gujarati namkeen, khakhra, pickles and farali snacks since 2011.

## Features
- ✅ Built with **Next.js 14** + Tailwind CSS
- ✅ **Reliance Store popup** (auto-shows 1.8s after load)
- ✅ All 19 real products: Ring, Tikhi Mamri, Mamri, Chat Puri, Methi Puri, Mini Bhakharwadi, Masala Chakri, Bhelpuri, Soya Stick, Methi/Jeera/Masala Khakhra, Kerda/Gunda/Chana Methi/Chhundo/Green Chilli/Amba Halder Pickle, Sabudana Farali Chevdo
- ✅ Image placeholders ready — just drop images in `/public/products/`
- ✅ Sticky navbar, hero, marquee, about, product tabs, why-us, testimonials, contact form, footer
- ✅ Fully responsive (mobile + tablet + desktop)
- ✅ Framer Motion ready for animations

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## Adding Product Images

Images render **automatically** — no code changes needed:

1. Drop an image into `/public/products/`
2. Name it after the product, lowercase with dashes instead of spaces, e.g.:
   | Product | Filename |
   |---|---|
   | Ring | `ring.jpg` |
   | Tikhi Mamri | `tikhi-mamri.jpg` |
   | Mini Bhakharwadi | `mini-bhakharwadi.png` |
   | Sabudana Farali Chevdo | `sabudana-farali-chevdo.jpg` |

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`. The dev server picks up new images on restart (`npm run dev`); a production build needs `npm run build` again. Products without an image keep the emoji placeholder.

## Project Structure

```
gfgu/
├── components/
│   ├── Navbar.jsx          # Sticky responsive navbar
│   ├── Hero.jsx            # Full-screen hero with logo orb
│   ├── MarqueeStrip.jsx    # Scrolling product ticker
│   ├── About.jsx           # Brand story section
│   ├── Products.jsx        # Tabbed product grid
│   ├── WhyUs.jsx           # Feature cards section
│   ├── Testimonials.jsx    # Customer reviews
│   ├── Contact.jsx         # Enquiry form + contact info
│   ├── Footer.jsx          # Footer with links
│   └── ReliancePopup.jsx   # 🏪 Gujarat / Reliance Store popup
├── data/
│   └── products.js         # All 19 product definitions
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.js            # Main page
├── public/
│   └── logo.png            # Brand logo
├── styles/
│   └── globals.css         # Tailwind + custom styles
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Customisation

- **Colors**: Edit CSS variables in `styles/globals.css`
- **Products**: Edit `data/products.js`
- **Contact details**: Edit `components/Contact.jsx`
- **Popup**: Edit `components/ReliancePopup.jsx`
- **Social links**: Update Instagram/WhatsApp URLs in Contact and Footer

## Deploy

```bash
# Build for production
npm run build

# Or deploy to Vercel (recommended)
npx vercel
```
