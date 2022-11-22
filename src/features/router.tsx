import React, { ReactElement, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home/presentation/home'
import { Login } from './login/presentation/login'
import { Header } from './global/header/header'
import { Footer } from './global/footer/footer'
import { useTranslation } from 'react-i18next'
import { getLanguageCode } from '../commons/services/local-storage'

export function Router(): ReactElement {
  const { i18n, ready } = useTranslation()
  useEffect(() => {
    if (ready) {
      getLanguageCode().then(
        (result) => i18n.changeLanguage(result)
      )
    }
  }, [ready])

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}