import React, { ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  background-color: white;
  color: black;
`
const ButtonToHome = styled.button``

export function Header (): ReactElement {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/login' && (
        <HeaderContainer>
          <nav>
            <div>
              <ButtonToHome
                onClick={() => {
                  //   navigate('/')
                }}>
                JobNavi
              </ButtonToHome>
            </div>
          </nav>
        </HeaderContainer>
      )}
    </>
  )
}

export default Header
