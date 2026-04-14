import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import GCWNav from '../components/GCWNav'
import GCWFooter from '../components/GCWFooter'

export default function Contact() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name:'', email:'', phone:'', company:'', employees:'', products:[], message:'' })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }), { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  function toggleProduct(p) {
    setFormData(f => ({ ...f, products: f.products.includes(p) ? f.products.filter(x => x !== p) : [...f.products, p] }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const subject = 'GCW Inquiry from ' + formData.name + ' - ' + formData.company
    const body = 'Name: ' + formData.name + '\nCompany: ' + formData.company + '\nEmail: ' + formData.email + '\nPhone: ' + formData.phone + '\nEmployees: ' + formData.employees + '\nInterested In: ' + formData.products.join(', ') + '\nMessage: ' + formData.message
    window.location.href = 'mailto:info@gallaghercollectiveworks.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body)
    setSubmitted(true)
  }

  const productOptions = ['Collective Staff','Collective Hospitality','Collective Fleet','Collective Time','Creative Art Services','Not sure yet']
  const employeeOptions = ['1-10','11-25','26-50','51-100','100-250','250+']

  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif", background: '#F7F2EB', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .primary-btn { background: #B8734A; color: #fff; border: none; border-radius: 8px; padding: 12px 28px; font-family: Montserrat, sans-serif; font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s; width: 100%; }
        .primary-btn:hover { background: #C9895F; }
        .form-input { width: 100%; padding: 10px 14px; border: 1px solid #EDE6DA; border-radius: 8px; font-family: Montserrat, sans-serif; font-size: 13px; color: #2B2B2B; background: rgba(255,255,255,0.08); outline: none; transition: border 0.2s; }
        .form-input:focus { border-color: #B8734A; }
        .chip { padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: 600; cursor: pointer; border: 1px solid rgba(217,195,163,0.2); background: rgba(255,255,255,0.05); color: rgba(217,195,163,0.6); transition: all 0.15s; font-family: Montserrat, sans-serif; }
        .chip.selected { background: rgba(184,115,74,0.2); border-color: #B8734A; color: #B8734A; }
        .chip:hover { border-color: #B8734A; color: #B8734A; }
        label { color: rgba(217,195,163,0.5); }
      `}</style>
      <GCWNav />

      <div style={{ background: '#2B2B2B', padding: '4rem 2rem', textAlign: 'center' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="reveal" style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Let us work together</div>
          <h1 className="reveal reveal-delay-1" style={{ fontFamily: 'Playfair Display, serif', fontSize: '3rem', fontWeight: 700, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>Tell us about your business.</h1>
          <p className="reveal reveal-delay-2" style={{ fontSize: 15, color: 'rgba(217,195,163,0.6)', lineHeight: 1.8 }}>Fill out the form below and we will be in touch within one business day.</p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '3rem', alignItems: 'start' }}>

          {/* Contact info */}
          <div>
            <div className="reveal" style={{ marginBottom: '2rem' }}>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#B8734A', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem' }}>Contact Info</div>
              {[
                { Icon: Mail,    color: '#B8734A', label: 'Email', value: 'info@gallaghercollectiveworks.com' },
                { Icon: MapPin,  color: '#6B7D6B', label: 'Location', value: 'Ellsworth, Maine' },
                { Icon: Clock,   color: '#D9C3A3', label: 'Response Time', value: 'Within one business day' },
              ].map(({ Icon, color, label, value }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: '1.25rem' }}>
                  <div style={{ width: 38, height: 38, borderRadius: 8, background: color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={18} color={color} strokeWidth={1.75} />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 600, color: '#8A9E8A', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{label}</div>
                    <div style={{ fontSize: 13, color: '#2B2B2B', fontWeight: 500 }}>{value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="reveal" style={{ background: '#2B2B2B', borderRadius: 12, padding: '1.5rem' }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: '#fff', marginBottom: 8, fontFamily: 'Playfair Display, serif' }}>Try Collective Staff free</div>
              <div style={{ fontSize: 12, color: 'rgba(217,195,163,0.5)', marginBottom: '1rem', lineHeight: 1.6 }}>No account needed. See all 3 role views in a live demo.</div>
              <button style={{ background: '#B8734A', color: '#fff', border: 'none', borderRadius: 8, padding: '9px 18px', fontSize: 12, fontWeight: 600, cursor: 'pointer', fontFamily: 'Montserrat, sans-serif', width: '100%' }} onClick={() => window.open('https://collectivestaff.app/demo','_blank')}>Open Live Demo</button>
            </div>
          </div>

          {/* Form */}
          <div className="reveal reveal-delay-1">
            {submitted ? (
              <div style={{ background: 'rgba(74,124,89,0.1)', border: '1px solid #4A7C59', borderRadius: 16, padding: '3rem', textAlign: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'rgba(74,124,89,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M6 14l6 6 10-10" stroke="#4A7C59" strokeWidth="2.5" strokeLinecap="round"/></svg>
                </div>
                <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.5rem', color: '#2B2B2B', marginBottom: '0.75rem', fontWeight: 700 }}>We will be in touch!</div>
                <div style={{ fontSize: 13, color: '#6B7D6B', lineHeight: 1.8 }}>Thank you for reaching out to Gallagher Collective Works. John or Tiffany will respond within one business day.</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ background: '#2B2B2B', border: '1px solid rgba(217,195,163,0.1)', borderRadius: 16, padding: '2.5rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>
                  {[['Full Name *','text',true,'Your full name','name'],['Company Name','text',false,'Your company','company'],['Email Address *','email',true,'your@email.com','email'],['Phone Number','text',false,'(207) 555-0000','phone']].map(([label,type,req,ph,field]) => (
                    <div key={field}>
                      <label style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 6 }}>{label}</label>
                      <input className="form-input" type={type} required={req} placeholder={ph} value={formData[field]} onChange={e => setFormData(f => ({...f, [field]: e.target.value}))} />
                    </div>
                  ))}
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 10 }}>Number of Employees</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {employeeOptions.map(opt => (
                      <button key={opt} type="button" className={'chip' + (formData.employees===opt?' selected':'')} onClick={() => setFormData(f => ({...f, employees:opt}))}>{opt}</button>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: 16 }}>
                  <label style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 10 }}>What are you interested in?</label>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    {productOptions.map(opt => (
                      <button key={opt} type="button" className={'chip' + (formData.products.includes(opt)?' selected':'')} onClick={() => toggleProduct(opt)}>{opt}</button>
                    ))}
                  </div>
                </div>
                <div style={{ marginBottom: 24 }}>
                  <label style={{ display: 'block', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginBottom: 6 }}>Tell us about your business</label>
                  <textarea className="form-input" rows={4} placeholder="What challenges are you facing? What does your team look like?" value={formData.message} onChange={e => setFormData(f => ({...f, message:e.target.value}))} style={{ resize: 'vertical' }} />
                </div>
                <button type="submit" className="primary-btn">Send Inquiry - We will Respond Within One Business Day</button>
              </form>
            )}
          </div>
        </div>
      </div>
      <GCWFooter />
    </div>
  )
}