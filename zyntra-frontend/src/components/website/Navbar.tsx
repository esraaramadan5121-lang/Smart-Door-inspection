'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Portfolio', href: '/portfolio' },
  { name: 'Why Us', href: '/why-us' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.85)',
        backdropFilter: 'blur(20px)',
        borderBottom: `0.5px solid ${scrolled ? 'rgba(201,162,74,0.15)' : 'rgba(255,255,255,0.06)'}`,
        height: '64px', display: 'flex', alignItems: 'center',
        transition: 'all 0.3s',
      }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <svg width="32" height="32" viewBox="0 0 32 32">
              <defs>
                <linearGradient id="zGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C9A24A"/>
                  <stop offset="50%" stopColor="#F7E9C3"/>
                  <stop offset="100%" stopColor="#9A7530"/>
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="6" fill="url(#zGrad)"/>
              <text x="16" y="22" textAnchor="middle" fontSize="16" fontWeight="700" fill="#0A0A0A" fontFamily="Georgia, serif">Z</text>
            </svg>
            <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '20px', fontWeight: 600, color: '#fff', letterSpacing: '0.08em' }}>ZYNTRA</span>
          </Link>

          {/* Desktop Links */}
          <ul style={{ display: 'flex', alignItems: 'center', gap: '2px', listStyle: 'none', margin: 0, padding: 0 }}
            className="hidden-mobile">
            {navLinks.map(link => (
              <li key={link.name}>
                <Link href={link.href}
                  style={{ padding: '8px 14px', fontSize: '13px', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', borderRadius: '6px', display: 'block', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}>
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <Link href="/contact"
            style={{ padding: '10px 22px', fontSize: '13px', fontWeight: 500, color: '#fff', border: '1px solid rgba(255,255,255,0.25)', borderRadius: '6px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
            className="hidden-mobile"
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(201,162,74,0.5)'; e.currentTarget.style.color = '#C9A24A' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; e.currentTarget.style.color = '#fff' }}>
            Let&apos;s Talk <span style={{ color: '#C9A24A' }}>→</span>
          </Link>

          {/* Mobile Burger */}
          <button onClick={() => setIsOpen(!isOpen)}
            className="show-mobile"
            style={{ background: 'none', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: '#fff', fontSize: '18px', cursor: 'pointer', width: '40px', height: '40px', display: 'none', alignItems: 'center', justifyContent: 'center' }}>
            {isOpen ? '✕' : '☰'}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, bottom: 0, zIndex: 49, background: 'rgba(10,10,10,0.98)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '24px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map((link, i) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0', fontSize: '22px', color: 'rgba(255,255,255,0.75)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.06)', fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600, transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A24A'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.75)'}>
                <span>{link.name}</span>
                <span style={{ color: '#C9A24A', fontSize: '16px' }}>→</span>
              </Link>
            ))}
          </div>
          <Link href="/contact" onClick={() => setIsOpen(false)}
            style={{ display: 'block', marginTop: '24px', padding: '16px', textAlign: 'center', fontSize: '15px', fontWeight: 500, background: '#C9A24A', color: '#0A0A0A', borderRadius: '8px', textDecoration: 'none' }}>
            Let&apos;s Talk →
          </Link>
        </div>
      )}

      {/* Mobile CSS */}
      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </>
  )
}