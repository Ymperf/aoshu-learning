interface Props {
  current: number
  total: number
  children: React.ReactNode
}

export default function QuestionShell({ current, total, children }: Props) {
  const progress = ((current) / total) * 100

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between text-sm text-gray-500">
        <span>第 {current + 1} 题 / 共 {total} 题</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className="bg-blue-600 h-1.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="bg-white rounded-xl border border-gray-200 p-5">
        {children}
      </div>
    </div>
  )
}
