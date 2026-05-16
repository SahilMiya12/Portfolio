import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-wrapper">
          <div className="contact-header">
            <div className="contact-badge">
              <span>📧</span>
              Get in touch
            </div>
            <h2 className="contact-title">
              Let's create something 
              <span className="gradient-text"> amazing together</span>
            </h2>
            <p className="contact-description">
              Have a project in mind? I'd love to hear about it
            </p>
          </div>

          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 6L12 13L2 6M22 6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6l10 7l10-7z"/>
                  </svg>
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:sahil@example.com">sahil@example.com</a>
                  <p>Response within 24 hours</p>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <h4>Location</h4>
                  <p>India</p>
                  <p>Remote / On-site</p>
                </div>
              </div>
              
              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2z"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div>
                  <h4>Availability</h4>
                  <p>Open for internships</p>
                  <p>Summer 2025</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Your name" 
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Tell me about your project..." 
                  rows="5"
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  required
                ></textarea>
              </div>
              <button type="submit" className="contact-submit" disabled={loading}>
                {loading ? (
                  <span className="loading-spinner"></span>
                ) : (
                  <>
                    Send message
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </>
                )}
              </button>
              {sent && <div className="contact-success">Message sent! I'll get back to you soon 🎉</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;