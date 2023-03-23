import { atom, RecoilState, selector } from 'recoil'

export interface NavigateInterface {
  isConfirm?: boolean
  path?: string | number
  params?: any
}

export const initNavigate: NavigateInterface = {
  isConfirm: false,
  path: '',
  params: null
}

export const navigateState: RecoilState<NavigateInterface> = atom({
  key: 'navigateState',
  default: initNavigate
})

export const navigateValue = selector({
  key: 'navigateValue',
  get: ({ get }) => {
    return get(navigateState)
  }
})
