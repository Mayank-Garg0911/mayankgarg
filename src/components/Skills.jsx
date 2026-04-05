import '../styles/Skills.css'

export default function Skills() {
  const skillsData = {
    'Programming': ['Python', 'SQL', 'C++', 'JavaScript', 'Golang'],
    'Data Science & ML': ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Matplotlib', 'Seaborn', 'Jupyter'],
    'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
    'Frontend': ['React', 'Next.js', 'HTML5', 'CSS3', 'Vite'],
    'Tools & Platforms': ['Git', 'Docker', 'AWS', 'Google Colab', 'VS Code'],
    'Specializations': ['Hypothesis Testing', 'Regression Analysis', 'Data Visualization', 'Feature Engineering']
  }

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <div className="underline"></div>
        </div>

        <div className="skills-grid">
          {Object.entries(skillsData).map(([category, skills], idx) => (
            <div key={category} className="skill-category" style={{ animationDelay: `${idx * 0.1}s` }}>
              <h3>{category}</h3>
              <div className="skill-tags">
                {skills.map((skill, i) => (
                  <span key={skill} className="skill-tag" style={{ animationDelay: `${i * 0.05}s` }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
