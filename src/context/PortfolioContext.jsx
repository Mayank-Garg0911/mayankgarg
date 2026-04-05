import { createContext, useContext, useState, useRef } from 'react'

const PortfolioContext = createContext(null)

export function PortfolioProvider({ children }) {
  const [activeSection, setActiveSection] = useState('home')
  
  const state = {
    activeSection
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
