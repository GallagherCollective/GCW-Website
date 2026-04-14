import { useNavigate, useLocation } from 'react-router-dom'

export default function GCWNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const links = [
    { label: 'Services', path: '/services' },
    { label: 'Platform', path: '/platform' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]
  const isActive = (path) => location.pathname === path
  return (
    <nav style={{ background: '#fff', borderBottom: '1px solid #EDE6DA', padding: '0 2rem', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100, fontFamily: "'Montserrat', sans-serif" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');`}</style>
      <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}>
        <div style={{ width: 38, height: 38, borderRadius: '50%', border: '1.5px solid #B8734A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontSize: 13, fontWeight: 700, color: '#B8734A' }}>GCW</div>
        <div>
          <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 600, color: '#2B2B2B', lineHeight: 1 }}>Gallagher Collective Works</div>
          <div style={{ fontSize: 9, color: '#8A9E8A', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Simplifying Work. Amplifying Results.</div>
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        {links.map(link => (
          <button key={link.path} onClick={() => navigate(link.path)} style={{ padding: '6px 14px', border: 'none', borderRadius: 6, background: isActive(link.path) ? 'rgba(184,115,74,0.1)' : 'transparent', color: isActive(link.path) ? '#B8734A' : 'rgba(43,43,43,0.6)', fontSize: 13, fontWeight: isActive(link.path) ? 600 : 500, cursor: 'pointer', fontFamily: "'Montserrat', sans-serif", transition: 'all 0.15s' }}
            onMouseEnter={e => { if (!isActive(link.path)) e.currentTarget.style.color = '#B8734A' }}
            onMouseLeave={e => { if (!isActive(link.path)) e.currentTarget.style.color = 'rgba(43,43,43,0.6)' }}>
            {link.label}
          </button>
        ))}
        <div style={{ width: 1, height: 20, background: '#EDE6DA', margin: '0 8px' }} />
        <button onClick={() => window.open('https://collectivestaff.app', '_blank')} style={{ padding: '7px 16px', border: 'none', borderRadius: 8, background: '#B8734A', color: '#fff', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: "'Montserrat', sans-serif" }}>Collective Staff</button>
      </div>
    </nav>
  )
}