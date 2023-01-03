import { atom, RecoilState, RecoilValueReadOnly, selector } from 'recoil'
export interface IAlert {
  loading?: boolean
  success?: string | object
  errors?: string | object
}

export const alertState: RecoilState<IAlert> = atom({
  key: 'alertState',
  default: {}
})

export const alertValue: RecoilValueReadOnly<IAlert> = selector({
  key: 'alertValue',
  get: ({ get }) => {
    const alert = get(alertState)
    return alert
  }
})
