declare module '*.svg' {
  import React = require('react')
  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'

// type CustomElement = { type: 'paragraph', children: CustomText[] }
// type CustomText = { text: string }

// declare module 'slate' {
//   interface CustomTypes {
//     Editor: BaseEditor & ReactEditor
//     Element: CustomElement
//     Text: CustomText
//   }
// }
