import Image from 'next/image'

const highlights = [
  { icon: '🌿', title: '100% Natural', sub: 'No artificial colours or preservatives' },
  { icon: '👩‍🍳', title: 'Gruh Udgyog', sub: 'Home-made with traditional recipes' },
  { icon: '📦', title: 'Bulk & Wholesale', sub: 'Events, shops & resellers welcome' },
  { icon: '📍', title: 'Ahmedabad Based', sub: 'Proudly made in Gujarat' },
]

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6" style={{ background: '#FDF6E3' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="block text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#E8841A' }}>Our Story</span>
          <h2 className="text-4xl font-black" style={{ fontFamily: "'Playfair Display', serif", color: '#3B1A08' }}>
            From Our Kitchen to <em className="italic" style={{ color: '#E8841A' }}>Your Heart</em>
          </h2>
          <div className="w-14 h-0.5 mx-auto mt-3 rounded" style={{ background: 'linear-gradient(90deg,#E8841A,#C9A227)' }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Visual */}
          <div className="flex justify-center">
            <div
              className="relative rounded-2xl p-8 text-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg,#3B1A08,#5C2D0E)' }}
            >
              <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20" style={{ background: '#E8841A' }} />
              <div className="relative w-52 h-52 rounded-full overflow-hidden mx-auto border-4 shadow-2xl" style={{ borderColor: '#C9A227' }}>
                <Image src="/logo.png" alt="Logo" fill className="object-cover" />
              </div>
              <span
                className="absolute bottom-5 right-5 px-4 py-1.5 rounded-full text-sm font-bold text-white"
                style={{ background: '#E8841A' }}
              >
                Est. 2011 🎉
              </span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="leading-relaxed mb-4 text-sm sm:text-base" style={{ color: '#6B4F3A' }}>
              Gujarati Farsanwala Gruh Udgyog was founded in <strong>2011</strong> with a simple mission — to bring authentic,
              wholesome Gujarati snacks to every home. Based in <strong>Ahmedabad</strong>, we are a wholesale trader and
              home-kitchen brand trusted by thousands of families across Gujarat and beyond.
            </p>
            <p className="leading-relaxed mb-4 text-sm sm:text-base" style={{ color: '#6B4F3A' }}>
              We craft <strong>Namkeen</strong> (Rings, Mamri, Chat Puri, Bhelpuri…), crispy <strong>Khakhras</strong>,
              tangy <strong>Pickles</strong> (Kerda, Gunda, Chhundo…), and farali specials like <strong>Sabudana Chevdo</strong> —
              all without artificial preservatives, using traditional recipes passed down through generations.
            </p>
            <p className="leading-relaxed mb-6 text-sm sm:text-base" style={{ color: '#6B4F3A' }}>
              🏪 Our products are now available at <strong>Reliance stores across Gujarat</strong>, in addition to direct home delivery across India!
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map(h => (
                <div key={h.title} className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{h.icon}</span>
                  <div>
                    <strong className="block text-sm font-bold" style={{ color: '#3B1A08' }}>{h.title}</strong>
                    <span className="text-xs" style={{ color: '#8B6B55' }}>{h.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
