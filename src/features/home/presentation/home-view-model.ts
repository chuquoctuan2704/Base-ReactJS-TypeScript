import { useNavigate } from 'react-router-dom'
import { useRecoilState, useRecoilValue } from 'recoil'
import { debug } from '../../../commons/common-utils'
import { textLenght, textState } from '../../../commons/recoil/home-recoil'

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
