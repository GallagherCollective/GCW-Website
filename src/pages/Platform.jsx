import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Clock, FileText, Shield, BookOpen, ClipboardList, Calendar, MessageSquare, FolderOpen, BarChart2, AlertTriangle, Headphones, GitBranch, FileCheck, Users, Palette, Smartphone, Settings, Key, Zap, DollarSign, Building, Timer } from 'lucide-react'
import GCWNav from '../components/GCWNav'
import GCWFooter from '../components/GCWFooter'

export default function Platform() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('features')

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    const addons = [
    { Icon: Headphones, color: '#A06535', name: 'Collective Services', price: '+$29/mo', desc: 'IT & Facilities helpdesk, change management, and work logs.', premium: true },
    { Icon: Building,   color: '#6B7D6B', name: 'Collective Campus',   price: '+$29/mo', desc: 'Room and space scheduling for shared workspaces.',           premium: true },
    { Icon: FolderOpen, color: '#A06535', name: 'HR Document Pack',    price: '+$29/mo', desc: '10 pre-built HR templates - handbook, PTO policy & more.',   premium: true },
    { Icon: Timer,      color: '#8A7A6A', name: 'Collective Time',     price: '+$19/mo', desc: 'GPS clock-in, shift scheduling, and payroll export.',        premium: false },
    { Icon: Users,      color: '#4A7C59', name: 'Payroll Export',      price: '+$19/mo', desc: 'Export hours & earnings to QuickBooks, Gusto, or CSV.',      premium: false },
    { Icon: FileText,   color: '#6B7D6B', name: 'e-Signature Pro',     price: '+$19/mo', desc: 'Legally binding signatures with timestamp & audit trail.',   premium: false },
    { Icon: Users,      color: '#3D3530', name: 'GCW Managed Setup',   price: '$249 once', desc: 'White-glove setup: GCW configures everything for your team.', premium: false },
  ]

  return () => observer.disconnect()
  }, [])

  const features = [
    { Icon: FileText,     color: '#A06535', title: 'Digital Employee Onboarding', desc: 'Guide new hires through W-4, I-9, Direct Deposit, Handbook e-sign, and policy acknowledgments — all before their first day.', tags: ['e-signatures','onboarding flow','progress tracking'] },
    { Icon: Clock,        color: '#6B7D6B', title: 'Clock In / Clock Out',         desc: 'Live timer with job codes, department tracking, and daily time log. Managers see who is clocked in in real time.',              tags: ['live status','job codes','time log'] },
    { Icon: Shield,       color: '#A06535', title: 'Policy Sign-Offs',             desc: 'Employees sign policies digitally. Admins track who has and has not signed, and send reminders with one click.',                  tags: ['e-signatures','track unsigned','compliance'] },
    { Icon: BookOpen,     color: '#6B7D6B', title: 'Employee Handbook',            desc: 'Store your full employee handbook in one place. Employees access it anytime. Update it once — everyone sees it instantly.',       tags: ['always current','onboarding','easy access'] },
    { Icon: ClipboardList,color: '#A06535', title: 'Timesheet Submission',         desc: 'Employees submit weekly timesheets from any device. Managers approve or send back with one click. Full OT visibility.',           tags: ['weekly submit','approve/deny','export ready'] },
    { Icon: Calendar,     color: '#6B7D6B', title: 'Time Off Requests',            desc: 'Employees request PTO, sick, or personal time. Managers see full balances, approve with one click, and track history.',           tags: ['PTO tracking','balance alerts','approval flow'] },
    { Icon: MessageSquare,color: '#A06535', title: 'Memos & Messaging',            desc: 'Send company-wide or targeted memos with read receipts. Urgent memos display as a full-screen banner on every dashboard.',        tags: ['read receipts','urgent banners','announcements'] },
    { Icon: Users,      color: '#3D3530', name: 'GCW Managed Setup',   price: '$249 once', desc: 'White-glove setup: GCW configures everything for your team.', premium: false },
  ]

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#F7F2EB', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; } .reveal-delay-2 { transition-delay: 0.2s; } .reveal-delay-3 { transition-delay: 0.3s; }
        .primary-btn { background: #A06535; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-family: Montserrat, sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .primary-btn:hover { background: #B8734A; transform: translateY(-1px); }
        .outline-btn { background: transparent; color: #A06535; border: 1.5px solid #A06535; border-radius: 8px; padding: 11px 24px; font-family: Montserrat, sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .tab-btn { padding: 10px 28px; border: none; border-radius: 8px; font-family: Montserrat, sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; }
        .tab-active { background: #A06535; color: #fff; }
        .tab-inactive { background: transparent; color: rgba(43,43,43,0.5); }
        .tab-inactive:hover { color: #A06535; }
        .feature-card { background: #fff; border: 1px solid #EDE6DA; border-radius: 12px; padding: 1.25rem; transition: all 0.2s; }
        .feature-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(43,43,43,0.08); }
        .tag { display: inline-block; padding: 2px 8px; border-radius: 10px; font-size: 10px; font-weight: 500; background: #F7F2EB; color: #6B7D6B; margin: 2px; }
        .plan-card { background: #fff; border: 1px solid #EDE6DA; border-radius: 16px; padding: 2rem; transition: all 0.25s; }
        .plan-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(43,43,43,0.08); }
        .check-item { display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px; font-size: 12px; color: #4A4A4A; }
      `}</style>

      <GCWNav />

      {/* Header */}
      <div style={{ background: '#3D3530', padding: '3.5rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#A06535', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Collective Staff</div>
          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.8rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>18 features. One portal.</h1>
          <p style={{ fontSize: 14, color: 'rgba(217,195,163,0.55)', lineHeight: 1.8, marginBottom: '2rem' }}>Everything included — no modules to unlock, no features to pay for.</p>
          {/* Tabs */}
          <div style={{ display: 'inline-flex', gap: 4, background: 'rgba(255,255,255,0.08)', borderRadius: 10, padding: 4 }}>
            <button className={`tab-btn ${activeTab==='features' ? 'tab-active' : 'tab-inactive'}`} onClick={() => setActiveTab('features')}>Features</button>
            <button className={`tab-btn ${activeTab==='pricing' ? 'tab-active' : 'tab-inactive'}`} style={{ color: activeTab==='pricing' ? '#fff' : 'rgba(217,195,163,0.5)' }} onClick={() => setActiveTab('pricing')}>Pricing</button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 2rem' }}>

        {/* FEATURES TAB */}
        {activeTab === 'features' && (<div key='features-tab'>
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: '2.5rem' }}>
              {features.map((f, i) => (
                <div key={f.title} className="feature-card reveal">
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '0.75rem' }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: f.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <f.Icon size={18} color={f.color} strokeWidth={1.75} />
                    </div>
                    <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 14, fontWeight: 600, color: '#2B2B2B', lineHeight: 1.3 }}>{f.title}</div>
                  </div>
                  <p style={{ fontSize: 11, color: '#6B7D6B', lineHeight: 1.6, marginBottom: '0.75rem' }}>{f.desc}</p>
                  <div>{f.tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
                </div>
              ))}
            </div>
            <div style={{ background: '#3D3530', borderRadius: 12, padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Need something specific?</div>
                <div style={{ fontSize: 12, color: 'rgba(217,195,163,0.5)' }}>Every plan includes the Dev Request Portal — submit feature requests directly to the GCW team.</div>
              </div>
              <button className="primary-btn" onClick={() => window.open('https://collectivestaff.app/demo','_blank')}>Try the Demo</button>
            </div>
          </div>
        )}

        {/* PRICING TAB */}
        {activeTab === 'pricing' && (<div key='pricing-tab'>
          <div>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#A06535', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>Simple Pricing</div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#2B2B2B', marginBottom: 8 }}>No surprises. No hidden fees.</h2>
              <p style={{ fontSize: 13, color: '#6B7D6B' }}>Month-to-month. Cancel anytime. All plans include a free setup call with the GCW team.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: '2.5rem' }}>
              {plans.map(plan => (
                <div key={plan.name} className="plan-card" style={{ borderTop: '3px solid ' + plan.color, position: 'relative' }}>
                  {plan.popular && <div style={{ position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)', background: '#A06535', color: '#fff', fontSize: 9, fontWeight: 700, padding: '3px 12px', borderRadius: 20, whiteSpace: 'nowrap' }}>MOST POPULAR</div>}
                  <div style={{ fontSize: 12, fontWeight: 700, color: plan.color, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{plan.name}</div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 2, marginBottom: 4 }}>
                    <span style={{ fontFamily: 'Playfair Display, serif', fontSize: '2rem', fontWeight: 700, color: '#2B2B2B' }}>${plan.price}</span>
                    <span style={{ fontSize: 12, color: '#8A9E8A' }}>/mo</span>
                  </div>
                  <div style={{ fontSize: 11, color: '#8A9E8A', marginBottom: '1.25rem', paddingBottom: '1rem', borderBottom: '1px solid #EDE6DA' }}>{plan.limit}</div>
                  {plan.features.map(f => (
                    <div key={f} className="check-item">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink:0, marginTop:1 }}><circle cx="7" cy="7" r="6" fill={plan.color+'22'}/><path d="M4 7l2 2 4-4" stroke={plan.color} strokeWidth="1.5" strokeLinecap="round"/></svg>
                      {f}
                    </div>
                  ))}
                  <button className="primary-btn" style={{ background: plan.color, width: '100%', marginTop: '1.25rem', fontSize: 12 }} onClick={() => window.open('https://collectivestaff.app/demo','_blank')}>Get Started</button>
                </div>
              ))}
            </div>

            {/* Add-ons */}
            <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#A06535', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 6 }}>Premium Add-Ons</div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', fontWeight: 700, color: '#2B2B2B', marginBottom: 8 }}>Enhance your plan</h2>
              <p style={{ fontSize: 13, color: '#6B7D6B' }}>Enhance any plan with these optional features</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: '2.5rem' }}>
              {addons.map(addon => (
                <div key={addon.name} style={{ background: addon.premium ? '#3D3530' : '#fff', border: addon.premium ? '1px solid rgba(160,101,53,0.3)' : '1px solid #EDE6DA', borderRadius: 12, padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 6 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: addon.premium ? '#D9C3A3' : '#2B2B2B' }}>{addon.name}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <div style={{ fontSize: 12, fontWeight: 700, color: '#A06535' }}>{addon.price}</div>
                      {addon.premium && <span style={{ fontSize: 9, padding: '1px 6px', borderRadius: 8, background: 'rgba(160,101,53,0.2)', color: '#A06535', fontWeight: 700 }}>PREMIUM</span>}
                    </div>
                  </div>
                  <div style={{ fontSize: 11, color: addon.premium ? 'rgba(217,195,163,0.6)' : '#6B7D6B', lineHeight: 1.5 }}>{addon.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ background: '#3D3530', borderRadius: 16, padding: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.3rem', fontWeight: 700, color: '#fff', marginBottom: 4 }}>Ready to get started?</div>
                <div style={{ fontSize: 12, color: 'rgba(217,195,163,0.5)' }}>Try the live demo or schedule a personalized walkthrough with Tiffany.</div>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <button className="primary-btn" onClick={() => window.open('https://collectivestaff.app/demo','_blank')}>Try Free Demo</button>
                <button className="outline-btn" onClick={() => navigate('/contact')}>Talk to Us</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <GCWFooter />
    </div>
  )
}