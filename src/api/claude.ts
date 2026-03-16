import type { TopicContent, Topic } from '../types'
import { grade1Contents } from '../data/contents/grade1'
import { grade2Contents } from '../data/contents/grade2'
import { grade3Contents } from '../data/contents/grade3'
import { grade4Contents } from '../data/contents/grade4'
import { grade5Contents } from '../data/contents/grade5'
import { grade6Contents } from '../data/contents/grade6'

const ALL_CONTENTS: Record<string, TopicContent> = {
  ...grade1Contents,
  ...grade2Contents,
  ...grade3Contents,
  ...grade4Contents,
  ...grade5Contents,
  ...grade6Contents,
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export async function generateTopicContent(topic: Topic): Promise<TopicContent> {
  await delay(600)

  if (ALL_CONTENTS[topic.id]) {
    return ALL_CONTENTS[topic.id]
  }

  return {
    topicId: topic.id,
    explanation: `## ${topic.title}\n\n${topic.description}\n\n内容即将上线，敬请期待。`,
    examples: [
      {
        problem: '示例题目',
        solution: '解题步骤',
      },
    ],
  }
}
