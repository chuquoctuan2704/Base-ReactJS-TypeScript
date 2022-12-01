import { atom, selector } from 'recoil'

export const globalRecoil = atom({
  key: 'global',
  default: 'a'
})

export const tokenSelector = selector({
  key: 'tokenSelector',
  get: async ({ get }) => {
    const text = get(globalRecoil)
    return text
  }
})
