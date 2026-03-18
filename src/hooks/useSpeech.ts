import { useState, useEffect, useRef } from 'react'

// 过滤 Markdown 和 HTML 标签，保留纯文字
function stripMarkdown(text: string): string {
  return text
    .replace(/<svg[\s\S]*?<\/svg>/gi, '') // 去除 SVG
    .replace(/<[^>]+>/g, '')              // 去除 HTML 标签
    .replace(/#{1,6}\s/g, '')             // 去除标题
    .replace(/\*\*/g, '')                 // 去除加粗
    .replace(/\*/g, '')                   // 去除斜体
    .replace(/`[^`]+`/g, '')             // 去除代码
    .replace(/>\s/g, '')                  // 去除引用
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 去除链接，保留文字
    .replace(/[-*+]\s/g, '')              // 去除列表符号
    .replace(/\d+\.\s/g, '')              // 去除数字列表
    .trim()
}

export function useSpeech() {
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isSupported, setIsSupported] = useState(false)
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null)

  useEffect(() => {
    // 检查浏览器是否支持 Web Speech API
    setIsSupported('speechSynthesis' in window)

    return () => {
      // 组件卸载时停止朗读
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
    }
  }, [])

  const speak = (text: string) => {
    if (!isSupported) return

    // 如果正在朗读，先停止
    if (isSpeaking) {
      stop()
      return
    }

    // 过滤 Markdown 和 HTML
    const cleanText = stripMarkdown(text)

    if (!cleanText) return

    // 创建语音合成实例
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = 'zh-CN'
    utterance.rate = 0.9  // 语速略慢，适合学习
    utterance.pitch = 1.0
    utterance.volume = 1.0

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    utteranceRef.current = utterance
    window.speechSynthesis.speak(utterance)
  }

  const stop = () => {
    if (!isSupported) return
    window.speechSynthesis.cancel()
    setIsSpeaking(false)
  }

  return {
    speak,
    stop,
    isSpeaking,
    isSupported
  }
}
