import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const Button = styled.button`
    color: black;
    width: 100px;
    height: 40px;
    background-color: white;
`

export function Login(): ReactElement {
  const navigate = useNavigate()
  return (
    <Button onClick={()=>{
      navigate('/')
    }}>
        button
    </Button>
  )
}