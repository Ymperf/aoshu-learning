import { Link } from 'react-router-dom'
import { TOPICS, GRADE_LABELS } from '../data/curriculum'
import type { Grade } from '../types'

const GRADES: Grade[] = [1, 2, 3, 4, 5, 6]

const GRADE_COLORS: Record<number, string> = {
  1: 'bg-pink-50 border-pink-200 text-pink-700',
  2: 'bg-orange-50 border-orange-200 text-orange-700',
  3: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  4: 'bg-green-50 border-green-200 text-green-700',
  5: 'bg-blue-50 border-blue-200 text-blue-700',
  6: 'bg-purple-50 border-purple-200 text-purple-700',
}

export default function HomePage() {
  return (
    <div className="space-y-8">
      <div className="text-center py-6">
        <h1 className="text-3xl font-bold text-gray-900">小学奥数学习</h1>
        <p className="text-gray-500 mt-2">按年级选择专题，学习讲解后完成练习</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {GRADES.map(grade => {
          const count = TOPICS.filter(t => t.grade === grade).length
          return (
            <Link
              key={grade}
              to={`/browse?grade=${grade}`}
              className={`rounded-xl border-2 p-5 text-center hover:shadow-md transition-all ${GRADE_COLORS[grade]}`}
            >
              <div className="text-2xl font-bold mb-1">{grade}</div>
              <div className="font-semibold">{GRADE_LABELS[grade]}</div>
              <div className="text-xs mt-1 opacity-70">{count} 个专题</div>
            </Link>
          )
        })}
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-semibold text-gray-900">推荐专题</h2>
          <Link to="/browse" className="text-sm text-blue-600 hover:text-blue-700">全部 →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {TOPICS.filter(t => ['g3-chickens-rabbits', 'g4-travel', 'g5-combinatorics', 'g6-ratio'].includes(t.id)).map(topic => (
            <Link
              key={topic.id}
              to={`/topic/${topic.id}`}
              className="bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">
                  {GRADE_LABELS[topic.grade]}
                </span>
              </div>
              <p className="font-semibold text-gray-900">{topic.title}</p>
              <p className="text-sm text-gray-500 mt-0.5 line-clamp-1">{topic.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
