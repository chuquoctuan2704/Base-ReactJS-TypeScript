import { useNavigate } from 'react-router-dom'

export function LoginViewModel() {
  const navigate = useNavigate()

  function gotohome() {
    navigate('/')
  }

  return {
    gotohome,
  }
}