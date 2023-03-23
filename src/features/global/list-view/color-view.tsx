import React, { ReactElement } from 'react'
import { useRecoilState } from 'recoil'
import styled from 'styled-components'
import { AppColor } from '~/commons/constant/constant'
import { alertState } from '~/commons/recoil/alert-recoil'
import { TableRenderColor } from '../components/table/table-render-color'

const ViewComponentContainer = styled.div``
const Title = styled.div`
  text-align: center;
  font-size: 3rem;
  padding: 10px;
`
export function ColorView(): ReactElement {
  const [, setAlert] = useRecoilState(alertState)

  function renderDataColor() {
    const data = []
    let numb = 0
    for (const key in AppColor) {
      numb++
      data.push({ STT: numb, 'Key màu': key, 'Mã màu': AppColor[key as keyof typeof AppColor], Màu: AppColor[key as keyof typeof AppColor] })
    }
    return data
  }

  return (
    <ViewComponentContainer>
      <Title>Color pick</Title>
      <TableRenderColor listTitleHeader={['STT', 'Key màu', 'Mã màu', 'Màu']} data={renderDataColor()} />
    </ViewComponentContainer>
  )
}
