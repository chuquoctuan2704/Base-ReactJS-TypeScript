import React from 'react'
import ReactDOM from 'react-dom/client'
import '../index.css'
import debug from 'debug'
import { RecoilRoot } from 'recoil'
import { I18nProvider } from './providers/i18n-provider'
import { RouterApp } from './features/router'

if (import.meta.env.DEV) {
  debug.enable('*')
} else {
  debug.disable()
}
// (để hiển thị debug trong console của trình duyệt. chọn "Verbose" trong "All levels")

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
    <RecoilRoot>
      <I18nProvider>
        <RouterApp />
      </I18nProvider>
    </RecoilRoot>
  // </React.StrictMode>
)
