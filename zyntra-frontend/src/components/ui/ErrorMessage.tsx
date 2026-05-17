export default function ErrorMessage({ message }: { message: string }) {
  return (
    <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.2)', borderRadius: '8px', padding: '16px', color: '#EF4444', fontSize: '14px', textAlign: 'center' }}>
      ⚠️ {message}
    </div>
  )
}