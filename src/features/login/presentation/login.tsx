import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { LoginViewModel } from './login-view-model'

const Button = styled.button`
    color: black;
    width: 100px;
    height: 40px;
    background-color: white;
`

export function Login(): ReactElement {
  const { gotohome } = LoginViewModel()
  return (
    <Button onClick={()=>gotohome()}>
        Login
    </Button>
  )
}