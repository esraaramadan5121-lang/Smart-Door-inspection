'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Topbar({ title }: { title: string }) {
  const [showMenu, setShowMenu] = useState(false)
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/admin/login')
  }

  return (
    <header style={{ height: '64px', background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', flexShrink: 0, position: 'relative' }}>
      <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 700, color: '#fff' }}>{title}</h1>
      
      <div style={{ position: 'relative' }}>
        <button onClick={() => setShowMenu(!showMenu)}
          style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #C9A24A, #9A7530)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 700, color: '#0A0A0A', cursor: 'pointer' }}>
          A
        </button>

        {showMenu && (
          <div style={{ position: 'absolute', top: '48px', right: 0, background: '#1a1a1a', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '10px', padding: '8px', minWidth: '180px', zIndex: 100 }}>
            <div style={{ padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: '4px' }}>
              <p style={{ color: '#fff', fontSize: '13px', fontWeight: 600 }}>ZYNTRA Admin</p>
              <p style={{ color: 'rgba(255,255,255,0.40)', fontSize: '12px' }}>admin@zyntra.com</p>
            </div>
            <button onClick={handleLogout}
              style={{ width: '100%', padding: '10px 14px', background: 'transparent', border: 'none', color: '#EF4444', fontSize: '13px', cursor: 'pointer', textAlign: 'left', borderRadius: '6px' }}>
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  )
}