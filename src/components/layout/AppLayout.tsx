import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const { isSignedIn, user, signOut, login } = useAuth()

  const navItems = [
    { to: '/', label: '首页' },
    { to: '/browse', label: '专题' },
    { to: '/progress', label: '进度' },
  ]

  const displayName = user?.phone
    ? `${user.phone.slice(0, 3)}****${user.phone.slice(-4)}`
    : user?.email ?? user?.name ?? '已登录'

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
          <Link to="/" className="text-lg font-bold text-blue-600">小学奥数</Link>
          <div className="flex items-center gap-1">
            <nav className="flex gap-1">
              {navItems.map(item => (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.to
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="ml-2">
              {isSignedIn
                ? <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">{displayName}</span>
                    <button onClick={signOut} className="text-xs text-gray-400 hover:text-gray-600">退出</button>
                  </div>
                : <button onClick={login}
                    className="px-3 py-1.5 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100">
                    登录
                  </button>
              }
            </div>
          </div>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 py-6">
        {children}
      </main>
    </div>
  )
}
