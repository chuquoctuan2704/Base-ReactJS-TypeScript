import React, { ReactElement, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { IconType } from 'react-icons/lib'
import { useRecoilState } from 'recoil'
import { navigateState } from '~/commons/recoil/navigate-recoil'
import { devices } from '../size-screen/screen-view-model'
import { NaviElement } from '~/core/domain/entities/global/side-bar-models'
import { AppColor } from '~/commons/constant/constant'
import { ArrowRight } from '~/assets/svg/svg-list'

const Container = styled.div`
  flex: 1;
`
const SideBar = styled.div`
  height: 100%;
  z-index: 66;
  display: flex;
  @media ${devices.screenMd} {
    display: none;
  }
`
const Content = styled.div<{ width: string }>`
  background-color: white;
  box-shadow: 0 0 10px 0px ${AppColor.COLOR_BOX_SHADOWN};
  width: ${(props) => props.width};
  transition: width 0.5s ease-in-out;
`
const CancelMobile = styled.div`
  border-right: 1px solid #dfdcdc;
  border-bottom: 1px solid #dfdcdc;
  height: 50px;
  align-items: center;
  background-color: white;
  border-radius: 0 10px 10px 0;
  font-size: 24px;
  margin-top: 10px;
  display: flex;
  box-shadow: 2px 2px 10px #c4c4c457;
  cursor: pointer;
  padding: 0 5px;
`
const ButtonOpen = styled.div<{ open: boolean }>`
  transition: ease-in-out 0.3s;
  transform: ${(props) => (props.open ? 'rotate(0deg)' : 'rotate(180deg)')};
  display: flex;
`
const BackgroundButtonHide = styled.div``
const ButtonClick = styled.div<{ width: string }>`
  border-top: 3px solid #f5f5f5;
  transform: ${(props) => (props.width === '250px' ? 'translateX(0)' : 'translateX(-250px)')};
  transition: cubic-bezier(0.84, 0.45, 0.24, 0.62) 0.5s;
`
const ButtonLink = styled.div`
  display: flex;
  height: 45px;
  cursor: pointer;
  border: transparent;
  color: black;
  background-color: white;
  justify-content: center;
  align-items: center;
`
const FlexContentBtn = styled.button`
  border: transparent;
  background-color: ${(props: { isSelected: boolean }) => (props.isSelected ? '#4e4e4e' : 'transparent')};
  color: ${(props: { isSelected: boolean }) => (props.isSelected ? '#ffd11b' : '#000000')};
  width: 90%;
  display: flex;
  padding: 10px 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #4e4e4e;
    color: #ffd11b;
  }
  &:focus {
    outline: none;
  }
`

const FlexButton = styled.div`
  display: flex;
  align-items: center;
`
const RowSidebar = styled.div``

const SideBarMobile = styled.div`
  height: 100%;
  z-index: 66;
  position: fixed;
  display: none;
  @media ${devices.screenMd} {
    display: flex;
  }
`
const ContainerMobile = styled.div<{ width: string }>`
  background-color: white;
  box-shadow: 0 0 10px ${AppColor.COLOR_BOX_SHADOWN};
  width: ${(props) => props.width};
  transition: width 0.6s ease;
`
const BackgroundButtonHideMobile = styled.div``

export function IconContainer(iconType: IconType | React.FC<React.SVGProps<SVGSVGElement>>): ReactElement {
  const IconContent = iconType
  return (
    <>
      <IconContent />
    </>
  )
}
export type SidebarProps = {
  listMenu: NaviElement[]
}
export function SidebarApp(props: SidebarProps): ReactElement {
  const param = useLocation()
  const { listMenu } = props
  const { pathname } = useLocation()
  const [navi, setNavi] = useRecoilState(navigateState)
  const [isShowSideBar, setIsShowSideBar] = useState(true)
  const [isShowSideBarMobile, setIsShowSideBarMobile] = useState(true)

  function SidebarRowRender(data: NaviElement, type: string, isOpen: boolean): ReactElement {
    return (
      <ButtonClick width={isOpen ? '250px' : '0px'}>
        <ButtonLink key={data.id + type}>
          <FlexContentBtn
            isSelected={pathname.includes(data.src)}
            onClick={() => {
              data.subElement.length === 0 && data.src !== '*' && setNavi({ ...navi, path: data.src }) // navigate(data.src)
              console.log(data.src)
            }}>
            <FlexButton>{data.page}</FlexButton>
          </FlexContentBtn>
        </ButtonLink>
      </ButtonClick>
    )
  }

  return (
    <Container>
      <SideBar>
        <Content width={isShowSideBar ? '250px' : '0px'}>
          {listMenu.map((item) => (
            <RowSidebar key={item.id}>{SidebarRowRender(item, 'web', isShowSideBar)}</RowSidebar>
          ))}
        </Content>
        <BackgroundButtonHide>
          <CancelMobile onClick={() => setIsShowSideBar(!isShowSideBar)}>
            <ButtonOpen open={isShowSideBar}><ArrowRight /></ButtonOpen>
          </CancelMobile>
        </BackgroundButtonHide>
      </SideBar>
      {/* Mobile */}
      <SideBarMobile>
        <ContainerMobile width={isShowSideBarMobile ? '250px' : '0px'}>
          {listMenu.map((item) => (
            <RowSidebar key={item.id}>{SidebarRowRender(item, 'Mobile', isShowSideBarMobile)}</RowSidebar>
          ))}
        </ContainerMobile>
        <BackgroundButtonHideMobile>
          <CancelMobile onClick={() => setIsShowSideBarMobile(!isShowSideBarMobile)}>
            <ButtonOpen open={isShowSideBarMobile}><ArrowRight /></ButtonOpen>
          </CancelMobile>
        </BackgroundButtonHideMobile>
      </SideBarMobile>
    </Container>
  )
}
