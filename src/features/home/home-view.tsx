import React, { ReactElement, useMemo } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'
import { setLanguageCode } from '~/commons/services/local-storage'
import { HomeViewModel } from './home-view-model'
import Debug from 'debug'

const debug = Debug('Home:')

const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px;
  background-color: #31e698be;
`
const ButtonToLogin = styled.button`
  color: black;
  height: 40px;
  background-color: white;
  margin-right: 10px;
`
const ButtonClick = styled.button`
  color: black;
  height: 40px;
  background-color: white;
`

export function Home (): ReactElement {
  const { t, i18n } = useTranslation()
  const clickTitle = useMemo(() => t('translations.Hello'), [t])
  const { text, setText, goToLogin } = HomeViewModel()

  return (
    <HomeContainer>
      <ButtonToLogin
        onClick={() => {
          goToLogin()
        }}>
        go to login
      </ButtonToLogin>
      <ButtonToLogin
        onClick={() => {
          setText('text da set')
        }}>
        Set text
      </ButtonToLogin>
      <ButtonClick
        onClick={() => {
          if (i18n.language === 'en') {
            i18n.changeLanguage('vi')
            setLanguageCode('vi')
          } else {
            i18n.changeLanguage('en')
            setLanguageCode('en')
          }
        }}>
        Change Language - {text}
      </ButtonClick>
      {clickTitle}
    </HomeContainer>
  )
}
