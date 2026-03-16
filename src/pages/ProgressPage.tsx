import { Link } from 'react-router-dom'
import { TOPICS, GRADE_LABELS, CATEGORY_LABELS } from '../data/curriculum'
import { useProgress } from '../hooks/useProgress'

export default function ProgressPage() {
  const { progress, practicedIds, clearProgress } = useProgress()

  const practicedTopics = TOPICS.filter(t => practicedIds.has(t.id))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">学习进度</h1>
          <p className="text-gray-500 mt-1">已练习 {practicedTopics.length} 个专题</p>
        </div>
        {practicedTopics.length > 0 && (
          <button
            onClick={() => { if (confirm('确定清除所有进度吗？')) clearProgress() }}
            className="text-xs text-gray-400 hover:text-red-500 transition-colors"
          >
            清除记录
          </button>
        )}
      </div>

      {practicedTopics.length === 0 ? (
        <div className="text-center py-16 text-gray-400">
          <p className="text-lg">还没有练习记录</p>
          <Link to="/browse" className="text-blue-600 text-sm mt-2 inline-block">去选择专题</Link>
        </div>
      ) : (
        <div className="space-y-3">
          {practicedTopics.map(topic => {
            const tp = progress[topic.id]
            const accuracy = tp.totalAnswered > 0
              ? Math.round((tp.totalCorrect / tp.totalAnswered) * 100)
              : 0
            const lastDate = new Date(tp.lastPracticed).toLocaleDateString('zh-CN')

            return (
              <div key={topic.id} className="bg-white rounded-xl border border-gray-200 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 shrink-0">
                        {GRADE_LABELS[topic.grade]}
                      </span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-500 shrink-0">
                        {CATEGORY_LABELS[topic.category]}
                      </span>
                      <span className="font-medium text-gray-900 truncate">{topic.title}</span>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>练习 {tp.sessionsCompleted} 次</span>
                      <span>正确率 {accuracy}%</span>
                      <span>最近：{lastDate}</span>
                    </div>
                    {/* 正确率进度条 */}
                    <div className="mt-2 w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full transition-all ${accuracy >= 80 ? 'bg-green-500' : accuracy >= 60 ? 'bg-yellow-400' : 'bg-red-400'}`}
                        style={{ width: `${accuracy}%` }}
                      />
                    </div>
                  </div>
                  <Link
                    to={`/topic/${topic.id}/practice`}
                    className="ml-4 text-sm text-blue-600 hover:text-blue-700 font-medium shrink-0"
                  >
                    再练
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
