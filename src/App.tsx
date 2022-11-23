import React, { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RecoilRoot } from 'recoil'
import { Router } from './features/router'
import { I18nProvider } from './providers/i18n-provider'
import { PreferencesProvider } from './providers/preferences-provider'

const queryClient = new QueryClient()

export function App (): ReactElement {
  return (
    // Quản lý state thay thế Redux
    <RecoilRoot>
      {/* Cung cấp đa ngôn ngữ */}
      <I18nProvider>
        {/* Quan ly va tim nap du lieu, lưu vào bộ nhớ đệm và cập nhật dữ liệu không đồng bộ trong React */}
        <QueryClientProvider client={queryClient}>
          <PreferencesProvider>
            <Router />
          </PreferencesProvider>
        </QueryClientProvider>
      </I18nProvider>
    </RecoilRoot>
  )
}
