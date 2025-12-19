import React, { useState } from 'react'
import './QuizExercise.css'

interface Question {
  id: string
  question: string
  options: string[]
  correct: number
  explanation: string
}

const questions: Question[] = [
  {
    id: 'q1',
    question: 'What does =SUM(A1:A10) do?',
    options: [
      'Counts cells in range A1:A10',
      'Adds all numbers in cells A1 through A10',
      'Finds the average of A1:A10',
      'Multiplies all values in A1:A10'
    ],
    correct: 1,
    explanation: 'SUM adds up all numbers in a range. In this case, it adds A1 + A2 + ... + A10.'
  },
  {
    id: 'q2',
    question: 'What function would you use to count how many cells contain numbers?',
    options: [
      'COUNT',
      'COUNTA',
      'COUNTIF',
      'SUM'
    ],
    correct: 0,
    explanation: 'COUNT counts cells that contain numbers. COUNTA counts non-empty cells, COUNTIF counts based on criteria.'
  },
  {
    id: 'q3',
    question: 'Which formula finds the largest number in a range?',
    options: [
      'LARGEST',
      'HIGH',
      'MAX',
      'TOP'
    ],
    correct: 2,
    explanation: 'MAX returns the largest number in a range. You\'d use =MAX(A1:A10) to find the highest value.'
  },
  {
    id: 'q4',
    question: 'What does IF(A1>100, "High", "Low") return if A1=150?',
    options: [
      '150',
      'High',
      'Low',
      'Error'
    ],
    correct: 1,
    explanation: 'IF tests if A1>100 (which is true since 150>100), so it returns the first value: "High".'
  },
  {
    id: 'q5',
    question: 'Which is a proper VLOOKUP syntax?',
    options: [
      '=VLOOKUP(value, range)',
      '=VLOOKUP(value, range, column, FALSE)',
      '=VLOOKUP(range, value, column)',
      '=VLOOKUP(column, range, value, TRUE)'
    ],
    correct: 1,
    explanation: 'VLOOKUP requires: lookup_value, table_range, column_index, and range_lookup (TRUE or FALSE).'
  }
]

const QuizExercise: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [quizComplete, setQuizComplete] = useState(false)

  const question = questions[currentQuestion]
  const isCorrect = selectedAnswer === question.correct

  const handleAnswer = (optionIndex: number) => {
    setSelectedAnswer(optionIndex)
    setAnswered(true)
    if (optionIndex === question.correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setAnswered(false)
      setSelectedAnswer(null)
    } else {
      setQuizComplete(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setScore(0)
    setAnswered(false)
    setSelectedAnswer(null)
    setQuizComplete(false)
  }

  if (quizComplete) {
    return (
      <div className="quiz-container">
        <div className="quiz-complete">
          <h2>Quiz Complete! 🎉</h2>
          <div className="score-display">
            <p className="score-text">Your Score</p>
            <p className="score-value">{score} / {questions.length}</p>
            <p className="score-percentage">{Math.round((score / questions.length) * 100)}%</p>
          </div>
          <div className="score-feedback">
            {score === questions.length && (
              <p>Perfect score! You\'re an Excel master! 🏆</p>
            )}
            {score >= questions.length * 0.8 && score < questions.length && (
              <p>Great job! You know your Excel functions well! 💪</p>
            )}
            {score >= questions.length * 0.6 && score < questions.length * 0.8 && (
              <p>Good effort! Keep practicing to master these functions. 📚</p>
            )}
            {score < questions.length * 0.6 && (
              <p>Keep learning! Review the modules and try again. You got this! 🚀</p>
            )}
          </div>
          <button onClick={handleRestart} className="restart-button" aria-label="Restart quiz">
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="quiz-container">
      <div className="quiz-progress">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            role="progressbar"
            aria-valuenow={currentQuestion + 1}
            aria-valuemin={1}
            aria-valuemax={questions.length}
          ></div>
        </div>
        <p className="progress-text">Question {currentQuestion + 1} of {questions.length}</p>
      </div>

      <div className="quiz-question">
        <h2>{question.question}</h2>
      </div>

      <div className="quiz-options">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(index)}
            className={`option-button ${
              !answered ? '' :
              selectedAnswer === index && isCorrect ? 'correct' :
              selectedAnswer === index && !isCorrect ? 'incorrect' :
              index === question.correct ? 'correct' : ''
            }`}
            disabled={answered}
            aria-label={`Option ${index + 1}: ${option}`}
            role="radio"
            aria-checked={selectedAnswer === index}
          >
            <span className="option-text">{option}</span>
            {answered && (
              <span className="option-feedback">
                {index === question.correct && '✓'}
                {selectedAnswer === index && !isCorrect && '✗'}
              </span>
            )}
          </button>
        ))}
      </div>

      {answered && (
        <div className={`explanation ${isCorrect ? 'correct' : 'incorrect'}`} role="alert">
          <strong>{isCorrect ? '✓ Correct!' : '✗ Incorrect'}</strong>
          <p>{question.explanation}</p>
        </div>
      )}

      {answered && (
        <button onClick={handleNext} className="next-button" aria-label="Next question">
          {currentQuestion === questions.length - 1 ? 'See Results' : 'Next Question'} →
        </button>
      )}
    </div>
  )
}

export default QuizExercise
