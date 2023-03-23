import React, { ReactElement } from 'react'
import styled from 'styled-components'

const ViewComponentContainer = styled.div``
const Content = styled.div`
  text-align: center;
  font-size: 3rem;
  padding: 10px;
`

export function ComponentView(): ReactElement {
  return (
    <ViewComponentContainer>
      <Content>
        Đây là các component cơ bản được sử dụng trong hệ thống hãy kiểm tra lại nhé
      </Content>
    </ViewComponentContainer>
  )
}
