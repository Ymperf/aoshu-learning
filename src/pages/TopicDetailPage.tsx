import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { TOPICS, GRADE_LABELS } from '../data/curriculum'
import ExampleProblem from '../components/explanation/ExampleProblem'
import MarkdownContent from '../components/ui/MarkdownContent'
import SpeechButton from '../components/ui/SpeechButton'
import { generateTopicContent } from '../api/claude'
import { useProgress } from '../hooks/useProgress'
import type { TopicContent } from '../types'

export default function TopicDetailPage() {
  const { topicId } = useParams<{ topicId: string }>()
  const [activeTab, setActiveTab] = useState<'learn' | 'practice'>('learn')
  const [content, setContent] = useState<TopicContent | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const topic = TOPICS.find(t => t.id === topicId)
  const { topicProgress, accuracyRate } = useProgress(topicId)

  useEffect(() => {
    if (!topic) return
    setLoading(true)
    setError(null)
    generateTopicContent(topic)
      .then(setContent)
      .catch(() => setError('内容加载失败，请刷新重试'))
      .finally(() => setLoading(false))
  }, [topic?.id])

  if (!topic) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">专题不存在</p>
        <Link to="/browse" className="text-blue-600 text-sm mt-2 inline-block">返回专题列表</Link>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* 头部 */}
      <div>
        <Link to="/browse" className="text-sm text-gray-500 hover:text-gray-700">← 返回专题列表</Link>
        <div className="flex items-center gap-3 mt-2">
          <h1 className="text-2xl font-bold text-gray-900">{topic.title}</h1>
          <span className="text-sm px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">
            {GRADE_LABELS[topic.grade]}
          </span>
        </div>
        <p className="text-gray-500 mt-1">{topic.description}</p>
        {topicProgress && (
          <div className="flex items-center gap-3 mt-2">
            <span className="text-xs text-gray-500">已练习 {topicProgress.sessionsCompleted} 次</span>
            {accuracyRate !== null && (
              <span className="text-xs text-gray-500">正确率 {accuracyRate}%</span>
            )}
          </div>
        )}
      </div>

      {/* Tab 切换 */}
      <div className="flex border-b border-gray-200">
        {(['learn', 'practice'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab === 'learn' ? '学习讲解' : '开始练习'}
          </button>
        ))}
      </div>

      {/* 学习 Tab */}
      {activeTab === 'learn' && (
        <div className="space-y-6">
          {loading && (
            <div className="space-y-3">
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="h-4 bg-gray-200 rounded animate-pulse w-24 mb-4" />
                <div className="space-y-2">
                  <div className="h-3 bg-gray-100 rounded animate-pulse w-full" />
                  <div className="h-3 bg-gray-100 rounded animate-pulse w-5/6" />
                  <div className="h-3 bg-gray-100 rounded animate-pulse w-4/6" />
                </div>
              </div>
            </div>
          )}

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {content && !loading && (
            <>
              <div className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-base font-semibold text-gray-900">知识点讲解</h2>
                  <SpeechButton text={content.explanation} />
                </div>
                <MarkdownContent content={content.explanation} className="text-sm" />
              </div>
              <div className="space-y-3">
                <h2 className="text-base font-semibold text-gray-900">例题解析</h2>
                {content.examples.map((ex, i) => (
                  <ExampleProblem key={i} example={ex} index={i} />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* 练习 Tab */}
      {activeTab === 'practice' && (
        <div className="bg-white rounded-xl border border-gray-200 p-6 text-center space-y-4">
          <div className="text-4xl">✏️</div>
          <h2 className="text-lg font-semibold text-gray-900">准备好了吗？</h2>
          <p className="text-gray-500 text-sm">本次练习共 10 道题，包含选择、填空、判断和解析题。</p>
          {topicProgress && (
            <p className="text-xs text-gray-400">
              上次练习：{new Date(topicProgress.lastPracticed).toLocaleDateString('zh-CN')}
              · 正确率 {accuracyRate}%
            </p>
          )}
          <Link
            to={`/topic/${topic.id}/practice`}
            className="inline-block bg-blue-600 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            {topicProgress ? '再练一次' : '开始练习'}
          </Link>
        </div>
      )}
    </div>
  )
}
