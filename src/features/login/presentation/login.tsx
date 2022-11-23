import React, { type ReactElement } from 'react'
import styled from 'styled-components'
import { loginViewModel } from './login-view-model'

const LoginContainer = styled.div`
  width: 100%;
  background-color: #215d42;
  flex-direction: column;
`
const Button = styled.button`
  color: black;
  height: 40px;
  background-color: white;
`
const TextView = styled.text``

export function Login (): ReactElement {
  const { testText, text, gotohome, call } = loginViewModel()
  return (
    <LoginContainer>
      <Button
        onClick={() => {
          call()
        }}>
        {text}
      </Button>
      <Button
        onClick={() => {
          gotohome()
        }}>
        go to home
      </Button>
      <TextView>{testText}</TextView>
    </LoginContainer>
  )
}
