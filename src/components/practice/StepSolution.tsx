import { useState } from 'react'
import type { StepSolutionQuestion } from '../../types'

interface Props {
  question: StepSolutionQuestion
}

export default function StepSolution({ question }: Props) {
  const [revealed, setRevealed] = useState(0)

  return (
    <div className="space-y-4">
      <p className="text-gray-900 leading-relaxed">{question.prompt}</p>
      <div className="space-y-2">
        {question.steps.slice(0, revealed).map((step, i) => (
          <div key={i} className="flex gap-3 bg-blue-50 rounded-lg px-4 py-3">
            <span className="text-blue-600 font-semibold text-sm shrink-0">第{i + 1}步</span>
            <p className="text-sm text-gray-800">{step}</p>
          </div>
        ))}
      </div>
      {revealed < question.steps.length ? (
        <button
          onClick={() => setRevealed(r => r + 1)}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium"
        >
          {revealed === 0 ? '查看解题步骤' : '下一步'}
        </button>
      ) : (
        <p className="text-sm text-green-600 font-medium">解题完成！</p>
      )}
    </div>
  )
}
