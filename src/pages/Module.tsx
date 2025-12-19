import React, { useState } from 'react'
import { Module as ModuleType } from '../data/courseData'
import LessonCard from '../components/LessonCard'
import FormulaSimulator from '../components/FormulaSimulator'
import './Module.css'

interface ModuleProps {
  module: ModuleType
  onNavigate: (page: 'home' | 'module' | 'practice') => void
}

const Module: React.FC<ModuleProps> = ({ module, onNavigate }) => {
  const [selectedLessonId, setSelectedLessonId] = useState<string | null>(module.lessons[0]?.id || null)
  const selectedLesson = module.lessons.find(l => l.id === selectedLessonId)

  return (
    <div className="module-page">
      <div className="module-header-section">
        <button className="back-button" onClick={() => onNavigate('home')} aria-label="Go back to home">
          ← Back to Modules
        </button>
        <div className="module-title-section">
          <h1>{module.title}</h1>
          <p className="module-intro">{module.description}</p>
        </div>
      </div>

      <div className="module-content">
        <aside className="lessons-sidebar" role="navigation" aria-label="Lessons navigation">
          <h2>Lessons</h2>
          <ul className="lessons-list">
            {module.lessons.map(lesson => (
              <li key={lesson.id}>
                <button
                  onClick={() => setSelectedLessonId(lesson.id)}
                  className={`lesson-button ${selectedLessonId === lesson.id ? 'active' : ''}`}
                  aria-current={selectedLessonId === lesson.id ? 'true' : undefined}
                  aria-label={`Learn about ${lesson.title}`}
                >
                  {lesson.title}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <main className="lesson-content" role="main">
          {selectedLesson && (
            <>
              <div className="lesson-header">
                <h2>{selectedLesson.title}</h2>
                <code className="formula-badge">{selectedLesson.formula}</code>
              </div>

              <section className="lesson-section" aria-labelledby="description-heading">
                <h3 id="description-heading">Overview</h3>
                <p>{selectedLesson.content}</p>
              </section>

              <section className="lesson-section" aria-labelledby="syntax-heading">
                <h3 id="syntax-heading">Syntax</h3>
                <div className="syntax-box">
                  <code>{selectedLesson.syntax}</code>
                </div>
              </section>

              <section className="lesson-section" aria-labelledby="example-heading">
                <h3 id="example-heading">Example</h3>
                <div className="example-box">
                  <p>{selectedLesson.example}</p>
                </div>
              </section>

              <section className="lesson-section" aria-labelledby="mistakes-heading">
                <h3 id="mistakes-heading">⚠️ Common Mistakes</h3>
                <ul className="mistakes-list">
                  {selectedLesson.commonMistakes.map((mistake, index) => (
                    <li key={index}>{mistake}</li>
                  ))}
                </ul>
              </section>

              <section className="lesson-section" aria-labelledby="simulator-heading">
                <h3 id="simulator-heading">Try It Out!</h3>
                <FormulaSimulator formula={selectedLesson.formula} />
              </section>

              <div className="lesson-actions">
                {selectedLesson.id !== module.lessons[0].id && (
                  <button
                    className="nav-button"
                    onClick={() => {
                      const currentIndex = module.lessons.findIndex(l => l.id === selectedLessonId)
                      setSelectedLessonId(module.lessons[currentIndex - 1].id)
                    }}
                    aria-label="Go to previous lesson"
                  >
                    ← Previous Lesson
                  </button>
                )}
                {selectedLesson.id !== module.lessons[module.lessons.length - 1].id && (
                  <button
                    className="nav-button"
                    onClick={() => {
                      const currentIndex = module.lessons.findIndex(l => l.id === selectedLessonId)
                      setSelectedLessonId(module.lessons[currentIndex + 1].id)
                    }}
                    aria-label="Go to next lesson"
                  >
                    Next Lesson →
                  </button>
                )}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  )
}

export default Module
