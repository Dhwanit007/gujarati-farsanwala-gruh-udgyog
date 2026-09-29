import Image from 'next/image'
import { Instagram, Phone, Mail, MapPin } from 'lucide-react'
import { FiHeart } from 'react-icons/fi'

export default function Footer() {
  const productLinks = [
    ['All Products', '#products'],
    ['Namkeen', '#products-namkeen'],
    ['Khakhra', '#products-khakhra'],
    ['Pickles', '#products-pickles'],
    ['Farali Special', '#products-farali'],
  ]

  const quickLinks = [
    ['About Us', '#about'],
    ['Products', '#products'],
    ['Why Choose Us', '#why-us'],
    ['Contact & Order', '#contact'],
    ['Enquiries', '#contact'],
    ['Bulk Orders', '#contact'],
  ]

  return (
    <footer className="relative text-[#A08060]" style={{ background: '#3B1A08' }}>
      <div className="rangoli-stripe" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-12 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4" style={{ border: '2px solid #C9A227' }}>
                <Image src="/logo.png" alt="Gujarati Farsanwala Gruh Udhyog logo" fill className="object-cover" />
              </div>
              <h3 className="text-lg font-black leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#F5DFA0' }}>
                Gujarati Farsanwala<br />Gruh Udhyog
              </h3>
            </div>

            <p className="max-w-sm text-xs leading-relaxed mt-3 mb-4" style={{ color: '#A08060' }}>
              Bringing authentic Gujarati flavours to your doorstep since 2011.
              Handcrafted namkeen, khakhra, pickles and farali specials — made
              with love, tradition, and the finest ingredients.
            </p>

            <div className="flex flex-col gap-2 text-xs mb-5" style={{ color: '#A08060' }}>
              <span className="inline-flex items-center gap-2"><MapPin size={14} style={{ color: '#E8841A' }} /> Ahmedabad, Gujarat, India</span>
              <span className="inline-flex items-center gap-2"><Phone size={14} style={{ color: '#E8841A' }} /> +91 98785 04950</span>
              <span className="inline-flex items-center gap-2"><Mail size={14} style={{ color: '#E8841A' }} /> gujaratifarsanwala2011@gmail.com</span>
            </div>

            <a href="https://www.instagram.com/gujaratifarsanwala/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-bold" style={{ color: '#E8841A' }}>
              <Instagram size={14} /> @gujaratifarsanwala
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#F5DFA0' }}>Products</h4>
            <ul className="space-y-3 text-sm">
              {productLinks.map(([label, href]) => (
                <li key={label}><a href={href} className="transition-colors hover:text-[#E8841A]">{label}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#F5DFA0' }}>Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map(([label, href]) => (
                <li key={label}><a href={href} className="transition-colors hover:text-[#E8841A]">{label}</a></li>
              ))}
            </ul>

            <a href="#contact" className="block mt-6 rounded-lg px-3 py-2.5" style={{ background: 'rgba(232,132,26,0.08)', border: '1px solid rgba(232,132,26,0.35)' }}>
              <span className="flex items-center gap-1.5 text-xs font-bold" style={{ color: '#F5DFA0' }}><MapPin size={13} /> In Gujarat?</span>
              <span className="block text-[11px] mt-1" style={{ color: '#C4A882' }}>Find us at your nearest SMART BAZAAR store!</span>
            </a>
          </div>
        </div>

        <div className="mt-10 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs" style={{ borderTop: '1px solid rgba(245,223,160,0.12)' }}>
          <span>© {new Date().getFullYear()} Gujarati Farsanwala Gruh Udhyog. All rights reserved.</span>
          <span className="inline-flex items-center gap-4">
              <a href="/privacy-policy" className="underline underline-offset-2 hover:text-[#E8841A]">Privacy Policy</a>
              <a href="/terms-of-service" className="underline underline-offset-2 hover:text-[#E8841A]">Terms of Service</a>
            <span className="inline-flex items-center gap-1">Made with <FiHeart className="text-red-400" /> in Ahmedabad</span>
          </span>
        </div>
      </div>
    </footer>
  )
}