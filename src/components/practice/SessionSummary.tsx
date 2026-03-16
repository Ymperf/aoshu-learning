import { Link } from 'react-router-dom'

interface Props {
  topicId: string
  topicTitle: string
  correct: number
  total: number
  onRetry: () => void
}

export default function SessionSummary({ topicId, correct, total, onRetry }: Props) {
  const pct = Math.round((correct / total) * 100)
  const emoji = pct >= 80 ? '🎉' : pct >= 60 ? '👍' : '💪'

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-8 text-center space-y-4">
      <div className="text-5xl">{emoji}</div>
      <h2 className="text-xl font-bold text-gray-900">练习完成！</h2>
      <div className="text-4xl font-bold text-blue-600">{correct} / {total}</div>
      <p className="text-gray-500 text-sm">正确率 {pct}%</p>
      <div className="flex gap-3 justify-center pt-2">
        <button
          onClick={onRetry}
          className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors"
        >
          再练一次
        </button>
        <Link
          to={`/topic/${topicId}`}
          className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
        >
          返回学习
        </Link>
        <Link
          to="/progress"
          className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
        >
          查看进度
        </Link>
      </div>
    </div>
  )
}
