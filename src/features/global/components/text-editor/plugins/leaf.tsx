import React from 'react'
import styled from 'styled-components'
import { RenderLeafProps } from '../data/data'

const CodeContainer = styled.code`
  font-family: monospace;
  background-color: #eee;
  padding: 3px;
`
export function Leaf(props: RenderLeafProps) {
  let chil = props.children
  if (props.leaf.bold) {
    chil = <strong>{chil}</strong>
  }
  if (props.leaf.code) {
    chil = <CodeContainer>{chil}</CodeContainer>
  }
  if (props.leaf.italic) {
    chil = <em>{chil}</em>
  }
  if (props.leaf.underline) {
    chil = <u>{chil}</u>
  }
  if (props.leaf.indent) {
    chil = <span>&nbsp;&nbsp;&nbsp;&nbsp; {chil}</span>
  }
  return <span {...props.attributes}>{chil}</span>
}
