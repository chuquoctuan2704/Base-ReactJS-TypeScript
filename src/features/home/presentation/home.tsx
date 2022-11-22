import React, { ReactElement, useMemo } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { setLanguageCode } from '../../../commons/services/local-storage'

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
    width: 200px;
    height: 40px;
    background-color: white;
`
 
export function Home(): ReactElement {
  const { t, i18n } = useTranslation()
  const clickTitle = useMemo(() => t('translations.Hello'), [t])
  const navigate = useNavigate()
  return (
    <HomeContainer> 
      <ButtonToLogin onClick={() => {
        navigate('/login')
      }}>
        go to login
      </ButtonToLogin>
      <ButtonClick onClick={() => {
        if (i18n.language === 'en') {
          i18n.changeLanguage('vi')
          setLanguageCode('vi')
        } else {
          i18n.changeLanguage('en')
          setLanguageCode('en')
        }
      }}>
        Change Language
      </ButtonClick>
      {clickTitle}
    </HomeContainer>
  )
}