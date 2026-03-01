const features = [
  { icon: '🌿', title: 'No Preservatives', desc: 'Every product made fresh without artificial preservatives, colours or flavours. Natural goodness in every bite.' },
  { icon: '👩‍🍳', title: 'Home Kitchen Quality', desc: 'Prepared with the same love as food made at home — traditional, tried and trusted recipes.' },
  { icon: '🏆', title: 'Since 2011', desc: 'Over 13 years of serving authentic Gujarati farsan to thousands of happy customers across India.' },
  { icon: '🏪', title: 'At Reliance Stores', desc: 'Gujarat residents can now pick up our products from their nearest Reliance Smart / Fresh store!' },
  { icon: '🚚', title: 'Pan-India Shipping', desc: 'We ship across India so you can enjoy the taste of Gujarat no matter where you live.' },
  { icon: '🤝', title: 'Custom & Bulk Orders', desc: 'Gift hampers, wedding favour packs, event catering and wholesale orders — all welcome.' },
]

export default function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative py-20 px-4 sm:px-6 overflow-hidden"
      style={{ background: 'linear-gradient(135deg,#3B1A08 0%,#5C2D0E 100%)' }}
    >
      {/* pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23E8841A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#F5DFA0' }}>Why Choose Us</span>
          <h2 className="text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#FDF6E3' }}>
            The <em className="italic" style={{ color: '#E8841A' }}>Farsanwala</em> Difference
          </h2>
          <div className="w-14 h-0.5 mx-auto mt-3 rounded" style={{ background: 'linear-gradient(90deg,#E8841A,#C9A227)' }} />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map(f => (
            <div
              key={f.title}
              className="rounded-2xl p-6 text-center border transition-all duration-300 group cursor-default"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(232,132,26,0.12)'
                e.currentTarget.style.borderColor = 'rgba(232,132,26,0.3)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span className="text-4xl block mb-3">{f.icon}</span>
              <h3 className="font-bold text-base mb-2" style={{ fontFamily: "'Playfair Display', serif", color: '#F5DFA0' }}>
                {f.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: '#A08060' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
