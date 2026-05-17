import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Subscription-Based Fresh Grocer Delivery System",
      description: "A full-stack MERN application for grocery subscription management. Features include user authentication, subscription plans, order tracking, payment integration (Razorpay/Stripe), admin dashboard for managing products and deliveries, real-time order status updates, and email notifications for order confirmations and delivery alerts.",
      tech:["React", "Node.js", "Express.js", "MongoDB", "Razorpay", "Socket.io", "JWT", "FastAPI"],
      image: "/images/project1.jpg",
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      color: "#6366f1",
      github: "https://github.com/SahilMiya12/fresh-grocer.git",
      demo: "https://fresh-grocer.vercel.app",
      featured: true
    },
    {
      id: 2,
      title: "Healthcare Appointment & Records System",
      description: "A comprehensive web-based healthcare management platform enabling patients to book appointments online, doctors to manage schedules and issue digital prescriptions, and administrators to oversee all operations. Features include role-based access control (Patient, Doctor, Admin), real-time appointment availability checking, automated email notifications, prescription management, medical records tracking, appointment rescheduling, and cancelation. Built with secure JWT authentication and responsive design for seamless access across devices.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Nodemailer", "CSS3"],
      image: "/images/project2.jpg",
      gradient: "linear-gradient(135deg, #ec4899, #f59e0b)",
      color: "#ec4899",
      github: "https://github.com/SahilMiya12/Healthappointment-FSD.git",
      demo: "https://healthappointment.vercel.app",
      featured: true
    },
    {
      id: 3,
      title: "Education Dropout Prediction",
      description: "AI-powered student dropout prediction system that analyzes academic performance, attendance, and behavioral patterns to identify at-risk students and provide early intervention insights through an intelligent chatbot assistant.",
      tech: ["Python", "Streamlit", "Machine Learning", "Scikit-learn", "Groq AI", "Pandas"],
      image: "images/project3.jpg",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
      color: "#f59e0b",
      github: "https://github.com/SahilMiya12/Education-Dropout-Prediction.git",
      demo: "https://education-dropout-prediction.vercel.app",
      featured: false
    },
    {
      id: 4,
      title: "Expense Split Tracker",
      description: "A smart expense splitting application that helps groups track shared expenses, calculate balances, manage payments, and simplify bill sharing in real-time.",
      tech: ["React", "Spring Boot", "MySQL", "JWT", "Tailwind CSS"],
      image: "/images/project4.jpg",
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      color: "#06b6d4",
      github: "https://github.com/SahilMiya12/Expense-Split-Tracker.git",
      demo: "https://expense-split-tracker.vercel.app",
      featured: false
    },
    {
      id: 5,
      title: "Finance Investment Portfolio Management",
      description: "A modern finance and investment management platform that helps users track portfolios, monitor investments, analyze market performance, and manage financial assets efficiently.",
      tech: ["React", "Spring Boot", "MySQL", "JWT", "Tailwind CSS"],
      image: "/images/project5.jpg",
      gradient: "linear-gradient(135deg, #22c55e, #14b8a6)",
      color: "#22c55e",
      github: "https://github.com/SahilMiya12/Finance-Investment-Portfolio-Management.git",
      demo: "https://finance-investment-portfolio-management.vercel.app",
      featured: false
    },
    {
     id: 6,
     title: "Fitness Tracker",
     description: "AI-powered fitness tracking platform that helps users monitor workouts, track health progress, manage fitness goals, and analyze performance through interactive dashboards and smart analytics.",
     tech: ["Django", "Python", "SQLite", "HTML", "CSS", "JavaScript"],
      image: "/images/project6.jpg",
      gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
      color: "#8b5cf6",
      github: "https://github.com/SahilMiya12/fitness-tracker.git",
      demo: "https://fitness-tracker.vercel.app",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="work" className="projects">
      <div className="container">
        <div className="projects-header">
          <div className="projects-badge">
            <span>💎</span>
            Portfolio
          </div>
          <h2 className="projects-title">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="projects-description">
            A selection of my best work — each built with purpose and attention to detail
          </p>
        </div>

        {/* Featured Projects */}
        <div className="featured-section">
          <h3 className="featured-title">🔮 Featured work</h3>
          <div className="featured-grid">
            {featuredProjects.map(project => (
              <div key={project.id} className="featured-card">
                <div className="featured-card-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="featured-project-img"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/600x400/1a1a1a/6366f1?text=" + project.title;
                    }}
                  />
                  <div className="featured-card-overlay">
                    <div className="featured-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="featured-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.21.68-.48 0-.24-.01-.88-.01-1.73-2.78.6-3.37-1.2-3.37-1.2-.45-1.15-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1.01.07 1.54 1.04 1.54 1.04.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.09.64-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.58.69.48C19.13 20.17 22 16.42 22 12c0-5.52-4.48-10-10-10z"/>
                        </svg>
                        Code
                      </a>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="featured-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                        </svg>
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
                <div className="featured-card-content">
                  <h3 className="featured-card-title">{project.title}</h3>
                  <p className="featured-card-desc">{project.description.substring(0, 120)}...</p>
                  <div className="featured-tech">
                    {project.tech.slice(0, 4).map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="projects-section">
          <h3 className="projects-subtitle"> 📂 More projects</h3>
          <div className="projects-grid">
            {otherProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-card-image">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="project-img"
                    onError={(e) => {
                      e.target.src = "https://placehold.co/400x250/1a1a1a/6366f1?text=" + project.title;
                    }}
                  />
                </div>
                <div className="project-card-content">
                  <h4 className="project-card-title">{project.title}</h4>
                  <p className="project-card-desc">{project.description.substring(0, 80)}...</p>
                  <div className="project-card-tech">
                    {project.tech.slice(0, 3).map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>
                  <div className="project-card-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="projects-cta">
          <a href="https://github.com/SahilMiya12" target="_blank" rel="noopener noreferrer" className="projects-cta-btn">
            View all on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;