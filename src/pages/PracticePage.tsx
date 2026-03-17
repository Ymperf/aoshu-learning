import { useState, useCallback, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { TOPICS, GRADE_LABELS } from '../data/curriculum'
import { getQuestions } from '../data/questions'
import type { Question } from '../types'
import QuestionShell from '../components/practice/QuestionShell'
import MultipleChoice from '../components/practice/MultipleChoice'
import FillInBlank, { checkFillBlank } from '../components/practice/FillInBlank'
import StepSolution from '../components/practice/StepSolution'
import TrueFalse from '../components/practice/TrueFalse'
import FeedbackPanel from '../components/practice/FeedbackPanel'
import SessionSummary from '../components/practice/SessionSummary'
import { useProgress } from '../hooks/useProgress'

type AnswerState = {
  value: unknown
  submitted: boolean
  correct: boolean
}

export default function PracticePage() {
  const { topicId } = useParams<{ topicId: string }>()
  const topic = TOPICS.find(t => t.id === topicId)
  const { recordSession } = useProgress(topicId)

  const [questions, setQuestions] = useState<Question[]>(() => getQuestions(topicId ?? ''))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({})
  const [done, setDone] = useState(false)

  const current = questions[currentIndex]
  const answerState = answers[current?.id]

  const handleRetry = useCallback(() => {
    setQuestions(getQuestions(topicId ?? ''))
    setCurrentIndex(0)
    setAnswers({})
    setDone(false)
  }, [topicId])

  // 完成时写入进度
  useEffect(() => {
    if (done && topicId) {
      const correct = Object.values(answers).filter(a => a.correct).length
      const total = questions.length
      recordSession(topicId, correct, total)
    }
  }, [done])

  const submitAnswer = (value: unknown, correct: boolean) => {
    setAnswers(prev => ({ ...prev, [current.id]: { value, submitted: true, correct } }))
  }

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      setDone(true)
    } else {
      setCurrentIndex(i => i + 1)
    }
  }

  if (!topic) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500">专题不存在</p>
        <Link to="/browse" className="text-blue-600 text-sm mt-2 inline-block">返回专题列表</Link>
      </div>
    )
  }

  if (done) {
    const correct = Object.values(answers).filter(a => a.correct).length
    return (
      <div className="space-y-4">
        <Link to={`/topic/${topicId}`} className="text-sm text-gray-500 hover:text-gray-700">← {topic.title}</Link>
        <SessionSummary
          topicId={topicId!}
          topicTitle={topic.title}
          correct={correct}
          total={questions.length}
          onRetry={handleRetry}
        />
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Link to={`/topic/${topicId}`} className="text-sm text-gray-500 hover:text-gray-700">← {topic.title}</Link>
        <span className="text-xs text-gray-400">{GRADE_LABELS[topic.grade]}</span>
      </div>

      <QuestionShell current={currentIndex} total={questions.length}>
        {current.type === 'multiple_choice' && (
          <MultipleChoice
            question={current}
            selectedIndex={answerState?.value as number ?? null}
            submitted={!!answerState?.submitted}
            onSelect={i => {
              if (!answerState?.submitted) {
                submitAnswer(i, i === current.correctIndex)
              }
            }}
          />
        )}
        {current.type === 'fill_blank' && (
          <FillInBlank
            question={current}
            submitted={!!answerState?.submitted}
            onSubmit={val => submitAnswer(val, checkFillBlank(current, val))}
          />
        )}
        {current.type === 'step_solution' && (
          <StepSolution question={current} />
        )}
        {current.type === 'true_false' && (
          <TrueFalse
            question={current}
            selected={answerState?.value as boolean ?? null}
            submitted={!!answerState?.submitted}
            onSelect={val => {
              if (!answerState?.submitted) {
                submitAnswer(val, val === current.isTrue)
              }
            }}
          />
        )}
      </QuestionShell>

      {answerState?.submitted && current.type !== 'step_solution' && (
        <FeedbackPanel
          correct={answerState.correct}
          explanation={current.explanation}
          onNext={handleNext}
          isLast={currentIndex + 1 >= questions.length}
        />
      )}

      {current.type === 'step_solution' && (
        <div className="text-right">
          <button
            onClick={handleNext}
            className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
          >
            {currentIndex + 1 >= questions.length ? '查看结果' : '下一题'}
          </button>
        </div>
      )}
    </div>
  )
}
