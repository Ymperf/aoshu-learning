import { Authing } from '@authing/web'

const authing = new Authing({
  appId: (import.meta as any).env.VITE_AUTHING_APP_ID,
  domain: (import.meta as any).env.VITE_AUTHING_DOMAIN,
  userPoolId: (import.meta as any).env.VITE_AUTHING_USER_POOL_ID,
  redirectUri: (import.meta as any).env.VITE_AUTHING_REDIRECT_URI,
})

export default authing
