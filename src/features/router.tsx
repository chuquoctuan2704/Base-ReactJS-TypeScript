import React, { ReactElement, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Home } from './home/presentation/home'
import { Login } from './login/presentation/login'
import { getLanguageCode } from '../commons/services/local-storage'
import { Layout } from './global/layout/layout'

export function Router (): ReactElement {
  const { i18n, ready } = useTranslation()

  useEffect(() => {
    if (ready) {
      i18n.changeLanguage(getLanguageCode())
    }
  }, [ready])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}
