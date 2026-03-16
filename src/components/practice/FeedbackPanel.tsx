interface Props {
  correct: boolean
  explanation: string
  onNext: () => void
  isLast: boolean
}

export default function FeedbackPanel({ correct, explanation, onNext, isLast }: Props) {
  return (
    <div className={`rounded-xl p-4 border-2 ${correct ? 'bg-green-50 border-green-400' : 'bg-red-50 border-red-400'}`}>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-lg">{correct ? '✓' : '✗'}</span>
        <span className={`font-semibold text-sm ${correct ? 'text-green-700' : 'text-red-700'}`}>
          {correct ? '回答正确！' : '回答错误'}
        </span>
      </div>
      <p className="text-sm text-gray-700 leading-relaxed">{explanation}</p>
      <button
        onClick={onNext}
        className="mt-3 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors"
      >
        {isLast ? '查看结果' : '下一题'}
      </button>
    </div>
  )
}
