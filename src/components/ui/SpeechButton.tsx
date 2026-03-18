import { useSpeech } from '../../hooks/useSpeech'

interface Props {
  text: string
  className?: string
}

export default function SpeechButton({ text, className = '' }: Props) {
  const { speak, isSpeaking, isSupported } = useSpeech()

  // 如果浏览器不支持，不显示按钮
  if (!isSupported) return null

  return (
    <button
      onClick={() => speak(text)}
      className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
        isSpeaking
          ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      } ${className}`}
      title={isSpeaking ? '停止朗读' : '播放朗读'}
    >
      <span className="text-base">{isSpeaking ? '⏸' : '🔊'}</span>
      <span>{isSpeaking ? '停止' : '朗读'}</span>
    </button>
  )
}
