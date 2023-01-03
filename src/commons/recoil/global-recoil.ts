import { atom, RecoilState, RecoilValueReadOnly, selector } from 'recoil'

export const globalRecoil: RecoilState<string> = atom({
  key: 'global',
  default: 'a'
})

export const tokenSelector: RecoilValueReadOnly<string> = selector({
  key: 'tokenSelector',
  get: async ({ get }) => {
    const text = get(globalRecoil)
    return text
  }
})
