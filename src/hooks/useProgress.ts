import { useProgressStore } from '../store/progressStore'

export function useProgress(topicId?: string) {
  const { progress, recordSession, getTopicProgress, clearProgress } = useProgressStore()

  const topicProgress = topicId ? getTopicProgress(topicId) : undefined

  const accuracyRate = topicProgress && topicProgress.totalAnswered > 0
    ? Math.round((topicProgress.totalCorrect / topicProgress.totalAnswered) * 100)
    : null

  const practicedIds = new Set(Object.keys(progress))

  return {
    progress,
    topicProgress,
    accuracyRate,
    practicedIds,
    recordSession,
    clearProgress,
  }
}
