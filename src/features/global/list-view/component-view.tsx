import React, { ReactElement } from 'react'
import styled from 'styled-components'

const ViewComponentContainer = styled.div``
const Content = styled.div`
    width: 50px;
    height: 50px;
    background-color: red;
`

export function ComponentView(): ReactElement {
  return (
    <ViewComponentContainer>
      <Content>Test</Content>
    </ViewComponentContainer>
  )
}
