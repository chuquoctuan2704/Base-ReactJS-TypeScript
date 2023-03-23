import React, { ReactElement, useEffect } from 'react'
import styled from 'styled-components'
import Debug from 'debug'
import { Outlet, useNavigate } from 'react-router-dom'
import { getToken } from '~/commons/services/local-storage'
import { RouterList } from '~/features/router-list'

const debug = Debug('layout')
const LayoutContainer = styled.div``

export function LayoutAuth(): ReactElement {
  const navigate = useNavigate()

  if (getToken() !== '') {
    navigate(RouterList.HOME)
    return <></>
  }
  return (
    <LayoutContainer>
        <Outlet />
    </LayoutContainer>
  )
}
