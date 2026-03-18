import { useAuth } from '../../hooks/useAuth'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded, login } = useAuth()

  if (!isLoaded) return null

  if (!isSignedIn) return (
    <div className="flex flex-col items-center py-16 gap-4">
      <p className="text-gray-500">请登录后查看学习进度</p>
      <button onClick={login}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium">
        立即登录
      </button>
    </div>
  )

  return <>{children}</>
}
