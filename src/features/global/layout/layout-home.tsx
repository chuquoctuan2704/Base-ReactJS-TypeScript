import React, { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Footer } from '../footer/footer'
import Header from '../header/header'

const HeaderContainer = styled.div``
const FooterContainer = styled.div``
const MainContetn = styled.div``

export function LayoutHome(): ReactElement {
  return (
        <div>
          <HeaderContainer>
            <Header/>
          </HeaderContainer>
          <MainContetn>
            <Outlet/>
          </MainContetn>
          <FooterContainer>
            <Footer/>
          </FooterContainer>
        </div>
  )
}
