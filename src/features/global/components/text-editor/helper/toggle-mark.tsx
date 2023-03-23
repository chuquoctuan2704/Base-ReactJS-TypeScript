import { BaseEditor, Editor } from 'slate'
import { isMarkActive } from '../validation/is-mark-active'

export function toggleMark(editor: BaseEditor, format: string) {
  const isActive = isMarkActive(editor, format)
  if (isActive) {
    Editor.removeMark(editor, format)
  } else {
    Editor.addMark(editor, format, true)
  }
}
