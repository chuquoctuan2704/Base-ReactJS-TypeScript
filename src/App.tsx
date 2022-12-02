import React, { ReactElement } from 'react'
import { RecoilRoot } from 'recoil'
import { Router } from './features/router'
import { I18nProvider } from './providers/i18n-provider'

export function App (): ReactElement {
  return (
    <RecoilRoot>
      <I18nProvider>
        <Router />
      </I18nProvider>
    </RecoilRoot>
  )
}
