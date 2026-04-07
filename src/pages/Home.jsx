import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.1 }
    )
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: '👥',
      title: 'Workforce Solutions',
      desc: 'We simplify how businesses manage their people. From HR systems to onboarding workflows, scheduling, and compliance — we build the operational infrastructure that lets your team thrive.',
      items: ['HR portal implementation', 'Employee onboarding systems', 'Policy & compliance management', 'Timekeeping & scheduling', 'Performance tracking'],
      color: '#B8734A',
    },
    {
      icon: '🎨',
      title: 'Creative Art Services',
      desc: 'We elevate brands through intentional design. Custom artwork, brand identity, murals, and creative projects that make your business look as good as it runs.',
      items: ['Brand identity & logo design', 'Custom artwork & murals', 'Marketing design & collateral', 'Business card & print design', 'Creative project consultation'],
      color: '#4A6B8A',
    },
  ]

  const products = [
    { icon: '👥', name: 'Collective Staff', desc: 'Complete HR portal for small businesses', status: 'Live Now', color: '#B8734A', url: 'https://collectivestaff.app' },
    { icon: '🍽️', name: 'Collective Hospitality', desc: 'Restaurant management & tip tracking', status: 'Coming May 2025', color: '#4A7C59', url: null },
    { icon: '🚛', name: 'Collective Fleet', desc: 'Vehicle & transportation management', status: 'In Development', color: '#4A6B8A', url: null },
    { icon: '⏱️', name: 'Collective Time', desc: 'Timekeeping for hourly workforces', status: 'In Development', color: '#6B7D6B', url: null },
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
        .nav-link { color: rgba(43,43,43,0.6); font-size: 13px; font-weight: 500; text-decoration: none; transition: color 0.2s; }
        .nav-link:hover { color: #B8734A; }
        .primary-btn { background: #B8734A; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; letter-spacing: 0.05em; text-decoration: none; display: inline-block; }
        .primary-btn:hover { background: #C9895F; transform: translateY(-1px); }
        .outline-btn { background: transparent; color: #B8734A; border: 1.5px solid #B8734A; border-radius: 8px; padding: 11px 24px; font-family: 'Montserrat', sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; letter-spacing: 0.05em; text-decoration: none; display: inline-block; }
        .outline-btn:hover { background: rgba(184,115,74,0.08); }
        .service-card { background: #fff; border: 1px solid #EDE6DA; border-radius: 16px; padding: 2.5rem; transition: all 0.25s; }
        .service-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(43,43,43,0.1); }
        .product-card { background: #fff; border: 1px solid #EDE6DA; border-radius: 12px; padding: 1.5rem; transition: all 0.2s; cursor: pointer; }
        .product-card:hover { transform: translateY(-3px); border-color: #B8734A; box-shadow: 0 6px 24px rgba(184,115,74,0.1); }
        .divider { width: 48px; height: 2px; background: #B8734A; margin: 1rem 0; }
        .check-item { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px; color: #4A4A4A; }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        .float { animation: float 4s ease-in-out infinite; }
      `}</style>

      {/* Nav */}
      <nav style={{ background: '#fff', borderBottom: '1px solid #EDE6DA', padding: '0 2rem', height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: 0, zIndex: 100 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 42, height: 42, borderRadius: '50%', border: '2px solid #B8734A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontSize: 14, fontWeight: 700, color: '#B8734A' }}>GCW</div>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 700, color: '#2B2B2B', lineHeight: 1 }}>Gallagher Collective Works</div>
            <div style={{ fontSize: 9, color: '#8A9E8A', textTransform: 'uppercase', letterSpacing: '0.14em' }}>Simplifying Work. Amplifying Results.</div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
          <a href="#services" className="nav-link">Services</a>
          <a href="#products" className="nav-link">Products</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="https://collectivestaff.app" className="primary-btn" style={{ padding: '8px 18px' }}>Collective Staff →</a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '7rem 2rem 5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
        <div>
          <div className="reveal" style={{ display: 'inline-block', background: 'rgba(184,115,74,0.1)', border: '1px solid rgba(184,115,74,0.3)', borderRadius: 20, padding: '4px 14px', fontSize: 11, fontWeight: 600, color: '#B8734A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Workforce Solutions & Creative Art
          </div>
          <h1 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3.4rem', fontWeight: 700, color: '#2B2B2B', lineHeight: 1.15, marginBottom: '1.5rem' }}>
            Simplifying Work.<br /><em style={{ color: '#B8734A' }}>Amplifying Results.</em>
          </h1>
          <p className="reveal reveal-delay-2" style={{ fontSize: 16, color: '#6B7D6B', lineHeight: 1.8, marginBottom: '2rem', maxWidth: 460 }}>
            Gallagher Collective Works helps small businesses operate beautifully — from HR systems and workforce tools to custom artwork and brand design. We blend operational expertise with creative vision.
          </p>
          <div className="reveal reveal-delay-3" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a href="#contact" className="primary-btn">Work With Us →</a>
            <a href="#services" className="outline-btn">Our Services</a>
          </div>
        </div>

        {/* Hero visual */}
        <div className="reveal reveal-delay-2" style={{ position: 'relative' }}>
          <div className="float" style={{ background: '#2B2B2B', borderRadius: 20, padding: '2.5rem', textAlign: 'center', boxShadow: '0 20px 60px rgba(43,43,43,0.2)' }}>
            <div style={{ width: 72, height: 72, borderRadius: '50%', border: '2.5px solid #B8734A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#B8734A', margin: '0 auto 1.25rem' }}>GCW</div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#fff', fontWeight: 600, marginBottom: '0.5rem' }}>Gallagher Collective Works</div>
            <div style={{ fontSize: 11, color: 'rgba(217,195,163,0.5)', textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '1.5rem' }}>Simplifying Work. Amplifying Results.</div>
            <div style={{ height: 1, background: 'rgba(217,195,163,0.15)', marginBottom: '1.5rem' }} />
            {[['Workforce Solutions', '#B8734A'], ['Creative Art Services', '#4A6B8A'], ['The Collective Platform', '#4A7C59']].map(([label, color]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: color, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: 'rgba(217,195,163,0.6)', fontWeight: 500 }}>{label}</span>
              </div>
            ))}
            <div style={{ marginTop: '1.5rem', fontSize: 11, color: 'rgba(217,195,163,0.3)' }}>Tiffany & John Gallagher · Co-Owners</div>
          </div>
          <div style={{ position: 'absolute', top: -14, right: -14, background: '#B8734A', color: '#fff', borderRadius: 10, padding: '8px 14px', fontSize: 11, fontWeight: 600 }}>
            Based in Ellsworth, ME
          </div>
        </div>
      </section>

      {/* Strip */}
      <div style={{ background: '#2B2B2B', padding: '1.25rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
          {['Workforce Solutions', 'Creative Art Services', 'SaaS Products', 'Small Business Focus', 'Maine-Based'].map(item => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: 'rgba(217,195,163,0.7)', fontWeight: 500 }}>
              <span style={{ color: '#B8734A' }}>✦</span> {item}
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section id="services" style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>What we do</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', fontWeight: 700, color: '#2B2B2B', marginBottom: '1rem' }}>Two things. Done exceptionally well.</h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: 14, color: '#6B7D6B', maxWidth: 480, margin: '0 auto', lineHeight: 1.8 }}>Tiffany and John Gallagher blend operational expertise with creative design — helping businesses function beautifully and feel inspired.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {services.map((s, i) => (
            <div key={s.title} className={`service-card reveal reveal-delay-${i + 1}`}>
              <div style={{ fontSize: 36, marginBottom: '1rem' }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', fontWeight: 600, color: '#2B2B2B', marginBottom: '0.5rem' }}>{s.title}</h3>
              <div className="divider" style={{ background: s.color }} />
              <p style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.8, marginBottom: '1.5rem' }}>{s.desc}</p>
              {s.items.map(item => (
                <div key={item} className="check-item">
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: s.color + '22', border: `1px solid ${s.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke={s.color} strokeWidth="1.5" strokeLinecap="round"/></svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      <section id="products" style={{ background: '#2B2B2B', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>The Collective Platform</div>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Software built for the businesses we serve.</h2>
            <p className="reveal reveal-delay-2" style={{ fontSize: 14, color: 'rgba(217,195,163,0.5)', maxWidth: 520, margin: '0 auto', lineHeight: 1.8 }}>GCW builds white-labeled SaaS tools that give small businesses enterprise-grade systems at small business prices.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: '2rem' }}>
            {products.map((p, i) => (
              <div key={p.name} className={`reveal reveal-delay-${i + 1}`}
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(217,195,163,0.1)', borderRadius: 12, padding: '1.5rem', cursor: p.url ? 'pointer' : 'default', transition: 'all 0.2s', position: 'relative' }}
                onClick={() => p.url && window.open(p.url, '_blank')}
                onMouseEnter={e => { if(p.url) { e.currentTarget.style.background = 'rgba(184,115,74,0.1)'; e.currentTarget.style.borderColor = '#B8734A'; }}}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(217,195,163,0.1)'; }}>
                {p.status === 'Live Now' && (
                  <div style={{ position: 'absolute', top: 10, right: 10, background: '#B8734A', color: '#fff', fontSize: 9, fontWeight: 600, padding: '2px 8px', borderRadius: 10, letterSpacing: '0.08em' }}>LIVE</div>
                )}
                <div style={{ fontSize: 28, marginBottom: '0.75rem' }}>{p.icon}</div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 15, fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>{p.name}</div>
                <div style={{ fontSize: 12, color: 'rgba(217,195,163,0.45)', lineHeight: 1.6, marginBottom: '1rem' }}>{p.desc}</div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '2px 8px', borderRadius: 16, fontSize: 10, fontWeight: 600, background: p.color + '22', color: p.color }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: p.color }} />
                  {p.status}
                </div>
              </div>
            ))}
          </div>
          <div className="reveal" style={{ background: 'rgba(184,115,74,0.1)', border: '1px solid rgba(184,115,74,0.3)', borderRadius: 12, padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Try Collective Staff today — free demo available</div>
              <div style={{ fontSize: 12, color: 'rgba(217,195,163,0.5)' }}>HR portal for small businesses · Starting at $49/mo · No setup fee</div>
            </div>
            <a href="https://collectivestaff.app" className="primary-btn" style={{ whiteSpace: 'nowrap' }}>Visit collectivestaff.app →</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>About GCW</div>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: '#2B2B2B', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              Tiffany & John Gallagher.<br /><em style={{ color: '#B8734A' }}>Built for small business.</em>
            </h2>
            <p className="reveal reveal-delay-2" style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.9, marginBottom: '1rem' }}>
              We are a husband-and-wife team based in Ellsworth, Maine. Tiffany brings years of workforce operations expertise — building systems that help small businesses manage their people effectively. John brings creative vision and business strategy.
            </p>
            <p className="reveal reveal-delay-3" style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Together, we founded Gallagher Collective Works because we saw small businesses struggling with tools built for enterprises — expensive, complicated, and impersonal. We build better ones.
            </p>
            <div className="reveal reveal-delay-4" style={{ display: 'flex', gap: 12 }}>
              <a href="#contact" className="primary-btn">Get in Touch →</a>
              <a href="https://collectivestaff.app" className="outline-btn">See Our Work</a>
            </div>
          </div>
          <div className="reveal reveal-delay-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {[
              { val: 'Ellsworth', label: 'Based in Maine' },
              { val: '2', label: 'Co-Owners' },
              { val: '2', label: 'Products Live' },
              { val: '∞', label: 'Businesses to Help' },
            ].map(s => (
              <div key={s.label} style={{ background: '#fff', border: '1px solid #EDE6DA', borderRadius: 12, padding: '1.5rem', textAlign: 'center' }}>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.6rem', color: '#B8734A', fontWeight: 700, lineHeight: 1, marginBottom: 6 }}>{s.val}</div>
                <div style={{ fontSize: 11, color: '#8A9E8A', textTransform: 'uppercase', letterSpacing: '0.08em', lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" style={{ background: '#2B2B2B', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
          <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Let's work together</div>
          <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Ready to simplify your operations?</h2>
          <p className="reveal reveal-delay-2" style={{ fontSize: 14, color: 'rgba(217,195,163,0.5)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
            Whether you need HR systems, creative design, or a custom software solution — we would love to hear about your business. Let's find out how GCW can help.
          </p>
          <div className="reveal reveal-delay-3" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: '2rem' }}>
            {[
              { icon: '💼', label: 'Workforce Solutions', sub: 'HR systems & operations' },
              { icon: '🎨', label: 'Creative Services', sub: 'Design & branding' },
              { icon: '💻', label: 'Collective Platform', sub: 'SaaS products' },
            ].map(c => (
              <a key={c.label} href="mailto:info@gallaghercollectiveworks.com" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(217,195,163,0.1)', borderRadius: 12, padding: '1.25rem', textDecoration: 'none', transition: 'all 0.2s', display: 'block' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(184,115,74,0.1)'; e.currentTarget.style.borderColor = '#B8734A'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.borderColor = 'rgba(217,195,163,0.1)'; }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{c.label}</div>
                <div style={{ fontSize: 11, color: 'rgba(217,195,163,0.4)' }}>{c.sub}</div>
              </a>
            ))}
          </div>
          <div className="reveal reveal-delay-4">
            <a href="mailto:info@gallaghercollectiveworks.com" className="primary-btn" style={{ fontSize: 14, padding: '14px 36px' }}>
              info@gallaghercollectiveworks.com →
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1E1E1E', padding: '2.5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, color: '#fff', fontWeight: 700, marginBottom: 4 }}>Gallagher Collective Works</div>
            <div style={{ fontSize: 10, color: 'rgba(217,195,163,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Simplifying Work. Amplifying Results.</div>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
            {['Services', 'Products', 'About', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: 12, color: 'rgba(217,195,163,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#B8734A'}
                onMouseLeave={e => e.target.style.color = 'rgba(217,195,163,0.4)'}>
                {link}
              </a>
            ))}
            <a href="https://collectivestaff.app" style={{ fontSize: 12, color: '#B8734A', textDecoration: 'none', fontWeight: 600 }}>collectivestaff.app →</a>
          </div>
          <div style={{ fontSize: 11, color: 'rgba(217,195,163,0.25)' }}>© 2025 Gallagher Collective Works LLC</div>
        </div>
      </footer>
    </div>
  )
}