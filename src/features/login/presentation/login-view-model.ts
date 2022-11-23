import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { debug } from '../../../commons/common-utils'
import { textState } from '../../../commons/recoil/home-recoil'
import { LoginLocalDatasource } from '../data/datasources/login-local-datasource'
import { LoginRemoteDatasource } from '../data/datasources/login-remote-datasources'
import { type LoginModel } from '../data/dto/login-model'
import { LoginRepositoryImpl } from '../data/repositories/login-repository'
import { LoginUsecase } from '../domain/usecases/login-usecases'

export function loginViewModel () {
  const navigate = useNavigate()
  const [text, setText] = useRecoilState(textState)
  const [testText, setTestText] = useState('')

  const loginUsecase = new LoginUsecase(
    new LoginRepositoryImpl(new LoginRemoteDatasource(), new LoginLocalDatasource())
  )

  function gotohome () {
    navigate('/')
  }

  function call () {
    const user: LoginModel = {
      email: 'tuancq@gmail.com',
      password: '123123123'
    }
    loginUsecase.login(user).then(
      (result) => {
        debug('done ======', result)
        setTestText(JSON.stringify(result))
      },
      (reject) => {
        debug('false ======', reject)
      }
    )
  }

  return {
    testText,
    text,
    setText,
    gotohome,
    call
  }
}
