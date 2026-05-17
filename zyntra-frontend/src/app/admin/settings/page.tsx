'use client'
import { useState } from 'react'
import Topbar from '@/components/dashboard/Topbar'

export default function AdminSettings() {
  const [saved, setSaved] = useState(false)
  const [form, setForm] = useState({
    siteName: 'ZYNTRA Digital',
    email: 'hello@zyntra.com',
    phone: '+1 (234) 567-8900',
    address: '123 Fifth Avenue, New York, NY 10001, USA'
  })

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div>
      <Topbar title="Settings" />
      <div style={{ padding: '24px', maxWidth: '600px' }}>
        {saved && (
          <div style={{ background: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.2)', borderRadius: '8px', padding: '12px 16px', marginBottom: '24px', color: '#22C55E', fontSize: '13px' }}>
            ✅ Settings saved successfully!
          </div>
        )}
        <div style={{ background: '#111111', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '32px' }}>
          <form onSubmit={handleSave}>
            {[
              { key: 'siteName', label: 'Site Name' },
              { key: 'email', label: 'Contact Email' },
              { key: 'phone', label: 'Phone Number' },
              { key: 'address', label: 'Address' },
            ].map(f => (
              <div key={f.key} style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', color: 'rgba(255,255,255,0.45)', fontSize: '12px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{f.label}</label>
                <input
                  value={form[f.key as keyof typeof form]}
                  onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', padding: '12px 16px', color: '#fff', fontSize: '14px', outline: 'none' }}
                  onFocus={e => e.target.style.borderColor = '#C9A24A'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
              </div>
            ))}
            <button type="submit" style={{ padding: '12px 28px', background: '#C9A24A', color: '#0A0A0A', border: 'none', borderRadius: '8px', fontSize: '14px', fontWeight: 600, cursor: 'pointer' }}>
              Save Settings
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}