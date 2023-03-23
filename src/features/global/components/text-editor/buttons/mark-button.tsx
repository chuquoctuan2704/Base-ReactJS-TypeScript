import React, { ReactNode } from 'react'
import { IconType } from 'react-icons/lib'
import { useSlate } from 'slate-react'
import { iconSizeToolbarEditor } from '../app-editor'
import { toggleMark } from '../helper/toggle-mark'
import { ButtonSlate } from '../plugins/button-slate'
import { isMarkActive } from '../validation/is-mark-active'

export function MarkButton(props: { format: string, icon: IconType }) {
  const editor = useSlate()

  return (
    <ButtonSlate
      title={props.format}
      active={isMarkActive(editor, props.format)}
      onMouseDown={(event: any) => {
        event.preventDefault()
        toggleMark(editor, props.format)
      }}>
      <props.icon size={iconSizeToolbarEditor}/>
    </ButtonSlate>
  )
}
