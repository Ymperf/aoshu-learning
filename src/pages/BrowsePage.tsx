import { useState } from 'react'
import type { Grade, Category } from '../types'
import { TOPICS } from '../data/curriculum'
import TopicFilter from '../components/topic/TopicFilter'
import TopicGrid from '../components/topic/TopicGrid'
import { useProgress } from '../hooks/useProgress'

export default function BrowsePage() {
  const [selectedGrades, setSelectedGrades] = useState<Grade[]>([])
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const { practicedIds } = useProgress()

  const toggleGrade = (grade: Grade) => {
    setSelectedGrades(prev =>
      prev.includes(grade) ? prev.filter(g => g !== grade) : [...prev, grade]
    )
  }

  const toggleCategory = (cat: Category) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    )
  }

  const filtered = TOPICS.filter(t => {
    const gradeOk = selectedGrades.length === 0 || selectedGrades.includes(t.grade)
    const catOk = selectedCategories.length === 0 || selectedCategories.includes(t.category)
    return gradeOk && catOk
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">全部专题</h1>
        <p className="text-gray-500 mt-1">共 {filtered.length} 个专题</p>
      </div>
      <TopicFilter
        selectedGrades={selectedGrades}
        selectedCategories={selectedCategories}
        onGradeToggle={toggleGrade}
        onCategoryToggle={toggleCategory}
      />
      <TopicGrid topics={filtered} practicedIds={practicedIds} />
    </div>
  )
}
