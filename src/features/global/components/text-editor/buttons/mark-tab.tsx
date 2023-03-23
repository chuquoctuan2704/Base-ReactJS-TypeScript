import React, { ReactNode } from 'react'
import { useSlate } from 'slate-react'
import { toggleMark } from '../helper/toggle-mark'
import { ButtonSlate } from '../plugins/button-slate'
import { isMarkActive } from '../validation/is-mark-active'

export function MarkTab(props: { format: string, icon: ReactNode }) {
  const editor = useSlate()

  return (
    <ButtonSlate
      title={props.format}
      active={isMarkActive(editor, props.format)}
      onMouseDown={(event) => {
        event.preventDefault()
        toggleMark(editor, props.format)
      }}>
      {props.icon}
    </ButtonSlate>
  )
}
