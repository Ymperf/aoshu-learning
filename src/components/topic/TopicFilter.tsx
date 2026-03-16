import type { Grade, Category } from '../../types'
import { CATEGORY_LABELS, GRADE_LABELS } from '../../data/curriculum'

interface Props {
  selectedGrades: Grade[]
  selectedCategories: Category[]
  onGradeToggle: (grade: Grade) => void
  onCategoryToggle: (category: Category) => void
}

const GRADES: Grade[] = [1, 2, 3, 4, 5, 6]
const CATEGORIES = Object.keys(CATEGORY_LABELS) as Category[]

export default function TopicFilter({ selectedGrades, selectedCategories, onGradeToggle, onCategoryToggle }: Props) {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2">年级</p>
        <div className="flex flex-wrap gap-2">
          {GRADES.map(grade => (
            <button
              key={grade}
              onClick={() => onGradeToggle(grade)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedGrades.includes(grade)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {GRADE_LABELS[grade]}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-xs font-medium text-gray-500 mb-2">类别</p>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => onCategoryToggle(cat)}
              className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                selectedCategories.includes(cat)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {CATEGORY_LABELS[cat]}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
