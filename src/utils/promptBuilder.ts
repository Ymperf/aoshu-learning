import type { Topic, Grade } from '../src/types'

// ─── 请求/响应类型 ───────────────────────────────────────────

export interface GenerateContentRequest {
  mode: 'explanation'
  topicId: string
  topicTitle: string
  topicDescription: string
  grade: Grade
}

export interface GenerateQuestionsRequest {
  mode: 'questions'
  topicId: string
  topicTitle: string
  topicDescription: string
  grade: Grade
  count: number
  difficulty: 'easy' | 'medium' | 'hard'
}

export type GenerateRequest = GenerateContentRequest | GenerateQuestionsRequest

// ─── Prompt 构建 ─────────────────────────────────────────────

export function buildExplanationPrompt(topic: Topic): string {
  return `你是一位专业的小学奥数教师，请为以下专题生成详细的知识点讲解内容。

专题信息：
- 标题：${topic.title}
- 年级：小学${topic.grade}年级
- 简介：${topic.description}

请按以下 JSON 格式返回，不要包含任何其他文字：

{
  "explanation": "知识点讲解内容（使用 Markdown 格式，包含标题、方法、公式、口诀等，500-800字）",
  "examples": [
    {
      "problem": "例题1题目（具体的数学题目）",
      "solution": "例题1解析（分步骤详细解析，包含思路、计算过程和验证）"
    },
    {
      "problem": "例题2题目（比例题1稍难）",
      "solution": "例题2解析（分步骤详细解析）"
    }
  ]
}

要求：
1. 内容适合小学${topic.grade}年级学生理解
2. 讲解要有条理，包含核心方法和解题技巧
3. 例题要有代表性，覆盖该专题的典型题型
4. 所有内容使用简体中文`
}

export function buildQuestionsPrompt(
  topic: Topic,
  count: number,
  difficulty: 'easy' | 'medium' | 'hard'
): string {
  const difficultyMap = { easy: '简单', medium: '中等', hard: '困难' }
  const difficultyLabel = difficultyMap[difficulty]

  return `你是一位专业的小学奥数教师，请为以下专题生成${count}道练习题。

专题信息：
- 标题：${topic.title}
- 年级：小学${topic.grade}年级
- 简介：${topic.description}
- 难度：${difficultyLabel}

请生成包含以下4种题型的题目（尽量均匀分配）：
1. multiple_choice（选择题）：4个选项，只有1个正确答案
2. fill_blank（填空题）：填写数字或简短答案
3. true_false（判断题）：判断说法是否正确
4. step_solution（步骤解析题）：展示完整解题步骤

请按以下 JSON 格式返回，不要包含任何其他文字：

[
  {
    "id": "q1",
    "topicId": "${topic.id}",
    "type": "multiple_choice",
    "difficulty": "${difficulty}",
    "prompt": "题目内容",
    "explanation": "答案解析（说明为什么选这个答案）",
    "options": ["选项A", "选项B", "选项C", "选项D"],
    "correctIndex": 0
  },
  {
    "id": "q2",
    "topicId": "${topic.id}",
    "type": "fill_blank",
    "difficulty": "${difficulty}",
    "prompt": "题目内容，答案是___",
    "explanation": "答案解析",
    "correctAnswer": "正确答案",
    "acceptedAnswers": ["其他可接受的写法"]
  },
  {
    "id": "q3",
    "topicId": "${topic.id}",
    "type": "true_false",
    "difficulty": "${difficulty}",
    "prompt": "判断以下说法是否正确：...",
    "explanation": "解析说明",
    "isTrue": true
  },
  {
    "id": "q4",
    "topicId": "${topic.id}",
    "type": "step_solution",
    "difficulty": "${difficulty}",
    "prompt": "题目内容",
    "explanation": "总结说明",
    "steps": ["第一步：...", "第二步：...", "第三步：..."]
  }
]

要求：
1. 题目内容适合小学${topic.grade}年级，难度为${difficultyLabel}
2. 题目要有实际意义，贴近生活场景
3. 解析要详细，帮助学生理解解题思路
4. 所有内容使用简体中文
5. 严格按照 JSON 格式，不要有多余文字`
}
