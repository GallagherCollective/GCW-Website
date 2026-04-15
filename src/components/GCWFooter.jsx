import { useNavigate } from 'react-router-dom'
export default function GCWFooter() {
  const navigate = useNavigate()
  return (
    <footer style={{ background: '#1E1E1E', padding: '2.5rem 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, color: '#fff', fontWeight: 700, marginBottom: 4 }}>Gallagher Collective Works</div>
          <div style={{ fontSize: 10, color: 'rgba(217,195,163,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Simplifying Work. Amplifying Results.</div>
          <div style={{ fontSize: 11, color: 'rgba(217,195,163,0.3)', marginTop: 6 }}>info@gallaghercollectiveworks.com</div>
        </div>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          {[['Services','/services'],['Platform','/platform'],['About','/about'],['Contact','/contact']].map(([label,path]) => (
            <button key={path} onClick={() => navigate(path)} style={{ fontSize: 12, color: 'rgba(217,195,163,0.4)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Montserrat',sans-serif", transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = '#A06535'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(217,195,163,0.4)'}>
              {label}
            </button>
          ))}
          <button onClick={() => window.open('https://collectivestaff.app','_blank')} style={{ fontSize: 12, color: '#A06535', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Montserrat',sans-serif", fontWeight: 600 }}>collectivestaff.app</button>
        </div>
        <div style={{ fontSize: 11, color: 'rgba(217,195,163,0.25)' }}>2025 Gallagher Collective Works LLC</div>
      </div>
    </footer>
  )
}