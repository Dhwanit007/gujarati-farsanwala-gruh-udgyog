import Image from 'next/image'
import { Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#3B1A08', color: '#A08060' }}>
      <div className="rangoli-stripe" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
        {/* Brand */}
        <div>
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 mb-3" style={{ borderColor: '#C9A227' }}>
            <Image src="/logo.png" alt="Logo" fill className="object-cover" />
          </div>
          <div className="text-base font-bold mb-1" style={{ fontFamily: "'Playfair Display', serif", color: '#F5DFA0' }}>
            Gujarati Farsanwala<br />Gruh Udgyog
          </div>
          <p className="text-xs leading-relaxed mt-2" style={{ color: '#7A5C40' }}>
            Bringing authentic Gujarati flavours to your doorstep since 2011. Made with love, tradition, and the finest ingredients.
          </p>
          <a
            href="https://www.instagram.com/gujaratifarsanwala/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-xs transition-colors"
            style={{ color: '#E8841A' }}
            onMouseEnter={e => e.currentTarget.style.color = '#F5DFA0'}
            onMouseLeave={e => e.currentTarget.style.color = '#E8841A'}
          >
            <Instagram size={14} />
            @gujaratifarsanwala
          </a>
        </div>

        {/* Products */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#F5DFA0' }}>Products</h4>
          <ul className="space-y-2 text-sm" style={{ color: '#7A5C40' }}>
            {['Ring & Mamri', 'Chat Puri & Methi Puri', 'Mini Bhakharwadi', 'Masala Chakri', 'Methi / Jeera / Masala Khakhra', 'Kerda & Gunda Pickle', 'Chhundo & Chana Methi', 'Sabudana Farali Chevdo', 'Soya Stick'].map(p => (
              <li key={p}>
                <a href="#products" className="hover:text-saffron transition-colors" onMouseEnter={e => e.target.style.color = '#E8841A'} onMouseLeave={e => e.target.style.color = '#7A5C40'}>{p}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#F5DFA0' }}>Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[['About Us', '#about'], ['Products', '#products'], ['Why Choose Us', '#why-us'], ['Reviews', '#testimonials'], ['Contact & Order', '#contact']].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="transition-colors" style={{ color: '#7A5C40' }} onMouseEnter={e => e.target.style.color = '#E8841A'} onMouseLeave={e => e.target.style.color = '#7A5C40'}>{label}</a>
              </li>
            ))}
          </ul>
          <div className="mt-6 p-3 rounded-lg text-xs" style={{ background: 'rgba(232,132,26,0.1)', border: '1px solid rgba(232,132,26,0.2)', color: '#C4A882' }}>
            🏪 <strong style={{ color: '#F5DFA0' }}>In Gujarat?</strong><br />
            Find us at your nearest Reliance Smart / Fresh store!
          </div>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)', color: '#5A3C28' }}
      >
        <span>© {new Date().getFullYear()} Gujarati Farsanwala Gruh Udgyog. All rights reserved.</span>
        <span>Made with ❤️ in Ahmedabad, Gujarat 🇮🇳</span>
      </div>
    </footer>
  )
}
