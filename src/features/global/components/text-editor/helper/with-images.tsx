import { isImageUrl } from '../validation/is-image-url'
import { insertImage } from './insert-image'

export function withImages(editor: any) {
  const { insertData, isVoid } = editor
  editor.isVoid = (element: any) => (element.type === 'image' ? true : isVoid(element))
  editor.insertData = (data: any) => {
    const text = data.getData('text/plain')
    const { files } = data
    if (files && files.length > 0) {
      for (const file of files) {
        const reader = new FileReader()
        const [mime] = file.type.split('/')
        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result
            insertImage(editor, url?.toString() ?? '')
          })
          reader.readAsDataURL(file)
        }
      }
    } else if (isImageUrl(text)) {
      insertImage(editor, text)
    } else {
      insertData(data)
    }
  }
  return editor
}
