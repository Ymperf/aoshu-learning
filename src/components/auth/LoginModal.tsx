import { useState } from 'react'
import AV from '../../lib/leancloud'

interface Props {
  onClose: () => void
  onSuccess: () => void
}

export default function LoginModal({ onClose, onSuccess }: Props) {
  const [phone, setPhone] = useState('')
  const [code, setCode] = useState('')
  const [step, setStep] = useState<'phone' | 'code'>('phone')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const sendCode = async () => {
    if (!/^1[3-9]\d{9}$/.test(phone)) {
      setError('请输入正确的手机号')
      return
    }
    setLoading(true)
    setError('')
    try {
      await AV.Cloud.requestSmsCode(phone)
      setStep('code')
    } catch {
      setError('发送失败，请稍后重试')
    } finally {
      setLoading(false)
    }
  }

  const verify = async () => {
    if (code.length !== 6) { setError('请输入6位验证码'); return }
    setLoading(true)
    setError('')
    try {
      await AV.User.signUpOrlogInWithMobilePhone(phone, code)
      onSuccess()
    } catch {
      setError('验证码错误或已过期')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-2xl p-6 w-80 space-y-4" onClick={e => e.stopPropagation()}>
        <h2 className="text-lg font-semibold text-gray-900">登录 / 注册</h2>
        {step === 'phone' ? (
          <>
            <input
              type="tel" placeholder="请输入手机号" value={phone}
              onChange={e => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button onClick={sendCode} disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium disabled:opacity-50">
              {loading ? '发送中...' : '获取验证码'}
            </button>
          </>
        ) : (
          <>
            <p className="text-sm text-gray-500">{phone} <button onClick={() => setStep('phone')} className="text-blue-600">修改</button></p>
            <input
              type="text" placeholder="请输入6位验证码" value={code} maxLength={6}
              onChange={e => setCode(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-xs text-red-500">{error}</p>}
            <button onClick={verify} disabled={loading}
              className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm font-medium disabled:opacity-50">
              {loading ? '验证中...' : '登录'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
