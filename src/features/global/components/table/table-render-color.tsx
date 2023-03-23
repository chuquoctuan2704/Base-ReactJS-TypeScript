import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { AppColor } from '~/commons/constant/constant'

const TableContainer = styled.table`
  border-radius: 10px;
  width: 100%;
  box-shadow: 1px 1px 13px #c4c4c4;
  border-spacing: 0;
`
const TableHead = styled.thead``
const TableBody = styled.tbody``
const TableRow = styled.tr`
  background-color: ${(props: { isHeader?: boolean, isShowDash: boolean }) => props.isHeader && '#fdeeb2'};
  border-top: ${(props: { isShowDash: boolean }) => (props.isShowDash ? `1px solid ${AppColor.COLOR_DASH}` : 'none')};
  border-radius: 10px;
  height: 60px;
`
const TableHeader = styled.th`
  text-align: start;
  padding: 10px;
  border-top-left-radius: ${(props: { itemStart?: boolean, itemEnd?: boolean, miWidth?: number, maWidth?: number }) =>
    props.itemStart && '10px'};
  border-top-right-radius: ${(props: { itemEnd?: boolean }) => props.itemEnd && '10px'};
  min-width: ${(props: { miWidth?: number }) => `${props.miWidth}px` ?? '0px'};
  max-width: ${(props: { maWidth?: number }) => `${props.maWidth}px` ?? '400px'};
`
const TableData = styled.td`
  min-width: ${(props: { mWidth?: number, maWidth?: number, align?: string }) => `${props.mWidth}px` ?? '0px'};
  max-width: ${(props: { mWidth?: number, maWidth?: number }) => `${props.maWidth}px` ?? '400px'};
  padding: 10px 10px;
  text-align: ${(props: { align?: string }) => props.align ?? undefined};
`
const BoxColor = styled.div<{ color: string }>`
  background-color: ${props => props.color};
  width: 50px;
  height: 30px;
`
export type TableAppType = {
  listTitleHeader: string[]
  data?: Array<Record<string, unknown>>
}
export function TableRenderColor(props: TableAppType): ReactElement {
  const { listTitleHeader, data } = props

  function renderData(): ReactElement {
    const listRow: string[][] = []
    if (data) {
      data.forEach(element => {
        const listData: string[] = []
        for (const key in element) {
          const val = element[key] as string
          listData.push(val)
        }
        listRow.push(listData)
      })
    }
    return <>
    {listRow.map((item, index) => {
      return <TableRow key={index} isShowDash={true}>
        {item.map((item2, index2) => {
          return <TableData key={index2}>{index2 !== 3 ? item2 : <BoxColor color={item2} />}</TableData>
        })}
      </TableRow>
    })}
    </>
  }

  return (
    <TableContainer>
      <TableHead>
        <TableRow isShowDash={false} isHeader={true}>
          {listTitleHeader.map((item, index) => { return <TableHeader key={index} itemStart={index === 0} itemEnd={index === listTitleHeader.length - 1} >{item}</TableHeader> })}
        </TableRow>
      </TableHead>
      <TableBody>
        {renderData()}
      </TableBody>
    </TableContainer>
  )
}
