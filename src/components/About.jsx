import '../styles/Shared.css'

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="section-label">01 / About</div>
      <div className="grid-2">
        <div className="section-title">
          We create interesting<br />data solutions.
        </div>
        <div className="content-text">
          <p style={{marginBottom: '20px'}}>
            I'm a passionate <span className="highlight">Data Scientist and Full-Stack Developer</span> currently pursuing my BTech in Data Science Engineering at <span className="highlight">Dr. BR Ambedkar NIT Jalandhar</span>.
          </p>
          <p>
            With expertise in machine learning, data analysis, and web development, I combine analytical skills with creative problem-solving to build impactful solutions. I'm obsessed with turning data into actionable insights and creating seamless user experiences.
          </p>
        </div>
      </div>
    </section>
  )
}
