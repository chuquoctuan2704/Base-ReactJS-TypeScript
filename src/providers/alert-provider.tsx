import React, { ReactElement, ReactNode, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { useRecoilState, useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router'
import { RouterList } from '~/features/router-list'
import { clearUser } from '~/commons/common-utils'
import { alertState, alertValue } from '~/commons/recoil/alert-recoil'
import { notification } from 'antd'
import { Loading } from '~/features/global/components/loading/loading'
import { IconError, IconSuccessfully } from '~/assets/svg/svg-list'

const AlertContainer = styled.div` 
  z-index: 1000;
`

const PopupContainer = styled.div`
  padding-inline-end: 0;
`
const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
`
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`

export function AlertProvider(props: { children: ReactNode }): ReactElement {
  const navigate = useNavigate()
  const alertContent = useRecoilValue(alertValue)
  const [, setAlert] = useRecoilState(alertState)
  notification.config({
    placement: 'top',
    duration: 3,
    maxCount: 3,
    style: {
      paddingInlineEnd: 0,
      minWidth: 250,
      width: 'auto',
      maxWidth: 350,
      paddingTop: 10,
      paddingBottom: 10,
      textAlign: 'center'
    },
    closeIcon: <></>
  })

  useEffect(() => {
    setAlert({ errors: '', success: '' })
    if (alertContent.errors === 'INVALID_TOKEN' || alertContent.errors === 'ACCESS_TOKEN_CHANGED') {
      clearUser()
      navigate(RouterList.HOME)
    }
  }, [])

  function ContentAlert(): ReactElement {
    const mes = alertContent.errors ?? alertContent.success
    return (
      <PopupContainer>
        <MessageContainer>
          <>{mes}</>
        </MessageContainer>
        <IconContainer>
          {alertContent.success && <IconSuccessfully width={24} />}
          {alertContent.errors && <IconError width={24} />}
        </IconContainer>
      </PopupContainer>
    )
  }
  const ShowAlert = useCallback(() => {
    if (alertContent.errors ?? alertContent.success) notification.open({ message: ContentAlert() })
    return <></>
  }, [alertContent])

  return (
    <AlertContainer>
      {alertContent.loading && <Loading />}
      {ShowAlert()}
      {props.children}
    </AlertContainer>
  )
}
