import React, { ReactNode } from 'react'
import styled from 'styled-components'

const Button = styled.span`
  cursor: pointer;
  color: ${(props: { reversed: boolean, active: boolean }) =>
    props.reversed ? (props.active ? 'red' : '#aaa') : props.active ? 'black' : '#ccc'};
`
export type ButtonSlateProps = {
  children?: ReactNode
  title?: string
  active?: boolean
  reversed?: boolean
  onMouseDown?: (event: any) => void
  onClick?: () => void
  style?: any
}
export function ButtonSlate(props: ButtonSlateProps) {
  return (
    <Button
      reversed={props.reversed ?? false}
      active={props.active ?? false}
      onMouseDown={props.onMouseDown}
      onClick={props.onClick}
      style={props.style}>
      {props.children}
    </Button>
  )
}
