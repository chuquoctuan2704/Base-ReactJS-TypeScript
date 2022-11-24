import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { debug } from '../../../commons/common-utils'
import { tokenRecoil } from '../../../commons/recoil/global-recoil'
import { textState } from '../../../commons/recoil/home-recoil'
import { setToken } from '../../../commons/services/local-storage'
import { LoginLocalDatasource } from '../data/datasources/login-local-datasource'
import { LoginRemoteDatasource } from '../data/datasources/login-remote-datasources'
import { type LoginModel } from '../data/dto/login-model'
import { LoginRepositoryImpl } from '../data/repositories/login-repository'
import { LoginUsecase } from '../domain/usecases/login-usecases'

export function LoginViewModel () {
  const navigate = useNavigate()
  const [text, setText] = useRecoilState(textState)
  const [testText, setTestText] = useState('')
  const [getTokenRecoil, setTokenRecoil] = useRecoilState(tokenRecoil)

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
        // settoken lưu vào cache với recoil
        setTokenRecoil('TokenRecoil example to Recoil')
        setToken('TokenRecoil example save to localStorage')
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
