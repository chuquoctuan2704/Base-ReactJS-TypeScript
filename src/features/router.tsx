import React, { ReactElement, useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Home } from './home/presentation/home'
import { Login } from './login/presentation/login'
import { Header } from './global/header/header'
import { Footer } from './global/footer/footer'
import { getLanguageCode } from '../commons/services/local-storage'
import { PreferencesContext } from '../providers/preferences-provider'
import { debug } from '../commons/common-utils'

export let token = ''

export function Router (): ReactElement {
  const { i18n, ready } = useTranslation()
  const { preferences } = useContext(PreferencesContext)
  token = preferences.selectedId

  useEffect(() => {
    if (token !== '') {
      debug('=== Logined')
    }
    if (ready) {
      getLanguageCode().then(async (result) => await i18n.changeLanguage(result))
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
