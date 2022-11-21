import React, { ReactElement, useMemo } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { debug } from '../../../commons/common-utils'
import { useTranslation } from 'react-i18next'

const ButtonToLogin = styled.button`
    color: black;
    width: 100px;
    height: 40px;
    background-color: white;
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
    <div> 
      <ButtonToLogin onClick={() => {
        navigate('/login')
      }}>
        Home
      </ButtonToLogin>
      <ButtonClick onClick={() => {
        debug('clicked', i18n.language)
        if (i18n.language === 'en') {
          i18n.changeLanguage('vi')
        } else {
          i18n.changeLanguage('en')
        }
      }}>
        {clickTitle}
      </ButtonClick>
    </div>
  )
}