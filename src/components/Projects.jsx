import '../styles/About.css'
import '../styles/Projects.css'

export default function Projects() {
  const projectsData = [
    {
      title: 'SkyMail NLP Platform',
      tech: ['FastAPI', 'Next.js', 'AWS SES', 'Docker'],
      number: '01'
    },
    {
      title: 'Data Analysis Project',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      number: '02'
    },
    {
      title: 'Predictive Modeling',
      tech: ['Scikit-learn', 'XGBoost', 'Python'],
      number: '03'
    },
    {
      title: 'Database Management',
      tech: ['MySQL', 'Python', 'Flask'],
      number: '04'
    }
  ]

  return (
    <section id="projects" className="section-container">
      <div className="section-label">03 / Projects</div>
      <div className="section-title">Case studies and<br />selected work.</div>
      
      <div className="projects-grid">
        {projectsData.map(project => (
          <div key={project.number} className="project-card">
            <div className="project-content">
              <span className="project-number">{project.number}</span>
              <h3 className="project-title">{project.title}</h3>
              <div className="project-tech" style={{display: 'flex', gap: '10px', flexWrap: 'wrap', opacity: 0.6}}>
                {project.tech.map(tech => (
                  <span key={tech} className="tech-badge" style={{fontSize: '0.7rem', fontWeight: 600}}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <span className="project-btn">VIEW CASE STUDY</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
