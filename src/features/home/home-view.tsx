import React, { ReactElement, useMemo } from 'react'
import styled from 'styled-components'
import { useTranslation } from 'react-i18next'

const HomeContainer = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  background-color: #31e698be;
`
export function Home(): ReactElement {
  const { t } = useTranslation()
  const clickTitle = useMemo(() => t('translations.Hello'), [t])
  console.log(1)
  return (
    <HomeContainer>
      {clickTitle}
    </HomeContainer>
  )
}
