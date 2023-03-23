import React, { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import { SidebarModel } from '~/core/domain/entities/global/side-bar-models'
import { Footer } from '../footer/footer'
import Header from '../header/header'
import { SidebarApp } from '../sidebar/side-bar'
import { devices } from '../size-screen/screen-view-model'

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`
const HeaderContainer = styled.div``
const FooterContainer = styled.div``
const MainContent = styled.div`
  padding-top: 60px;
  background-color: white;
  width: 100%;
  /* margin-inline: auto; */
  display: flex;
  flex: 1;
`
const SideBar = styled.div`
display: flex;
`
const Content = styled.div`
  flex: 1;
  padding: 10px 30px 10px 0;
  @media ${devices.screenMd} {
    padding: 10px 30px 10px 31px;
  }
`

export function LayoutComponent(): ReactElement {
  return (
    <LayoutContainer>
      <HeaderContainer>
        <Header />
      </HeaderContainer>
      <MainContent>
        <SideBar>
          <SidebarApp listMenu={SidebarModel()} />
        </SideBar>
        <Content>
          <Outlet />
        </Content>
      </MainContent>
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </LayoutContainer>
  )
}
