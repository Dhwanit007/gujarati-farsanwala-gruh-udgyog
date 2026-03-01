# Gujarati Farsanwala Gruh Udgyog — Next.js Website

A modern, responsive Next.js website for **Gujarati Farsanwala Gruh Udgyog** — authentic Gujarati namkeen, khakhra, pickles and farali snacks since 2011.

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

When you have images ready:

1. Place images in `/public/products/` folder (e.g., `/public/products/ring.jpg`)
2. In `data/products.js`, add an `image` field to each product:
   ```js
   { id: 1, ..., image: '/products/ring.jpg' }
   ```
3. In `components/Products.jsx`, replace the `<span>` emoji with:
   ```jsx
   <Image src={product.image} alt={product.name} fill className="object-cover" />
   ```

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
