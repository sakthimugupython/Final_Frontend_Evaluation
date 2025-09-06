import { useState } from 'react'
import './App.css'

function App() {
  const [activeLink, setActiveLink] = useState('home')
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  const handleNavClick = (link) => {
    setActiveLink(link)
    setIsNavCollapsed(true)
  }

  return (
    <div className="app">
      <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#home">Logo</a>
          <button 
            className="navbar-toggler" 
            type="button" 
            onClick={() => setIsNavCollapsed(!isNavCollapsed)}
            aria-controls="navbarNav" 
            aria-expanded={!isNavCollapsed} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a 
                  href="#home" 
                  className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavClick('home')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#about" 
                  className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavClick('about')}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#services" 
                  className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
                  onClick={() => handleNavClick('services')}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a 
                  href="#contact" 
                  className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
                  onClick={() => handleNavClick('contact')}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="content container">
        <h1>Welcome to {activeLink.charAt(0).toUpperCase() + activeLink.slice(1)}</h1>
      </div>
    </div>
  )
}

export default App
