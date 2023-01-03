import { useNavigate, createSearchParams } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { textLenght, textState } from '../../commons/recoil/home-recoil'
import Debug from 'debug'

const debug = Debug('HomeViewModel:')

export function HomeViewModel () {
  const [text, setText] = useRecoilState(textState)
  const count = useRecoilValue(textLenght)
  const navigate = useNavigate()
  const params = {
    sort: "a"
  }

  function goToLogin () {
    debug(count)
    navigate({pathname:'/login', search: `?${createSearchParams(params)}`,})
  }

  return {
    text,
    setText,
    goToLogin
  }
}
