import { useState } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import '../styles/Navbar.css'

export default function Navbar() {
  const { state: { activeSection }, actions: { scrollToSection } } = usePortfolio() || { state: { activeSection: 'home' }, actions: { scrollToSection: () => {} } }
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ]

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('home')}>
          FlyPro.
        </div>

        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map(item => (
            <button 
              key={item.id}
              onClick={() => {
                scrollToSection(item.id)
                setIsOpen(false)
              }} 
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="hamburger-dot"></div>
        </div>
      </div>
    </nav>
  )
}
