import '../styles/About.css'
import '../styles/Projects.css'

export default function Projects() {
  const projectsData = [
    {
      title: 'SkyMail - Email Automation System',
      tech: ['FastAPI', 'Next.js', 'AWS SES', 'Docker'],
      number: '01',
      link: 'https://www.skymail.solutions/'
    },
    {
      title: 'Data Analysis Project',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      number: '02',
      link: '#dataanalysis'
    },
    {
      title: 'WriteSpace — Full-Stack Blogging Platform',
      tech: ['FastAPI', 'Python', 'SQLAlchemy', 'JWT Auth', 'React', 'REST API'],
      number: '03',
      link: '#writespace'
    },
    {
      title: 'coming soon...',
      tech: [],
      number: '04',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="section-container">
      <div className="section-label">03 / Projects</div>
      <div className="section-title">Built and Deployed </div>
      
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
                <a className="project-btn" href={project.link} target="_blank" rel="noopener noreferrer">
                  CHECK HERE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
