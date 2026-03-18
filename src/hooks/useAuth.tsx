import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import authing from '../lib/authing'
import { useProgressStore } from '../store/progressStore'

interface UserInfo {
  sub: string
  name?: string
  phone?: string
  email?: string
}

interface AuthContextType {
  user: UserInfo | null
  isSignedIn: boolean
  isLoaded: boolean
  login: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isSignedIn: false,
  isLoaded: false,
  login: () => {},
  signOut: () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserInfo | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const setUserId = useProgressStore(s => s.setUserId)

  useEffect(() => {
    const init = async () => {
      try {
        if (authing.isRedirectCallback()) {
          await authing.handleRedirectCallback()
        }
        const state = await authing.getLoginState()
        if (state?.accessToken) {
          const info = await authing.getUserInfo({ accessToken: state.accessToken })
          const userInfo = info as unknown as UserInfo
          setUser(userInfo)
          setUserId(userInfo.sub ?? null)
        }
      } catch {
        // 未登录，忽略
      } finally {
        setIsLoaded(true)
      }
    }
    init()
  }, [])

  const login = () => {
    authing.loginWithPopup()
  }

  const signOut = () => {
    authing.logoutWithRedirect()
    setUser(null)
    setUserId(null)
  }

  return (
    <AuthContext.Provider value={{ user, isSignedIn: !!user, isLoaded, login, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
