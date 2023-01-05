import React, { ReactElement, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { RouterList } from './router-list'
import { LayoutHome } from './global/layout/layout-home'
import { LayoutAuth } from './global/layout/layout-auth'
import { Home } from './home/home-view'
import { Login } from './login/login-view'
import { getLanguageCode } from '../commons/services/local-storage'
import { AlertProvider } from '~/providers/alert-provider'

export function RouterApp(): ReactElement {
  const { i18n, ready } = useTranslation()

  useEffect(() => {
    if (ready) {
      i18n.changeLanguage(getLanguageCode())
    }
  }, [ready])

  return (
    <BrowserRouter>
      <AlertProvider>
        <Routes>
          {/* Auth */}
          <Route element={<LayoutAuth />}>
            <Route path={RouterList.LOGIN} element={<Login />} />
          </Route>
          {/* Home */}
          <Route path={RouterList.HOME} element={<LayoutHome />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </AlertProvider>
    </BrowserRouter>
  )
}
