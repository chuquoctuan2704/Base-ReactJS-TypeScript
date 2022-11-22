import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { textState } from '../../../commons/recoil/home-recoil'

export function LoginViewModel() {
  const navigate = useNavigate()
  const [text, setText] = useRecoilState(textState)

  function gotohome() {
    navigate('/')
  }

  return {
    text,
    setText,
    gotohome,
  }
}