import './App.css'
import { PortfolioProvider } from './context/PortfolioContext'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <PortfolioProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <About />
          
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </PortfolioProvider>
  )
}

export default App



