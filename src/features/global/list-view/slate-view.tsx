import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { convertDescendantToString } from '~/commons/common-utils'
import { AppEditor } from '../components/text-editor/app-editor'
import { initialValueSlate } from '../components/text-editor/data/data'

const ViewComponentContainer = styled.div``
const Content = styled.div`
  text-align: center;
  font-size: 3rem;
  padding: 10px;
`

export function SlateView(): ReactElement {
  const [valueSlate, setValueSlate] = useState<string>(convertDescendantToString(initialValueSlate))
  return (
    <ViewComponentContainer>
      <Content>Slate</Content>
      <AppEditor value={valueSlate} onChange={setValueSlate}/>
    </ViewComponentContainer>
  )
}
