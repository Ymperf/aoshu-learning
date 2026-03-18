import { Link, useLocation } from 'react-router-dom'
import { UserButton, SignInButton, useUser } from '@clerk/react'
import { useAuth } from '../../hooks/useAuth'

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  useAuth()
  const { isSignedIn } = useUser()

  const navItems = [
    { to: '/', label: '首页' },
    { to: '/browse', label: '专题' },
    { to: '/progress', label: '进度' },
  ]

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
                ? <UserButton />
                : <SignInButton mode="modal">
                    <button className="px-3 py-1.5 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-100">登录</button>
                  </SignInButton>
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
