import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, Palette, Layers } from 'lucide-react'
import GCWNav from '../components/GCWNav'
import GCWFooter from '../components/GCWFooter'

export default function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navCards = [
    { Icon: Users,   color: '#A06535', title: 'Services',  desc: 'Workforce Solutions & Creative Art Services for small businesses.', path: '/services' },
    { Icon: Layers,  color: '#6B7D6B', title: 'Platform',  desc: 'The full GCW product suite - Staff, Dining, Hospitality, Fleet & more.', path: '/platform' },
    { Icon: Palette, color: '#8A7A6A', title: 'About',     desc: 'Meet John & Tiffany Gallagher - built for small business.', path: '/about' },
    { Icon: Users,   color: '#4A7C59', title: 'Contact',   desc: 'Tell us about your business - we respond within one business day.', path: '/contact' },
  ]

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#F7F2EB', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .primary-btn { background: #A06535; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .primary-btn:hover { background: #B8734A; transform: translateY(-1px); }
        .outline-btn { background: transparent; color: #A06535; border: 1.5px solid #A06535; border-radius: 8px; padding: 11px 24px; font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .outline-btn:hover { background: rgba(160,101,53,0.08); }
        .nav-card { background: #fff; border: 1px solid #EDE6DA; border-radius: 12px; padding: 1.5rem; cursor: pointer; transition: all 0.2s; }
        .nav-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(43,43,43,0.08); }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .float { animation: float 4s ease-in-out infinite; }
      `}</style>

      <GCWNav />

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '7rem 2rem 5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <div className="reveal" style={{ display: 'inline-block', background: 'rgba(160,101,53,0.1)', border: '1px solid rgba(160,101,53,0.3)', borderRadius: 20, padding: '4px 14px', fontSize: 11, fontWeight: 600, color: '#A06535', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Workforce Solutions & Creative Art
          </div>
          <h1 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.4rem', fontWeight: 700, color: '#2B2B2B', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Simplifying Work.<br /><em style={{ color: '#A06535' }}>Amplifying Results.</em>
          </h1>
          <p className="reveal reveal-delay-2" style={{ fontSize: 15, color: '#6B7D6B', lineHeight: 1.8, marginBottom: '0.75rem', maxWidth: 460 }}>
            At Gallagher Collective Works, we simplify the complexities of managing your workforce. Our all-in-one solutions bring HR, onboarding, compliance, timekeeping, and support into one seamless experience.
          </p>
          <p className="reveal reveal-delay-2" style={{ fontSize: 14, color: '#A06535', fontWeight: 600, fontStyle: 'italic', marginBottom: '2rem', maxWidth: 460 }}>
            Eliminating guesswork. Increasing efficiency. Giving you the freedom to focus on growing your business.
          </p>
          <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: '2rem' }}>
            <button className="primary-btn" onClick={() => navigate('/contact')}>Work With Us</button>
            <button className="outline-btn" onClick={() => navigate('/services')}>Our Services</button>
          </div>
          <div className="reveal reveal-delay-4" style={{ display: 'flex', gap: 32 }}>
            {[['20+', 'Years of Experience'], ['Maine', 'Based & Built'], ['5-50', 'Employee Sweet Spot']].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#A06535', fontWeight: 700, lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 11, color: '#8A9E8A', marginTop: 3, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Floating card */}
        <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
          <div className="float" style={{ background: '#fff', border: '1px solid #EDE6DA', borderRadius: 20, padding: '2rem', boxShadow: '0 16px 48px rgba(43,43,43,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid #EDE6DA' }}>
              <img src="/gcw-logo.png" alt="GCW" style={{ height: 40, objectFit: 'contain', background: 'transparent' }} />
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 13, fontWeight: 600, color: '#2B2B2B', lineHeight: 1 }}>Gallagher Collective Works</div>
                <div style={{ fontSize: 9, color: '#8A9E8A', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 2 }}>Built for Small Business Success</div>
              </div>
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: '#A06535', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '0.875rem' }}>Products Designed for Small Business</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
              {[
                { color: '#A06535', label: 'Clock In/Out',       desc: 'Live timer, job codes, time log' },
                { color: '#6B7D6B', label: 'Digital Onboarding', desc: 'W-4, I-9, e-signatures' },
                { color: '#A06535', label: 'Team Calendar',      desc: 'Full CRUD, 9 event types' },
                { color: '#6B7D6B', label: 'IT Helpdesk',        desc: 'Tickets, change management' },
                { color: '#A06535', label: 'Document Library',   desc: 'Upload, require signature' },
                { color: '#6B7D6B', label: 'Role System',        desc: 'HR Admin, Supervisor, Staff' },
              ].map(({ color, label, desc }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '8px 10px', borderRadius: 8, background: '#F7F2EB' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0, marginTop: 4 }} />
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 600, color: '#2B2B2B', lineHeight: 1.3 }}>{label}</div>
                    <div style={{ fontSize: 9, color: '#8A9E8A', marginTop: 1, lineHeight: 1.4 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid #EDE6DA', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ fontSize: 11, color: '#6B7D6B', fontStyle: 'italic' }}>Built to Work. Made for You.</div>
              <button style={{ background: '#A06535', color: '#fff', border: 'none', borderRadius: 6, padding: '5px 12px', fontSize: 10, fontWeight: 600, cursor: 'pointer', fontFamily: "'Montserrat', sans-serif" }} onClick={() => window.open('https://collectivestaff.app/demo', '_blank')}>Try Demo</button>
            </div>
          </div>
          <div style={{ position: 'absolute', top: -14, right: -14, background: '#3D3530', color: '#D9C3A3', borderRadius: 10, padding: '8px 14px', fontSize: 11, fontWeight: 600, boxShadow: '0 4px 16px rgba(43,43,43,0.15)' }}>
            Based in Ellsworth, ME
          </div>
        </div>
      </section>

      {/* Strip */}
      <div style={{ background: '#3D3530', padding: '1.25rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          {['Workforce Solutions', 'Creative Art Services', 'SaaS Products', 'Small Business Focus', 'Maine-Based'].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(217,195,163,0.7)', fontWeight: 500 }}>
              <span style={{ color: '#A06535' }}>✦</span> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Nav cards */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 className="reveal" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#2B2B2B', marginBottom: '0.5rem' }}>Everything your business needs.</h2>
          <p className="reveal reveal-delay-1" style={{ fontSize: 14, color: '#6B7D6B' }}>Explore each section to learn more.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {navCards.map((card, i) => (
            <div key={card.title} className={`nav-card reveal reveal-delay-${i+1}`} onClick={() => navigate(card.path)}
              onMouseEnter={e => { e.currentTarget.style.borderColor = card.color; e.currentTarget.style.boxShadow = '0 8px 24px ' + card.color + '22'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#EDE6DA'; e.currentTarget.style.boxShadow = 'none'; }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: card.color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <card.Icon size={22} color={card.color} strokeWidth={1.75} />
              </div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 600, color: '#2B2B2B', marginBottom: '0.4rem' }}>{card.title}</div>
              <div style={{ fontSize: 12, color: '#6B7D6B', lineHeight: 1.6, marginBottom: '0.75rem' }}>{card.desc}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: card.color }}>Learn more</div>
            </div>
          ))}
        </div>
      </div>

      <GCWFooter />
    </div>
  )
}