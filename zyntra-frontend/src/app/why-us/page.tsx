'use client'
import Navbar from '@/components/website/Navbar'
import Footer from '@/components/website/Footer'

export default function WhyUs() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />
      <section style={{ padding: '140px 24px 80px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 500 }}>Why Choose Us</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>
          Why <span style={{ color: '#C9A24A' }}>Zyntra?</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>
          We don't just build websites, we build digital experiences that generate real results for your business.
        </p>
      </section>

      <section style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
          {[
            { num: '01', title: 'Creative Approach', desc: 'Unique ideas that make your brand stand out from the competition. We think outside the box to deliver solutions that truly differentiate your brand.' },
            { num: '02', title: 'Result Driven', desc: 'Focused on strategies that drive measurable results. Every decision we make is backed by data and aligned with your business goals.' },
            { num: '03', title: 'Quality Assurance', desc: 'High standards in design, development and support. We test thoroughly and maintain the highest quality standards throughout the entire process.' },
            { num: '04', title: 'On-time Delivery', desc: "We value your time and deliver on schedule. Our project management process ensures timely delivery without compromising quality." },
            { num: '05', title: 'Dedicated Support', desc: "We're here to support you every step of the way. Our team provides ongoing support and maintenance to ensure your digital presence thrives." },
            { num: '06', title: 'Transparent Process', desc: 'Clear communication and regular updates throughout the project. You will always know exactly where your project stands.' },
          ].map(item => (
            <div key={item.num} style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '36px 28px', transition: 'border-color 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,162,74,0.4)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'}>
              <div style={{ color: 'rgba(201,162,74,0.4)', fontSize: '13px', fontWeight: 600, fontFamily: 'monospace', marginBottom: '16px' }}>{item.num}</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '14px', lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}
