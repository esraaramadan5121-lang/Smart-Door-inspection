'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', background: '#0A0A0A', overflow: 'hidden' }}>

      {/* Golden Wave SVG Background */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <svg style={{ position: 'absolute', right: 0, top: 0, width: '65%', height: '100%', opacity: 0.85 }} viewBox="0 0 700 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <radialGradient id="g1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C9A24A" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#C9A24A" stopOpacity="0"/>
            </radialGradient>
            <radialGradient id="g2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#F7E9C3" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#C9A24A" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <ellipse cx="400" cy="280" rx="350" ry="220" fill="url(#g1)"/>
          <ellipse cx="450" cy="320" rx="250" ry="160" fill="url(#g2)"/>
          <path d="M0,300 C100,200 200,350 300,250 C400,150 500,300 600,220 C650,180 680,200 700,190" fill="none" stroke="#C9A24A" strokeWidth="2" strokeOpacity="0.6"/>
          <path d="M0,350 C80,260 180,400 280,300 C380,200 480,340 580,260 C640,220 680,240 700,230" fill="none" stroke="#C9A24A" strokeWidth="1.5" strokeOpacity="0.4"/>
          <path d="M0,250 C120,160 220,310 320,210 C420,110 520,260 620,180" fill="none" stroke="#F7E9C3" strokeWidth="1" strokeOpacity="0.25"/>
          <path d="M100,400 C200,300 300,430 400,330 C500,230 600,360 700,280" fill="none" stroke="#C9A24A" strokeWidth="1" strokeOpacity="0.3"/>
          <path d="M0,180 C150,100 250,230 350,150 C450,70 550,200 650,130" fill="none" stroke="#C9A24A" strokeWidth="0.8" strokeOpacity="0.2"/>
          {[[300,180],[350,150],[400,200],[450,160],[500,190],[320,240],[480,140],[420,220],[380,170],[440,250]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="2" fill="#C9A24A" opacity="0.7"/>
          ))}
          {[[310,185],[360,155],[410,205],[460,165]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r="1" fill="#F7E9C3" opacity="0.5"/>
          ))}
        </svg>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', maxWidth: '1280px', margin: '0 auto', padding: '0 24px', paddingTop: '120px', paddingBottom: '80px', width: '100%' }}>
        <div style={{ maxWidth: '580px' }}>

          {/* Label */}
          <p style={{
            color: '#C9A24A', fontSize: '11px', letterSpacing: '0.35em',
            textTransform: 'uppercase', marginBottom: '24px', fontWeight: 500,
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.6s ease 0.1s'
          }}>
            Digital Excellence
          </p>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(3.2rem, 6vw, 5.2rem)', fontWeight: 700,
            lineHeight: 1.05, marginBottom: '24px', color: '#fff',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.7s ease 0.2s'
          }}>
            We Build Digital{' '}
            <span style={{ color: '#C9A24A', display: 'block' }}>Masterpieces</span>
          </h1>

          {/* Description */}
          <p style={{
            color: 'rgba(255,255,255,0.60)', fontSize: '15px', lineHeight: 1.75,
            maxWidth: '460px', marginBottom: '40px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.35s'
          }}>
            Zyntra is a digital agency crafting luxurious, high-performance websites, brands, and digital experiences that elevate your business to the next level.
          </p>

          {/* Buttons */}
          <div style={{
            display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.5s'
          }}>
            <Link href="/portfolio" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', fontSize: '14px', fontWeight: 500, background: '#C9A24A', color: '#0A0A0A', borderRadius: '6px', textDecoration: 'none' }}>
              Explore Our Work →
            </Link>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', padding: '14px 28px', fontSize: '14px', fontWeight: 400, color: '#fff', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '6px', textDecoration: 'none' }}>
              Our Services
            </Link>
          </div>

          {/* Trust Badge */}
          <div style={{
            display: 'flex', alignItems: 'center', gap: '14px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.7s ease 0.65s'
          }}>
            <div style={{ display: 'flex' }}>
              {['A','B','C','D'].map((l,i) => (
                <div key={i} style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'linear-gradient(135deg, #C9A24A, #9A7530)', border: '2.5px solid #0A0A0A', marginLeft: i > 0 ? '-12px' : '0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: '#0A0A0A', zIndex: 4 - i, position: 'relative' }}>{l}</div>
              ))}
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)' }}>
              Trusted by <strong style={{ color: '#fff', fontWeight: 600 }}>150+ clients</strong> worldwide
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}