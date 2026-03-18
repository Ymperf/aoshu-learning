import AV from 'leancloud-storage'

AV.init({
  appId: (import.meta as any).env.VITE_LEANCLOUD_APP_ID,
  appKey: (import.meta as any).env.VITE_LEANCLOUD_APP_KEY,
  serverURL: (import.meta as any).env.VITE_LEANCLOUD_SERVER_URL,
})

export default AV
