import { BaseEditor, Editor } from 'slate'

export function isMarkActive(editor: BaseEditor, format: string) {
  const marks = Editor.marks(editor)
  return marks ? marks[format] : false
}
