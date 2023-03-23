import { Descendant } from 'slate'

declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

interface Children {
  text?: string
  children?: Children[]
}
declare interface CusDescendant extends Descendant {
  type: 'paragraph'
  children: Children[]
}
