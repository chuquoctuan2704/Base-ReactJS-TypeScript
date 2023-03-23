import React, { ReactNode } from 'react'
import { useSlate } from 'slate-react'
import { ButtonSlate } from '../plugins/button-slate'
import { toggleBlock } from '../helper/toggle-block'
import { isBlockActive } from '../validation/is-block-active'
import { IconType } from 'react-icons'
import { iconSizeToolbarEditor } from '../app-editor'
import { TEXT_ALIGN_TYPES } from '../data/data'

export function BlockButton(props: { format: string, icon: IconType, block?: string }) {
  const editor = useSlate()

  const format = props.format
  const block = props.block ?? 'type'

  return (
    <ButtonSlate
      title={format}
      active={isBlockActive(editor, format, block)}
      onMouseDown={(event) => {
        if (block !== 'type') {
          if (isBlockActive(editor, 'bulleted-list', 'type')) {
            event.preventDefault()
            toggleBlock(editor, 'bulleted-list', 'type')
          }
          if (isBlockActive(editor, 'numbered-list', 'type')) {
            event.preventDefault()
            toggleBlock(editor, 'numbered-list', 'type')
          }
          event.preventDefault()
          toggleBlock(editor, format, block)
        } else {
          TEXT_ALIGN_TYPES.map((item) => {
            if (isBlockActive(editor, item, 'align')) {
              event.preventDefault()
              toggleBlock(editor, item, 'align')
            }
            return true
          })
          event.preventDefault()
          toggleBlock(editor, format, block)
        }
      }}>
      <props.icon size={iconSizeToolbarEditor}/>
    </ButtonSlate>
  )
}
