import { useUser, SignIn } from '@clerk/react'

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isSignedIn, isLoaded } = useUser()

  if (!isLoaded) return null

  if (!isSignedIn) return (
    <div className="flex justify-center py-16">
      <SignIn routing="hash" />
    </div>
  )

  return <>{children}</>
}
