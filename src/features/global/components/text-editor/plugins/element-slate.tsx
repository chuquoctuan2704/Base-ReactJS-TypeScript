import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Transforms } from 'slate'
import { ReactEditor, useSlateStatic, useFocused, useSelected } from 'slate-react'
import { TEXT_ALIGN_TYPES } from '../data/data'
import { MdCancel } from 'react-icons/md'
import { iconSizeToolbarEditor } from '../app-editor'

const BlockQuoteContainer = styled.blockquote`
  border-left: 2px solid #ddd;
  margin-left: 0;
  margin-right: 0;
  padding-left: 10px;
  color: #aaa;
  font-style: italic;
  text-align: ${(props: { textAlign?: string }) => props.textAlign ?? 'start'};
`
const UlContainer = styled.ul`
  margin: 10px 30px;
  text-align: ${(props: { textAlign?: string }) => props.textAlign ?? 'start'};
`
const OlContainer = styled.ol`
  margin: 10px 30px;
  text-align: ${(props: { textAlign?: string }) => props.textAlign ?? 'start'};
`
const ImageContainer = styled.img`
  display: block;
  max-width: 100%;
  max-height: 20em;
  cursor: pointer;
  box-shadow: ${(props: { selected: boolean, focused: boolean }) => props.selected && props.focused ? '0 0 0 3px #B4D5FF' : 'none'};
`
const ButtonDeleteImage = styled.button`
  display: inline;
  position: absolute;
  top: 0.4em;
  left: 0.4em;
  background-color: white;
  cursor: pointer;
  color: tomato;
  border: none;
  height: 16px;
  border-radius: 16px;
`

export function Element(props: { attributes: any, children: ReactNode, element: any }) {
  const { attributes, children, element } = props

  const style = { textAlign: element.align }
  const selected = useSelected()
  const focused = useFocused()

  let type = element.type

  if (element.align && (type === 'bulleted-list' || type === 'numbered-list' || type === 'list-item')) {
    type = 'paragraph'
  }

  function converAlign(align: string) {
    let alignImage
    if (TEXT_ALIGN_TYPES.includes(align)) {
      if (align === 'right') {
        alignImage = 'end'
      } else if (align === 'left') {
        alignImage = 'start'
      } else alignImage = 'center'
    }
    return alignImage
  }

  switch (type) {
    case 'block-quote':
      return <BlockQuoteContainer {...attributes}>{children}</BlockQuoteContainer>
    case 'heading-one':
      return (
        <h1 style={style} {...attributes}>
          {children}
        </h1>
      )
    case 'heading-two':
      return (
        <h2 style={style} {...attributes}>
          {children}
        </h2>
      )
    case 'heading-three':
      return (
        <h3 style={style} {...attributes}>
          {children}
        </h3>
      )
    case 'list-item':
      return (
        <li style={{ textAlign: element.align }} {...attributes}>
          {children}
        </li>
      )
    case 'bulleted-list':
      return (
        <UlContainer {...attributes}>
          {children}
        </UlContainer>
      )
    case 'numbered-list':
      return (
        <OlContainer {...attributes} className="editor-ol">
          {children}
        </OlContainer>
      )
    case 'image': {
      const editor = useSlateStatic()
      const path = ReactEditor.findPath(editor as ReactEditor, element)
      return (
        <div {...attributes}>
          {children}
          <div
            contentEditable={false}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: converAlign(element.align),
              marginTop: 10
            }}>
            <ImageContainer src={element.url} selected={selected} focused={focused} />
            {selected && <ButtonDeleteImage onClick={() => Transforms.removeNodes(editor, { at: path })} >
              <MdCancel size={iconSizeToolbarEditor} />
            </ButtonDeleteImage>}
          </div>
        </div>
      )
    }
    default:
      return (
        <p style={{ ...style, marginBottom: 0 }} {...attributes}>
          {children}
        </p>
      )
  }
}
