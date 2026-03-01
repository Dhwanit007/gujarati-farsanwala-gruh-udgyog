'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePopup } from '../context/PopupContext'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#testimonials', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { openPopup } = usePopup()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(59,26,8,0.97)'
            : '#3B1A08',
          boxShadow: scrolled ? '0 4px 24px rgba(59,26,8,0.5)' : '0 2px 12px rgba(59,26,8,0.3)',
          backdropFilter: 'blur(10px)',
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-yellow-500 group-hover:border-yellow-400 transition-colors">
              <Image src="/logo.png" alt="Logo" fill className="object-cover" />
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: '#F5DFA0' }}>
                Gujarati Farsanwala
              </div>
              <div className="text-xs tracking-widest uppercase" style={{ color: '#E8841A', fontSize: '0.6rem' }}>
                Gruh Udgyog · Since 2011
              </div>
            </div>
          </Link>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-3 py-2 text-xs font-bold tracking-widest uppercase transition-colors group"
                  style={{ color: '#C4A882' }}
                  onMouseEnter={e => e.target.style.color = '#F5DFA0'}
                  onMouseLeave={e => e.target.style.color = '#C4A882'}
                >
                  {link.label}
                  <span
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 group-hover:w-4/5 transition-all duration-300 rounded"
                    style={{ background: '#E8841A' }}
                  />
                </a>
              </li>
            ))}
            <li>
              <button
                onClick={openPopup}
                className="ml-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase text-white transition-all"
                style={{ background: 'linear-gradient(135deg,#E8841A,#C4671A)' }}
                onMouseEnter={e => e.target.style.opacity = '0.9'}
                onMouseLeave={e => e.target.style.opacity = '1'}
              >
                Order Now
              </button>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#F5DFA0' }}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{ maxHeight: open ? '320px' : '0' }}
        >
          <div className="px-4 pb-4 flex flex-col gap-1 border-t border-white/10 pt-3">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-bold tracking-wider uppercase transition-colors"
                style={{ color: '#C4A882' }}
                onMouseEnter={e => e.target.style.background = 'rgba(232,132,26,0.15)'}
                onMouseLeave={e => e.target.style.background = 'transparent'}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { openPopup(); setOpen(false) }}
              className="mt-1 px-3 py-2.5 rounded-lg text-sm font-bold text-center text-white w-full"
              style={{ background: 'linear-gradient(135deg,#E8841A,#C4671A)' }}
            >
              Order Now
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
