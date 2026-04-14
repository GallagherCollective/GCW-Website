import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, Palette, Zap, DollarSign, Layers, Phone } from 'lucide-react'
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

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#F7F2EB', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .nav-card { background: #fff; border: 1px solid #EDE6DA; border-radius: 14px; padding: 1.75rem; cursor: pointer; transition: all 0.25s; }
        .nav-card:hover { transform: translateY(-4px); box-shadow: 0 8px 32px rgba(43,43,43,0.08); border-color: #D9C3A3; }
        .primary-btn { background: #B8734A; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-family: Montserrat, sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-block; }
        .primary-btn:hover { background: #C9895F; transform: translateY(-1px); }
        .outline-btn { background: transparent; color: #B8734A; border: 1.5px solid #B8734A; border-radius: 8px; padding: 11px 24px; font-family: Montserrat, sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; text-decoration: none; display: inline-block; }
        .outline-btn:hover { background: rgba(184,115,74,0.08); }
      `}</style>

      <GCWNav />

      {/* Hero */}
      <div style={{ background: '#2B2B2B', padding: '6rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Ellsworth, Maine</div>
          <h1 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.5rem', fontWeight: 700, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.15 }}>
            Simplifying Work.<br /><em style={{ color: '#B8734A' }}>Amplifying Results.</em>
          </h1>
          <p className="reveal reveal-delay-2" style={{ fontSize: 15, color: 'rgba(217,195,163,0.6)', lineHeight: 1.8, marginBottom: '2.5rem', maxWidth: 520, margin: '0 auto 2.5rem' }}>
            Gallagher Collective Works helps small businesses run better — through workforce systems, creative design, and purpose-built software.
          </p>
          <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="primary-btn" onClick={() => navigate('/services')}>Our Services</button>
            <button className="outline-btn" style={{ color: '#D9C3A3', borderColor: 'rgba(217,195,163,0.4)' }} onClick={() => navigate('/contact')}>Get in Touch</button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div style={{ background: '#B8734A', padding: '1.25rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          {[['Workforce Solutions','Operational systems that scale'],['Creative Art Services','Design that elevates brands'],['SaaS Products','Software built for small business'],['Maine-Based','Serving businesses everywhere']].map(([val, label]) => (
            <div key={val} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.7)', marginTop: 3 }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Nav cards */}
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Everything we offer</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', fontWeight: 700, color: '#2B2B2B' }}>Two things. Done exceptionally well.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: '2rem' }}>
          {[
            { Icon: Users,    color: '#B8734A', title: 'Workforce Solutions', desc: 'HR systems, onboarding workflows, compliance, timekeeping, and performance tracking — built for small teams.', path: '/services' },
            { Icon: Palette,  color: '#6B7D6B', title: 'Creative Art Services', desc: 'Brand identity, custom artwork, murals, and marketing design that makes your business look as good as it runs.', path: '/services' },
            { Icon: Layers,   color: '#D9C3A3', title: 'The Collective Platform', desc: 'Purpose-built SaaS products for small businesses — Staff, Hospitality, Fleet, and Time.', path: '/platform' },
          ].map(({ Icon, color, title, desc, path }) => (
            <div key={title} className="nav-card reveal reveal-delay-1" onClick={() => navigate(path)}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: color + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Icon size={22} color={color} strokeWidth={1.75} />
              </div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 600, color: '#2B2B2B', marginBottom: '0.5rem' }}>{title}</div>
              <div style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.7, marginBottom: '1rem' }}>{desc}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color }}>Learn more</div>
            </div>
          ))}
        </div>

        {/* Collective Staff CTA */}
        <div style={{ background: '#2B2B2B', borderRadius: 16, padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>Now Live</div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>Collective Staff — HR portal for small businesses</div>
            <div style={{ fontSize: 13, color: 'rgba(217,195,163,0.5)' }}>Starting at $59/mo. No setup fee. Free demo available.</div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="primary-btn" onClick={() => window.open('https://collectivestaff.app/demo','_blank')}>Try Free Demo</button>
            <button className="outline-btn" style={{ color: '#D9C3A3', borderColor: 'rgba(217,195,163,0.4)' }} onClick={() => navigate('/platform')}>See Pricing</button>
          </div>
        </div>
      </div>

      {/* About snippet */}
      <div style={{ background: '#fff', padding: '5rem 2rem', borderTop: '1px solid #EDE6DA' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Who we are</div>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#2B2B2B', marginBottom: '1rem', lineHeight: 1.2 }}>
              John & Tiffany Gallagher.<br /><em style={{ color: '#B8734A' }}>Built for small business.</em>
            </h2>
            <p className="reveal reveal-delay-2" style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              A husband-and-wife team based in Ellsworth, Maine. John brings deep expertise in technology and IT management. Tiffany brings over two decades of HR and operational management. Together, they build the systems small businesses need to thrive.
            </p>
            <div style={{ display: 'flex', gap: 12 }}>
              <button className="primary-btn" onClick={() => navigate('/about')}>Meet the Team</button>
              <button className="outline-btn" onClick={() => navigate('/contact')}>Get in Touch</button>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[['Ellsworth, ME','Based in Maine'],['20+','Years HR Experience'],['2','Products Live'],['5-50','Employee Sweet Spot']].map(([val, label]) => (
              <div key={label} style={{ background: '#F7F2EB', border: '1px solid #EDE6DA', borderRadius: 12, padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', color: '#B8734A', fontWeight: 700, lineHeight: 1, marginBottom: 6 }}>{val}</div>
                <div style={{ fontSize: 11, color: '#8A9E8A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <GCWFooter />
    </div>
  )
}