import type { Question } from '../../types'
import { grade1Questions } from './grade1'
import { grade2Questions } from './grade2'
import { grade3Questions } from './grade3'
import { grade4Questions } from './grade4'
import { grade5Questions } from './grade5'
import { grade6Questions } from './grade6'

export const allQuestions: Record<string, Question[]> = {
  ...grade1Questions,
  ...grade2Questions,
  ...grade3Questions,
  ...grade4Questions,
  ...grade5Questions,
  ...grade6Questions,
}

export function getQuestions(topicId: string): Question[] {
  return allQuestions[topicId] ?? []
}
