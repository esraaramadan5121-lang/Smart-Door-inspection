export default function Pagination({ page, total, perPage, onPageChange }: {
  page: number, total: number, perPage: number, onPageChange: (p: number) => void
}) {
  const totalPages = Math.ceil(total / perPage)
  if (totalPages <= 1) return null

  return (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
      <button onClick={() => onPageChange(page - 1)} disabled={page === 1}
        style={{ padding: '8px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: page === 1 ? 'rgba(255,255,255,0.2)' : '#fff', cursor: page === 1 ? 'not-allowed' : 'pointer', fontSize: '13px' }}>
        ←
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
        <button key={p} onClick={() => onPageChange(p)}
          style={{ padding: '8px 16px', background: p === page ? '#C9A24A' : 'transparent', border: `1px solid ${p === page ? '#C9A24A' : 'rgba(255,255,255,0.15)'}`, borderRadius: '6px', color: p === page ? '#0A0A0A' : '#fff', cursor: 'pointer', fontSize: '13px', fontWeight: p === page ? 600 : 400 }}>
          {p}
        </button>
      ))}
      <button onClick={() => onPageChange(page + 1)} disabled={page === totalPages}
        style={{ padding: '8px 16px', background: 'transparent', border: '1px solid rgba(255,255,255,0.15)', borderRadius: '6px', color: page === totalPages ? 'rgba(255,255,255,0.2)' : '#fff', cursor: page === totalPages ? 'not-allowed' : 'pointer', fontSize: '13px' }}>
        →
      </button>
    </div>
  )
}