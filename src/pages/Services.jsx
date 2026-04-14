import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, Palette, CheckCircle, ArrowRight } from 'lucide-react'
import GCWNav from '../components/GCWNav'
import GCWFooter from '../components/GCWFooter'

export default function Services() {
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
        .outline-btn:hover { background: rgba(184,115,74,0.08); }
        .check-item { display: flex; align-items: center; gap: 10; font-size: 13px; color: #6B7D6B; margin-bottom: 10px; }
      `}</style>
      <GCWNav />
      <div style={{ background: '#2B2B2B', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>What we do</div>
          <h1 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>Two things. Done exceptionally well.</h1>
          <p className="reveal reveal-delay-2" style={{ fontSize: 15, color: 'rgba(217,195,163,0.6)', lineHeight: 1.8 }}>John and Tiffany Gallagher blend business strategy with operational expertise and creative design.</p>
        </div>
      </div>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: '3rem' }}>
          {[
            { Icon: Users, color: '#B8734A', title: 'Workforce Solutions', tag: 'Our Core Service',
              desc: 'We simplify how businesses manage their staff. From HR systems to onboarding workflows, scheduling, and compliance - we build the operational infrastructure that lets your team thrive.',
              items: ['HR portal implementation','Employee onboarding systems','Policy & compliance management','Timekeeping & scheduling','Performance tracking','SOP development & documentation'] },
            { Icon: Palette, color: '#6B7D6B', title: 'Creative Art Services', tag: null,
              desc: 'We elevate brands through intentional design. Custom artwork, brand identity, murals, and creative projects that make your business look as good as it runs.',
              items: ['Brand identity & logo design','Custom artwork & murals','Marketing design & collateral','Business card & print design','Creative project consultation','Visual brand strategy'] },
          ].map(({ Icon, color, title, tag, desc, items }) => (
            <div key={title} className="reveal reveal-delay-1" style={{ background: '#fff', border: '1px solid #EDE6DA', borderRadius: 16, padding: '2.5rem', borderTop: '3px solid ' + color }}>
              {tag && <div style={{ display: 'inline-block', background: 'rgba(184,115,74,0.1)', border: '1px solid rgba(184,115,74,0.3)', borderRadius: 20, padding: '3px 12px', fontSize: 10, fontWeight: 600, color: '#B8734A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>{tag}</div>}
              <div style={{ width: 52, height: 52, borderRadius: 12, background: color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Icon size={26} color={color} strokeWidth={1.75} />
              </div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 600, color: '#2B2B2B', marginBottom: '0.5rem' }}>{title}</h2>
              <div style={{ width: 40, height: 2, background: color, marginBottom: '1rem', borderRadius: 2 }} />
              <p style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.8, marginBottom: '1.5rem' }}>{desc}</p>
              {items.map(item => (
                <div key={item} className="check-item">
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: color + '22', border: '1px solid ' + color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke={color} strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  {item}
                </div>
              ))}
              <div style={{ marginTop: '1.5rem' }}>
                <button className="primary-btn" style={{ background: color, fontSize: 12, padding: '9px 20px' }} onClick={() => navigate('/contact')}>Get Started</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: '#2B2B2B', borderRadius: 16, padding: '2.5rem', textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>Ready to work together?</h3>
          <p style={{ fontSize: 13, color: 'rgba(217,195,163,0.5)', lineHeight: 1.8, marginBottom: '1.5rem', maxWidth: 480, margin: '0 auto 1.5rem' }}>Tell us about your business and we will respond within one business day.</p>
          <button className="primary-btn" style={{ fontSize: 14, padding: '12px 32px' }} onClick={() => navigate('/contact')}>Get in Touch</button>
        </div>
      </div>
      <GCWFooter />
    </div>
  )
}