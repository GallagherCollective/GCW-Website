import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GCWNav from '../components/GCWNav'
import GCWFooter from '../components/GCWFooter'

export default function About() {
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Montserrat:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .primary-btn { background: #A06535; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-family: Montserrat, sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .primary-btn:hover { background: #B8734A; transform: translateY(-1px); }
        .outline-btn { background: transparent; color: #A06535; border: 1.5px solid #A06535; border-radius: 8px; padding: 11px 24px; font-family: Montserrat, sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .outline-btn:hover { background: rgba(160,101,53,0.08); }
      `}</style>

      <GCWNav />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

          {/* Left - bios */}
          <div>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#A06535', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>About GCW</div>
            <h1 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem', fontWeight: 700, color: '#2B2B2B', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              John & Tiffany Gallagher.<br /><em style={{ color: '#A06535' }}>Built for small business.</em>
            </h1>
            <p className="reveal reveal-delay-2" style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.9, marginBottom: '1rem' }}>
              John and Tiffany Gallagher are a husband-and-wife team based in Ellsworth, Maine. John brings an extensive background in technology, IT management, and business strategy — translating complex systems into practical solutions and leading implementation with precision and care.
            </p>
            <p className="reveal reveal-delay-2" style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.9, marginBottom: '1rem' }}>
              Tiffany brings over two decades of operational management and human resources expertise — onboarding, compliance, payroll, training, SOP development, team management, and day-to-day operations across organizations of every size. If it touches people and process, Tiffany has not only done it — she has built the system around it.
            </p>
            <p className="reveal reveal-delay-3" style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Together, John and Tiffany founded Gallagher Collective Works with a simple belief: small businesses deserve powerful tools without the enterprise price tag or complexity.
            </p>
            <p className="reveal reveal-delay-3" style={{ fontSize: 14, fontWeight: 700, color: '#A06535', marginBottom: '2rem' }}>
              Gallagher Collective Works — Built to Work. Made for You.
            </p>
            <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: 12 }}>
              <button className="primary-btn" onClick={() => navigate('/contact')}>Get in Touch</button>
              <button className="outline-btn" onClick={() => window.open('https://collectivestaff.app', '_blank')}>See Our Work</button>
            </div>
          </div>

          {/* Right - stats */}
          <div className="reveal reveal-delay-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              ['Ellsworth', 'Based in Maine'],
              ['2', 'Co-Owners'],
              ['20+', 'Years of Experience'],
              ['5-100', 'Employee Sweet Spot'],
            ].map(([val, label]) => (
              <div key={label} style={{ background: '#fff', border: '1px solid #EDE6DA', borderRadius: 12, padding: '1.75rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#A06535', fontWeight: 700, lineHeight: 1, marginBottom: 6 }}>{val}</div>
                <div style={{ fontSize: 10, color: '#8A9E8A', textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: 1.4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#3D3530', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>Ready to work together?</div>
            <div style={{ fontSize: 13, color: 'rgba(217,195,163,0.5)' }}>Tell us about your business — we respond within one business day.</div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="primary-btn" onClick={() => navigate('/contact')}>Get in Touch</button>
            <button className="outline-btn" style={{ color: '#D9C3A3', borderColor: 'rgba(217,195,163,0.3)' }} onClick={() => window.open('https://collectivestaff.app', '_blank')}>See Our Work</button>
          </div>
        </div>
      </div>

      <GCWFooter />
    </div>
  )
}