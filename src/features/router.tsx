import React, { ReactElement } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import { Home } from './home/presentation/home'
import { Login } from './login/presentation/login'

export function Router(): ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}