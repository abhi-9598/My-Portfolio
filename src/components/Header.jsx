import './Header.css'
import { useState } from 'react'
import profileImg from '../assets/PresonalPhotoes/1.jpeg'


function Header({ darkMode, toggleDarkMode }) {
  const [showCertificates, setShowCertificates] = useState(false)

  const certificates = [
    '/src/assets/Certificate/1.jpg',
    '/src/assets/Certificate/2.jpg',
    '/src/assets/Certificate/3.jpg',
  ]

  return (
    <header id="home" className="header">
      <div className="header-content">
        <div className="header-grid">
          <div className="header-left">
            <img src={profileImg} alt="Abhishek Yadav" className="profile-photo" />
          </div>
          <div className="header-right">
            <h1>Abhishek Yadav</h1>
            <p>Data Science Student | Frontend Developer </p>
            <div className="header-actions">
              <a href="https://drive.google.com/file/d/1MsTGPlPC9TNhRpfJJ7O4975-V4uEBUKw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="cv-link" style={{ textDecoration: 'none', padding: '10px 18px', borderRadius: '8px', background: 'linear-gradient(135deg, var(--accent) 0%, rgba(100, 150, 255, 0.8) 100%)', color: '#fff', fontWeight: 600 }}>
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
      <button className="theme-toggle" onClick={toggleDarkMode}>
        {darkMode ? '☀️ ' : '🌙 '}
      </button>
    </header>
  )
}

export default Header