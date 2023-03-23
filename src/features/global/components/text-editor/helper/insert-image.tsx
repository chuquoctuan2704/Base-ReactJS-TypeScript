import { BaseEditor, Transforms } from 'slate'

export function insertImage(editor: BaseEditor, url: string) {
  const text = { text: '' }
  const image = { type: 'image', url, children: [text] }
  Transforms.insertNodes(editor, image)
}
