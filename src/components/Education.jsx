import './Education.css';

const Education = () => {
  const educationData = [
    {
      level: "University",
      icon: "🎓",
      degree: "Bachelor of Technology in Computer Science",
      institution: "XYZ University",
      location: "India",
      period: "2022 - 2026",
      cgpa: "8.7/10",
      current: true,
      description: "Currently in 3rd year, 6th semester. Focus on full-stack development, DSA, and system design.",
      achievements: ["Academic Excellence Award", "Research Paper Published"]
    },
    {
      level: "Higher Secondary (12th)",
      icon: "📚",
      degree: "Senior Secondary Education",
      institution: "XYZ Senior Secondary School",
      location: "India",
      period: "2020 - 2022",
      percentage: "88%",
      current: false,
      description: "Science stream with Computer Science, Physics, Chemistry, Mathematics.",
      achievements: ["School Topper", "Science Fair Winner"]
    },
    {
      level: "Secondary (10th)",
      icon: "📖",
      degree: "Secondary Education",
      institution: "XYZ High School",
      location: "India",
      period: "2018 - 2020",
      percentage: "85%",
      current: false,
      description: "Core subjects: Mathematics, Science, English, Social Studies.",
      achievements: ["Perfect Attendance", "Math Olympiad Participant"]
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        {/* Header */}
        <div className="education-header">
          <div className="education-badge">
            <span className="badge-icon">🎓</span>
            Academic Journey
          </div>
          <h2 className="education-title">
            My <span className="gradient-text">Education</span>
          </h2>
          <p className="education-subtitle">
            From school to university — my complete academic journey
          </p>
        </div>

        {/* Timeline Education */}
        <div className="timeline-wrapper">
          {educationData.map((edu, index) => (
            <div key={index} className={`timeline-item ${edu.current ? 'current' : ''}`}>
              <div className="timeline-icon" style={{ background: `linear-gradient(135deg, ${edu.current ? '#6366f1' : '#1a1a1a'}, ${edu.current ? '#ec4899' : '#2a2a2a'})` }}>
                <span>{edu.icon}</span>
              </div>
              <div className="timeline-line"></div>
              <div className="timeline-content">
                <div className="timeline-badge">{edu.level}</div>
                <div className="timeline-card">
                  <div className="timeline-card-header">
                    <div>
                      <h3>{edu.degree}</h3>
                      <p className="institution-name">{edu.institution} • {edu.location}</p>
                    </div>
                    <div className="period-badge">{edu.period}</div>
                  </div>

                  <div className="timeline-stats">
                    {edu.cgpa && (
                      <div className="timeline-stat">
                        <span className="stat-icon">📊</span>
                        <span>CGPA: {edu.cgpa}</span>
                      </div>
                    )}
                    {edu.percentage && (
                      <div className="timeline-stat">
                        <span className="stat-icon">📈</span>
                        <span>Percentage: {edu.percentage}</span>
                      </div>
                    )}
                    {edu.current && (
                      <div className="timeline-stat">
                        <span className="stat-icon">🎯</span>
                        <span>Current: 3rd Year · 6th Semester</span>
                      </div>
                    )}
                  </div>

                  <p className="timeline-description">{edu.description}</p>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="timeline-achievements">
                      <strong>🏆 Key Achievements:</strong>
                      <div className="achievement-tags">
                        {edu.achievements.map((achievement, i) => (
                          <span key={i} className="achievement-tag">{achievement}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Summary Cards */}
        <div className="edu-summary">
          <div className="summary-card">
            <div className="summary-icon">🎯</div>
            <div className="summary-content">
              <h4>Current Focus</h4>
              <p>Full-stack Development, DSA, System Design, Cloud Computing</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">📚</div>
            <div className="summary-content">
              <h4>Learning Goals</h4>
              <p>Mastering React, Node.js, and preparing for campus placements</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">💼</div>
            <div className="summary-content">
              <h4>Open for</h4>
              <p>Internships (Summer 2025) · Full-time opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;