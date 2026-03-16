import { Link } from 'react-router-dom'
import type { Topic } from '../../types'
import { CATEGORY_LABELS, GRADE_LABELS } from '../../data/curriculum'

interface Props {
  topic: Topic
  practiced?: boolean
}

export default function TopicCard({ topic, practiced }: Props) {
  return (
    <Link
      to={`/topic/${topic.id}`}
      className="block bg-white rounded-xl border border-gray-200 p-4 hover:border-blue-300 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-2 mb-2">
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
          {GRADE_LABELS[topic.grade]}
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
            {CATEGORY_LABELS[topic.category]}
          </span>
          {practiced && (
            <span className="w-2 h-2 rounded-full bg-green-400" title="已练习" />
          )}
        </div>
      </div>
      <h3 className="font-semibold text-gray-900 mb-1">{topic.title}</h3>
      <p className="text-sm text-gray-500 line-clamp-2">{topic.description}</p>
    </Link>
  )
}
