import React from 'react'
import styled from 'styled-components'

const Menu = styled.div`
  position: relative;
  padding: 1px 18px 17px;
  margin: 0 -20px;
  border-bottom: 2px solid #eee;
  margin-bottom: 20px;

  & > * {
    display: inline-block;
    margin-right: 15px;
  }
`

export function Toolbar({ ...props }) {
  return (
    <Menu
      {...props}
    />
  )
}
