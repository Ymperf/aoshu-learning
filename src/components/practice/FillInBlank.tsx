import { useState } from 'react'
import type { FillBlankQuestion } from '../../types'

interface Props {
  question: FillBlankQuestion
  submitted: boolean
  onSubmit: (answer: string) => void
}

function normalizeAnswer(s: string): string {
  return s.trim().replace(/\s+/g, '').toLowerCase()
}

export function checkFillBlank(question: FillBlankQuestion, userAnswer: string): boolean {
  const norm = normalizeAnswer(userAnswer)
  const accepted = [question.correctAnswer, ...question.acceptedAnswers].map(normalizeAnswer)
  return accepted.includes(norm)
}

export default function FillInBlank({ question, submitted, onSubmit }: Props) {
  const [value, setValue] = useState('')

  return (
    <div className="space-y-4">
      <p className="text-gray-900 leading-relaxed">{question.prompt}</p>
      <div className="flex gap-3">
        <input
          type="text"
          value={value}
          onChange={e => setValue(e.target.value)}
          disabled={submitted}
          placeholder="输入答案"
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500 disabled:bg-gray-50 disabled:text-gray-500"
          onKeyDown={e => { if (e.key === 'Enter' && !submitted && value.trim()) onSubmit(value) }}
        />
        {!submitted && (
          <button
            onClick={() => { if (value.trim()) onSubmit(value) }}
            disabled={!value.trim()}
            className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-40 transition-colors"
          >
            提交
          </button>
        )}
      </div>
    </div>
  )
}
