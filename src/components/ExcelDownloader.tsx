import React from 'react'
import { courseData } from '../data/courseData'
import { generateExcelFile } from '../utils/excelGenerator'
import './ExcelDownloader.css'

const ExcelDownloader: React.FC = () => {
  const handleDownload = (moduleId: string, moduleName: string) => {
    const excelData = generateExcelFile(moduleId)
    const url = URL.createObjectURL(excelData)
    const link = document.createElement('a')
    link.href = url
    link.download = `${moduleName.replace(/\s+/g, '_')}_Practice.xlsx`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="downloader">
      <div className="downloader-intro">
        <h2>Download Practice Files</h2>
        <p>Get Excel files for each module to practice formulas with real data. All files are ready to use in Excel!</p>
      </div>

      <div className="download-files-grid">
        {courseData.map(module => (
          <div key={module.id} className="download-card">
            <div className="card-header">
              <h3>{module.title}</h3>
              <span className="difficulty-badge">{module.difficulty}</span>
            </div>
            <p className="card-description">{module.description}</p>
            <div className="card-info">
              <span className="lesson-count">{module.lessons.length} Lessons</span>
              <span className="file-type">Excel (.xlsx)</span>
            </div>
            <button
              onClick={() => handleDownload(module.id, module.title)}
              className="download-button"
              aria-label={`Download ${module.title} Excel practice file`}
              title={`Download ${module.title} practice file`}
            >
              📥 Download File
            </button>
          </div>
        ))}
      </div>

      <section className="download-guide">
        <h3>How to Use Download Files</h3>
        <ol>
          <li>Download the Excel file for your chosen module</li>
          <li>Open it in Microsoft Excel, Google Sheets, or LibreOffice Calc</li>
          <li>Follow the instructions in each sheet</li>
          <li>Create formulas to complete the exercises</li>
          <li>Check your work against the solutions provided</li>
        </ol>
      </section>

      <section className="download-tips">
        <h3>💡 Pro Tips</h3>
        <ul>
          <li>Start with Basic Functions module if you're new to Excel</li>
          <li>Complete all lessons for a module before downloading the practice file</li>
          <li>Use the formula simulator in lessons to test before trying in Excel</li>
          <li>Try to solve exercises without looking at solutions first</li>
          <li>Experiment! Excel is best learned by doing</li>
        </ul>
      </section>
    </div>
  )
}

export default ExcelDownloader
