import { createContext, useContext, useState, useRef, useEffect } from 'react'

const PortfolioContext = createContext(null)

export function PortfolioProvider({ children }) {
  const [activeSection, setActiveSection] = useState('home')
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)
  const sectionIds = ['home', 'about', 'skills', 'projects', 'contact']
  const lastScrollYRef = useRef(0)
  
  const state = {
    activeSection,
    isNavbarVisible
  }

  const actions = {
    setActiveSection,
    scrollToSection: (id) => {
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  const meta = {
    // Any refs or static metadata
  }

  // Detect scroll position and update active section, handle navbar visibility
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100
      const currentScrollY = window.scrollY

      // Update active section
      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(id)
            break
          }
        }
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollYRef.current && currentScrollY > 100) {
        // Scrolling down
        setIsNavbarVisible(false)
      } else {
        // Scrolling up
        setIsNavbarVisible(true)
      }

      lastScrollYRef.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <PortfolioContext.Provider value={{ state, actions, meta }}>
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolio() {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }
  return context
}
