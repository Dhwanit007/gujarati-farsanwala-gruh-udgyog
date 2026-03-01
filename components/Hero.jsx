'use client'
import Image from 'next/image'
import { usePopup } from '../context/PopupContext'

export default function Hero() {
  const { openPopup } = usePopup()
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-24"
      style={{
        background:
          'radial-gradient(ellipse at 15% 60%, rgba(232,132,26,0.18) 0%, transparent 55%), ' +
          'radial-gradient(ellipse at 85% 20%, rgba(201,162,39,0.14) 0%, transparent 50%), ' +
          'linear-gradient(155deg, #3B1A08 0%, #5C2D0E 40%, #7A3D10 100%)',
      }}
    >
      {/* Dot-grid overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(232,132,26,0.35) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="text-center lg:text-left">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
            style={{ background: 'rgba(232,132,26,0.2)', border: '1px solid rgba(232,132,26,0.5)', color: '#E8841A' }}
          >
            🏆 Ahmedabad's Favourite Since 2011
          </span>

          <h1
            className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.08] mb-2"
            style={{ fontFamily: "'Playfair Display', serif", color: '#FDF6E3' }}
          >
            Authentic Gujarati
          </h1>
          <h1
            className="text-4xl sm:text-5xl xl:text-6xl font-black leading-[1.08] mb-5"
            style={{ fontFamily: "'Playfair Display', serif", color: '#E8841A' }}
          >
            Farsan &amp; More
          </h1>

          <p
            className="text-lg italic mb-4 tracking-wide"
            style={{ fontFamily: "'Playfair Display', serif", color: '#F5DFA0' }}
          >
            Taste of Tradition — Straight from Our Home to Yours
          </p>

          <p className="leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0 text-sm sm:text-base" style={{ color: '#C4A882' }}>
            Handcrafted namkeen, crispy khakhras, crunchy rings, mini bhakharwadi, and tangy pickles made
            with love using age-old Gujarati family recipes. No preservatives. No shortcuts. Just pure
            Gujarati goodness — now also available at Reliance stores across Gujarat!
          </p>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a
              href="#products"
              className="px-7 py-3 rounded-lg font-bold text-sm tracking-wider uppercase text-white transition-all"
              style={{ background: 'linear-gradient(135deg,#E8841A,#C4671A)', boxShadow: '0 6px 20px rgba(232,132,26,0.45)' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
            >
              Explore Products
            </a>
            <button
              onClick={openPopup}
              className="px-7 py-3 rounded-lg font-bold text-sm tracking-wider uppercase transition-all"
              style={{ border: '1px solid rgba(201,162,39,0.5)', color: '#F5DFA0' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,162,39,0.12)'; e.currentTarget.style.borderColor = '#C9A227' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(201,162,39,0.5)' }}
            >
              Order Now
            </button>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-3 gap-4 mt-10 pt-8"
            style={{ borderTop: '1px solid rgba(201,162,39,0.2)' }}
          >
            {[
              { num: '13+', label: 'Years of Trust' },
              { num: '19+', label: 'Products' },
              { num: '10K+', label: 'Happy Customers' },
            ].map(s => (
              <div key={s.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#E8841A' }}>{s.num}</div>
                <div className="text-xs tracking-wider uppercase mt-1" style={{ color: '#A08060' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo orb */}
        <div className="flex justify-center items-center order-first lg:order-last">
          <div className="relative">
            {/* Outer spinning ring */}
            <div
              className="absolute inset-0 rounded-full spin-slow pointer-events-none"
              style={{ border: '2px dashed rgba(201,162,39,0.3)', margin: '-20px' }}
            />
            {/* Inner glow ring */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: '1px solid rgba(232,132,26,0.15)',
                margin: '-38px',
                animation: 'spin-slow 50s linear infinite reverse',
              }}
            />
            {/* Glow */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(circle, rgba(232,132,26,0.2) 0%, transparent 70%)', transform: 'scale(1.5)' }}
            />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-yellow-600 shadow-2xl">
              <Image src="/logo.png" alt="Gujarati Farsanwala Gruh Udgyog" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
