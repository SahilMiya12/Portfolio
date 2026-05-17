import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const sections = [
        { id: 'home', name: 'home' },
        { id: 'about', name: 'about' },
        { id: 'education', name: 'education' },
        { id: 'skills', name: 'skills' },
        { id: 'work', name: 'work' },
        { id: 'contact', name: 'contact' }
      ];
      
      const scrollPos = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section.name);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'work', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Sahil_resume.pdf';
    link.download = 'Sahil_Resume.pdf';
    link.click();
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          {/* Logo with Image */}
          <a href="#home" className="logo">
            <img 
              src="/images/logo.png" 
              alt="SAHIL" 
              className="logo-img"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'flex';
              }}
            />
            <div className="logo-text-group" style={{ display: 'none' }}>
              <span className="logo-text-main">SAHIL</span>
              <span className="logo-sub">DEVELOPER | ENGINEER</span>
            </div>
          </a>
          
          <nav className={`nav ${isOpen ? 'open' : ''}`}>
            {navItems.map(item => (
              <a 
                key={item.id} 
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          <div className="header-actions">
            <button onClick={downloadResume} className="resume-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Resume
            </button>
            <a href="#contact" className="cta-btn">
              Hire Me →
            </a>
            <button 
              className={`menu-toggle ${isOpen ? 'active' : ''}`}
              onClick={() => setIsOpen(!isOpen)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;