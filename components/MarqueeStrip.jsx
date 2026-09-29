import { FiAward, FiBox, FiCircle, FiFeather, FiGift, FiPackage, FiShoppingBag, FiStar, FiTruck, FiZap } from 'react-icons/fi'

const items = [
  { Icon: FiZap, text: 'Spicy Namkeen' }, { Icon: FiBox, text: 'Crispy Khakhra' }, { Icon: FiGift, text: 'Homestyle Pickles' },
  { Icon: FiCircle, text: 'Crunchy Rings' }, { Icon: FiPackage, text: 'Mini Bhakharwadi' }, { Icon: FiCircle, text: 'Masala Chakri' },
  { Icon: FiFeather, text: 'Methi Puri' }, { Icon: FiGift, text: 'Chhundo Pickle' }, { Icon: FiCircle, text: 'Kerda Pickle' },
  { Icon: FiShoppingBag, text: 'Sabudana Chevdo' }, { Icon: FiBox, text: 'Soya Stick' }, { Icon: FiStar, text: '' },/** No preservatives */
  { Icon: FiPackage, text: 'Bulk Orders Welcome' }, { Icon: FiTruck, text: 'Pan-India Delivery' },
  { Icon: FiAward, text: 'Now at SMART BAZAAR Stores in Gujarat!' },
]

export default function MarqueeStrip() {
  const doubled = [...items, ...items]
  return (
    <div className="overflow-hidden" style={{ background: '#E8841A', padding: '10px 0' }}>
      <div className="marquee-track">
        {doubled.map(({ Icon, text }, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 text-white font-bold text-xs tracking-widest uppercase mr-10 whitespace-nowrap"
          >
            <Icon aria-hidden="true" />
            {text}
            <span style={{ color: 'rgba(255,255,255,0.4)' }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
