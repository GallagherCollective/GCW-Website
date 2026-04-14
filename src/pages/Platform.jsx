import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, UtensilsCrossed, Truck, Timer, Headphones, Building, Clock, CheckCircle } from 'lucide-react'
import GCWNav from '../components/GCWNav'
import GCWFooter from '../components/GCWFooter'

export default function Platform() {
  const navigate = useNavigate()
  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const plans = [
    { name: 'Starter', price: 59, period: '/mo', limit: 'Up to 15 employees', color: '#6B7D6B', features: ['All core HR modules','Digital onboarding','Policy sign-offs','Timesheets & time off','Employee handbook','Memos & messaging','Document library','Email support'] },
    { name: 'Professional', price: 129, period: '/mo', limit: 'Up to 50 employees', color: '#B8734A', popular: true, features: ['Everything in Starter','Performance tracking','Team calendar','Visitor kiosk','Role management','Priority support','Client config panel','Custom branding'] },
    { name: 'Growth', price: 179, period: '/mo', limit: 'Up to 100 employees', color: '#4A7C59', features: ['Everything in Professional','IT change management','Daily work logs','Dev request portal','Advanced reporting','Dedicated onboarding','SLA support'] },
    { name: 'Enterprise', price: 299, period: '/mo', limit: '100-150 employees', color: '#2B2B2B', features: ['Everything in Growth','Custom feature requests','White-label options','API access','Custom integrations','Account manager'] },
  ]

  const addons = [
    { Icon: Headphones, color: '#B8734A', name: 'Collective Services', price: '+$29/mo', desc: 'IT & Facilities helpdesk, change management, and work logs.' },
    { Icon: Building,   color: '#6B7D6B', name: 'Collective Campus',   price: '+$19/mo', desc: 'Room and space scheduling for shared workspaces.' },
    { Icon: Clock,      color: '#D9C3A3', name: 'Collective Time',     price: '+$15/mo', desc: 'GPS clock-in, shift scheduling, and payroll export.' },
  ]

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
        .plan-card { background: #fff; border: 1px solid #EDE6DA; border-radius: 16px; padding: 2rem; transition: all 0.25s; }
        .plan-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(43,43,43,0.08); }
      `}</style>
      <GCWNav />

      <div style={{ background: '#2B2B2B', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>The GCW Platform</div>
          <h1 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>Software built for the businesses we serve.</h1>
          <p className="reveal reveal-delay-2" style={{ fontSize: 15, color: 'rgba(217,195,163,0.6)', lineHeight: 1.8 }}>Purpose-built SaaS tools that give small businesses enterprise-grade systems at small business prices.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>

        {/* Products */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>The Collective Suite</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#2B2B2B' }}>One platform. Every business need.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: '4rem' }}>
          {[
            { Icon: Users,           iconColor: '#B8734A', name: 'Collective Staff',       desc: 'Complete HR portal for small businesses.', status: 'Live Now', color: '#B8734A', url: 'https://collectivestaff.app' },
            { Icon: UtensilsCrossed, iconColor: '#4A7C59', name: 'Collective Hospitality', desc: 'Restaurant management with shift scheduling.', status: 'Coming Soon', color: '#4A7C59', url: null },
            { Icon: Truck,           iconColor: '#6B7D6B', name: 'Collective Fleet',       desc: 'Vehicle & transportation management.', status: 'In Development', color: '#6B7D6B', url: null },
            { Icon: Timer,           iconColor: '#D9C3A3', name: 'Collective Time',        desc: 'Timekeeping for retail & hourly workers.', status: 'In Development', color: '#D9C3A3', url: null },
          ].map(p => (
            <div key={p.name} onClick={() => p.url && window.open(p.url,'_blank')} style={{ background: p.url ? '#fff' : '#F0EBE2', border: p.url ? '2px solid #B8734A' : '1px solid #EDE6DA', borderRadius: 14, padding: '1.5rem', cursor: p.url ? 'pointer' : 'default', position: 'relative', transition: 'all 0.25s' }}>
              {p.status === 'Live Now' && <div style={{ position: 'absolute', top: 10, right: 10, background: '#B8734A', color: '#fff', fontSize: 9, fontWeight: 600, padding: '2px 8px', borderRadius: 10 }}>LIVE</div>}
              <div style={{ width: 44, height: 44, borderRadius: 10, background: p.iconColor + '18', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem' }}>
                <p.Icon size={22} color={p.iconColor} strokeWidth={1.75} />
              </div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 600, color: '#2B2B2B', marginBottom: 6 }}>{p.name}</div>
              <div style={{ fontSize: 12, color: '#6B7D6B', lineHeight: 1.6, marginBottom: '0.75rem' }}>{p.desc}</div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px', borderRadius: 16, fontSize: 10, fontWeight: 600, background: p.color + '22', color: p.color }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: p.color }} />{p.status}
              </div>
              {p.url && <div style={{ marginTop: 8, fontSize: 11, color: 'rgba(184,115,74,0.7)', fontWeight: 600 }}>Click to visit</div>}
            </div>
          ))}
        </div>

        {/* Pricing */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>Collective Staff Pricing</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#2B2B2B', marginBottom: 8 }}>Simple, transparent pricing.</h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: 13, color: '#6B7D6B' }}>No setup fees. No contracts. Cancel anytime.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: '2rem' }}>
          {plans.map(plan => (
            <div key={plan.name} className="plan-card reveal reveal-delay-1" style={{ borderTop: '3px solid ' + plan.color, position: 'relative' }}>
              {plan.popular && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#B8734A', color: '#fff', fontSize: 9, fontWeight: 700, padding: '3px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>MOST POPULAR</div>}
              <div style={{ fontSize: 13, fontWeight: 700, color: plan.color, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{plan.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 4 }}>
                <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#2B2B2B' }}>${plan.price}</span>
                <span style={{ fontSize: 12, color: '#8A9E8A' }}>{plan.period}</span>
              </div>
              <div style={{ fontSize: 11, color: '#8A9E8A', marginBottom: '1.25rem', paddingBottom: '1.25rem', borderBottom: '1px solid #EDE6DA' }}>{plan.limit}</div>
              {plan.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 8, fontSize: 12, color: '#4A4A4A' }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0, marginTop: 1 }}><circle cx="7" cy="7" r="6" fill={plan.color + '22'}/><path d="M4 7l2 2 4-4" stroke={plan.color} strokeWidth="1.5" strokeLinecap="round"/></svg>
                  {f}
                </div>
              ))}
              <button className="primary-btn" style={{ background: plan.color, width: '100%', marginTop: '1.25rem', fontSize: 12 }} onClick={() => window.open('https://collectivestaff.app/demo','_blank')}>Try Demo</button>
            </div>
          ))}
        </div>

        {/* Add-ons */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>Premium Add-Ons</div>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: '#2B2B2B' }}>Expand your Staff portal</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: '3rem' }}>
          {addons.map(addon => (
            <div key={addon.name} style={{ background: '#fff', border: '1px solid #EDE6DA', borderRadius: 14, padding: '1.75rem', borderTop: '3px solid ' + addon.color }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: addon.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <addon.Icon size={22} color={addon.color} strokeWidth={1.75} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 600, color: '#2B2B2B' }}>{addon.name}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: addon.color }}>{addon.price}</div>
              </div>
              <div style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.7 }}>{addon.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#2B2B2B', borderRadius: 16, padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', fontWeight: 700, color: '#fff', marginBottom: 6 }}>Ready to get started?</div>
            <div style={{ fontSize: 13, color: 'rgba(217,195,163,0.5)' }}>Try the live demo or schedule a personalized walkthrough with Tiffany.</div>
          </div>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="primary-btn" onClick={() => window.open('https://collectivestaff.app/demo','_blank')}>Try Free Demo</button>
            <button className="outline-btn" onClick={() => navigate('/contact')}>Talk to Us</button>
          </div>
        </div>
      </div>
      <GCWFooter />
    </div>
  )
}