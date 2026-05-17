'use client'
import Navbar from '@/components/website/Navbar'
import Footer from '@/components/website/Footer'

const testimonials = [
  { quote: 'Zyntra transformed our online presence completely. The team is professional, creative, and delivers beyond expectations. Working with them was the best investment we made this year.', name: 'Michael Johnson', role: 'CEO, Avant Group', initials: 'MJ' },
  { quote: 'The level of detail and quality they provide is unmatched. Our website has never looked better! The team understood our vision perfectly and executed it flawlessly.', name: 'Sophia Williams', role: 'Marketing Director, LuxeCo', initials: 'SW' },
  { quote: 'Working with Zyntra was the best decision for our business. Highly recommended for anyone who wants real results. Their strategic approach made a huge difference.', name: 'David Brown', role: 'Founder, Nexora', initials: 'DB' },
  { quote: 'Exceptional work from start to finish. The attention to detail and the quality of the final product exceeded all our expectations. True professionals.', name: 'Emma Davis', role: 'CMO, Elevate Brand', initials: 'ED' },
  { quote: 'Our conversion rate increased by 40% after Zyntra redesigned our website. Their data-driven approach and beautiful design work hand in hand.', name: 'James Wilson', role: 'CEO, CloudIX', initials: 'JW' },
  { quote: 'From branding to web development, Zyntra handled everything with expertise and care. They are not just a service provider, they are a true partner.', name: 'Sarah Chen', role: 'Founder, Verity', initials: 'SC' },
]

export default function Testimonials() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ padding: '140px 24px 80px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 500 }}>Testimonials</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>
          What Clients <span style={{ color: '#C9A24A' }}>Say</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>
          Don't just take our word for it. Here's what our clients have to say about working with Zyntra.
        </p>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '20px' }}>
          {testimonials.map(t => (
            <div key={t.name} style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '36px 28px', transition: 'border-color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,162,74,0.3)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
              <div style={{ color: '#C9A24A', fontSize: '48px', lineHeight: 0.8, marginBottom: '20px', opacity: 0.7 }}>"</div>
              <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '14px', lineHeight: 1.85, marginBottom: '28px' }}>{t.quote}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'linear-gradient(135deg, #C9A24A, #9A7530)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: '#0A0A0A', flexShrink: 0 }}>{t.initials}</div>
                <div>
                  <p style={{ color: '#fff', fontSize: '14px', fontWeight: 600 }}>{t.name}</p>
                  <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '12px', marginTop: '2px' }}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
