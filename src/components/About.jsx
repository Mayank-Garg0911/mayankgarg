import '../styles/About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate <span className="highlight">Data Scientist</span> and <span className="highlight">Full-Stack Developer</span> currently pursuing my BTech in Data Science Engineering at <strong>Dr. BR Ambedkar NIT Jalandhar</strong>, with an expected graduation in May 2028.
            </p>
            <p>
              With expertise in machine learning, data analysis, and web development, I combine analytical skills with creative problem-solving to build impactful solutions. I'm obsessed with turning data into actionable insights and creating seamless user experiences.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h3>4+</h3>
                <p>Major Projects</p>
              </div>
              <div className="stat">
                <h3>10+</h3>
                <p>Skills Mastered</p>
              </div>
              <div className="stat">
                <h3>∞</h3>
                <p>Passion</p>
              </div>
            </div>
          </div>

          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Data Analysis</h3>
              <p>Extracting insights from complex datasets using Pandas, NumPy, and statistical methods</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤖</div>
              <h3>Machine Learning</h3>
              <p>Building predictive models with scikit-learn, XGBoost, and deep learning frameworks</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h3>Full Stack Dev</h3>
              <p>Creating responsive web apps with React, Next.js, and modern backend technologies</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📈</div>
              <h3>Visualization</h3>
              <p>Communicating insights through beautiful and interactive visualizations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
