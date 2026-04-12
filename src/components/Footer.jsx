import { usePortfolio } from '../context/PortfolioContext'
import '../styles/Footer.css'

export default function Footer() {
  const { actions: { scrollToSection } } = usePortfolio() || { actions: { scrollToSection: () => {} } }
  const currentYear = new Date().getFullYear()

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    {id: 'achievements', label:'Achievements'},
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <footer className="footer">
      <div className="footer-logo">Mayank Garg.</div>
      
      <div className="footer-nav">
        {links.map(link => (
          <button 
            key={link.id} 
            onClick={() => scrollToSection(link.id)} 
            className="footer-link"
          >
            {link.label}
          </button>
        ))}
      </div>
      
      <div className="footer-bottom">
        &copy; {currentYear} Mayank Garg. All rights reserved. 
        <br />
        Built with React & Passion.
      </div>
    </footer>
  )
}
