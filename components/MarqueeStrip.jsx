const items = [
  '🌶️ Spicy Namkeen', '🍘 Crispy Khakhra', '🫙 Homestyle Pickles',
  '⭕ Crunchy Rings', '🍥 Mini Bhakharwadi', '🌀 Masala Chakri',
  '🌿 Methi Puri', '🥭 Chhundo Pickle', '🫒 Kerda Pickle',
  '🥗 Sabudana Chevdo', '🥢 Soya Stick', '✨ No Preservatives',
  '📦 Bulk Orders Welcome', '🚚 Pan-India Delivery',
  '🏪 Now at Reliance Stores in Gujarat!',
]

export default function MarqueeStrip() {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden" style={{ background: '#E8841A', padding: '10px 0' }}>
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-white font-bold text-xs tracking-widest uppercase mr-10 whitespace-nowrap"
          >
            {item}
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
