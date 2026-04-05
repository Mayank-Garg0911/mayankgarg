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
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Mayank<br />Garg
          </h1>
          
          <div className="sub-intro">
            <div className="intro-text-wrapper">
              <p className="intro-text">
                I am a focused Data Science Engineer creating intelligent solutions and aesthetic digital experiences.
              </p>
              <div className="typewriter-wrapper">
                <span className="type-text">{displayText}</span>
                <span className="cursor">|</span>
              </div>
            </div>
            
            <div className="hero-actions" style={{marginTop: '30px'}}>
              <span className="read-more-link" onClick={() => scrollToSection('about')}>
                READ MORE
              </span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="moon-visual"></div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>SCROLL DOWN</span>
      </div>
    </section>
  )
}
