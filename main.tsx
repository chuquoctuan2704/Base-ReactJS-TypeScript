import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './src/App'
import './index.css'
import debug from 'debug'

debug.enable('*')
// (để hiển thị debug trong console của trình duyệt. chọn "Verbose" trong "All levels")

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
