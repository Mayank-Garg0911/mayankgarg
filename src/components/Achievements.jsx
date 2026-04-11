import '../styles/Achievements.css'
import '../styles/About.css'
export default function Achievements() {
  return (
    <section id="achievements" className="section-container">
    
    <div className="section-label">04 / Achievements</div>
  <div className="hackathon-container">
    <div className="section-title">HackMol 7.0 Winner</div>

    <div className="hackathon-card">
      
      <span className="hackathon-badge"></span>

      <h3 className="hackathon-heading"> HackMol 7.0 2026 organised by GDGC NITJ</h3>

      <p className="hackathon-desc">
        Won 2nd place in a 30-hour hackathon by building an AI-powered website+mobile app.
        Worked with a team of 3 and developed a fully functional prototype.
      </p>

      <div className="hackathon-images">
        <img src="/hackathon1.jpeg" />
        <img src="/hackathon2.jpeg" />
        <img src="/hackathon3.jpeg" />
      </div>

    </div>
  </div>
</section>
  )
}
