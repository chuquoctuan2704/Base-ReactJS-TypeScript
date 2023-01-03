import React, { useEffect, type ReactElement } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { LoginViewModel } from './login-view-model'
import Debug from 'debug'

const debug = Debug('LoginView:')

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
const TextView = styled.div``

export function Login(): ReactElement {
  const { testText, text, gotohome, call } = LoginViewModel()

  const { search } = useLocation()
  useEffect(() => {
    debug(new URLSearchParams(search).get('sort'), '-----------------')
    debug(search, '-----------------')
  }, [search])

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
