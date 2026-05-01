import { useState, useEffect } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import '../styles/Hero.css'

export default function Hero() {
  const { actions: { scrollToSection } } = usePortfolio() || { actions: { scrollToSection: () => {} } }
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)

  const phrases = ["Full Stack Data Scientist", "Full Stack Developer", "AI Engineer", "ML Specialist"]

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % phrases.length
      const fullText = phrases[i]

      setDisplayText(isDeleting 
        ? fullText.substring(0, displayText.length - 1)
        : fullText.substring(0, displayText.length + 1)
      )

      setTypingSpeed(isDeleting ? 80 : 150)

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setLoopNum(loopNum + 1)
      }
    }

    const timer = setTimeout(handleType, typingSpeed)
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum, typingSpeed, phrases])

  return (
    <section id="home" className="hero">
      <div className="hero-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">Mayank Garg</h1>
          
          <div className="hero-role">
            <span className="role-prefix">I'm a</span>
            <div className="typewriter-wrapper">
              <span className="type-text">{displayText}<span className="cursor"></span></span>
            </div>
          </div>

          <p className="hero-description">
            I am a focused and curious Data Science Engineer driven by a passion for building intelligent systems and crafting meaningful digital experiences. I enjoy transforming raw data into actionable insights and designing solutions that are not only efficient but also intuitive and impactful. Beyond technical skills, I see myself as an explorer—someone who constantly seeks to understand how things work and how they can be improved.
          </p>

          <div className="hero-actions">
            <button className="cta-button" onClick={() => scrollToSection('about')}>
              Read More
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}
