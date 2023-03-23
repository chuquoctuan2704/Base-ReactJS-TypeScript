import React from 'react'
import { MdImage } from 'react-icons/md'
import { useSlateStatic } from 'slate-react'
import { iconSizeToolbarEditor } from '../app-editor'
import { insertImage } from '../helper/insert-image'
import { ButtonSlate } from '../plugins/button-slate'
import { isImageUrl } from '../validation/is-image-url'

export function InsertImageButton() {
  const editor = useSlateStatic()
  return (
    <ButtonSlate
      title="Image Link"
      onMouseDown={(event) => {
        event.preventDefault()
        const url = window.prompt('Enter the URL of the image:')
        if (url && !isImageUrl(url)) {
          alert('URL is not an image')
          return
        }
        if (url) {
          insertImage(editor, url)
        }
      }}>
      <MdImage size={iconSizeToolbarEditor}/>
    </ButtonSlate>
  )
}
