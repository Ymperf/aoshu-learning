import type { Question, TopicContent } from '../types'

// 从 AI 返回的文本中提取 JSON（处理可能的前后缀文字）
function extractJSON(text: string): string {
  // 尝试找到 JSON 数组或对象的起始位置
  const arrayStart = text.indexOf('[')
  const objectStart = text.indexOf('{')

  if (arrayStart === -1 && objectStart === -1) {
    throw new Error('No JSON found in response')
  }

  // 判断是数组还是对象
  const isArray = arrayStart !== -1 && (objectStart === -1 || arrayStart < objectStart)
  const start = isArray ? arrayStart : objectStart
  const endChar = isArray ? ']' : '}'

  // 找到对应的结束位置（处理嵌套）
  let depth = 0
  let end = -1
  for (let i = start; i < text.length; i++) {
    const char = text[i]
    if (char === (isArray ? '[' : '{')) depth++
    else if (char === endChar) {
      depth--
      if (depth === 0) { end = i; break }
    }
  }

  if (end === -1) throw new Error('Malformed JSON in response')
  return text.slice(start, end + 1)
}

export function parseTopicContent(raw: string, topicId: string): TopicContent {
  try {
    const json = extractJSON(raw)
    const data = JSON.parse(json)

    if (!data.explanation || !Array.isArray(data.examples)) {
      throw new Error('Invalid content structure')
    }

    return {
      topicId,
      explanation: String(data.explanation),
      examples: data.examples.map((ex: Record<string, unknown>) => ({
        problem: String(ex.problem ?? ''),
        solution: String(ex.solution ?? ''),
      })),
    }
  } catch (e) {
    throw new Error(`Failed to parse topic content: ${e}`)
  }
}

export function parseQuestions(raw: string, topicId: string): Question[] {
  try {
    const json = extractJSON(raw)
    const data = JSON.parse(json)

    if (!Array.isArray(data)) throw new Error('Expected array of questions')

    return data.map((q: Record<string, unknown>, index: number) => {
      const base = {
        id: String(q.id ?? `q${index + 1}`),
        topicId,
        difficulty: (q.difficulty as Question['difficulty']) ?? 'medium',
        prompt: String(q.prompt ?? ''),
        explanation: String(q.explanation ?? ''),
      }

      switch (q.type) {
        case 'multiple_choice':
          return {
            ...base,
            type: 'multiple_choice' as const,
            options: Array.isArray(q.options) ? q.options.map(String) : ['A', 'B', 'C', 'D'],
            correctIndex: Number(q.correctIndex ?? 0),
          }
        case 'fill_blank':
          return {
            ...base,
            type: 'fill_blank' as const,
            correctAnswer: String(q.correctAnswer ?? ''),
            acceptedAnswers: Array.isArray(q.acceptedAnswers)
              ? q.acceptedAnswers.map(String)
              : [],
          }
        case 'step_solution':
          return {
            ...base,
            type: 'step_solution' as const,
            steps: Array.isArray(q.steps) ? q.steps.map(String) : [],
          }
        case 'true_false':
          return {
            ...base,
            type: 'true_false' as const,
            isTrue: Boolean(q.isTrue),
          }
        default:
          // 未知题型降级为判断题
          return {
            ...base,
            type: 'true_false' as const,
            isTrue: true,
          }
      }
    })
  } catch (e) {
    throw new Error(`Failed to parse questions: ${e}`)
  }
}
