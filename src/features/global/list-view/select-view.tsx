import React, { ReactElement } from 'react'
import styled from 'styled-components'

const ViewComponentContainer = styled.div``
const Content = styled.div`
    width: 50px;
    height: 50px;
    background-color: red;
`

export function SelectView(): ReactElement {
  return (
    <ViewComponentContainer>
      <Content>select</Content>
    </ViewComponentContainer>
  )
}
