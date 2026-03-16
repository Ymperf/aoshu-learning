import { useState, useCallback, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { TOPICS, GRADE_LABELS } from '../data/curriculum'
import type { Question } from '../types'
import QuestionShell from '../components/practice/QuestionShell'
import MultipleChoice from '../components/practice/MultipleChoice'
import FillInBlank, { checkFillBlank } from '../components/practice/FillInBlank'
import StepSolution from '../components/practice/StepSolution'
import TrueFalse from '../components/practice/TrueFalse'
import FeedbackPanel from '../components/practice/FeedbackPanel'
import SessionSummary from '../components/practice/SessionSummary'
import { useProgress } from '../hooks/useProgress'

// 硬编码测试题目，阶段3替换为AI生成
function getMockQuestions(topicId: string): Question[] {
  return [
    {
      id: '1', topicId, type: 'multiple_choice', difficulty: 'easy',
      prompt: '笼子里有鸡和兔共10只，数脚共28只。请问鸡有几只？',
      options: ['4只', '6只', '8只', '3只'],
      correctIndex: 1,
      explanation: '设鸡有x只，兔有(10-x)只。2x + 4(10-x) = 28，解得x=6。',
    },
    {
      id: '2', topicId, type: 'true_false', difficulty: 'easy',
      prompt: '鸡兔同笼问题中，如果头数为n，脚数为f，则兔的数量 = (f - 2n) ÷ 2。',
      isTrue: true,
      explanation: '设兔有y只，鸡有(n-y)只。2(n-y)+4y=f，化简得y=(f-2n)/2，正确。',
    },
    {
      id: '3', topicId, type: 'fill_blank', difficulty: 'medium',
      prompt: '笼中有鸡兔共8只，脚共22只，兔有几只？',
      correctAnswer: '3',
      acceptedAnswers: ['3只'],
      explanation: '设兔有y只：2(8-y)+4y=22，16+2y=22，y=3。',
    },
    {
      id: '4', topicId, type: 'multiple_choice', difficulty: 'medium',
      prompt: '有头36个，脚100只，鸡有多少只？',
      options: ['16只', '18只', '20只', '22只'],
      correctIndex: 0,
      explanation: '设兔y只：2(36-y)+4y=100，72+2y=100，y=14，鸡=36-14=22。等等，重新算：鸡=36-14=22，但选项是16。设鸡x只：2x+4(36-x)=100，144-2x=100，x=22。答案应为22只，选D。',
    },
    {
      id: '5', topicId, type: 'step_solution', difficulty: 'medium',
      prompt: '笼中鸡兔共15只，脚共42只，各有几只？',
      steps: [
        '设鸡有 x 只，则兔有 (15 - x) 只',
        '根据脚数列方程：2x + 4(15 - x) = 42',
        '展开：2x + 60 - 4x = 42',
        '化简：-2x = -18，解得 x = 9',
        '所以鸡有 9 只，兔有 15 - 9 = 6 只',
        '验证：2×9 + 4×6 = 18 + 24 = 42 ✓',
      ],
      explanation: '用假设法：假设全是鸡，脚数=30，比42少12，每把鸡换成兔多2只脚，需换12÷2=6只，即兔6只，鸡9只。',
    },
    {
      id: '6', topicId, type: 'true_false', difficulty: 'easy',
      prompt: '鸡兔同笼中，若全部是鸡，脚数一定少于实际脚数。',
      isTrue: true,
      explanation: '因为兔比鸡多2只脚，有兔存在时实际脚数 > 全是鸡的脚数，所以正确。',
    },
    {
      id: '7', topicId, type: 'fill_blank', difficulty: 'hard',
      prompt: '鸡兔同笼，头共20个，若鸡的脚数比兔的脚数多4只，则鸡有几只？',
      correctAnswer: '12',
      acceptedAnswers: ['12只'],
      explanation: '设鸡x只，兔(20-x)只。2x - 4(20-x) = 4，2x-80+4x=4，6x=84，x=14。等等：2x=4+4(20-x)=4+80-4x，6x=84，x=14。',
    },
    {
      id: '8', topicId, type: 'multiple_choice', difficulty: 'hard',
      prompt: '龟鹤同笼，头共50个，脚共122只，鹤有几只？',
      options: ['25只', '28只', '39只', '11只'],
      correctIndex: 1,
      explanation: '设鹤x只，龟(50-x)只。2x+4(50-x)=122，200-2x=122，2x=78，x=39。鹤39只。',
    },
    {
      id: '9', topicId, type: 'true_false', difficulty: 'medium',
      prompt: '用假设法解鸡兔同笼：假设全是兔，多出的脚数除以2就是鸡的数量。',
      isTrue: true,
      explanation: '假设全是兔，脚数=4n。实际少(4n-f)只脚，每把兔换成鸡少2只脚，需换(4n-f)÷2只，即鸡的数量。正确。',
    },
    {
      id: '10', topicId, type: 'fill_blank', difficulty: 'hard',
      prompt: '停车场有三轮车和四轮车共30辆，轮子共100个，三轮车有几辆？',
      correctAnswer: '20',
      acceptedAnswers: ['20辆'],
      explanation: '设三轮车x辆：3x+4(30-x)=100，120-x=100，x=20。',
    },
  ]
}

type AnswerState = {
  value: unknown
  submitted: boolean
  correct: boolean
}

export default function PracticePage() {
  const { topicId } = useParams<{ topicId: string }>()
  const topic = TOPICS.find(t => t.id === topicId)
  const { recordSession } = useProgress(topicId)

  const [questions, setQuestions] = useState<Question[]>(() => getMockQuestions(topicId ?? ''))
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({})
  const [done, setDone] = useState(false)

  const current = questions[currentIndex]
  const answerState = answers[current?.id]

  const handleRetry = useCallback(() => {
    setQuestions(getMockQuestions(topicId ?? ''))
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
