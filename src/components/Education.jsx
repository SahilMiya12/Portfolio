import './Education.css';

const Education = () => {
  const educationData = [
    {
      level: "University",
      icon: "🎓",
      degree: "Bachelor of Technology in Computer Science",
      institution: "Sri Eshwar College of Engineering",
      location: "Kinathukadavu, Coimbatore - 641202, Tamil Nadu, India",
      period: "2024 - 2028",
      cgpa: "7.9/10",
      current: true,
      description: "Currently in 3rd year, 5th semester. Focus on full-stack development, web technologies, Software Engineering, DSA, and system design.",
      achievements: ["Participation in Tech Event & Hackathon", "Class Committee Member in 2nd Year"]
    },
    {
      level: "Higher Secondary (12th)",
      icon: "📚",
      degree: "National Examination Board (NEB) - Science Stream",
      institution: "Himalayan Pyramid College",
      location: "Shreepur-11, Birginj, Parsa, Nepal",
      period: "2022 - 2024",
      percentage: "84.5%",
      current: false,
      description: "Science stream with Biology, Physics, Chemistry, Mathematics.",
      achievements: ["School Topper", "Science Fair Winner"]
    },
    {
      level: "Secondary (10th)",
      icon: "📖",
      degree: "Secondary Education Examination (SEE)",
      institution: "Green Land Secondary School",
      location: "Chhapkaiya-2, Birgunj, Parsa, Nepal",
      period: "2018 - 2022",
      percentage: "76.25%",
      current: false,
      description: "Core subjects: Mathematics, Science, English, Social Studies.",
      achievements: ["Perfect Attendance", "Discipline Student"]
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
            From school to university — My complete academic journey
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
                        <span>Current: 3rd Year · 5th Semester</span>
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
              <p>Full-Stack Development, Web Technologies, Software Engineering, DSA, System Design and Cloud Computing</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">📚</div>
            <div className="summary-content">
              <h4>Learning Goals</h4>
              <p>Mastering React, Node.js, MongoDB, Java and preparing for campus placements</p>
            </div>
          </div>
          <div className="summary-card">
            <div className="summary-icon">💼</div>
            <div className="summary-content">
              <h4>Open for</h4>
              <p>Internships (Summer 2026) · Full-time opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;