import { atom, selector } from 'recoil'

export const textState = atom({
  key: 'textState',
  default: 'Text default'
})

export const textLenght = selector({
  key: 'charCountState',
  get: ({get}) => {
    const text = get(textState)

    return text.length
  },
})