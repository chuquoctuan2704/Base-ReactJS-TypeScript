import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { IconLoading } from '~/assets/svg/svg-list'
const LoadingContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0007;
  top: 0;
  left: 0;
  z-index: 99;      
`

export function Loading(): ReactElement {
  return (
    <LoadingContainer>
      <IconLoading />
    </LoadingContainer>
  )
}
