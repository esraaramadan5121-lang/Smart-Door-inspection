'use client'

const testimonials = [
  {
    quote: 'ZYNTRA transformed our online presence completely. The team is professional, creative, and delivers beyond expectations.',
    name: 'Michael Johnson',
    role: 'CEO, Avant Group',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
  },
  {
    quote: 'The level of detail and quality they provide is unmatched. Our website has never looked better!',
    name: 'Sophia Williams',
    role: 'Marketing Director, LuxeCo',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80',
  },
  {
    quote: 'Working with ZYNTRA was the best decision for our business. Highly recommended for anyone who wants real results.',
    name: 'David Brown',
    role: 'Founder, Nexora',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
  },
]

export default function Testimonials() {
  return (
    <section style={{ background: '#0A0A0A', padding: '100px 0' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>Testimonials</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>What Our Clients Say</h2>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            {['←', '→'].map((arrow, i) => (
              <button key={i} style={{ width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: '#fff', fontSize: '16px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {arrow}
              </button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {testimonials.map(t => (
            <div key={t.name} style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '36px 28px' }}>
              <div style={{ color: '#C9A24A', fontSize: '52px', lineHeight: 0.8, marginBottom: '20px', fontFamily: 'Georgia, serif', opacity: 0.75 }}>"</div>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: 1.85, marginBottom: '28px' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <img src={t.img} alt={t.name} style={{ width: '46px', height: '46px', borderRadius: '50%', objectFit: 'cover', border: '2px solid rgba(201,162,74,0.4)', flexShrink: 0 }} />
                <div>
                  <p style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>{t.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '12px', marginTop: '2px' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}