import type { TrueFalseQuestion } from '../../types'

interface Props {
  question: TrueFalseQuestion
  selected: boolean | null
  submitted: boolean
  onSelect: (value: boolean) => void
}

export default function TrueFalse({ question, selected, submitted, onSelect }: Props) {
  const options: { label: string; value: boolean }[] = [
    { label: '✓ 正确', value: true },
    { label: '✗ 错误', value: false },
  ]

  return (
    <div className="space-y-4">
      <p className="text-gray-900 leading-relaxed">{question.prompt}</p>
      <div className="flex gap-3">
        {options.map(opt => {
          let style = 'border-gray-200 bg-white text-gray-700 hover:border-blue-300'
          if (submitted) {
            if (opt.value === question.isTrue) style = 'border-green-500 bg-green-50 text-green-800'
            else if (opt.value === selected) style = 'border-red-400 bg-red-50 text-red-700'
            else style = 'border-gray-200 bg-white text-gray-400'
          } else if (opt.value === selected) {
            style = 'border-blue-500 bg-blue-50 text-blue-800'
          }

          return (
            <button
              key={String(opt.value)}
              disabled={submitted}
              onClick={() => onSelect(opt.value)}
              className={`flex-1 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${style}`}
            >
              {opt.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}
