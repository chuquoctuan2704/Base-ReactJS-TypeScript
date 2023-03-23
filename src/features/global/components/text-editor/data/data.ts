export const initialValueSlate = [
  {
    type: 'paragraph',
    children: [
      { text: 'This is editable ' },
      { text: 'rich', bold: true },
      { text: ' text, ' },
      { text: 'much', italic: true },
      { text: ' better than a ' },
      { text: '<textarea>', code: true },
      { text: '! ' },
      {
        text: 'In addition to nodes that contain editable text, you can also create other types of nodes, like images or videos.'
      }
    ]
  }
]

export const defaultValueSlate = [
  {
    type: 'paragraph',
    children: [
      { text: '' }
    ]
  }
]

export type HostkeyType = {
  'mod+b': string
  'mod+i': string
  'mod+u': string
  'mod+`': string
  'mod+t': string
}

export const HOTKEYS = {
  'mod+b': 'bold',
  'mod+i': 'italic',
  'mod+u': 'underline',
  'mod+`': 'code',
  'mod+t': 'indent'
}

export const LIST_TYPES = ['numbered-list', 'bulleted-list']

export const TEXT_ALIGN_TYPES = ['left', 'center', 'right', 'justify']

export type LeafTextProps = {
  bold?: boolean
  code?: boolean
  italic?: boolean
  underline?: boolean
  indent?: boolean
}
export type RenderLeafProps = {
  attributes: {
    'data-slate-leaf': true
  }
  children: any
  leaf: LeafTextProps
  text: LeafTextProps
}
