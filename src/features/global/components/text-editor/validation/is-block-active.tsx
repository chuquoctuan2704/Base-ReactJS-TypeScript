import { BaseEditor, Editor, Element } from 'slate'

export function isBlockActive(editor: BaseEditor, format: string, blockType = 'type') {
  const { selection } = editor
  if (!selection) return false

  const [match] = Editor.nodes(editor, {
    at: Editor.unhangRange(editor, selection),
    match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n[blockType] === format
  })
  return !!match
}
