import React, { useState } from 'react'
import './FormulaSimulator.css'

interface SimulatorInput {
  value: string | number
}

interface FormulaSimulatorProps {
  formula: string
}

const FormulaSimulator: React.FC<FormulaSimulatorProps> = ({ formula }) => {
  const [inputs, setInputs] = useState<SimulatorInput[]>(
    Array(3).fill({ value: '' })
  )
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (index: number, value: string) => {
    const newInputs = [...inputs]
    newInputs[index] = { value }
    setInputs(newInputs)
  }

  const handleEvaluate = () => {
    try {
      setError(null)
      const values = inputs
        .map(input => {
          const num = Number(input.value)
          return isNaN(num) ? 0 : num
        })
        .filter(v => v !== 0 || input.value !== '')

      let calculatedResult: string | number = 0

      switch (formula.toUpperCase()) {
        case 'SUM':
          calculatedResult = values.reduce((a, b) => a + b, 0)
          break
        case 'AVERAGE':
          calculatedResult = values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0
          calculatedResult = Number(calculatedResult.toFixed(2))
          break
        case 'COUNT':
          calculatedResult = inputs.filter(i => i.value !== '' && !isNaN(Number(i.value))).length
          break
        case 'MIN / MAX':
          calculatedResult = values.length > 0 ? `Min: ${Math.min(...values)}, Max: ${Math.max(...values)}` : 0
          break
        default:
          calculatedResult = 'Please try another formula'
      }

      setResult(String(calculatedResult))
    } catch (err) {
      setError('Error calculating formula. Please check your inputs.')
      setResult(null)
    }
  }

  const handleReset = () => {
    setInputs(Array(3).fill({ value: '' }))
    setResult(null)
    setError(null)
  }

  return (
    <div className="simulator">
      <div className="simulator-inputs">
        <h4>Enter Values</h4>
        {inputs.map((input, index) => (
          <input
            key={index}
            type="number"
            placeholder={`Value ${index + 1}`}
            value={input.value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            aria-label={`Input value ${index + 1}`}
          />
        ))}
      </div>

      <div className="simulator-buttons">
        <button onClick={handleEvaluate} className="evaluate-button" aria-label="Evaluate formula">
          Evaluate
        </button>
        <button onClick={handleReset} className="reset-button" aria-label="Reset inputs">
          Reset
        </button>
      </div>

      {error && (
        <div className="simulator-error" role="alert">
          {error}
        </div>
      )}

      {result !== null && (
        <div className="simulator-result">
          <p className="result-label">Result:</p>
          <div className="result-value">{result}</div>
        </div>
      )}
    </div>
  )
}

export default FormulaSimulator
