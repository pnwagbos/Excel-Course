import React, { useState } from 'react'
import './Navigation.css'

interface NavigationProps {
  onNavigate: (page: 'home' | 'module' | 'practice') => void
  currentPage: string
}

const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="nav-container">
        <button
          className="logo"
          onClick={() => onNavigate('home')}
          aria-label="Excel Function Course - Home"
          title="Go to home page"
        >
          <span className="logo-icon">📊</span>
          <span className="logo-text">Excel Mastery</span>
        </button>
        
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`} id="nav-menu">
          <li>
            <button
              onClick={() => {
                onNavigate('home')
                setMenuOpen(false)
              }}
              className={currentPage === 'home' ? 'active' : ''}
              aria-current={currentPage === 'home' ? 'page' : undefined}
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                onNavigate('practice')
                setMenuOpen(false)
              }}
              className={currentPage === 'practice' ? 'active' : ''}
              aria-current={currentPage === 'practice' ? 'page' : undefined}
            >
              Practice
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navigation
