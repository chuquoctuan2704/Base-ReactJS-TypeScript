import React, { useEffect, useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'
import { useSlateStatic } from 'slate-react'
import styled from 'styled-components'
import { iconSizeToolbarEditor } from '../app-editor'
import { insertImage } from '../helper/insert-image'
import { ButtonSlate } from '../plugins/button-slate'

const InputFile = styled.input`
  -webkit-appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  height: 20px;
  width: 20px;
  ::-webkit-file-upload-button {
    cursor: pointer;
  }
`
export const UploadImageButton = () => {
  const editor = useSlateStatic()
  const [file, setFile] = useState<string>()

  const handleChange = (files: FileList | null) => {
    if (files) {
      const reader = new FileReader()
      reader.readAsDataURL(files[0])
      reader.onload = () => setFile(reader.result as string)
      reader.onerror = (error) => console.log('Error: ', error)
    }
  }

  useEffect(() => {
    if (file) {
      insertImage(editor, file)
    }
  }, [file])

  return (
    <div
      title="Upload Image"
      style={{
        position: 'relative',
        display: 'inline-block'
      }}>
      <span>
        <ButtonSlate>
          <MdCloudUpload size={iconSizeToolbarEditor}/>
        </ButtonSlate>
      </span>
      <InputFile
        type="file"
        name="imgUpload"
        accept="image/*"
        onChange={(e) => handleChange(e.target.files)}
      />
    </div>
  )
}
