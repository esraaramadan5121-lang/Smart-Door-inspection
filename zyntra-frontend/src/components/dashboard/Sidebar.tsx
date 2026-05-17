'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const menuItems = [
  { icon: '▣', label: 'Dashboard', href: '/admin' },
  { icon: '◈', label: 'Services', href: '/admin/services' },
  { icon: '◉', label: 'Projects', href: '/admin/projects' },
  { icon: '✦', label: 'Blog', href: '/admin/blog' },
  { icon: '✉', label: 'Messages', href: '/admin/messages' },
  { icon: '📋', label: 'Audit Logs', href: '/admin/audit' },
  { icon: '⚙', label: 'Settings', href: '/admin/settings' },
]

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/admin/login')
  }

  return (
    <aside style={{ width: collapsed ? '72px' : '260px', minHeight: '100vh', background: '#111111', borderRight: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', transition: 'width 0.3s', flexShrink: 0 }}>
      {/* Logo */}
      <div style={{ padding: '24px 20px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ width: '36px', height: '36px', background: 'linear-gradient(135deg, #C9A24A, #9A7530)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 700, color: '#0A0A0A', flexShrink: 0 }}>Z</div>
        {!collapsed && <span style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '18px', fontWeight: 600, color: '#fff' }}>ZYNTRA</span>}
      </div>

      {/* Menu */}
      <nav style={{ flex: 1, padding: '16px 12px' }}>
        {menuItems.map(item => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href} style={{
              display: 'flex', alignItems: 'center', gap: '12px',
              padding: '11px 12px', borderRadius: '8px', marginBottom: '4px',
              textDecoration: 'none', transition: 'all 0.2s',
              background: isActive ? 'rgba(201,162,74,0.1)' : 'transparent',
              borderLeft: isActive ? '2px solid #C9A24A' : '2px solid transparent',
              color: isActive ? '#C9A24A' : 'rgba(255,255,255,0.55)',
            }}
              onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent' }}>
              <span style={{ fontSize: '16px', flexShrink: 0 }}>{item.icon}</span>
              {!collapsed && <span style={{ fontSize: '14px', fontWeight: 500 }}>{item.label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Bottom */}
      <div style={{ padding: '12px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <button onClick={() => setCollapsed(!collapsed)}
          style={{ width: '100%', padding: '10px', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '8px', color: 'rgba(255,255,255,0.45)', cursor: 'pointer', marginBottom: '8px', fontSize: '14px' }}>
          {collapsed ? '→' : '← Collapse'}
        </button>
        <button onClick={handleLogout}
          style={{ width: '100%', padding: '10px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', color: '#EF4444', cursor: 'pointer', fontSize: '13px' }}>
          {collapsed ? '✕' : 'Logout'}
        </button>
      </div>
    </aside>
  )
}