
 import './App.css'
import { useState } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Training from './components/Training'
import Certificates from './components/Certificates'
import Achievements from './components/Achievements'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark')
  }

  return (
    <div className="portfolio">
      <NavBar />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <About />
      <Skills />
      <Projects />
      <Training />
      <Certificates />
      <Achievements />
      <Education />
      <Contact />
    </div>
  )
}

export default App
