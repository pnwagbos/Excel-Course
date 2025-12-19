import React from 'react'
import { Lesson } from '../data/courseData'

interface LessonCardProps {
  lesson: Lesson
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  return (
    <article className="lesson-card">
      <h3>{lesson.title}</h3>
      <p>{lesson.content}</p>
      <code>{lesson.formula}</code>
    </article>
  )
}

export default LessonCard
