import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { textState } from '../../../commons/recoil/home-recoil'
import { setToken } from '../../../commons/services/local-storage'
import { LoginLocalDatasource } from '../data/datasources/login-local-datasource'
import { LoginRemoteDatasource } from '../data/datasources/login-remote-datasources'
import { type LoginModel } from '../data/dto/login-model'
import { LoginRepositoryImpl } from '../data/repositories/login-repository'
import { LoginUsecase } from '../domain/usecases/login-usecases'
import Debug from 'debug'

const debug = Debug('I18nProvider:')

export function LoginViewModel () {
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
        setTestText(JSON.stringify(result))
        // Lưu token vào storage
        setToken('TokenRecoil example save to localStorage2')
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
