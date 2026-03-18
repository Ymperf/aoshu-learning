import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth'
import LoginModal from './LoginModal'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded, refresh } = useAuth()
  const [showLogin, setShowLogin] = useState(false)

  if (!isLoaded) return null

  if (!isSignedIn) return (
    <div className="flex flex-col items-center py-16 gap-4">
      <p className="text-gray-500">请登录后查看学习进度</p>
      <button onClick={() => setShowLogin(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
        立即登录
      </button>
      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSuccess={() => { setShowLogin(false); refresh() }}
        />
      )}
    </div>
  )

  return <>{children}</>
}
