'use client'

const stats = [
  { number: '150+', label: 'Happy Clients', icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A24A" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
  )},
  { number: '250+', label: 'Projects Completed', icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A24A" strokeWidth="1.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
  )},
  { number: '98%', label: 'Success Rate', icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A24A" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
  )},
  { number: '5+', label: 'Years Experience', icon: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A24A" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
  )},
]

export default function Stats() {
  return (
    <section style={{ background: '#111111', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', right: '-10%', top: '50%', transform: 'translateY(-50%)', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,162,74,0.06) 0%, transparent 70%)' }}/>
      </div>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '64px', flexWrap: 'wrap', position: 'relative' }}>
        <div style={{ maxWidth: '420px' }}>
          <p style={{ color: '#C9A24A', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '14px', fontWeight: 500 }}>Why Choose Us</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: '#fff', lineHeight: 1.2, marginBottom: '16px' }}>
            Results That Speak<br />for Themselves
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '14px', lineHeight: 1.8, marginBottom: '32px' }}>
            We do not just build websites, we build digital experiences that generate real results for your business.
          </p>
          <a href="/about" style={{ display: 'inline-block', padding: '12px 28px', fontSize: '13px', fontWeight: 500, color: '#fff', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '6px', textDecoration: 'none' }}>
            More About Us
          </a>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px 64px' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: 'center' }}>
              <div style={{ marginBottom: '10px', display: 'flex', justifyContent: 'center' }}>{s.icon}</div>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3.5rem', fontWeight: 700, color: '#C9A24A', lineHeight: 1 }}>{s.number}</div>
              <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: '13px', marginTop: '8px' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}