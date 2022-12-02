import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { textLenght, textState } from '../../../commons/recoil/home-recoil'
import Debug from 'debug'

const debug = Debug('HomeViewModel:')

export function HomeViewModel () {
  const [text, setText] = useRecoilState(textState)
  const count = useRecoilValue(textLenght)
  const navigate = useNavigate()

  function goToLogin () {
    debug(count)
    navigate('/login')
  }

  return {
    text,
    setText,
    goToLogin
  }
}
