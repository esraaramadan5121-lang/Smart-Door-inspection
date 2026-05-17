import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about ZYNTRA Digital — our story, vision, mission, and the team behind our luxury digital experiences.',
}


import Navbar from '@/components/website/Navbar'
import Footer from '@/components/website/Footer'

const steps = [
  { step: '01', title: 'Discovery', desc: 'We deep-dive into your brand, goals, and target audience to build a solid foundation.' },
  { step: '02', title: 'Strategy', desc: 'We craft a tailored digital strategy aligned with your business objectives.' },
  { step: '03', title: 'Design', desc: 'Our designers create stunning, pixel-perfect visuals that reflect your brand identity.' },
  { step: '04', title: 'Development', desc: 'We build fast, scalable, and secure digital solutions using the latest technologies.' },
  { step: '05', title: 'Launch & Grow', desc: 'We launch your project and provide ongoing support to ensure continuous growth.' },
]

const reasons = [
  { icon: '🏆', title: 'Luxury-Level Quality', desc: 'Every pixel is crafted with precision and attention to detail.' },
  { icon: '⚡', title: 'Fast Delivery', desc: 'We deliver projects on time without compromising quality.' },
  { icon: '🎯', title: 'Results-Driven', desc: 'We focus on measurable outcomes that grow your business.' },
  { icon: '🔒', title: 'Reliable & Secure', desc: 'We build with security and scalability in mind from day one.' },
  { icon: '🤝', title: 'Long-Term Partnership', desc: "We are not just a vendor — we are your long-term digital partner." },
]

const clients = ['Avant Group', 'LuxeCo', 'Nexora', 'Elara', 'Vantage', 'Orion']

export default function About() {
  return (
    <main style={{ background: '#0A0A0A', minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <section style={{ padding: '140px 24px 80px', maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', marginBottom: '20px', fontWeight: 500 }}>About Us</p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginBottom: '24px' }}>
          We Are Digital<br /><span style={{ color: '#C9A24A' }}>Craftsmen</span>
        </h1>
        <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '15px', lineHeight: 1.8, maxWidth: '560px', margin: '0 auto' }}>
          ZYNTRA is a premium digital agency dedicated to creating extraordinary digital experiences. We blend luxury aesthetics with cutting-edge technology to help ambitious brands stand out.
        </p>
      </section>

      {/* Vision & Mission */}
      <section style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '80px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px' }}>
          {[
            { label: 'Our Vision', title: "To Be the World's Most Trusted Digital Agency", desc: 'We envision a world where every brand has access to world-class digital experiences that drive real business growth.' },
            { label: 'Our Mission', title: 'Crafting Digital Masterpieces That Deliver Results', desc: 'Our mission is to deliver premium digital solutions that combine luxury design with powerful technology and measurable outcomes.' },
          ].map(item => (
            <div key={item.label}>
              <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '16px', fontWeight: 500 }}>{item.label}</p>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.6rem', fontWeight: 700, color: '#fff', lineHeight: 1.3, marginBottom: '16px' }}>{item.title}</h3>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.8 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Process */}
      <section style={{ padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>How We Work</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>Our Process</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {steps.map((p, i) => (
              <div key={p.step} style={{ display: 'flex', gap: '32px', alignItems: 'flex-start', padding: '32px 0', borderBottom: i < steps.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 700, color: 'rgba(201,162,74,0.2)', lineHeight: 1, minWidth: '70px' }}>{p.step}</div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>{p.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.8 }}>{p.desc}</p>
                </div>
                <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(201,162,74,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#C9A24A', fontSize: '18px', flexShrink: 0 }}>→</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)', padding: '100px 0' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>Why Us</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, color: '#fff' }}>Why Choose ZYNTRA</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
            {reasons.map(r => (
              <div key={r.title} style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '32px 24px' }}>
                <div style={{ fontSize: '32px', marginBottom: '16px' }}>{r.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>{r.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.50)', fontSize: '13px', lineHeight: 1.75 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', textAlign: 'center' }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '12px', letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: '40px' }}>Trusted By Leading Brands</p>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
            {clients.map(c => (
              <div key={c} style={{ padding: '14px 28px', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '8px', background: '#111111' }}>
                <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '16px', fontWeight: 600, color: 'rgba(255,255,255,0.45)', letterSpacing: '0.05em' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}