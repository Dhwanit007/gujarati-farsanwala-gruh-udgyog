'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { products, categories } from '../data/products'
import { ShoppingCart } from 'lucide-react'
import { FiImage } from 'react-icons/fi'
import { usePopup } from '../context/PopupContext'

// "Tikhi Mamri" → "tikhi-mamri" — matches the filename convention in /public/products
const slugify = name =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

const IMAGE_EXTS = ['.jpg', '.jpeg', '.png', '.webp']

function findImage(product, productImages) {
  const slug = slugify(product.name)
  return productImages.find(file => {
    const dot = file.lastIndexOf('.')
    return dot !== -1 && file.slice(0, dot) === slug && IMAGE_EXTS.includes(file.slice(dot))
  })
}

function ProductCard({ product, productImages }) {
  const { openPopup } = usePopup()
  const imageFile = findImage(product, productImages)
  return (
    <div
      className="product-card-hover group relative w-full min-w-0 bg-white rounded-3xl overflow-hidden cursor-pointer"
      style={{
        border: '1px solid rgba(201,162,39,0.35)',
        boxShadow: '0 4px 14px -6px rgba(59,26,8,0.15)',
        transition: 'transform .35s ease, box-shadow .35s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-8px)'
        e.currentTarget.style.boxShadow = '0 20px 40px -14px rgba(59,26,8,0.35)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = '0 4px 14px -6px rgba(59,26,8,0.15)'
      }}
    >
      {/* Decorative corner glow */}
      <div
        aria-hidden
        className="absolute -top-10 -right-10 w-28 h-28 rounded-full opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,132,26,0.35), transparent 70%)' }}
      />

      {/* Image area — real photo if /public/products/<name>.jpg exists, else emoji placeholder */}
      <div
        className={`relative aspect-[4/3] w-full flex items-center justify-center bg-gradient-to-br ${product.color} overflow-hidden`}
        style={{ borderBottom: '1px dashed rgba(201,162,39,0.5)' }}
      >
        {imageFile ? (
          <Image
            src={`/products/${imageFile}`}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <>
            {/* Subtle dot pattern */}
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.07] pointer-events-none"
              style={{
                backgroundImage: 'radial-gradient(rgba(59,26,8,0.8) 1px, transparent 1px)',
                backgroundSize: '14px 14px',
              }}
            />
            <span
              className="text-7xl select-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
              style={{ filter: 'drop-shadow(0 6px 12px rgba(0,0,0,0.18))' }}
            >
              <product.Icon aria-hidden="true" />
            </span>
            {/* Placeholder text for image */}
            <span
              className="product-placeholder absolute bottom-2.5 left-0 right-0 text-center text-[11px] font-medium opacity-50"
              style={{ color: '#5C3D1A' }}
            >
              Image coming soon
            </span>
          </>
        )}
        {product.badge && (
          <span
            className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-md"
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
      </div>

      <div className="product-card-content relative p-5">
        {/* Category chip */}
        <span
          className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-widest uppercase mb-2"
          style={{ background: 'rgba(232,132,26,0.12)', color: '#E8841A' }}
        >
          {product.category}
        </span>

        <h3 className="product-title font-black text-lg mb-1.5" style={{ fontFamily: "'Playfair Display', serif", color: '#3B1A08' }}>
          {product.name}
        </h3>
        <p className="product-description text-xs leading-relaxed mb-4" style={{ color: '#8B6B55' }}>
          {product.desc}
        </p>

        <button
          className="product-order-button w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all"
          style={{ background: 'linear-gradient(135deg,#E8841A,#C4671A)', color: 'white' }}
          onMouseEnter={e => { e.currentTarget.style.opacity = '0.88' }}
          onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          onClick={openPopup}
        >
          <ShoppingCart size={13} />
          Enquire / Order
        </button>
      </div>
    </div>
  )
}

export default function Products({ productImages = [] }) {
  const [active, setActive] = useState('namkeen')

  useEffect(() => {
    const syncCategoryFromHash = () => {
      const hash = window.location.hash.slice(1)
      const category = hash === 'products' ? 'all' : hash.startsWith('products-') ? hash.slice('products-'.length) : null
      if (!category || !categories.some(item => item.id === category)) return

      setActive(category)
      document.getElementById('products')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    syncCategoryFromHash()
    window.addEventListener('hashchange', syncCategoryFromHash)
    return () => window.removeEventListener('hashchange', syncCategoryFromHash)
  }, [])

  const selectCategory = category => {
    setActive(category)
    window.history.replaceState(null, '', `#products-${category}`)
  }

  const filtered = active === 'all' ? products : products.filter(p => p.category === active)

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
              onClick={() => selectCategory(cat.id)}
              className={`product-tab px-5 py-2.5 rounded-full text-sm font-bold transition-all border-2 ${active === cat.id ? 'product-tab-active' : ''}`}
              style={{
                background: active === cat.id ? '#E8841A' : 'transparent',
                borderColor: active === cat.id ? '#E8841A' : 'rgba(59,26,8,0.18)',
                color: active === cat.id ? 'white' : '#3B1A08',
              }}
            >
              <cat.Icon className="inline mr-1" aria-hidden="true" /> {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 min-w-0">
          {filtered.map(p => (
            <ProductCard key={p.id} product={p} productImages={productImages} />
          ))}
        </div>

        {/* Coming soon note */}
        <p className="text-center text-xs mt-8 italic" style={{ color: '#A08060' }}>
          <FiImage className="inline mr-1" aria-hidden="true" /> Product images will be added soon. Descriptions are representative.
        </p>
      </div>
    </section>
  )
}
