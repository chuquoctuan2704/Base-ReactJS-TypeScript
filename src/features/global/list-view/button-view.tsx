import React, { ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { AppColor } from '~/commons/constant/constant'
import { alertState } from '~/commons/recoil/alert-recoil'
import { ButtonApp } from '../components/button/button-app'

const ViewComponentContainer = styled.div``
const Content = styled.div`
  text-align: center;
  font-size: 3rem;
  padding: 10px;
`
const CusButtonApp = styled(ButtonApp)`
  padding: 10px 0;
  .Button {
    background-color: red;
  }
  .Button:hover {
    background-color: ${AppColor.COLOR_BLUE_AQUA};
  }
`

export function ButtonView(): ReactElement {
  const [, setAlert] = useRecoilState(alertState)
  return (
    <ViewComponentContainer>
      <Content>Button</Content>
      <ButtonApp title='Basic' onClick={() => setAlert({ success: 'Clicked button basic' })} />
      <CusButtonApp title='Custom' onClick={() => setAlert({ success: 'Clicked button custom' })} />
    </ViewComponentContainer>
  )
}
