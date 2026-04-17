import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export default function Splash() {
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
    <div style={{ minHeight: '100vh', background: '#F7F2EB', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: "'Montserrat', sans-serif", position: 'relative', overflow: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.9s ease, transform 0.9s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.2s; }
        .reveal-delay-2 { transition-delay: 0.4s; }
        .reveal-delay-3 { transition-delay: 0.6s; }
        .reveal-delay-4 { transition-delay: 0.8s; }
        .enter-btn { background: #A06535; color: #fff; border: none; border-radius: 8px; padding: 14px 48px; font-family: 'Montserrat', sans-serif; font-size: 14px; font-weight: 600; cursor: pointer; transition: all 0.3s; letter-spacing: 0.12em; text-transform: uppercase; }
        .enter-btn:hover { background: #C9895F; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(184,115,74,0.3); }
        .corner-mark { position: absolute; width: 60px; height: 60px; opacity: 0.12; }
        .corner-tl { top: 2rem; left: 2rem; border-top: 1.5px solid #A06535; border-left: 1.5px solid #A06535; }
        .corner-tr { top: 2rem; right: 2rem; border-top: 1.5px solid #A06535; border-right: 1.5px solid #A06535; }
        .corner-bl { bottom: 2rem; left: 2rem; border-bottom: 1.5px solid #A06535; border-left: 1.5px solid #A06535; }
        .corner-br { bottom: 2rem; right: 2rem; border-bottom: 1.5px solid #A06535; border-right: 1.5px solid #A06535; }
      `}</style>

      {/* Corner marks */}
      <div class="corner-mark corner-tl"></div>
      <div class="corner-mark corner-tr"></div>
      <div class="corner-mark corner-bl"></div>
      <div class="corner-mark corner-br"></div>

      {/* Logo */}
      <div className="reveal" style={{ marginBottom: '2.5rem' }}>
        <img src="/gcw-logo-transparent.png" alt="Gallagher Collective Works" style={{ width: 340, maxWidth: '80vw', objectFit: 'contain', mixBlendMode: 'multiply' }} />
      </div>

      {/* Tagline */}
      <div className="reveal reveal-delay-1" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontStyle: 'italic', color: '#6B7D6B', letterSpacing: '0.05em' }}>
          Your people deserve better systems.<br />Your brand deserves better design.
        </div>
        <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.1rem', fontWeight: 600, color: '#A06535', marginTop: 6, letterSpacing: '0.05em' }}>
          We deliver both.
        </div>
      </div>

      {/* Divider */}
      <div className="reveal reveal-delay-2" style={{ width: 48, height: 1.5, background: '#A06535', marginBottom: '2rem', opacity: 0.5 }} />

      {/* Enter button */}
      <div className="reveal reveal-delay-3">
        <button className="enter-btn" onClick={() => navigate('/home')}>Enter</button>
      </div>

      {/* Bottom credit */}
      <div className="reveal reveal-delay-4" style={{ position: 'absolute', bottom: '2rem', fontSize: 10, color: 'rgba(43,43,43,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
        Gallagher Collective Works &nbsp;&bull;&nbsp; Ellsworth, Maine
      </div>
    </div>
  )
}