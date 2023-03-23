import React, { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { Footer } from '../footer/footer'
import Header from '../header/header'

const HeaderContainer = styled.div``
const FooterContainer = styled.div``
const MainContent = styled.div`
  padding-top: 60px;
  background-color: white;
  max-width: 100%;
  margin-inline: auto;
  display: flex;
`
const SideBar = styled.div``
const Content = styled.div`
  flex: 1;
  padding: 10px 30px;
`

export function LayoutHome(): ReactElement {
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContent>
        <Content>
          <Outlet />
        </Content>
      </MainContent>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </>
  )
}
