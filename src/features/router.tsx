import React, { ReactElement, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { RouterList } from './router-list'
import { Home } from './home/home-view'
import { Login } from './login/login-view'
import { getLanguageCode } from '../commons/services/local-storage'
import { AlertProvider } from '~/providers/alert-provider'
import { LayoutAuth } from './global/components/layout/layout-auth'
import { LayoutHome } from './global/components/layout/layout-home'
import { ComponentView } from './global/list-view/component-view'
import { LayoutComponent } from './global/components/layout/layout-components'
import { NavigateProvider } from '~/providers/navigate-provider'
import { ButtonView } from './global/list-view/button-view'
import { CheckboxView } from './global/list-view/checkbox-view'
import { SelectView } from './global/list-view/select-view'
import { SlateView } from './global/list-view/slate-view'
import { ColorView } from './global/list-view/color-view'

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
        <NavigateProvider>
          <Routes>
            {/* Demo Component */}
            <Route path={RouterList.COMPONENT} element={<LayoutComponent />}>
              <Route index element={<ComponentView />} />
              <Route path={RouterList.COLOR} element={<ColorView />} />
              <Route path={RouterList.BUTTON} element={<ButtonView />} />
              <Route path={RouterList.CHECK_BOX} element={<CheckboxView />} />
              <Route path={RouterList.SELECT} element={<SelectView />} />
              <Route path={RouterList.SLATE_EDITOR} element={<SlateView />} />
            </Route>
            {/* Auth */}
            <Route element={<LayoutAuth />}>
              <Route path={RouterList.LOGIN} element={<Login />} />
            </Route>
            {/* Home */}
            <Route path={RouterList.HOME} element={<LayoutHome />}>
              <Route index element={<Home />} />
            </Route>
          </Routes>
        </NavigateProvider>
      </AlertProvider>
    </BrowserRouter>
  )
}
