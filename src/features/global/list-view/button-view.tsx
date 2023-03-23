import React, { ReactElement } from 'react'
import styled from 'styled-components'

const ViewComponentContainer = styled.div``
const Content = styled.div`
    width: 50px;
    height: 50px;
    background-color: red;
`

export function ButtonView(): ReactElement {
  return (
    <ViewComponentContainer>
      <Content>button</Content>
    </ViewComponentContainer>
  )
}
