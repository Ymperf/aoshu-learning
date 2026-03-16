import type { MultipleChoiceQuestion } from '../../types'

interface Props {
  question: MultipleChoiceQuestion
  selectedIndex: number | null
  submitted: boolean
  onSelect: (index: number) => void
}

export default function MultipleChoice({ question, selectedIndex, submitted, onSelect }: Props) {
  return (
    <div className="space-y-3">
      <p className="text-gray-900 leading-relaxed">{question.prompt}</p>
      <div className="space-y-2">
        {question.options.map((option, i) => {
          let style = 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
          if (submitted) {
            if (i === question.correctIndex) style = 'border-green-500 bg-green-50 text-green-800'
            else if (i === selectedIndex) style = 'border-red-400 bg-red-50 text-red-700'
            else style = 'border-gray-200 bg-white text-gray-400'
          } else if (i === selectedIndex) {
            style = 'border-blue-500 bg-blue-50 text-blue-800'
          }

          return (
            <button
              key={i}
              disabled={submitted}
              onClick={() => onSelect(i)}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 text-sm transition-colors ${style}`}
            >
              <span className="font-medium mr-2">{String.fromCharCode(65 + i)}.</span>
              {option}
            </button>
          )
        })}
      </div>
    </div>
  )
}
