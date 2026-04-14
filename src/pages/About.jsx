import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cpu, Users, Palette, Heart } from 'lucide-react'
import GCWNav from '../components/GCWNav'
import GCWFooter from '../components/GCWFooter'

export default function About() {
  const navigate = useNavigate()
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
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
        .reveal-delay-1 { transition-delay: 0.1s; } .reveal-delay-2 { transition-delay: 0.2s; } .reveal-delay-3 { transition-delay: 0.3s; }
        .primary-btn { background: #B8734A; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-family: Montserrat, sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .primary-btn:hover { background: #C9895F; transform: translateY(-1px); }
        .outline-btn { background: transparent; color: #B8734A; border: 1.5px solid #B8734A; border-radius: 8px; padding: 11px 24px; font-family: Montserrat, sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
      `}</style>
      <GCWNav />

      <div style={{ background: '#2B2B2B', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>About GCW</div>
          <h1 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
            John & Tiffany Gallagher.<br /><em style={{ color: '#B8734A' }}>Built for small business.</em>
          </h1>
          <p className="reveal reveal-delay-2" style={{ fontSize: 15, color: 'rgba(217,195,163,0.6)', lineHeight: 1.8 }}>A husband-and-wife team based in Ellsworth, Maine — blending technology, HR expertise, and creative design.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>

        {/* Mission */}
        <div className="reveal" style={{ background: '#fff', border: '1px solid #EDE6DA', borderRadius: 16, padding: '3rem', marginBottom: '3rem', textAlign: 'center', borderTop: '3px solid #B8734A' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Our Mission</div>
          <blockquote style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 600, color: '#2B2B2B', lineHeight: 1.5, maxWidth: 700, margin: '0 auto', fontStyle: 'italic' }}>
            "Small businesses deserve powerful tools without the enterprise price tag or complexity."
          </blockquote>
          <div style={{ marginTop: '1rem', fontSize: 13, color: '#B8734A', fontWeight: 600 }}>— Gallagher Collective Works</div>
        </div>

        {/* John & Tiffany */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: '3rem' }}>
          {[
            { Icon: Cpu, color: '#B8734A', name: 'John Gallagher', role: 'Co-Owner — Technology & Strategy',
              bio: 'John brings an extensive background in technology, IT management, and business strategy — translating complex systems into practical solutions and leading implementation with precision and care. He architects the technical foundation of every GCW product and ensures that what gets built actually works in the real world.',
              skills: ['IT Systems & Infrastructure','Software Architecture','Business Strategy','Project Management','Technical Implementation'] },
            { Icon: Users, color: '#6B7D6B', name: 'Tiffany Gallagher', role: 'Co-Owner — HR & Operations',
              bio: 'Tiffany brings over two decades of operational management and human resources expertise — onboarding, compliance, payroll, training, SOP development, team management, and day-to-day operations across organizations of every size. If it touches people and process, Tiffany has not only done it — she has built the system around it.',
              skills: ['Human Resources','Onboarding & Compliance','Payroll & Benefits','SOP Development','Team Management'] },
          ].map(({ Icon, color, name, role, bio, skills }) => (
            <div key={name} className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid #EDE6DA', borderRadius: 16, padding: '2.5rem', borderTop: '3px solid ' + color }}>
              <div style={{ width: 60, height: 60, borderRadius: 14, background: color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Icon size={30} color={color} strokeWidth={1.5} />
              </div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 700, color: '#2B2B2B', marginBottom: 4 }}>{name}</div>
              <div style={{ fontSize: 11, fontWeight: 600, color, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '1rem' }}>{role}</div>
              <div style={{ width: 40, height: 2, background: color, borderRadius: 2, marginBottom: '1rem' }} />
              <p style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.9, marginBottom: '1.25rem' }}>{bio}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {skills.map(s => (
                  <span key={s} style={{ fontSize: 10, padding: '3px 10px', borderRadius: 20, background: color + '12', color, fontWeight: 600 }}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: '3rem' }}>
          {[['Ellsworth, ME','Based in Maine'],['20+','Years HR Experience'],['2','Products Live'],['5-50','Employee Sweet Spot']].map(([val, label]) => (
            <div key={label} className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid #EDE6DA', borderRadius: 12, padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#B8734A', fontWeight: 700, lineHeight: 1, marginBottom: 6 }}>{val}</div>
              <div style={{ fontSize: 11, color: '#8A9E8A', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#2B2B2B', borderRadius: 16, padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>Ready to work with us?</div>
            <div style={{ fontSize: 13, color: 'rgba(217,195,163,0.5)' }}>Tell us about your business and we will be in touch within one business day.</div>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <button className="primary-btn" onClick={() => navigate('/contact')}>Get in Touch</button>
            <button className="outline-btn" style={{ color: '#D9C3A3', borderColor: 'rgba(217,195,163,0.4)' }} onClick={() => window.open('https://collectivestaff.app/demo','_blank')}>Try Demo</button>
          </div>
        </div>
      </div>
      <GCWFooter />
    </div>
  )
}