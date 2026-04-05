import '../styles/Projects.css'

export default function Projects() {
  const projects = [
    {
      title: 'SkyMail - Newsletter & Email Campaign Platform',
      tech: ['FastAPI', 'Next.js', 'AWS SES', 'Docker'],
      description: 'Production-grade email delivery system enabling template creation, campaign scheduling, and large-scale email dispatch with seamless infrastructure.',
      highlights: ['AWS SES Integration', 'Docker Deployment', 'RESTful APIs', 'Responsive Frontend'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Data Analysis & Visualization Project',
      tech: ['Python', 'Pandas', 'Matplotlib', 'Seaborn'],
      description: 'Comprehensive data analysis on large datasets using exploratory data analysis to extract meaningful insights and patterns.',
      highlights: ['Interactive Visualizations', 'Statistical Analysis', 'Data Cleaning'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Predictive Modeling Project',
      tech: ['Scikit-learn', 'XGBoost', 'Python'],
      description: 'Developed and compared multiple machine learning models for classification and regression tasks with performance optimization.',
      highlights: ['Feature Engineering', 'Model Optimization', 'Cross-Validation'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Database Management System',
      tech: ['MySQL', 'Python', 'Flask'],
      description: 'Real-world application with normalized database schema and complex SQL queries for enterprise-level data manipulation.',
      highlights: ['CRUD Operations', 'SQL Optimization', 'Web Interface'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <div className="underline"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card" style={{ '--gradient': project.gradient }}>
              <div className="project-header">
                <div className="project-icon" style={{ background: project.gradient }}></div>
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="project-highlights">
                {project.highlights.map(highlight => (
                  <li key={highlight}>• {highlight}</li>
                ))}
              </div>

              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>

              <a href="#" className="project-link">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
