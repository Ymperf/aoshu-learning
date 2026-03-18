import { useState } from 'react'
import type { WorkedExample } from '../../types'
import MarkdownContent from '../ui/MarkdownContent'
import SpeechButton from '../ui/SpeechButton'

interface Props {
  example: WorkedExample
  index: number
}

export default function ExampleProblem({ example, index }: Props) {
  const [showSolution, setShowSolution] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <div className="bg-gray-50 px-4 py-3">
        <div className="flex items-center justify-between mb-1">
          <p className="text-sm font-medium text-gray-500">例题 {index + 1}</p>
          <SpeechButton text={example.problem + ' ' + example.solution} />
        </div>
        <MarkdownContent content={example.problem} />
      </div>
      <div className="px-4 py-3">
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          {showSolution ? '收起解析' : '查看解析'}
        </button>
        {showSolution && (
          <div className="mt-3">
            <MarkdownContent content={example.solution} className="text-sm" />
          </div>
        )}
      </div>
    </div>
  )
}
