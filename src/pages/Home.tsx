import React from 'react'
import { courseData, Module as ModuleType } from '../data/courseData'
import './Home.css'

interface HomeProps {
  onNavigate: (page: 'module' | 'practice', module?: ModuleType) => void
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Master Excel Functions</h1>
          <p>From beginner basics to advanced formulas - become an Excel expert!</p>
          <button
            className="cta-button"
            onClick={() => onNavigate('practice')}
            aria-label="Start practicing Excel functions"
          >
            Start Practicing Now
          </button>
        </div>
      </section>

      <section className="modules-section">
        <h2>Choose Your Learning Path</h2>
        <div className="modules-grid">
          {courseData.map((module) => (
            <div key={module.id} className={`module-card ${module.difficulty}`}>
              <div className="module-header">
                <h3>{module.title}</h3>
                <span className="difficulty-badge" aria-label={`Difficulty: ${module.difficulty}`}>
                  {module.difficulty.charAt(0).toUpperCase() + module.difficulty.slice(1)}
                </span>
              </div>
              <p className="module-description">{module.description}</p>
              <div className="module-stats">
                <span className="lesson-count" aria-label={`${module.lessons.length} lessons`}>
                  📖 {module.lessons.length} Lessons
                </span>
              </div>
              <button
                className="explore-button"
                onClick={() => onNavigate('module', module)}
                aria-label={`Learn ${module.title}`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="features">
        <h2>What You'll Learn</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>📊 Real-World Examples</h3>
            <p>Every function comes with practical examples you can use immediately in your work.</p>
          </div>
          <div className="feature-card">
            <h3>🎯 Interactive Practice</h3>
            <p>Test your knowledge with hands-on exercises and instant feedback.</p>
          </div>
          <div className="feature-card">
            <h3>📥 Downloadable Files</h3>
            <p>Get sample Excel files to practice with and use in your projects.</p>
          </div>
          <div className="feature-card">
            <h3>⚡ From Basic to Advanced</h3>
            <p>Start with SUM and AVERAGE, progress to VLOOKUP and Array Formulas.</p>
          </div>
          <div className="feature-card">
            <h3>💡 Common Mistakes</h3>
            <p>Learn what NOT to do - we highlight common pitfalls for each function.</p>
          </div>
          <div className="feature-card">
            <h3>♿ Accessible Design</h3>
            <p>WCAG 2.2 Level AA compliant - learn at your own pace, your way.</p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Choose a Module</h3>
            <p>Select from basic, intermediate, or advanced functions.</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Learn the Syntax</h3>
            <p>Understand how each function works with clear explanations.</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>See Examples</h3>
            <p>View real-world examples and learn common mistakes.</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Practice & Master</h3>
            <p>Test your knowledge and get downloadable practice files.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
