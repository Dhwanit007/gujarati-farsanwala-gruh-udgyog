'use client'
import { useState } from 'react'
import { products, categories } from '../data/products'
import { ShoppingCart } from 'lucide-react'
import { usePopup } from '../context/PopupContext'

function ProductCard({ product }) {
  const { openPopup } = usePopup()
  return (
    <div
      className="product-card-hover bg-white rounded-2xl overflow-hidden shadow-sm border cursor-pointer"
      style={{ borderColor: 'rgba(59,26,8,0.08)' }}
    >
      {/* Image placeholder area */}
      <div
        className={`relative h-44 flex items-center justify-center bg-gradient-to-br ${product.color}`}
      >
        <span className="text-6xl select-none" style={{ filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.15))' }}>
          {product.emoji}
        </span>
        {/* Image will go here later */}
        <div
          className="absolute inset-0 flex items-end justify-end p-3 pointer-events-none"
          style={{ background: 'linear-gradient(to top, rgba(255,255,255,0.6) 0%, transparent 40%)' }}
        />
        {product.badge && (
          <span
            className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-xs font-bold text-white"
            style={{
              background:
                product.badge.includes('Spicy') || product.badge.includes('🔥') ? '#A0391A'
                : product.badge === 'Popular' || product.badge === 'Best Seller' || product.badge === 'Favourite' ? '#E8841A'
                : product.badge === 'Healthy' || product.badge === 'Vrat Special' ? '#4A7C59'
                : '#C9A227',
            }}
          >
            {product.badge}
          </span>
        )}
        {/* Placeholder text for image */}
        <span
          className="absolute bottom-2 left-0 right-0 text-center text-xs font-medium opacity-50"
          style={{ color: '#5C3D1A' }}
        >
          Image coming soon
        </span>
      </div>

      <div className="p-4">
        <h3 className="font-black text-base mb-1.5" style={{ fontFamily: "'Playfair Display', serif", color: '#3B1A08' }}>
          {product.name}
        </h3>
        <p className="text-xs leading-relaxed mb-3" style={{ color: '#8B6B55' }}>
          {product.desc}
        </p>
        <button
          className="w-full flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold tracking-wider uppercase transition-all"
          style={{ background: '#3B1A08', color: '#F5DFA0' }}
          onMouseEnter={e => { e.currentTarget.style.background = '#E8841A'; e.currentTarget.style.color = 'white' }}
          onMouseLeave={e => { e.currentTarget.style.background = '#3B1A08'; e.currentTarget.style.color = '#F5DFA0' }}
          onClick={openPopup}
        >
          <ShoppingCart size={13} />
          Enquire / Order
        </button>
      </div>
    </div>
  )
}

export default function Products() {
  const [active, setActive] = useState('namkeen')

  const filtered = products.filter(p => p.category === active)

  return (
    <section id="products" className="py-20 px-4 sm:px-6" style={{ background: '#FFFBF2' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#E8841A' }}>Our Products</span>
          <h2 className="text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#3B1A08' }}>
            Pure Gujarati <em className="italic" style={{ color: '#E8841A' }}>Delights</em>
          </h2>
          <div className="w-14 h-0.5 mx-auto mt-3 rounded" style={{ background: 'linear-gradient(90deg,#E8841A,#C9A227)' }} />
          <p className="mt-3 text-sm" style={{ color: '#8B6B55' }}>
            All products crafted fresh with traditional recipes — images coming soon!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="px-5 py-2.5 rounded-full text-sm font-bold transition-all border-2"
              style={{
                background: active === cat.id ? '#E8841A' : 'transparent',
                borderColor: active === cat.id ? '#E8841A' : 'rgba(59,26,8,0.18)',
                color: active === cat.id ? 'white' : '#3B1A08',
              }}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Coming soon note */}
        <p className="text-center text-xs mt-8 italic" style={{ color: '#A08060' }}>
          📸 Product images will be added soon. Descriptions are representative.
        </p>
      </div>
    </section>
  )
}
