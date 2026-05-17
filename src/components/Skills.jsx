import { useState } from 'react';
import './Skills.css';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: '✨' },
    { id: 'frontend', name: 'Frontend', icon: '🎨' },
    { id: 'backend', name: 'Backend', icon: '⚙️' },
    { id: 'database', name: 'Database', icon: '🗄️' },
    { id: 'tools', name: 'Tools', icon: '🔧' }
  ];

  const skills = [
    // Frontend
    { name: 'React.js', category: 'frontend', level: 90, icon: '⚛️', color: '#61DAFB', description: 'Building interactive UIs' },
    { name: 'Next.js', category: 'frontend', level: 85, icon: '▲', color: '#000000', description: 'Full-stack React framework' },
    { name: 'TypeScript', category: 'frontend', level: 85, icon: '📘', color: '#3178C6', description: 'Type-safe JavaScript' },
    { name: 'Tailwind CSS', category: 'frontend', level: 92, icon: '🎨', color: '#06B6D4', description: 'Utility-first CSS' },
   // { name: 'Framer Motion', category: 'frontend', level: 80, icon: '🎭', color: '#0055FF', description: 'Animation library' },
    // Backend
    { name: 'Node.js', category: 'backend', level: 88, icon: '🟢', color: '#339933', description: 'JavaScript runtime' },
    { name: 'Python', category: 'backend', level: 85, icon: '🐍', color: '#3776AB', description: 'Versatile programming' },
    { name: 'Express.js', category: 'backend', level: 87, icon: '🚂', color: '#000000', description: 'Web framework' },
    //{ name: 'GraphQL', category: 'backend', level: 80, icon: '📊', color: '#E10098', description: 'API query language' },
    // Database
    { name: 'MongoDB', category: 'database', level: 85, icon: '🍃', color: '#47A248', description: 'NoSQL database' },
    { name: 'PostgreSQL', category: 'database', level: 82, icon: '🐘', color: '#336791', description: 'Relational database' },
    { name: 'MySQL', category: 'database', level: 87, icon: '🐬', color: '#4479A1', description: 'Relational database management' },
    //{ name: 'Redis', category: 'database', level: 75, icon: '🔴', color: '#DC382D', description: 'In-memory cache' },
   // { name: 'Firebase', category: 'database', level: 80, icon: '🔥', color: '#FFCA28', description: 'Backend platform' },
    // Tools
    { name: 'Git', category: 'tools', level: 92, icon: '📝', color: '#F05032', description: 'Version control' },
    { name: 'Docker', category: 'tools', level: 75, icon: '🐳', color: '#2496ED', description: 'Containerization' },
    { name: 'Figma', category: 'tools', level: 85, icon: '🎨', color: '#F24E1E', description: 'UI/UX design' },
    { name: 'AWS', category: 'tools', level: 70, icon: '☁️', color: '#FF9900', description: 'Cloud services' }
  ];

  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="skills-header">
          <div className="skills-badge">
            <span>💪</span>
            My Arsenal
          </div>
          <h2 className="skills-title">
            Tools & technologies I<span className="gradient-text"> master</span>
          </h2>
          <p className="skills-description">
            Every tool in my toolkit is chosen with purpose — to build better, faster, and smarter
          </p>
        </div>

        <div className="skills-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="category-icon">{cat.icon}</span>
              {cat.name}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filteredSkills.map((skill, index) => (
            <div key={index} className="skill-card" style={{ '--skill-color': skill.color }}>
              <div className="skill-card-inner">
                <div className="skill-icon" style={{ background: `${skill.color}15` }}>
                  <span>{skill.icon}</span>
                </div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
                <div className="skill-level">
                  <div className="level-ring">
                    <svg viewBox="0 0 36 36" className="level-circle">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#1a1a1a"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={skill.color}
                        strokeWidth="3"
                        strokeDasharray={`${skill.level}, 100`}
                        strokeLinecap="round"
                        className="level-progress"
                      />
                    </svg>
                    <span className="level-value">{skill.level}%</span>
                  </div>
                </div>
              </div>
              <div className="skill-glow" style={{ background: `radial-gradient(circle, ${skill.color}20, transparent)` }}></div>
            </div>
          ))}
        </div>

        <div className="skills-footer">
          <div className="skills-quote">
            <span className="quote-icon">⚡</span>
            <p>Always learning, always growing. Currently exploring DSA Problems, AI/ML and Cloud Architecture.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;