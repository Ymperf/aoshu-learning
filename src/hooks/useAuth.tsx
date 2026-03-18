import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import AV from '../lib/leancloud'
import { useProgressStore } from '../store/progressStore'

interface AuthContextType {
  user: AV.User | null
  isSignedIn: boolean
  isLoaded: boolean
  refresh: () => void
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isSignedIn: false,
  isLoaded: false,
  refresh: () => {},
  signOut: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AV.User | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const setUserId = useProgressStore(s => s.setUserId)

  const refresh = () => {
    const current = AV.User.current()
    setUser(current)
    setUserId(current ? current.id ?? null : null)
  }

  useEffect(() => {
    const current = AV.User.current()
    setUser(current)
    setUserId(current ? current.id ?? null : null)
    setIsLoaded(true)
  }, [])

  const signOut = async () => {
    await AV.User.logOut()
    setUser(null)
    setUserId(null)
  }

  return (
    <AuthContext.Provider value={{ user, isSignedIn: !!user, isLoaded, refresh, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
