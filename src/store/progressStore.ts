import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { UserProgress, TopicProgress } from '../types'

interface ProgressStore {
  userId: string | null
  progress: UserProgress
  setUserId: (id: string | null) => void
  recordSession: (topicId: string, correct: number, total: number) => void
  getTopicProgress: (topicId: string) => TopicProgress | undefined
  clearProgress: () => void
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      userId: null,
      progress: {},

      setUserId: (id) => set({ userId: id }),

      recordSession: (topicId, correct, total) => {
        const existing = get().progress[topicId]
        const updated: TopicProgress = {
          topicId,
          sessionsCompleted: (existing?.sessionsCompleted ?? 0) + 1,
          lastPracticed: new Date().toISOString(),
          totalCorrect: (existing?.totalCorrect ?? 0) + correct,
          totalAnswered: (existing?.totalAnswered ?? 0) + total,
        }
        set(state => ({
          progress: { ...state.progress, [topicId]: updated },
        }))
      },

      getTopicProgress: (topicId) => {
        return get().progress[topicId]
      },

      clearProgress: () => set({ progress: {} }),
    }),
    {
      name: 'aoshu-progress',
    }
  )
)
