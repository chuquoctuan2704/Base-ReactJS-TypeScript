import { CusDescendant } from 'declarations'
import { Descendant } from 'slate'
import { defaultValueSlate } from '~/features/global/components/text-editor/data/data'
import { LanguageCode } from './constant/constant'
import { setLanguageCode, setToken } from './services/local-storage'

export function getErrorMessage (error: unknown): string {
  if (error instanceof Error) {
    return error.message
  }
  return String(error)
}

export function clearUser() {
  setToken('')
  setLanguageCode(LanguageCode.VI)
}

// Slate -------------------
export function checkValidateAppEditor(data?: string): boolean {
  return getTheLastString(JSON.parse(data ?? convertDescendantToString(defaultValueSlate))) !== ''
}
export function getTheLastString(data: Descendant[]): string {
  let text = ''
  const val = data as CusDescendant[]
  if (val.length !== 0) {
    val.forEach((i) => {
      if (i.children[0].children && i.children[0].children.length !== 0) {
        i.children[0].children.forEach((item) => {
          if (item.text !== '') {
            text = item.text ?? ''
          }
        })
      } else {
        i.children.forEach((item) => {
          if (item.text !== '') {
            text = item.text ?? ''
          }
        })
      }
      return true
    })
  }
  return text
}

export function getFullStringFromEditorValue(data: Descendant[] | string): string {
  let text = ''
  const val = (typeof data === 'string' ? convertStringToDescendant(data) : data) as CusDescendant[]
  if (val.length !== 0) {
    val.forEach((i, index) => {
      if (i.children[0].children && i.children[0].children.length !== 0) {
        i.children[0].children.forEach((item) => {
          if (item.text !== '') {
            text = text + (item.text?.toString() ?? '')
          }
        })
      } else {
        if (text.length !== 0 || (text.length === 0 && index !== 0)) {
          text = text + ' '
        }
        i.children.forEach((item) => {
          if (item.text !== '') {
            text = text + (item.text?.toString() ?? '')
          }
        })
      }
      return true
    })
  }
  return text
}

export function convertDescendantToString(data: Descendant[] | string): string {
  const startData = '[{"type":"'
  if (typeof data !== 'string') {
    return JSON.stringify(data)
  } else {
    if (data.startsWith(startData)) {
      return data
    } else {
      let value: Descendant[] | CusDescendant[] = defaultValueSlate
      if (data !== '') {
        value = [
          {
            type: 'paragraph',
            children: [{ text: data }]
          }
        ]
      }
      return JSON.stringify(value)
    }
  }
}

export function convertStringToDescendant(data: string): Descendant[] {
  const startData = '[{"type":"'
  if (data === '') {
    return defaultValueSlate
  } else {
    if (data.startsWith(startData)) {
      return JSON.parse(data)
    } else {
      let value: Descendant[] | CusDescendant[] = defaultValueSlate
      if (data !== '') {
        value = [
          {
            type: 'paragraph',
            children: [{ text: data }]
          }
        ]
      }
      return value as Descendant[]
    }
  }
}
