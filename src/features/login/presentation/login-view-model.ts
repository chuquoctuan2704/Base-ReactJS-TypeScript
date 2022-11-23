import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { debug } from '../../../commons/common-utils'
import { textState } from '../../../commons/recoil/home-recoil'
import { LoginLocalDatasource } from '../data/datasources/login-local-datasource'
import { LoginRemoteDatasource } from '../data/datasources/login-remote-datasources'
import { LoginModel } from '../data/dto/login-model'
import { LoginRepositoryImpl } from '../data/repositories/login-repository'
import { LoginUsecase } from '../domain/usecases/login-usecases'

export function LoginViewModel() {
  const navigate = useNavigate()
  const [text, setText] = useRecoilState(textState)

  const loginUsecase = new LoginUsecase(new LoginRepositoryImpl(new LoginRemoteDatasource(), new LoginLocalDatasource()))

  function gotohome() {
    // navigate('/')
    const user: LoginModel = {
      email: 'tuancq@gmail.com',
      password: '123123123'
    }
    loginUsecase.login(user).then(
      (result) => {debug('done ======', result)},
      (reject) => {debug('false ======', reject)},
    )
  }

  return {
    text,
    setText,
    gotohome,
  }
}