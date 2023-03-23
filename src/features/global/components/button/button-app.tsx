import React, { ReactElement } from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
    min-width: 100px;
    width: fit-content;
`
const Button = styled.button`
    width: 100%;
`

export type ButtonAppType = {
  className?: string
  title: string
  onClick: () => void
  suffixIcon?: ReactElement
  prefixIcon?: ReactElement
}
export function ButtonApp(props: ButtonAppType): ReactElement {
  const { title, onClick, suffixIcon, prefixIcon, className } = props
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick} className={'Button'}>
        {suffixIcon}
        {title}
        {prefixIcon}
      </Button>
    </ButtonContainer>
  )
}
