import { useEffect } from 'react'
import { useUser } from '@clerk/react'
import { useProgressStore } from '../store/progressStore'

export function useAuth() {
  const { user, isSignedIn } = useUser()
  const setUserId = useProgressStore(s => s.setUserId)

  useEffect(() => {
    setUserId(isSignedIn && user ? user.id : null)
  }, [isSignedIn, user, setUserId])

  return { user, isSignedIn }
}
