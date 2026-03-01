const testimonials = [
  {
    text: 'The Kerda pickle is absolutely divine! It tastes exactly like what my nani used to make. I order monthly and have even gifted it to relatives abroad. Highly recommend!',
    name: 'Priya Shah', loc: 'Mumbai, Maharashtra', initial: 'P',
  },
  {
    text: 'Ordered the Mini Bhakharwadi and Masala Chakri for my daughter\'s wedding return gifts. The quality was exceptional and everyone loved them — packaging was neat too!',
    name: 'Rameshbhai Patel', loc: 'Ahmedabad, Gujarat', initial: 'R',
  },
  {
    text: 'Being a Gujarati in Bangalore, I was craving authentic farsan. Found this page on Instagram and never looked back. The Mamri and Chat Puri are outstanding!',
    name: 'Hetal Mehta', loc: 'Bangalore, Karnataka', initial: 'H',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6" style={{ background: '#FDF6E3' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#E8841A' }}>Customer Love</span>
          <h2 className="text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#3B1A08' }}>
            What Our Customers <em className="italic" style={{ color: '#E8841A' }}>Say</em>
          </h2>
          <div className="w-14 h-0.5 mx-auto mt-3 rounded" style={{ background: 'linear-gradient(90deg,#E8841A,#C9A227)' }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-6 shadow-sm relative"
              style={{ border: '1px solid rgba(59,26,8,0.07)' }}
            >
              <span
                className="absolute -top-3 left-6 text-7xl leading-none select-none pointer-events-none"
                style={{ fontFamily: "'Playfair Display', serif", color: '#F5DFA0' }}
              >
                "
              </span>
              <div className="mb-1" style={{ color: '#C9A227' }}>★★★★★</div>
              <p className="text-sm leading-relaxed mb-4 pt-2" style={{ color: '#6B4F3A' }}>
                {t.text}
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg,#E8841A,#C4671A)' }}
                >
                  {t.initial}
                </div>
                <div>
                  <div className="font-bold text-sm" style={{ color: '#3B1A08' }}>{t.name}</div>
                  <div className="text-xs" style={{ color: '#A08060' }}>{t.loc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
