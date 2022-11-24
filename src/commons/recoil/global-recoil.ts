import { atom, selector } from 'recoil'
import { debug } from '../common-utils'
import { getToken } from '../services/local-storage'

export const tokenRecoil = atom({
  key: 'token',
  default: 'a'
})

export const tokenSelector = selector({
  key: 'tokenSelector',
  get: async ({ get }) => {
    let text = get(tokenRecoil)
    // lay token từ cache
    text = await getToken()
    return text
  }
})