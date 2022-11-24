import React, { ReactElement, useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Home } from './home/presentation/home'
import { Login } from './login/presentation/login'
import { Header } from './global/header/header'
import { Footer } from './global/footer/footer'
import { getLanguageCode } from '../commons/services/local-storage'
import { debug } from '../commons/common-utils'
import { useRecoilValue } from 'recoil'
import { tokenSelector } from '../commons/recoil/global-recoil'
import { Layout } from './global/layout/layout'

export let token = ''

export function Router (): ReactElement {
  const { i18n, ready } = useTranslation()
  const tokenFromLocal = useRecoilValue(tokenSelector)

  useEffect(() => {
  token = tokenFromLocal
    if (token !== 'a') {
      debug('=== Logined', token)
    }
    if (ready) {
      getLanguageCode().then(async (result) => await i18n.changeLanguage(result))
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
