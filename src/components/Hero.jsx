import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sahil_resume.pdf';
    link.download = 'Sahil_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg-gradient"></div>
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
      
      <div className="container">
        <div className="hero-grid">
          {/* Left Side */}
          <div className="hero-left">
            <div className="hero-label">
              <span className="hero-label-dot"></span>
              Available for internships · Summer 2026
            </div>
            
            <h1 className="hero-heading">
              Crafting code that 
              <span className="gradient-text"> matters.</span>
            </h1>
            
            <p className="hero-description">
              I'm Sahil — a 3rd year CS student who turns complex problems into 
              elegant solutions. I build full-stack applications with obsession 
              for clean architecture and exceptional user experiences.
            </p>
            
            <div className="hero-actions">
              <button className="hero-btn-primary" onClick={() => scrollToSection('work')}>
                Explore my work
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="hero-btn-secondary" onClick={downloadResume}>
                Download CV
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                </svg>
              </button>
            </div>
            
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-value">20+</span>
                <span className="hero-stat-label">Projects</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">3+</span>
                <span className="hero-stat-label">Years</span>
              </div>
              <div className="hero-stat">
                <span className="hero-stat-value">300+</span>
                <span className="hero-stat-label">DSA Problems</span>
              </div>
            </div>
            
            <div className="hero-social">
              <a href="https://github.com/SahilMiya12" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.2-3.37-1.2-.45-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sahil-miya-b98696333/" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>
              <a href="https://x.com/Sahil_Malik81" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="mailto:sahilmiya723@gmail.com" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 6L12 13L2 6M22 6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6l10 7l10-7z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Right Side - Profile with Badges */}
          <div className="hero-right">
            <div className="hero-visual">
              <div className="visual-core">
                <div className="visual-glow"></div>
                <div className="visual-avatar">
                  <div className="avatar-container">
                    <img 
                      src="/images/profile2.jpg" 
                      alt="Sahil Miya" 
                      className="hero-profile-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.querySelector('.avatar-fallback').style.display = 'flex';
                      }}
                    />
                    <div className="avatar-fallback" style={{ display: 'none' }}>
                      <span>👨‍💻</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Tech Badges */}
              <div className="visual-badge b1">⚛️ React</div>
              <div className="visual-badge b2">📘 TypeScript</div>
              <div className="visual-badge b3">🟢 Node.js</div>
              <div className="visual-badge b4">🐍 Python</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-scroll">
        <span>SCROLL DOWN</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;