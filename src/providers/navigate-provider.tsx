import React, { ReactElement, ReactNode, useEffect } from 'react'
import styled from 'styled-components'
import { createSearchParams, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { initNavigate, navigateState } from '~/commons/recoil/navigate-recoil'
const NavigateContainer = styled.div``

export function NavigateProvider(props: { children: ReactNode }): ReactElement {
  const [navi, setNavi] = useRecoilState(navigateState)
  const navigate = useNavigate()

  useEffect(() => {
    if (navi.isConfirm && navi.path && navi.path !== ' ') {
      const confirmAction = confirm('Những thay đổi chưa được lưu, bạn có chắc muốn huỷ chúng?')
      if (confirmAction) {
        navigateFunc()
      }
    } else {
      navigateFunc()
    }
    console.log(navi)
  }, [navi])

  function navigateFunc() {
    if (navi.path && navi.path !== ' ') {
      if (typeof navi.path === 'string') {
        if (navi.path !== window.location.pathname) {
          navigate({
            pathname: navi.path.toString(),
            search: navi.params && `?${createSearchParams(navi.params)}`
          })
        } else {
          if (window.location.search !== '') {
            navigate(navi.path)
          } else {
            window.location.reload()
          }
        }
      } else {
        navigate(Number.parseInt(navi.path?.toString() ?? '0'))
      }
      setNavi(initNavigate)
    }
  }

  return (
    <NavigateContainer>
      {props.children}
    </NavigateContainer>
  )
}
