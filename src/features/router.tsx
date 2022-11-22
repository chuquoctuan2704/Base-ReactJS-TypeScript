import React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './home/presentation/home'
import { Login } from './login/presentation/login'
import { Header } from './global/header/header'
import { Footer } from './global/footer/footer'

export function Router(): ReactElement {
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