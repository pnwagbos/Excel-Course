import React, { useState } from 'react'
import './Practice.css'
import QuizExercise from '../components/QuizExercise'
import ExcelDownloader from '../components/ExcelDownloader'

interface PracticeProps {
  onNavigate: (page: 'home' | 'module' | 'practice') => void
}

const Practice: React.FC<PracticeProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'exercises' | 'downloads'>('exercises')

  return (
    <div className="practice-page">
      <div className="practice-header">
        <h1>Practice & Exercises</h1>
        <p>Test your Excel knowledge and master formulas with hands-on practice</p>
      </div>

      <div className="practice-container">
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === 'exercises' ? 'active' : ''}`}
            onClick={() => setActiveTab('exercises')}
            aria-selected={activeTab === 'exercises'}
            role="tab"
            aria-controls="exercises-panel"
          >
            🎯 Exercises
          </button>
          <button
            className={`tab-button ${activeTab === 'downloads' ? 'active' : ''}`}
            onClick={() => setActiveTab('downloads')}
            aria-selected={activeTab === 'downloads'}
            role="tab"
            aria-controls="downloads-panel"
          >
            📥 Download Files
          </button>
        </div>

        {activeTab === 'exercises' && (
          <div id="exercises-panel" role="tabpanel" aria-labelledby="exercises-tab">
            <QuizExercise />
          </div>
        )}

        {activeTab === 'downloads' && (
          <div id="downloads-panel" role="tabpanel" aria-labelledby="downloads-tab">
            <ExcelDownloader />
          </div>
        )}
      </div>
    </div>
  )
}

export default Practice
