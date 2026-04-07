import { useEffect, useState } from 'react'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', company: '',
    employees: '', products: [], message: ''
  })
  const [submitted, setSubmitted] = useState(false)

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

  function toggleProduct(p) {
    setFormData(f => ({
      ...f,
      products: f.products.includes(p)
        ? f.products.filter(x => x !== p)
        : [...f.products, p]
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = `GCW Inquiry from ${formData.name} — ${formData.company}`
    const body = `Name: ${formData.name}
Company: ${formData.company}
Email: ${formData.email}
Phone: ${formData.phone}
Employees: ${formData.employees}
Interested In: ${formData.products.join(', ')}
Message: ${formData.message}`
    window.location.href = `mailto:info@gallaghercollectiveworks.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setSubmitted(true)
  }

  const services = [
    {
      icon: '👥',
      title: 'Workforce Solutions',
      desc: 'We simplify how businesses manage their staff. From HR systems to onboarding workflows, scheduling, and compliance — we build the operational infrastructure that lets your team thrive.',
      items: ['HR portal implementation', 'Employee onboarding systems', 'Policy & compliance management', 'Timekeeping & scheduling', 'Performance tracking'],
      color: '#B8734A',
      featured: true,
    },
    {
      icon: '🎨',
      title: 'Creative Art Services',
      desc: 'We elevate brands through intentional design. Custom artwork, brand identity, murals, and creative projects that make your business look as good as it runs.',
      items: ['Brand identity & logo design', 'Custom artwork & murals', 'Marketing design & collateral', 'Business card & print design', 'Creative project consultation'],
      color: '#4A6B8A',
      featured: false,
    },
  ]

  const products = [
    { icon: '👥', name: 'Collective Staff', desc: 'Complete HR portal for small businesses', status: 'Live Now', color: '#B8734A', url: 'https://collectivestaff.app' },
    { icon: '🍽️', name: 'Collective Hospitality', desc: 'Restaurant management & tip tracking', status: 'Coming Soon', color: '#4A7C59', url: null },
    { icon: '🚛', name: 'Collective Fleet', desc: 'Vehicle & transportation management', status: 'In Development', color: '#4A6B8A', url: null },
    { icon: '⏱️', name: 'Collective Time', desc: 'Timekeeping for hourly workforces', status: 'In Development', color: '#6B7D6B', url: null },
  ]

  const productOptions = ['Collective Staff', 'Collective Hospitality', 'Collective Fleet', 'Collective Time', 'Creative Art Services', 'Not sure yet']
  const employeeOptions = ['1–10', '11–25', '26–50', '51–100', '100–250', '250+']

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
        .service-card.featured { border: 2px solid #B8734A; }
        .product-card { background: rgba(255,255,255,0.05); border: 1px solid rgba(217,195,163,0.1); border-radius: 12px; padding: 1.5rem; transition: all 0.2s; position: relative; }
        .product-card.clickable { cursor: pointer; }
        .product-card.clickable:hover { background: rgba(184,115,74,0.1); border-color: #B8734A; transform: translateY(-3px); }
        .divider { width: 48px; height: 2px; background: #B8734A; margin: 1rem 0; }
        .check-item { display: flex; align-items: center; gap: 8px; margin-bottom: 8px; font-size: 13px; color: #4A4A4A; }
        .form-input { width: 100%; padding: 10px 14px; border: 1px solid #EDE6DA; border-radius: 8px; font-family: 'Montserrat', sans-serif; font-size: 13px; color: #2B2B2B; outline: none; background: #fff; transition: border-color 0.2s; }
        .form-input:focus { border-color: #B8734A; }
        .product-chip { padding: 7px 14px; border: 1px solid #EDE6DA; border-radius: 20px; font-size: 12px; font-weight: 500; cursor: pointer; transition: all 0.15s; background: #fff; color: #4A4A4A; font-family: 'Montserrat', sans-serif; }
        .product-chip.selected { background: rgba(184,115,74,0.1); border-color: #B8734A; color: #B8734A; font-weight: 600; }
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
          <a href="https://collectivestaff.app" target="_blank" rel="noreferrer" className="primary-btn" style={{ padding: '8px 18px' }}>Collective Staff →</a>
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
            <div style={{ marginTop: '1.5rem', fontSize: 11, color: 'rgba(217,195,163,0.3)' }}>John & Tiffany Gallagher · Co-Owners</div>
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
          <p className="reveal reveal-delay-2" style={{ fontSize: 14, color: '#6B7D6B', maxWidth: 480, margin: '0 auto', lineHeight: 1.8 }}>John and Tiffany Gallagher blend business strategy with operational expertise and creative design — helping businesses function beautifully and feel inspired.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {services.map((s, i) => (
            <div key={s.title} className={`service-card reveal reveal-delay-${i + 1} ${s.featured ? 'featured' : ''}`}>
              {s.featured && (
                <div style={{ display: 'inline-block', background: 'rgba(184,115,74,0.1)', border: '1px solid rgba(184,115,74,0.3)', borderRadius: 20, padding: '3px 12px', fontSize: 10, fontWeight: 600, color: '#B8734A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Our Core Service
                </div>
              )}
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
              <div style={{ marginTop: '1.5rem' }}>
                <a href="#contact" className="primary-btn" style={{ background: s.color, fontSize: 12, padding: '9px 20px' }}>
                  Learn More →
                </a>
              </div>
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
              <div key={p.name}
                className={`product-card reveal reveal-delay-${i + 1} ${p.url ? 'clickable' : ''}`}
                onClick={() => p.url && window.open(p.url, '_blank')}>
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
                {p.url && <div style={{ marginTop: '0.75rem', fontSize: 11, color: 'rgba(184,115,74,0.6)' }}>Click to visit →</div>}
              </div>
            ))}
          </div>
          <div className="reveal" style={{ background: 'rgba(184,115,74,0.1)', border: '1px solid rgba(184,115,74,0.3)', borderRadius: 12, padding: '1.5rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, fontWeight: 600, color: '#fff', marginBottom: 4 }}>Try Collective Staff today — free demo available</div>
              <div style={{ fontSize: 12, color: 'rgba(217,195,163,0.5)' }}>HR portal for small businesses · Starting at $49/mo · No setup fee</div>
            </div>
            <a href="https://collectivestaff.app" target="_blank" rel="noreferrer" className="primary-btn" style={{ whiteSpace: 'nowrap' }}>Visit collectivestaff.app →</a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>About GCW</div>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', fontWeight: 700, color: '#2B2B2B', lineHeight: 1.2, marginBottom: '1.25rem' }}>
              John & Tiffany Gallagher.<br /><em style={{ color: '#B8734A' }}>Built for small business.</em>
            </h2>
            <p className="reveal reveal-delay-2" style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.9, marginBottom: '1rem' }}>
              John and Tiffany Gallagher are a husband-and-wife team based in Ellsworth, Maine. John brings an extensive background in technology, IT management, and business strategy — translating complex systems into practical solutions and leading implementation with precision and care. He is the architect behind the tools that power Gallagher Collective Works.
            </p>
            <p className="reveal reveal-delay-3" style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.9, marginBottom: '1rem' }}>
              Tiffany brings over two decades of operational management and human resources expertise — onboarding, compliance, payroll, training, SOP development, team management, and day-to-day operations across organizations of every size. If it touches people and process, Tiffany has not only done it — she has built the system around it.
            </p>
            <p className="reveal reveal-delay-3" style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.9, marginBottom: '1.5rem' }}>
              Together, John and Tiffany founded Gallagher Collective Works with a simple belief: small businesses deserve powerful tools without the enterprise price tag or complexity. <strong style={{ color: '#2B2B2B' }}>Gallagher Collective Works — Built to Work. Made for You.</strong>
            </p>
            <div className="reveal reveal-delay-4" style={{ display: 'flex', gap: 12 }}>
              <a href="#contact" className="primary-btn">Get in Touch →</a>
              <a href="https://collectivestaff.app" target="_blank" rel="noreferrer" className="outline-btn">See Our Work</a>
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

      {/* Contact Form */}
      <section id="contact" style={{ background: '#2B2B2B', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Let's work together</div>
            <h2 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.4rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>Tell us about your business.</h2>
            <p className="reveal reveal-delay-2" style={{ fontSize: 14, color: 'rgba(217,195,163,0.5)', lineHeight: 1.8 }}>
              Fill out the form below and we'll be in touch within one business day.
            </p>
          </div>

          {submitted ? (
            <div className="reveal" style={{ background: 'rgba(74,124,89,0.15)', border: '1px solid #4A7C59', borderRadius: 16, padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: 48, marginBottom: '1rem' }}>✓</div>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#fff', marginBottom: '0.75rem' }}>We'll be in touch!</div>
              <div style={{ fontSize: 13, color: 'rgba(217,195,163,0.5)', lineHeight: 1.8 }}>Thank you for reaching out to Gallagher Collective Works. John or Tiffany will respond within one business day.</div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(217,195,163,0.1)', borderRadius: 16, padding: '2.5rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                <div>
                  <label style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(217,195,163,0.5)', fontWeight: 600, marginBottom: 6 }}>Full Name *</label>
                  <input className="form-input" required placeholder="Your full name" value={formData.name} onChange={e => setFormData(f => ({...f, name: e.target.value}))} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(217,195,163,0.5)', fontWeight: 600, marginBottom: 6 }}>Company Name</label>
                  <input className="form-input" placeholder="Your company" value={formData.company} onChange={e => setFormData(f => ({...f, company: e.target.value}))} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(217,195,163,0.5)', fontWeight: 600, marginBottom: 6 }}>Email Address *</label>
                  <input className="form-input" type="email" required placeholder="your@email.com" value={formData.email} onChange={e => setFormData(f => ({...f, email: e.target.value}))} />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(217,195,163,0.5)', fontWeight: 600, marginBottom: 6 }}>Phone Number</label>
                  <input className="form-input" placeholder="(207) 555-0000" value={formData.phone} onChange={e => setFormData(f => ({...f, phone: e.target.value}))} />
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(217,195,163,0.5)', fontWeight: 600, marginBottom: 10 }}>Number of Employees</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {employeeOptions.map(opt => (
                    <button key={opt} type="button" className={`product-chip ${formData.employees === opt ? 'selected' : ''}`}
                      onClick={() => setFormData(f => ({...f, employees: opt}))}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(217,195,163,0.5)', fontWeight: 600, marginBottom: 10 }}>What are you interested in? (select all that apply)</label>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {productOptions.map(opt => (
                    <button key={opt} type="button" className={`product-chip ${formData.products.includes(opt) ? 'selected' : ''}`}
                      onClick={() => toggleProduct(opt)}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ marginBottom: 24 }}>
                <label style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(217,195,163,0.5)', fontWeight: 600, marginBottom: 6 }}>Tell us about your business</label>
                <textarea className="form-input" rows={4} placeholder="What challenges are you facing? What does your team look like? What are you hoping to accomplish?" value={formData.message} onChange={e => setFormData(f => ({...f, message: e.target.value}))} style={{ resize: 'vertical' }} />
              </div>

              <button type="submit" className="primary-btn" style={{ width: '100%', fontSize: 14, padding: '14px' }}>
                Send Inquiry → We'll Respond Within One Business Day
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#1E1E1E', padding: '2.5rem 2rem' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div style={{ fontFamily: 'Playfair Display, serif', fontSize: 16, color: '#fff', fontWeight: 700, marginBottom: 4 }}>Gallagher Collective Works</div>
            <div style={{ fontSize: 10, color: 'rgba(217,195,163,0.3)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Built to Work. Made for You.</div>
          </div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
            {['Services', 'Products', 'About', 'Contact'].map(link => (
              <a key={link} href={`#${link.toLowerCase()}`} style={{ fontSize: 12, color: 'rgba(217,195,163,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#B8734A'}
                onMouseLeave={e => e.target.style.color = 'rgba(217,195,163,0.4)'}>
                {link}
              </a>
            ))}
            <a href="https://collectivestaff.app" target="_blank" rel="noreferrer" style={{ fontSize: 12, color: '#B8734A', textDecoration: 'none', fontWeight: 600 }}>collectivestaff.app →</a>
          </div>
          <div style={{ fontSize: 11, color: 'rgba(217,195,163,0.25)' }}>© 2025 Gallagher Collective Works LLC</div>
        </div>
      </footer>
    </div>
  )
}