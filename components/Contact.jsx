'use client'
import { MapPin, Phone, Mail, Clock, Instagram, Store } from 'lucide-react'
import { usePopup } from '../context/PopupContext'

export default function Contact() {
  const { openPopup } = usePopup()

  return (
    <section id="contact" className="py-20 px-4 sm:px-6" style={{ background: '#FFFBF2' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#E8841A' }}>Find Us</span>
          <h2 className="text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#3B1A08' }}>
            Get Our <em className="italic" style={{ color: '#E8841A' }}>Products</em>
          </h2>
          <div className="w-14 h-0.5 mx-auto mt-3 rounded" style={{ background: 'linear-gradient(90deg,#E8841A,#C9A227)' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Reliance Walk-in card */}
          <div className="rounded-2xl overflow-hidden shadow-lg" style={{ border: '1px solid rgba(232,132,26,0.2)' }}>
            <div
              className="px-6 pt-8 pb-6 text-center relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#3B1A08,#7A3D10)' }}
            >
              <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/5" />
              <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full bg-white/5" />
              <div
                className="inline-flex w-14 h-14 rounded-full items-center justify-center mb-4 mx-auto"
                style={{ background: 'rgba(232,132,26,0.25)', border: '2px solid rgba(232,132,26,0.5)' }}
              >
                <Store size={26} style={{ color: '#F5DFA0' }} />
              </div>
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3"
                style={{ background: 'rgba(232,132,26,0.3)', color: '#F5DFA0', border: '1px solid rgba(232,132,26,0.4)' }}
              >
                📍 In Gujarat? Walk In!
              </div>
              <h3 className="text-2xl font-black mb-1" style={{ fontFamily: "'Playfair Display', serif", color: '#FDF6E3' }}>
                Available at
              </h3>
              <h3 className="text-3xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#E8841A' }}>
                Reliance Stores
              </h3>
            </div>

            <div className="bg-white px-6 py-6">
              <div className="flex flex-col gap-3 mb-6">
                {[
                  { n: '1', icon: '📍', text: 'Find your nearest Reliance Smart or Reliance Fresh in Gujarat' },
                  { n: '2', icon: '🚶', text: 'Simply walk in — no app, no account, no waiting' },
                  { n: '3', icon: '🛒', text: 'Find Gujarati Farsanwala products in the namkeen & snacks aisle' },
                ].map(({ n, icon, text }) => (
                  <div
                    key={n}
                    className="flex items-start gap-3 rounded-xl p-3"
                    style={{ background: '#FFFBF2', border: '1px solid rgba(232,132,26,0.12)' }}
                  >
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-black flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg,#E8841A,#C4671A)' }}
                    >
                      {n}
                    </div>
                    <p className="text-sm leading-snug pt-0.5" style={{ color: '#5C3D1A' }}>
                      <span className="mr-1">{icon}</span>{text}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={openPopup}
                className="w-full py-3 rounded-xl font-bold text-sm tracking-wider uppercase text-white transition-all"
                style={{ background: 'linear-gradient(135deg,#E8841A,#C4671A)', boxShadow: '0 4px 18px rgba(232,132,26,0.4)' }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                How to Find Us 🏪
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-2xl p-6 shadow-sm" style={{ border: '1px solid rgba(59,26,8,0.07)' }}>
              <h3 className="text-lg font-bold mb-5" style={{ fontFamily: "'Playfair Display', serif", color: '#3B1A08' }}>
                Get in Touch
              </h3>
              {[
                { Icon: MapPin, label: 'Location',        value: 'Ahmedabad, Gujarat, India' },
                { Icon: Phone,  label: 'Call / WhatsApp', value: '+91 98795 04950' },
                { Icon: Mail,   label: 'Email',           value: 'gujaratifarsanwala2011@gmail.com' },
                { Icon: Clock,  label: 'Business Hours',  value: 'Mon–Sat: 9 AM – 7 PM\nSunday: 10 AM – 3 PM' },
              ].map(({ Icon, label, value }) => (
                <div key={label} className="flex gap-4 mb-4 items-start">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg,#E8841A,#C4671A)' }}
                  >
                    <Icon size={17} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider mb-0.5" style={{ color: '#3B1A08' }}>{label}</div>
                    <div className="text-sm whitespace-pre-line" style={{ color: '#6B4F3A' }}>{value}</div>
                  </div>
                </div>
              ))}
              <a
                href="https://www.instagram.com/gujaratifarsanwala/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-1 text-sm font-bold"
                style={{ color: '#E8841A' }}
              >
                <Instagram size={16} />
                @gujaratifarsanwala
              </a>
            </div>

            {/* Wholesale card */}
            <div
              className="rounded-2xl p-6"
              style={{ background: 'linear-gradient(135deg,rgba(232,132,26,0.08),rgba(201,162,39,0.06))', border: '1px solid rgba(232,132,26,0.2)' }}
            >
              <h4 className="font-bold text-base mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#3B1A08' }}>
                📦 Bulk & Wholesale Enquiries
              </h4>
              <p className="text-sm leading-relaxed mb-4" style={{ color: '#6B4F3A' }}>
                For large orders, wedding favours, event catering or wholesale pricing — reach out directly on WhatsApp or give us a call.
              </p>
              <a
                href="https://wa.me/919879504950"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{ background: '#4A7C59' }}
              >
                💬 WhatsApp Us for Bulk Orders
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
