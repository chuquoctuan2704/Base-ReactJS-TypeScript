import React, { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { AppColor } from '~/commons/constant/constant'

const HeaderContainer = styled.header`
  width: 100%;
  height: 60px;
  background-color: white;
  color: black;
  box-shadow: 0px 0px 10px ${AppColor.COLOR_BOX_SHADOWN};
  z-index: 1000;
  position: fixed;
`

export function Header(): ReactElement {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/login' && (
        <HeaderContainer>
          Tuấn
        </HeaderContainer>
      )}
    </>
  )
}

export default Header
