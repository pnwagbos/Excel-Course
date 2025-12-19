import * as XLSX from 'xlsx'
import { courseData } from '../data/courseData'

export function generateExcelFile(moduleId: string): Blob {
  const module = courseData.find(m => m.id === moduleId)
  if (!module) {
    throw new Error(`Module ${moduleId} not found`)
  }

  const wb = XLSX.utils.book_new()

  // Instructions sheet
  const instructionsData = [
    ['Excel Function Practice - ' + module.title],
    [],
    ['Welcome!'],
    ['This file contains practice exercises for: ' + module.title],
    [],
    ['Instructions:'],
    ['1. Read the exercise description in each sheet'],
    ['2. Use the data provided to create formulas'],
    ['3. Check the Solutions sheet for answers'],
    [],
    ['Difficulty Level: ' + module.difficulty],
    ['Total Lessons: ' + module.lessons.length]
  ]
  const instructionsWs = XLSX.utils.aoa_to_sheet(instructionsData)
  XLSX.utils.book_append_sheet(wb, instructionsWs, 'Instructions')

  // Create a sheet for each lesson
  module.lessons.forEach((lesson, index) => {
    const sheetData: (string | number)[][] = []

    // Header
    sheetData.push([lesson.title])
    sheetData.push([])

    // Formula info
    sheetData.push(['Formula:', lesson.formula])
    sheetData.push(['Syntax:', lesson.syntax])
    sheetData.push([])

    // Description
    sheetData.push(['Exercise:'])
    sheetData.push([lesson.content])
    sheetData.push([])

    // Sample data
    sheetData.push(['Sample Data:'])
    sheetData.push(['Value 1', 'Value 2', 'Value 3', 'Your Formula'])

    // Generate sample data based on formula type
    if (lesson.formula === 'SUM') {
      sheetData.push([45, 32, 88, '=SUM(A9:C9)'])
      sheetData.push([100, 200, 300, '=SUM(A10:C10)'])
      sheetData.push([25, 75, 50, '=SUM(A11:C11)'])
    } else if (lesson.formula === 'AVERAGE') {
      sheetData.push([90, 85, 92, '=AVERAGE(A9:C9)'])
      sheetData.push([70, 80, 75, '=AVERAGE(A10:C10)'])
      sheetData.push([100, 95, 98, '=AVERAGE(A11:C11)'])
    } else if (lesson.formula === 'COUNT') {
      sheetData.push([1, 2, 3, '=COUNT(A9:C9)'])
      sheetData.push([10, '', 20, '=COUNT(A10:C10)'])
      sheetData.push([5, 6, '', '=COUNT(A11:C11)'])
    } else if (lesson.formula === 'MIN / MAX') {
      sheetData.push([10, 5, 20, '=MIN(A9:C9)'])
      sheetData.push([50, 25, 75, '=MAX(A10:C10)'])
      sheetData.push([8, 3, 12, '=MIN(A11:C11) and =MAX(A11:C11)'])
    } else if (lesson.formula === 'CONCATENATE / CONCAT') {
      sheetData.push(['John', 'Doe', '', '=CONCATENATE(A9," ",B9)'])
      sheetData.push(['Jane', 'Smith', '', '=CONCAT(A10," ",B10)'])
    } else if (lesson.formula === 'LEN') {
      sheetData.push(['Hello', '', '', '=LEN(A9)'])
      sheetData.push(['Excel', '', '', '=LEN(A10)'])
    } else if (lesson.formula === 'UPPER / LOWER / PROPER') {
      sheetData.push(['hello', '', '', '=UPPER(A9)'])
      sheetData.push(['WORLD', '', '', '=LOWER(A10)'])
      sheetData.push(['john doe', '', '', '=PROPER(A11)'])
    } else if (lesson.formula === 'TRIM') {
      sheetData.push(['  spaces  ', '', '', '=TRIM(A9)'])
      sheetData.push(['  text  ', '', '', '=TRIM(A10)'])
    } else if (lesson.formula === 'IF') {
      sheetData.push([85, '', '', '=IF(A9>80,"Pass","Fail")'])
      sheetData.push([65, '', '', '=IF(A10>80,"Pass","Fail")'])
    } else if (lesson.formula === 'VLOOKUP') {
      sheetData.push(['Create a lookup table and use VLOOKUP to find values'])
    } else {
      sheetData.push([100, 200, 300, 'Enter your formula here'])
      sheetData.push([50, 75, 25, 'Enter your formula here'])
    }

    sheetData.push([])
    sheetData.push(['Common Mistakes to Avoid:'])
    lesson.commonMistakes.forEach(mistake => {
      sheetData.push(['• ' + mistake])
    })

    const ws = XLSX.utils.aoa_to_sheet(sheetData)
    ws['!cols'] = [{ wch: 25 }, { wch: 25 }, { wch: 25 }, { wch: 30 }]
    XLSX.utils.book_append_sheet(wb, ws, `Lesson ${index + 1}: ${lesson.title.slice(0, 20)}`)
  })

  // Solutions sheet
  const solutionsData = [
    ['Solutions and Examples'],
    [],
    ['Function:', module.lessons[0].formula],
    ['Description:', module.lessons[0].content],
    [],
    ['Example Formulas:'],
  ]

  module.lessons.forEach((lesson) => {
    solutionsData.push([])
    solutionsData.push([lesson.title])
    solutionsData.push(['Formula:', lesson.formula])
    solutionsData.push(['Example:', lesson.example])
    solutionsData.push(['Syntax:', lesson.syntax])
  })

  const solutionsWs = XLSX.utils.aoa_to_sheet(solutionsData)
  solutionsWs['!cols'] = [{ wch: 40 }, { wch: 60 }]
  XLSX.utils.book_append_sheet(wb, solutionsWs, 'Solutions')

  // Write to blob
  return new Blob(
    [XLSX.write(wb, { bookType: 'xlsx', type: 'array' })],
    { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
  )
}
