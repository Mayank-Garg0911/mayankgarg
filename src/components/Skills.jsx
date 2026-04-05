import '../styles/About.css'
import '../styles/Skills.css'

export default function Skills() {
  const skillsData = {
    'Programming': ['Python', 'SQL', 'C++', 'JavaScript', 'Golang'],
    'Data Science & ML': ['Pandas', 'NumPy', 'Scikit-learn', 'XGBoost', 'Matplotlib', 'Seaborn', 'Jupyter'],
    'Databases': ['MySQL', 'PostgreSQL', 'MongoDB'],
    'Tools & Platforms': ['Git', 'Docker', 'AWS', 'Google Colab', 'VS Code', 'Jupyter Notebook'],
  }

  return (
    <section id="skills" className="section-container">
      <div className="section-label">02 / Skills</div>
      <div className="section-title">Technical expertise<br />for modern problems.</div>
      
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-card">
            <h3>{category}</h3>
            <div className="skill-tags">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
