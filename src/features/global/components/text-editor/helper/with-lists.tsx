import { Editor, Transforms, Range, Point } from 'slate'
import { liftNodes } from './lift-nodes'

// withLists handles behavior regarding ol and ul lists
// more specifically, withLists properly exits the list with `enter` or `backspace`
// from an empty list item, transforming the node to a paragraph
export function withLists(editor: any) {
  const { insertBreak, deleteBackward } = editor

  function backspace(callback: () => void) {
    const { selection } = editor

    // check that there is a current selection without highlight
    if (selection && Range.isCollapsed(selection)) {
      // find the 'closest' `list-item` element
      const [match] = Editor.nodes(editor, {
        match: (n) =>
          n.type === 'list-item' && n.children && n.children[0] && (!n.children[0].text || n.children[0].text === '')
      })

      // check that there was a match
      if (match) {
        const [, path] = match
        const start = Editor.start(editor, path)

        // if the selection is at the beginning of the list item
        if (Point.equals(selection.anchor, start)) {
          // 'lift' the list-item to the next parent
          liftNodes(editor)
          // check for the new parent
          const [listMatch] = Editor.nodes(editor, {
            match: (n) => n.type === 'bulleted-list' || n.type === 'numbered-list'
          })
          // if it is no longer within a ul/ol, turn the element into a normal paragraph
          if (!listMatch) {
            Transforms.setNodes(editor, { type: 'paragraph' }, { match: (n) => n.type === 'list-item' })
          }
          return
        }
      }
    }

    callback()
  }

  // override editor function for break
  editor.insertBreak = () => {
    backspace(insertBreak)
  }

  // override editor function for a backspace
  editor.deleteBackward = (unit) => {
    backspace(() => deleteBackward(unit))
  }

  return editor
}
