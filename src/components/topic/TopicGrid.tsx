import type { Topic } from '../../types'
import TopicCard from './TopicCard'

interface Props {
  topics: Topic[]
  practicedIds?: Set<string>
}

export default function TopicGrid({ topics, practicedIds }: Props) {
  if (topics.length === 0) {
    return (
      <div className="text-center py-16 text-gray-400">
        <p className="text-lg">没有找到匹配的专题</p>
        <p className="text-sm mt-1">试试调整筛选条件</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {topics.map(topic => (
        <TopicCard
          key={topic.id}
          topic={topic}
          practiced={practicedIds?.has(topic.id)}
        />
      ))}
    </div>
  )
}
