import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-badge">
            <span className="badge-icon">✦</span>
            About me
          </div>
          
          <h2 className="about-heading">
            I turn ideas into 
            <span className="gradient-text"> exceptional digital experiences.</span>
          </h2>
          
          <div className="about-grid">
            <div className="about-left">
              <p className="about-text-large">
                I'm a 3rd-year Computer Science student who believes the best way to learn is by building.
              </p>
              <p className="about-text">
                Over the last 3 years, I've immersed myself in full-stack development, working on 
                everything from scalable web applications to AI-powered tools. My approach combines 
                clean architecture with user-centric design, ensuring every project is both functional 
                and delightful to use.
              </p>
              <p className="about-text">
                Currently seeking internship opportunities for Summer 2025 where I can bring my 
                passion for problem-solving and attention to detail to real-world challenges.
              </p>
              
              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">🎓</div>
                  <div className="highlight-content">
                    <h4>Education</h4>
                    <p>B.E Computer Science and Engineering, 3rd Year</p>
                    <span>CGPA: 7.9/10</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">💼</div>
                  <div className="highlight-content">
                    <h4>Availability</h4>
                    <p>Open for internships & freelance</p>
                    <span>Summer 2026</span>
                  </div>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">📍</div>
                  <div className="highlight-content">
                    <h4>Location</h4>
                    <p>Sri Eshwar College of Engineering, Kondampatti, Vadasithur, Kinathukadavu, Coimbatore - 641202, Tamil Nadu, India</p>
                    <span>Remote / On-site</span>
                  </div>
                </div>
              </div>
              
              <div className="about-actions">
                <a href="#contact" className="about-primary-btn">
                  Let's work together
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
                <a href="public/Sahil_resume.pdf" download="Sahil_Resume.pdf" className="about-secondary-btn">
                  Download resume
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="about-right">
              <div className="about-quote">
                <div className="quote-mark">"</div>
                <p className="quote-text">
                  Code is not just about functionality — it's about creating experiences that 
                  make people's lives easier and more enjoyable.
                </p>
                <div className="quote-author">
                  <div className="author-line"></div>
                  <span>Sahil Miya</span>
                </div>
              </div>
              
              <div className="about-stats-grid">
                <div className="about-stat">
                  <div className="stat-value">20+</div>
                  <div className="stat-label">Projects completed</div>
                </div>
                <div className="about-stat">
                  <div className="stat-value">3+</div>
                  <div className="stat-label">Years of coding</div>
                </div>
                <div className="about-stat">
                  <div className="stat-value">300+</div>
                  <div className="stat-label">DSA problems solved</div>
                </div>
                <div className="about-stat">
                  <div className="stat-value">10+</div>
                  <div className="stat-label">Happy clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="about-decoration">
        <div className="deco-circle"></div>
        <div className="deco-circle-2"></div>
      </div>
    </section>
  );
};

export default About;