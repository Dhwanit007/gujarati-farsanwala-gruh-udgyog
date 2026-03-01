'use client'
import { X, ShoppingBag, Store } from 'lucide-react'
import { usePopup } from '../context/PopupContext'

export default function ReliancePopup() {
  const { show, closing, closePopup: handleClose } = usePopup()

  if (!show) return null

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-sm"
        style={{
          opacity: closing ? 0 : 1,
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
        style={{ pointerEvents: 'none' }}
      >
        <div
          className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
          style={{
            pointerEvents: 'all',
            transform: closing ? 'scale(0.9) translateY(20px)' : 'scale(1) translateY(0)',
            opacity: closing ? 0 : 1,
            transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
          }}
        >
          {/* Header gradient */}
          <div
            className="relative px-6 pt-8 pb-6 text-center overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #3B1A08 0%, #7A3D10 50%, #C4671A 100%)',
            }}
          >
            {/* Decorative circles */}
            <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/5" />
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-full bg-white/5" />

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <X size={16} className="text-white" />
            </button>

            {/* Store icon */}
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 mx-auto"
              style={{ background: 'rgba(232,132,26,0.25)', border: '2px solid rgba(232,132,26,0.5)' }}
            >
              <Store size={32} style={{ color: '#F5DFA0' }} />
            </div>

            <div
              className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3"
              style={{ background: 'rgba(232,132,26,0.3)', color: '#F5DFA0', border: '1px solid rgba(232,132,26,0.4)' }}
            >
              📍 Gujarat Residents
            </div>

            <h2
              className="text-2xl font-bold leading-tight mb-1"
              style={{ fontFamily: "'Playfair Display', serif", color: '#FDF6E3' }}
            >
              Now Available at
            </h2>
            <h2
              className="text-3xl font-black"
              style={{ fontFamily: "'Playfair Display', serif", color: '#E8841A' }}
            >
              Reliance Stores!
            </h2>
          </div>

          {/* Body */}
          <div className="bg-white px-6 py-6">

            {/* Step pills */}
            <div className="flex flex-col gap-3 mb-6">
              {[
                { icon: '📍', step: '1', text: 'Find your nearest Reliance Smart or Reliance Fresh store in Gujarat' },
                { icon: '🚶', step: '2', text: 'Walk in to the store — no app, no account, no waiting' },
                { icon: '🛒', step: '3', text: 'Pick up Gujarati Farsanwala products from the namkeen aisle' },
              ].map(({ icon, step, text }) => (
                <div
                  key={step}
                  className="flex items-start gap-3 rounded-xl p-3"
                  style={{ background: '#FFFBF2', border: '1px solid rgba(232,132,26,0.15)' }}
                >
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#E8841A,#C4671A)' }}
                  >
                    {step}
                  </div>
                  <p className="text-sm leading-snug pt-1" style={{ color: '#5C3D1A' }}>
                    <span className="mr-1">{icon}</span>{text}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="flex items-center justify-center gap-2 rounded-xl py-3 mb-5"
              style={{ background: 'rgba(74,124,89,0.08)', border: '1px solid rgba(74,124,89,0.2)' }}
            >
              <ShoppingBag size={15} style={{ color: '#4A7C59' }} />
              <span className="text-xs font-bold" style={{ color: '#4A7C59' }}>
                100% Walk-in Purchase · No Online Orders
              </span>
            </div>

            <button
              onClick={handleClose}
              className="w-full py-3 rounded-xl text-sm font-bold transition-all"
              style={{
                background: 'linear-gradient(135deg, #E8841A, #C4671A)',
                color: 'white',
                boxShadow: '0 4px 15px rgba(232,132,26,0.35)',
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >
              Got it, I'll visit! 🙏
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
