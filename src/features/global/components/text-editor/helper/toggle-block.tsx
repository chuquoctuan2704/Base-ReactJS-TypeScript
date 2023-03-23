import { BaseEditor, Editor, Element, Transforms } from 'slate'
import { LIST_TYPES, TEXT_ALIGN_TYPES } from '../data/data'
import { isBlockActive } from '../validation/is-block-active'

export function toggleBlock(editor: BaseEditor, format: string, block?: string) {
  const isActive = isBlockActive(editor, format, TEXT_ALIGN_TYPES.includes(format) ? 'align' : 'type')
  const isList = LIST_TYPES.includes(format)

  // console.log(format, block, '----------')

  Transforms.unwrapNodes(editor, {
    match: (n) => LIST_TYPES.includes(!Editor.isEditor(n) && Element.isElement(n) && n.type),
    split: true
  })
  let newProperties: Partial<Element>
  if (TEXT_ALIGN_TYPES.includes(format) && block === 'align') {
    newProperties = {
      align: isActive ? undefined : format
    }
  } else {
    newProperties = {
      type: isActive ? 'paragraph' : isList ? 'list-item' : format
    }
  }
  Transforms.setNodes(editor, newProperties)
  if (!isActive && isList) {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const block = { type: format, children: [] }
    Transforms.wrapNodes(editor, block)
  }
}
