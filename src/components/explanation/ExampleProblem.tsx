import { useState } from 'react'
import type { WorkedExample } from '../../types'

interface Props {
  example: WorkedExample
  index: number
}

export default function ExampleProblem({ example, index }: Props) {
  const [showSolution, setShowSolution] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-gray-50 px-4 py-3">
        <p className="text-sm font-medium text-gray-500 mb-1">例题 {index + 1}</p>
        <p className="text-gray-900">{example.problem}</p>
      </div>
      <div className="px-4 py-3">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          {showSolution ? '收起解析' : '查看解析'}
        </button>
        {showSolution && (
          <div className="mt-3 text-sm text-gray-700 whitespace-pre-line leading-relaxed">
            {example.solution}
          </div>
        )}
      </div>
    </div>
  )
}
