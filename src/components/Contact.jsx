import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // YOUR WEB3FORMS ACCESS KEY
  const WEB3FORMS_ACCESS_KEY = 'aa2be2a6-1c37-4704-abc9-07f5f1b2f217';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('name', form.name);
    formData.append('email', form.email);
    formData.append('message', form.message);
    formData.append('subject', `✨ Portfolio Contact: ${form.name} wants to connect`);
    
    // 🔥 THIS LINE FIXES THE SENDER NAME 🔥
    formData.append('from_name', 'Sahil | Software Engineer');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
        setLoading(false);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSent(false), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error('Error:', error);
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 5000);
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
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
                  <a href="mailto:sahilmiya723@gmail.com">sahilmiya723@gmail.com</a>
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
                  <p>Chhapkaiya-2, Birgunj, Parsa, Nepal</p>
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
                  <p>Summer 2026</p>
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your name" 
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your email" 
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message"
                  placeholder="Tell me about your project..." 
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
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
              {sent && <div className="contact-success">✅ Message sent! I'll get back to you soon.</div>}
              {error && <div className="contact-error">❌ Failed to send. Please try again.</div>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;