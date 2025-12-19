import React, { useState } from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Module from './pages/Module'
import Practice from './pages/Practice'
import { Module as ModuleType } from './data/courseData'

type PageType = 'home' | 'module' | 'practice'

interface AppState {
  currentPage: PageType
  selectedModule: ModuleType | null
}

function App() {
  const [appState, setAppState] = useState<AppState>({
    currentPage: 'home',
    selectedModule: null
  })

  const handleNavigate = (page: PageType, module?: ModuleType) => {
    setAppState({
      currentPage: page,
      selectedModule: module || null
    })
    window.scrollTo(0, 0)
  }

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Navigation onNavigate={handleNavigate} currentPage={appState.currentPage} />
      <main id="main-content" role="main">
        {appState.currentPage === 'home' && (
          <Home onNavigate={handleNavigate} />
        )}
        {appState.currentPage === 'module' && appState.selectedModule && (
          <Module module={appState.selectedModule} onNavigate={handleNavigate} />
        )}
        {appState.currentPage === 'practice' && (
          <Practice onNavigate={handleNavigate} />
        )}
      </main>
      <footer className="footer" role="contentinfo">
        <p>&copy; 2025 Excel Function Course. Made with 🐶 by moonpie. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
