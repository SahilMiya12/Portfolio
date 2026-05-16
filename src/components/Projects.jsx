import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Nexus AI Platform",
      description: "Enterprise AI platform with real-time analytics, custom model training, and API integration. Features include data preprocessing, model training, and interactive dashboards.",
      tech: ["React", "Python", "TensorFlow", "FastAPI"],
      image: "/images/project1.jpg",
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      color: "#6366f1",
      github: "https://github.com/yourusername/nexus-ai",
      demo: "https://nexus-ai-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "MarketFlow",
      description: "Full-featured e-commerce platform with AI recommendations, payment gateway integration, inventory management, and admin dashboard.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
      image: "/images/project2.jpg",
      gradient: "linear-gradient(135deg, #ec4899, #f59e0b)",
      color: "#ec4899",
      github: "https://github.com/yourusername/marketflow",
      demo: "https://marketflow-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "SwiftTask Pro",
      description: "Project management tool with kanban boards, real-time updates, team collaboration, time tracking, and analytics dashboard.",
      tech: ["React", "TypeScript", "GraphQL", "Prisma"],
      image: "/images/project3.jpg",
      gradient: "linear-gradient(135deg, #06b6d4, #3b82f6)",
      color: "#06b6d4",
      github: "https://github.com/yourusername/swifttask",
      demo: "https://swifttask-demo.com",
      featured: false
    },
    {
      id: 4,
      title: "HealthTrack",
      description: "Cross-platform health monitoring app with wearable integration, AI health insights, medication reminders, and fitness tracking.",
      tech: ["React Native", "Node.js", "MongoDB", "Firebase"],
      image: "/images/project4.jpg",
      gradient: "linear-gradient(135deg, #22c55e, #14b8a6)",
      color: "#22c55e",
      github: "https://github.com/yourusername/healthtrack",
      demo: "https://healthtrack-demo.com",
      featured: false
    },
    {
      id: 5,
      title: "FinDash Analytics",
      description: "Financial dashboard with predictive analytics, real-time stock data, portfolio tracking, and custom report generation.",
      tech: ["Vue.js", "D3.js", "Django", "Celery"],
      image: "/images/project5.jpg",
      gradient: "linear-gradient(135deg, #f59e0b, #ef4444)",
      color: "#f59e0b",
      github: "https://github.com/yourusername/findash",
      demo: "https://findash-demo.com",
      featured: false
    },
    {
      id: 6,
      title: "SmartHome IoT Hub",
      description: "Centralized IoT control panel for smart home devices with real-time monitoring, automation rules, and voice control integration.",
      tech: ["React", "Node.js", "MQTT", "InfluxDB"],
      image: "/images/project6.jpg",
      gradient: "linear-gradient(135deg, #8b5cf6, #6366f1)",
      color: "#8b5cf6",
      github: "https://github.com/yourusername/smarthome",
      demo: "https://smarthome-demo.com",
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
            <span>🚀</span>
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
          <h3 className="featured-title">⭐ Featured work</h3>
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
          <h3 className="projects-subtitle">More projects</h3>
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
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="projects-cta-btn">
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