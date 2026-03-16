export type Grade = 1 | 2 | 3 | 4 | 5 | 6

export type Category =
  | 'counting'
  | 'number_theory'
  | 'geometry'
  | 'word_problems'
  | 'sequences'
  | 'logic'
  | 'combinatorics'

export type Difficulty = 'easy' | 'medium' | 'hard'

export type QuestionType = 'multiple_choice' | 'fill_blank' | 'step_solution' | 'true_false'

export interface Topic {
  id: string
  grade: Grade
  category: Category
  title: string
  description: string
}

export interface TopicContent {
  topicId: string
  explanation: string
  examples: WorkedExample[]
}

export interface WorkedExample {
  problem: string
  solution: string
}

export interface MultipleChoiceQuestion {
  id: string
  topicId: string
  type: 'multiple_choice'
  difficulty: Difficulty
  prompt: string
  explanation: string
  options: string[]
  correctIndex: number
}

export interface FillBlankQuestion {
  id: string
  topicId: string
  type: 'fill_blank'
  difficulty: Difficulty
  prompt: string
  explanation: string
  correctAnswer: string
  acceptedAnswers: string[]
}

export interface StepSolutionQuestion {
  id: string
  topicId: string
  type: 'step_solution'
  difficulty: Difficulty
  prompt: string
  explanation: string
  steps: string[]
}

export interface TrueFalseQuestion {
  id: string
  topicId: string
  type: 'true_false'
  difficulty: Difficulty
  prompt: string
  explanation: string
  isTrue: boolean
}

export type Question =
  | MultipleChoiceQuestion
  | FillBlankQuestion
  | StepSolutionQuestion
  | TrueFalseQuestion

export interface TopicProgress {
  topicId: string
  sessionsCompleted: number
  lastPracticed: string
  totalCorrect: number
  totalAnswered: number
}

export interface UserProgress {
  [topicId: string]: TopicProgress
}

export interface PracticeSession {
  topicId: string
  questions: Question[]
  currentIndex: number
  answers: Record<string, unknown>
  results: Record<string, boolean>
  status: 'loading' | 'active' | 'complete'
}
