import React, { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import './App.css'
import { Router } from './features/router'
import { I18nProvider } from './providers/i18n-provider'

const queryClient = new QueryClient()

export function App(): ReactElement {
  return (
    // Cung cấp đa ngôn ngữ
    <I18nProvider>
      {/* Quan ly va tim nap du lieu, lưu vào bộ nhớ đệm và cập nhật dữ liệu không đồng bộ trong React */}
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </I18nProvider>
  )
}
