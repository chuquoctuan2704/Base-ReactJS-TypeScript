import React, { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  height: 50px;
  background-color: white;
  color: black;
`

export function Footer (): ReactElement {
  const location = useLocation()
  return <>{location.pathname !== '/login' && <FooterContainer>This is footer</FooterContainer>}</>
}
